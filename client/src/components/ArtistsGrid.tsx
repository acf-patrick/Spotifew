import { StyledGrid } from "../styles";

function ArtistsGrid({ artists }: { artists: any[] }) {
  return (
    <>
      {artists && artists.length ? (
        <StyledGrid type="artist">
          {artists.map((artist, index) => (
            <li key={index}>
              <div className="inner">
                {artist.images[0] && (
                  <div>
                    <a
                      className="image"
                      href={artist.external_urls.spotify}
                      target="_blank"
                    >
                      <img src={artist.images[0].url} alt={artist.name} />
                    </a>
                  </div>
                )}
                <h3 className="name">{artist.name}</h3>
                <p className="label">Artist</p>
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
