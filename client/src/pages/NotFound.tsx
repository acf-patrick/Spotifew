import { useNavigate } from "react-router-dom";
import { StyledNotFoundContainer } from "../styles";

function NotFound() {
  const navigate = useNavigate();

  return (
    <StyledNotFoundContainer>
      <div className="inner">
        <div className="logo">
          <img src="/Spotifew/images/Spotify_logo_without_text.svg" alt="spotify-svg" />
        </div>
        <h1>Page not found</h1>
        <p>We can't seem to find the page you are looking for.</p>
        <div className="button">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
        </div>
      </div>
    </StyledNotFoundContainer>
  );
}

export default NotFound;
