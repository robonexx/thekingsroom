import { useState, useEffect } from 'react';

/* const useSoundcloudAPI = (query) => { */
const useSoundcloudAPI = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      setLoading(true);
      setError(null);

      try {
        /*  const response = await fetch(`https://api.soundcloud.com/tracks?q=${query}&client_id=YOUR_CLIENT_ID`); */
        const response = await fetch(
          `https://api.soundcloud.com/thekingsroom1`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch tracks from SoundCloud');
        }
        const data = await response.json();
        setTracks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();

    // Cleanup function
    return () => {
      // Cancel any ongoing fetch requests if the component unmounts
      // This prevents memory leaks and ensures data integrity
    };
  }, [query]);

  return { tracks, loading, error };
};

export default useSoundcloudAPI;
