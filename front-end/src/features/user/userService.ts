import axios from "axios";
import { base_url } from "../../utils/base_url";

interface UserData {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: object;
}

const login = async (userData: UserData): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(
    `${base_url}user/login`,
    userData
  );
  console.log(response.data);
  return response.data;
};

const userService = {
  login,
};

export default userService;
