import { Link } from "react-router-dom";
import { StyledGrid } from "../styles";

function PlaylistsGrid({ playlists }: { playlists: any[] }) {
  return (
    <>
      {playlists && playlists.length ? (
        <StyledGrid>
          {playlists.map((playlist, index) => (
            <li key={index}>
              <Link className="inner" to={`/playlists/${playlist.id}`}>
                {playlist.images.length && playlist.images[0] && (
                  <div className="image">
                    <img src={playlist.images[0].url} alt={playlist.name} />
                  </div>
                )}
                <h3 className="name">{playlist.name}</h3>
                <p className="label">Playlist</p>
              </Link>
            </li>
          ))}
        </StyledGrid>
      ) : (
        <p>No playlists available.</p>
      )}
    </>
  );
}

export default PlaylistsGrid;
