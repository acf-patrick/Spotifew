import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { getAudioFeatures, getPlaylist } from "../spotify";
import { catchErrors } from "../utils";
import { StyledHeader, StyledDropdown } from "../styles";
import { SectionWrapper, TrackList } from "../components";

function Playlist() {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState<any>(null);
  const [tracks, setTracks] = useState<any[]>([]);
  const [tracksData, setTracksData] = useState<any>(null);
  const [audioFeatures, setAudioFeatures] = useState<any[]>([]);
  const [sortValue, setSortValue] = useState("");

  // List of possible sorting keys
  const sortOptions = [
    "acousticness",
    "danceability",
    "energy",
    "instrumentalness",
    "liveness",
    "loudness",
    "valence",
  ];

  // Update track list and inject audio features datas
  const trackList = useMemo(() => {
    if (!tracks || !audioFeatures) return;
    return tracks.map(({ track }) => {
      if (!track.audio_features) {
        const features = audioFeatures.find((item) => item.id === track.id);
        track.audio_features = features;
      }
      return track;
    });
  }, [tracks, audioFeatures]);

  // Create sorted track list according to sort value
  const sortedTracks = useMemo(() => {
    if (!trackList) return;
    return [...trackList].sort((a, b) => {
      const features = [a.audio_features, b.audio_features];
      if (!features[0] || !features[1]) return 0;
      return features[1][sortValue] - features[0][sortValue];
    });
  }, [sortValue, trackList]);

  // Fetch playlist datas
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlaylist(id!);
      setPlaylist(data);
      setTracksData(data.tracks);
      setTracks(data.tracks.items);
    };

    catchErrors(fetchData());
  }, [id]);

  // Make sure to fetch all playlist's tracks
  useEffect(() => {
    // No data has been fetched yet
    if (!tracksData) return;

    const fetchMoreData = async () => {
      if (tracksData.next) {
        console.log(tracksData.next);

        const { data } = await axios.get(tracksData.next);
        setTracksData(data);
        setTracks((tracks: any[]) => [
          ...(tracks ? tracks : []),
          ...tracksData.items,
        ]);
      }
    };
    catchErrors(fetchMoreData());

    const fetchAudioFeatures = async () => {
      const ids = tracksData.items
        .map(({ track }: { track: { id: string } }) => track.id)
        .join(",");
      const data = await getAudioFeatures(ids);
      setAudioFeatures((audioFeatures) => [
        ...(audioFeatures ? audioFeatures : []),
        ...data.audio_features,
      ]);
    };
    catchErrors(fetchAudioFeatures());
  }, [tracksData]);

  return (
    <>
      {playlist && (
        <>
          <StyledHeader>
            <div className="inner">
              {playlist.images.length && playlist.images[0].url && (
                <img
                  src={playlist.images[0].url}
                  alt="playlist"
                  className="image"
                />
              )}
              <div className="datas">
                <div className="overline">Playlist</div>
                <h1 className="name">{playlist.name}</h1>
                <p className="meta">
                  {playlist.followers.total && (
                    <span>
                      {playlist.followers.total.toLocaleString("en")}{" "}
                      {`follower${playlist.followers.total !== 1 ? "s" : ""}`}
                    </span>
                  )}
                  <span>
                    {playlist.tracks.total}{" "}
                    {`song${playlist.tracks.total !== 1 ? "s" : ""}`}
                  </span>
                </p>
              </div>
            </div>
          </StyledHeader>
          <main>
            <SectionWrapper title="Playlist" breadcrumb>
              <StyledDropdown active={sortValue}>
                <select
                  name="track-order"
                  id="order-select"
                  onChange={(e) => {
                    setSortValue(e.target.value);
                  }}
                >
                  <option value="">Default</option>
                  {sortOptions.map((option, index) => (
                    <option value={option} key={index}>
                      {`${option[0].toUpperCase()}${option.slice(1)}`}
                    </option>
                  ))}
                </select>
              </StyledDropdown>
              {tracks && <TrackList tracks={sortedTracks!} />}
            </SectionWrapper>
          </main>
        </>
      )}
    </>
  );
}

export default Playlist;
