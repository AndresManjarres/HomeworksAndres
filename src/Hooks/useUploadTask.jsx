import { useState } from "react";
import { getAll, upload } from "../firebase/files";
import { getDownloadURL } from "firebase/storage";

export const useUploadTask = () => {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [percent, setPercent] = useState(0);

  const handleChange = (e) => {
    setFile(e.target.files[0]); // corrected property name and updated state
  };

  const handleUpload = () => {
    const uploadTask = upload(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
      },
      (error) => {
        console.log(error);
      }, // moved the async function outside the error callback
    );
    uploadTask.then(async (snapshot) => {
      const url = await getDownloadURL(snapshot.ref);
      setFiles((list) => [...list, url]);
    });
  };

  const handleGetAll = async () => {
    const { items } = await getAll();
    items.forEach(async (itemRef) => {
      const url = await getDownloadURL(itemRef);
      setFiles((list) => [...list, url]);
    });
  };
  // delete images from firebase.
    const handleDelete = async () => {
        const { items } = await getAll();
        items.forEach(async (itemRef) => {
            await itemRef;
        });
        setFiles([]);
    };




  return { files, percent, handleChange, handleUpload, handleGetAll, handleDelete };
};
