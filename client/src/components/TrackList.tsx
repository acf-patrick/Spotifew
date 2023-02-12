import { StyledTrackList } from "../styles";
import { formatDuration } from "../utils";

function TrackList({ tracks }: { tracks: any[] }) {
  return (
    <>
      {tracks && tracks.length ? (
        <StyledTrackList>
          {tracks.map((track, index) => (
            <li key={index} className="item">
              <div className="num">{index + 1}</div>
              <div className="title-group">
                {track.album.images.length && track.album.images[2] && (
                  <div className="image">
                    <img src={track.album.images[2].url} alt={track.name} />
                  </div>
                )}
                <div className="name-artist">
                  <div className="name">
                    <a href={track.external_urls.spotify} target="_blank">
                      {track.name}
                    </a>
                  </div>
                  <div className="artist">
                    {track.artists.map((artist: any, index: number) => (
                      <span key={index}>
                        {artist.name}
                        {index !== track.artists.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="album">{track.album.name}</div>
              <div className="duration">
                {formatDuration(track.duration_ms)}
              </div>
            </li>
          ))}
        </StyledTrackList>
      ) : (
        <p>No tracks available</p>
      )}
    </>
  );
}

export default TrackList;
