import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
const PhotosInputForm = styled.div`
  background: #f9fafb;
  border: 1px solid #dedee0;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 16px;
`;

const AddPhotoButton = styled.button.attrs({
  type: 'button',
  //   accept: 'image/*',
})`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92px;
  width: 92px;
  color: #349a89;
  font-size: 90px;
  border: 0px;
  background: #e4e4e4;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
`;

const UploadedImage = styled.img`
  object-fit: cover;
  width: 92px;
  height: 92px;
  margin-right: 3px;
`;

const ImageUploading = styled.div`
  width: 92px;
  height: 92px;
  margin-right: 3px;
  background: #e4e4e4;
`;

export const PhotosInput = ({
  photos,
  handleFileExplorerOpen,
  isLoading,
  fileInputRef,
  hangleImageChange,
}) => {
  const uploadedImages = photos.map((x) => (
    <UploadedImage src={x} key={uuid.v4()} />
  ));
  return (
    <PhotosInputForm>
      {isLoading && <ImageUploading />}
      {uploadedImages}
      <AddPhotoButton onClick={handleFileExplorerOpen}>
        +
      </AddPhotoButton>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={hangleImageChange}
        style={{ display: 'none' }}
      />
    </PhotosInputForm>
  );
};
