import axios from 'axios';

const KEY = 'AIzaSyB9bffKcvlGBNW2SFT2MlkMXFILWJo_E3U';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
});
