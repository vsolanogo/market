import * as photosActions from './photosActions';
import { Upload } from '../../api/api';

export function upload(body) {
  return async (dispatch) => {
    try {
      dispatch(photosActions.upload.start());

      const res = await Upload.post(body);
      const { data } = res;

      dispatch(photosActions.upload.success(data));
    } catch (err) {
      console.error(err);
      dispatch(photosActions.upload.error(err.message));
    }
  };
}
