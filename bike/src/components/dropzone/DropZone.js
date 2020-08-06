import React, { useState } from 'react';
import './DropZone.css';

const DropZone = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const dragOver = (e) => {
        e.preventDefault();
    }
    
    const dragEnter = (e) => {
        e.preventDefault();
    }
    
    const dragLeave = (e) => {
        e.preventDefault();
    }
    
    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    }

    const handleFiles = (files) => {
        const validateFile = (file) => {
            const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
            if (validTypes.indexOf(file.type) === -1) {
                return false;
            }
            return true;
        }

        if (files.length > 1 ){
            setErrorMessage('Please upload only one picture!');
        }
        else {
            if (validateFile(files[0])) {
                // add to an array so we can display the name of file
            } else {
                files[0]['invalid'] = true;
                setSelectedFiles(prevArray => [...prevArray, files[0]]);
                setErrorMessage('File type not permitted');
            }
        }

    }


    return (
        <div className="container">
            <div className="drop-container"
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
            >
                <div className="drop-message">
                    <div className="profile-image"></div>
                        원하는 이미지를 드래그 하세요!
                </div>
            </div>
        </div>
    )
}
export default DropZone;