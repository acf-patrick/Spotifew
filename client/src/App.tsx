import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");

    if (refreshToken) {
      fetch(`/api/refresh_token?refresh_token=${refreshToken}`)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="App">
      <a href="http://localhost:8000/login">Log in to Spotify</a>
    </div>
  );
}

export default App;
