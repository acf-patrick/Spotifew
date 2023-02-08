import { useState, useEffect } from "react";
import { getUserTopArtists } from "../spotify";
import { catchErrors } from "../utils";

function TopArtists() {
  const [topArtists, setTopArtists] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const userTopArtists = await getUserTopArtists();
      setTopArtists(userTopArtists);
    };

    catchErrors(fetchData());
  }, []);

  return <>{topArtists && <></>}</>;
}

export default TopArtists;
