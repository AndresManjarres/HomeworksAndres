import { useEffect } from "react";
import { useUploadTask } from "./Hooks/useUploadTask";

export const Upload = () => {
    const { files, 
        percent,
        handleChange,
        handleUpload,
        handleGetAll,
        handleDelete
     } = useUploadTask();
    
    useEffect(() => {
        handleGetAll();
    }, []);
    return (
        <div>
        <h1>Upload</h1>
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Cargar</button>
        <div>
            {files.map((file, index) => (
            <img key={index} src={file} alt="uploaded" />
            ))}
        </div>
        <button onClick={handleDelete}>Eliminar imagen</button>
        <div>{percent}</div>
        </div>
    );
    }
