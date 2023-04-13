import React, { useState, useEffect } from 'react';
import { getMedia } from '../../api/MediaApi';

export default function Media() {
  const [media, setMedia] = useState([]);

  async function fetchData() {
    let x = await getMedia();
    setMedia(x.data.media);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {JSON.stringify(media)}
    </>
  );
}
