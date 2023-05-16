import React, { useState, useEffect } from 'react';
import { addMedia, getMedia } from '../../api/MediaApi';
import { Media } from "../../models/MediaModel";

export default function MediaComponent() {
  let x = new Media();
  const [mediaProps, setMediaProps] = useState<Media>(x);
  const [preview, setPreview] = useState("");
  const fileReader = new FileReader();

  function addListeners() {
    fileReader.addEventListener("loadend", handleComplete);
    fileReader.addEventListener("error", handleComplete);
  }

  function handleComplete(event: any) {
    if (event.type === "loadend") {
      x.data = fileReader.result;
    }
    else if (event.type === "error") {
      x.data = "Error.";
    }

    setMediaProps(x);
    console.log(mediaProps);
  }

  function handleChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      addListeners();
      convertImgToBinary(file);

      x.fileName = file.name;
      x.contentType = file.type;
      x.createdAt = file.lastModifiedDate;
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    addMedia(mediaProps);

    getMedia().then((val) => {
      console.log(val.data.media[0].data.data);

      let buf = val.data.media[0].data.data.toString('base64')
      let src = 'data:image/png;base64,' + buf;

      console.log(src);
      setPreview(buf);
    });

    // Take data and convert it into an image format the UI can handle

    // console.log(getMediaVariable);
    // setPreview(URL.createObjectURL(getMediaVariable));
  }

  function convertImgToBinary(file: any) {
    fileReader.readAsText(file)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="customFile"></label>
        <input type="file" onChange={handleChange} className="form-control" id="customFile" accept="image/*" />
        <input type="submit" value="Submit" />
        <img src={`data:image/png;base64,${preview}`} alt="preview"></img>
      </form>
    </>
  );
}
