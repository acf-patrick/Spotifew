import { StyledGrid } from "../styles";
import { useEffect, useState } from "react";
import { getPlaylistFollowersCount } from "../spotify";

function PlaylistsGrid({ playlists }: { playlists: any[] }) {
  const [followers, setFollowers] = useState<any>({});

  useEffect(() => {
    for (const playlist of playlists) {
      getPlaylistFollowersCount(playlist.id).then((count) => {
        followers[playlist.id] = count;
        setFollowers(followers);
      });
    }
  }, [playlists]);

  return (
    <>
      {playlists && playlists.length ? (
        <StyledGrid>
          {playlists.map((playlist, index) => (
            <li key={index}>
              <a
                className="inner"
                target="_blank"
                href={playlist.external_urls.spotify}
              >
                {playlist.images.length && playlist.images[0] && (
                  <div className="image">
                    <img src={playlist.images[0].url} alt={playlist.name} />
                  </div>
                )}
                <h3 className="name">{playlist.name}</h3>
                <p className="label">
                  {followers[playlist.id]
                    ? followers[playlist.id].toLocaleString("en") + " likes"
                    : "Playlist"}
                </p>
              </a>
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
