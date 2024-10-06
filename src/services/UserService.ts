import axios, { AxiosError } from "axios";
import dotenv from "dotenv";
import { handleAxiosError } from "../utils/handleAxiosError";

dotenv.config();

const { AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET } = process.env;

const auth0OauthEndpoint = `${AUTH0_DOMAIN}/oauth/token`;

export const fetchUserLogin = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const payload = {
      grant_type: "password",
      username: email,
      password: password,
      client_id: AUTH0_CLIENT_ID,
      client_secret: AUTH0_CLIENT_SECRET,
    };

    const data = await axios.post(auth0OauthEndpoint, payload);
    return data;
  } catch (error) {
    throw handleAxiosError(error);
  }
};

export const getManagementToken = async () => {
  const options = {
    method: "POST",
    url: auth0OauthEndpoint,
    headers: { "content-type": "application/json" },
    data: {
      client_id: AUTH0_CLIENT_ID,
      client_secret: AUTH0_CLIENT_SECRET,
      audience: `${AUTH0_DOMAIN}/api/v2/`,
      grant_type: "client_credentials",
    },
  };

  try {
    const response = await axios(options);
    return response.data.access_token;
  } catch (error) {
    console.error("Error generating token", error);
  }
};

export const createUser = async (email: string, password: string) => {
  const token = await getManagementToken();

  const options = {
    method: "POST",
    url: `${AUTH0_DOMAIN}/api/v2/users`,
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    data: {
      email: email,
      password: password,
      connection: "Username-Password-Authentication",
    },
  };


  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.log('aaa', error)
    throw handleAxiosError(error);
  }
};
