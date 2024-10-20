import { AxiosError } from 'axios';

export const handleAxiosError = (error: unknown): Error => {
    if (error instanceof AxiosError) {
      const status = error.response?.data.statusCode || error.response?.data.error;
      const message = error.response?.data.message || error.response?.data.error_description ;
  
      return new Error(`Request failed with status ${status}: ${message}`);
    }
  
    return new Error('An unknown error occurred');
  };