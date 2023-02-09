import { StyledGrid } from "../styles";

function ArtistsGrid({ artists }: { artists: any[] }) {
  return (
    <>
      {artists && artists.length ? (
        <StyledGrid type="artist">
          {artists.map((artist, index) => (
            <li key={index}>
              <div>
                {artist.images[0] && (
                  <div>
                    <img src={artist.images[0].url} alt={artist.name} />
                  </div>
                )}
                <h3>{artist.name}</h3>
                <p>Artist</p>
              </div>
            </li>
          ))}
        </StyledGrid>
      ) : (
        <p>No artists available</p>
      )}
    </>
  );
}

export default ArtistsGrid;
