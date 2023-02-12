import { StyledSection } from "../styles";
import { Link } from "react-router-dom";

interface ISectionWrapperProps {
  children: any;
  title?: string;
  seeAllLink?: string;
  breadcrumb?: string;
}

function SectionWrapper({
  children,
  title,
  seeAllLink,
  breadcrumb,
}: ISectionWrapperProps) {
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
