import axios from 'axios';

axios.defaults.baseURL = 'https://645399b1c18adbbdfea1e9f0.mockapi.io';

export async function fetchAll() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function addContact(text) {
  const response = await axios.post('/contacts', text);
  return response.data;
}

export async function deleteContact(id) {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
}
