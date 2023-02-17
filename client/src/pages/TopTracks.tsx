import { useState, useEffect } from "react";
import { getUserTopTracks } from "../spotify";
import { catchErrors } from "../utils";
import { TimeRangeButtons, SectionWrapper, TrackList } from "../components";

type Range = "short" | "medium" | "long";

function TopTracks() {
  const [topTracks, setTopTracks] = useState<any>(null);
  const [activeRange, setActiveRange] = useState<Range>("short");

  useEffect(() => {
    const fetchData = async () => {
      const userTopTracks= await getUserTopTracks(`${activeRange}_term`);
      setTopTracks(userTopTracks);
    };

    catchErrors(fetchData());
  }, [activeRange]);

  return (
    <main>
      <SectionWrapper title="Top Tracks" breadcrumb={true}>
        <TimeRangeButtons
          activeRange={activeRange}
          setActiveRange={setActiveRange}
        />
        {topTracks && topTracks.items && <TrackList tracks={topTracks.items} />}
      </SectionWrapper>
    </main>
  );
}

export default TopTracks;
