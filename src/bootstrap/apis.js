import axios from 'axios';

const api = axios.create({
  baseURL: 'https://kawahedukasibackend.herokuapp.com',
  timeout: 10000,
});
