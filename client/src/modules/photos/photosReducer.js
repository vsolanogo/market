import { handleActions } from '@letapp/redux-actions';
import * as photosActions from './photosActions';

const initialState = {
  upload: {
    isLoading: false,
    isError: false,
    error: null,
  },
  photos: [],
};

export default handleActions(
  {
    [photosActions.upload.start]: (state, action) => ({
      ...state,
      upload: {
        ...state.upload,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [photosActions.upload.success]: (state, action) => ({
      ...state,
      upload: {
        ...state.upload,
        isLoading: false,
      },
      photos: [action.payload, ...state.photos],
    }),
    [photosActions.upload.error]: (state, action) => ({
      ...state,
      upload: {
        ...state.upload,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
  },
  initialState,
);
