import axios from 'axios';

const api = axios.create({
  // In production, set VITE_API_URL to your backend's Render URL
  // e.g. https://hospital-analytics-system.onrender.com
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8081',
});

export default api;
