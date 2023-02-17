import { useState, useEffect } from "react";
import { getUserTopArtists } from "../spotify";
import { catchErrors } from "../utils";
import { ArtistsGrid, SectionWrapper, TimeRangeButtons } from "../components";

type Range = "short" | "medium" | "long";

function TopArtists() {
  const [topArtists, setTopArtists] = useState<any>(null);
  const [activeRange, setActiveRange] = useState<Range>("short");

  useEffect(() => {
    const fetchData = async () => {
      const userTopArtists = await getUserTopArtists(`${activeRange}_term`);
      setTopArtists(userTopArtists);
    };

    catchErrors(fetchData());
  }, [activeRange]);

  return (
    <main>
      <SectionWrapper title="Top Artists" breadcrumb={true}>
        <TimeRangeButtons
          activeRange={activeRange}
          setActiveRange={setActiveRange}
        />
        {topArtists && topArtists.items && (
          <ArtistsGrid artists={topArtists.items} />
        )}
      </SectionWrapper>
    </main>
  );
}

export default TopArtists;
