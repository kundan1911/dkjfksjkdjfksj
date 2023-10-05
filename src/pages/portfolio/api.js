import axios from "axios";

const API_URL = "http://localhost:5058/User";

// export const savePost = async (payload) => {
//     try {
//         return await axios.post(`${API_URL}/post`, payload);
//     } catch (error) {
//         console.log('Error: ', error.message);
//         return error.response.data;
//     }
// }

export const getAllPosts = async (name) => {
  console.log("curren", name)
  try {
    // Construct the URL with the 'name' query parameter
    const url = `${API_URL}?name=${name}`;
    
    // Send a GET request with an empty body and the constructed URL
    return await axios.get(url, {});
  } catch (error) {
    console.log("Error: ", error.message);
    return error.response.data;
  }
};


// export const getAllPosts = async () => {
//   try {
//     return await axios.get(`${API_URL}`);
//   } catch (error) {
//     console.log("Error: ", error.message);
//     return error.response.data;
//   }
// };
