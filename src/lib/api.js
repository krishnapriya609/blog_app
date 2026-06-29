import axios from "axios";

const API_URL = "https://6a3e1d350443193a1a0b737d.mockapi.io/posts";

export async function getPosts() {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function getPost(id) {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
}