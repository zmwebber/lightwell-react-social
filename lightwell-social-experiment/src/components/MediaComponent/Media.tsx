import React, { useState, useEffect } from 'react';
import { addMedia, getMedia } from '../../api/MediaApi';
import { Media } from "../../models/MediaModel";

export default function MediaComponent() {
  let x = new Media();

  const [mediaData, setMediaData] = useState<string | ArrayBuffer | null>("");
  const [mediaProps, setMediaProps] = useState<Media>(x);
  const [preview, setPreview] = useState("");

  function handleChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      x.data = convertImgToBinary(file);
      x.fileName = file.name;
      x.contentType = file.type;
      x.createdAt = file.lastModifiedDate;

      setMediaProps(x);
    }

    console.log("MEDIA PROPS BELOW:");
    console.log(mediaProps);

    // setPreview(URL.createObjectURL(event.target.files[0]))
    // console.log(preview)
  }

  function handleSubmit(event: any) {
    // event.preventDefault();
    // let media = new MediaConstructed()
    // console.log("BELOW IS THE NEW MEDIA 1");
    // console.log(event.target.files[0]);


    // media = {
    //   _id: mediaProps._id,
    //   data: mediaData,
    //   fileName: mediaProps.name,
    //   contentType: mediaProps.type,
    //   createdAt: mediaProps.lastModified
    // }

    // // setMediaProps(media)
    // console.log("BELOW IS THE NEW MEDIA 2");
    // console.log(media);
    // addMedia(media)







    //let x = new Media;
    //map props 

    //     Media = {
    //     _id?: string | null,
    //     data: Buffer,
    //     fileName: String,
    //     contentType: String,
    //     createdAt: Date,
    // }
    //x.data = media
    //x.fileName = mediaProps
    //call API function
    //addMedia(x)
  }

  function convertImgToBinary(file: any): string | ArrayBuffer | null {
    const reader = new FileReader();

    reader.onload = () => {
      console.log("Image Binary: " + reader.result)
    }

    reader.readAsBinaryString(file)

    return reader.result;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="customFile"></label>
        <input type="file" onChange={handleChange} className="form-control" id="customFile" accept="image/*" />
        <input type="submit" value="Submit" />
        <img src={preview} alt="preview"></img>

      </form>
    </>
  );
}
