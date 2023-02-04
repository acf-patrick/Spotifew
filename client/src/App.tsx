import { useEffect, useState } from "react";
import {
  accessToken,
  logout,
  getCurrentUserProfile,
  getUserFollowing,
} from "./spotify";
import "./App.css";
import { catchErrors } from "./utils";
import { Routes, Route } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

function App() {
  const [token, setToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(data);
      const d = await getUserFollowing();
      console.log(d);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <div className="App">
      {token ? (
        <Routes>
          <ScrollRestoration />
          <Route
            path="/"
            element={
              <>
                <h1>Logged in!</h1>
                <button onClick={logout}>Log out</button>

                {profile && (
                  <div>
                    <h1>{profile.display_name}</h1>
                    <p>{profile.followers.total} Followers</p>
                    {profile.images.length && profile.images[0].url && (
                      <img src={profile.images[0].url} alt="avatar" />
                    )}
                  </div>
                )}
              </>
            }
          />
          <Route path="/top-artists" element={<h1>Top Artists</h1>} />
          <Route path="/top-tracks" element={<h1>Top Tracks</h1>} />
          <Route path="/playlists" element={<h1>Playlists</h1>} />
          <Route path="/playlists/:id" element={<h1>Playlist</h1>} />
        </Routes>
      ) : (
        <a href="http://localhost:8000/login">Log in to Spotify</a>
      )}
    </div>
  );
}

export default App;
