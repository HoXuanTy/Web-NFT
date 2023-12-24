import axios from 'axios';
import { UserModel} from '../models/UserModel';
const API_URL = 'http://localhost:8080/users';

const getCreator = () => {
    return axios.get<UserModel[]>(`${API_URL}/`)
      .then(response => response.data)
      .catch(error => {
        console.error('Lỗi khi lấy dữ liệu từ API: ', error);
        throw error;
      });
  };




  export default {
    getCreator
  };