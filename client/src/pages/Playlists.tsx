import axios from "axios";
import { PlaylistsGrid, Loader, SectionWrapper } from "../components";
import { useState, useEffect } from "react";
import { getUserPlaylists } from "../spotify";
import { catchErrors } from "../utils";

function Playlists() {
  const [playlists, setPlaylists] = useState<any>(null);
  const [playlistsData, setPlaylistsData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const userPlaylists = await getUserPlaylists();
      setPlaylistsData(userPlaylists);
      setPlaylists(userPlaylists.items);
    };

    catchErrors(fetchData());
  }, []);

  // Make sure to fetch all user's playlist, since Spotify API provides only first 20 playlists by default
  useEffect(() => {
    if (!playlistsData) return;

    const fetchMoreData = async () => {
      if (playlistsData.next) {
        console.log(playlistsData.next);
        const { data } = await axios.get(playlistsData.next);
        setPlaylistsData(data);
        setPlaylists((playlists: any[]) => [
          ...(playlists ? playlists : []),
          ...playlistsData.items,
        ]);
      }
    };

    catchErrors(fetchMoreData());
  }, [playlistsData]);

  return (
    <main>
      <SectionWrapper title="Public Playlists" breadcrumb>
        {playlists ? <PlaylistsGrid playlists={playlists} /> : <Loader />}
      </SectionWrapper>
    </main>
  );
}

export default Playlists;
