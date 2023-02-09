import { StyledSection } from "../styles";
import { Link } from "react-router-dom";

function SectionWrapper({ children, title, seeAllLink, breadcrumb }: any) {
  return (
    <StyledSection>
      <div className="inner">
        <div className="top">
          <h2 className="heading">
            {breadcrumb && (
              <span className="breadcrumb">
                <Link to="/">Profile</Link>
              </span>
            )}
            {title && (
              <>
                {seeAllLink ? (
                  <Link to={seeAllLink}>{title}</Link>
                ) : (
                  <span>{title}</span>
                )}
              </>
            )}
          </h2>
          {seeAllLink && (
            <Link to={seeAllLink} className="see-all">
              See All
            </Link>
          )}
        </div>

        {children}
      </div>
    </StyledSection>
  );
}

export default SectionWrapper;
