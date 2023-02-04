import { useEffect, useState } from "react";
import { accessToken, logout, getCurrentUserProfile } from "./spotify";
import "./App.css";
import { catchErrors } from "./utils";

function App() {
  const [token, setToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <div className="App">
      {token ? (
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
      ) : (
        <a href="http://localhost:8000/login">Log in to Spotify</a>
      )}
    </div>
  );
}

export default App;
