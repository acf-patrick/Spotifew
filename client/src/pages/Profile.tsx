import { useEffect, useState } from "react";
import {
  getUserProfile,
  getUserPlaylists,
  getUserTopArtists,
} from "../spotify";
import { catchErrors } from "../utils";
import { StyledHeader } from "../styles";
import { SectionWrapper, ArtistsGrid } from "../components";

function Profile() {
  const [profile, setProfile] = useState<any>(null);
  const [playlists, setPlaylists] = useState<any>(null);
  const [topArtists, setTopArtists] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await getUserProfile();
      setProfile(userProfile);

      const userPlaylists = await getUserPlaylists();
      setPlaylists(userPlaylists);

      const userTopArtists = await getUserTopArtists();
      setTopArtists(userTopArtists);
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
      {topArtists && (
        <main>
          <SectionWrapper title="Top artists this month" seeAllLink="/top-artists" >
            <ArtistsGrid artists={topArtists.items.slice(0, 10)} />
          </SectionWrapper>
        </main>
      )}
    </>
  );
}

export default Profile;
