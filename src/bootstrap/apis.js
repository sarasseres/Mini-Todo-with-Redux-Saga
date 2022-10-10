import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const apiTodo = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json());
};
