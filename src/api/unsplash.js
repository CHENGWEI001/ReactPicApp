import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID c911a13c8d89a493d654cd283143dcd25dae59805ddb5336ac28ac34551852c8'
  }
});
