import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 6709ec7427b5c95f498afa7ef915d4294b9a5b2fa36ec79e6352ebb313b7f4e9'
  },
});
