import { useState } from 'react';
import { addMedia } from '../../api/MediaApi';
import { Media } from "../../models/MediaModel";
import { User } from '../../models/ProfileModel';
import { useAppSelector } from '../../app/hooks/hooks';
import { store } from '../../app/store';
import { editUser } from '../../api/UserApi';

export default function MediaComponent(props: any) {
  let x = new Media();
  const [mediaProps, setMediaProps] = useState<Media>(x);
  const [bannerMediaProps, setBannerMediaProps] = useState<Media>(x);
  const fileReader = new FileReader();
  const user: User = useAppSelector(state => state.user.profile)

  function addListeners() {
    fileReader.addEventListener("loadend", handleComplete);
    fileReader.addEventListener("error", handleComplete);
  }

  function handleComplete(event: any) {
    if (event.type === "loadend") {
      if (fileReader.result) {
        let stringResult = fileReader.result.toString();
        let b64 = btoa(stringResult);
        x.data = b64;
      }
    }
    else if (event.type === "error") {
      x.data = "Error.";
    }

    if (props.photoType === "profilePhoto") {
      setMediaProps(x);
    } else if (props.photoType === "bannerPhoto") {
      setBannerMediaProps(x);
    }
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

  async function handleSubmit(event: any) {
    event.preventDefault();
    let modalClose = false;
    let action = null;
    let res = null;

    if (props.photoType === "profilePhoto") {
      res = await addMedia(mediaProps);
    } else if (props.photoType === "bannerPhoto") {
      res = await addMedia(bannerMediaProps);
    }

    if (user && res?.data.media) {
      var info: User = { ...user };

      if (props.photoType === "profilePhoto") {
        info.profile_image_id = res.data.media._id
        info.profile_image = res.data.media
      } else if (props.photoType === "bannerPhoto") {
        info.profile_banner_id = res.data.media._id
        info.profile_banner = res.data.media
      }

      action = editUser(info);

      modalClose = true;

      if (modalClose) {
        props.onClose();
      }

      store
        .dispatch(action)
        .unwrap()
        .catch((error: any) => {
          console.log(error);
        });
    }
  }

  function convertImgToBinary(file: any) {
    fileReader.readAsBinaryString(file)
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="customFile"></label>
        <input type="file" onChange={handleChange} className="form-control" id="customFile" accept="image/*" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
