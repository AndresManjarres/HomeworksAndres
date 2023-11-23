import { firebaseStorage } from "./config";
import {ref, uploadBytesResumable, listAll} from 'firebase/storage';

export const upload = (file) =>{
    if (!file){
        alert("No file selected");
    }

    const storageRef = ref(firebaseStorage,`/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef,file);
    return  uploadTask;
}

export const getAll = async () =>{
    const listenRef = ref(firebaseStorage,`/files/`);
    return listAll(listenRef);
}
export const deleteFile = async (name) =>{
    const storageRef = ref(firebaseStorage,`/files/${name}`);
    return storageRef;
}
