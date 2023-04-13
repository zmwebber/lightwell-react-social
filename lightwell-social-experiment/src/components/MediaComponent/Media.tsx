import React, { useState, useEffect } from 'react';
import { addMedia, getMedia } from '../../api/MediaApi';

export default function Media() {
  const [media, setMedia] = useState(null);

  function handleChange(event: any) {
    setMedia(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    addMedia(event.target.value)
    // console.log(media)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="customFile"></label>
        <input type="file" onChange={handleChange} className="form-control" id="customFile" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
