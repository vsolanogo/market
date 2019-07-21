import React from 'react';
import {
  compose,
  withHandlers,
  withStateHandlers,
  lifecycle,
} from 'recompose';

import { connect } from 'react-redux';
import { photosOperations } from '../../modules/photos/index';
import { PhotosInput } from './PhotosInputView';

const mapStateToProps = (state) => ({
  photos: state.photos.photos,
  isLoading: state.photos.upload.isLoading,
});

export default compose(
  connect(
    mapStateToProps,
    {
      onUpload: photosOperations.upload,
    },
  ),
  withStateHandlers(
    { fileInputRef: React.createRef() },
    {
      handleFileExplorerOpen: (state, props) => (e) => {
        e.preventDefault();
        e.stopPropagation();
        state.fileInputRef.current.click();
      },
    },
  ),
  withHandlers({
    hangleImageChange: (state, props) => (e) => {
      const formData = new FormData();
      formData.append('image', e.target.files[0]);
      state.onUpload(formData);
    },
  }),
  lifecycle({
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.photos !== this.props.photos) {
        this.props.setFieldValue(
          this.props.field.name,
          this.props.photos,
        );
      }
    },
  }),
)(PhotosInput);
