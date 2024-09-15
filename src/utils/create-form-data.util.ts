import {Platform} from 'react-native';

export default (key, photo, body = {}) => {
  const data = new FormData();

  data.append(key, {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  Object.keys(body).forEach(bodyKey => {
    data.append(bodyKey, body[bodyKey]);
  });
  return data;
};
