import React, { useState, useEffect } from 'react';
import { addMedia, getMedia } from '../../api/MediaApi';
import FileBase64 from 'react-file-base64';

export default function Media() {
  const [media, setMedia] = useState(null);
  const [preview, setPreview] = useState("");

  function handleChange(event: any) {
    console.log(event.target.files[0])
    setPreview(URL.createObjectURL(event.target.files[0]))
    console.log(preview)
    setMedia(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    // console.log(media);
    addMedia(media)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="customFile"></label>
        <input type="file" onChange={handleChange} className="form-control" id="customFile" accept="image/*" />
        <input type="submit" value="Submit" />
        <img src={preview} alt="preview"></img>
        {/* <FileBase64 multiple={false} onDone={({base64}) => setMedia({
          media, image: base64
        })}/> */}
      </form>
    </>
  );
}
