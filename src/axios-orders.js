import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-82cdc-default-rtdb.firebaseio.com/'
});

export default instance;