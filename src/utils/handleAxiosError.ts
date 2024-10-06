import { AxiosError } from "axios";

export const handleAxiosError = (error: unknown): Error => {
    if (error instanceof AxiosError) {
      const status = error.response?.data.statusCode || 500;
      const message = error.response?.data.message || "Unknown error";
  
      return new Error(`Request failed with status ${status}: ${message}`);
    }
  
    return new Error("An unknown error occurred");
  };