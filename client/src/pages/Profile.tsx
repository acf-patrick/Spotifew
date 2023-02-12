import { useEffect, useState } from "react";
import { catchErrors } from "../utils";
import { StyledHeader } from "../styles";
import {
  getUserProfile,
  getUserPlaylists,
  getUserTopArtists,
  getUserTopTracks,
} from "../spotify";
import {
  SectionWrapper,
  TrackList,
  ArtistsGrid,
  PlaylistsGrid,
} from "../components";

function Profile() {
  const maxItem = 6;
  const [profile, setProfile] = useState<any>(null);
  const [playlists, setPlaylists] = useState<any>(null);
  const [topArtists, setTopArtists] = useState<any>(null);
  const [topTracks, setTopTracks] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await getUserProfile();
      setProfile(userProfile);

      const userPlaylists = await getUserPlaylists();
      setPlaylists(userPlaylists);

      const userTopArtists = await getUserTopArtists();
      setTopArtists(userTopArtists);

      const userTopTracks = await getUserTopTracks();
      setTopTracks(userTopTracks);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <>
      <StyledHeader type="user">
        {profile && (
          <div>
            {profile.images.length && profile.images[0].url && (
              <img src={profile.images[0].url} alt="avatar" />
            )}
            <div className="datas">
              <div>Profile</div>
              <h1>{profile.display_name}</h1>
              <p>
                <span>
                  {profile.followers.total} Follower
                  {profile.followers.total > 1 ? "s" : ""}
                </span>
                {playlists && (
                  <span>
                    {playlists.total} Playlist
                    {playlists.total > 1 ? "s" : ""}
                  </span>
                )}
                <span>{profile.following} Following</span>
              </p>
            </div>
          </div>
        )}
      </StyledHeader>
      {topArtists && topTracks && playlists && (
        <main>
          <SectionWrapper
            title="Top artists this month"
            seeAllLink="/top-artists"
          >
            <ArtistsGrid artists={topArtists.items.slice(0, maxItem)} />
          </SectionWrapper>
          <SectionWrapper
            title="Top tracks this month"
            seeAllLink="/top-tracks"
          >
            <TrackList tracks={topTracks.items.slice(0, maxItem)} />
          </SectionWrapper>
          <SectionWrapper title="Playlists" seeAllLink="/playlists">
            <PlaylistsGrid playlists={playlists.items.slice(0, 10)} />
          </SectionWrapper>
        </main>
      )}
    </>
  );
}

export default Profile;
