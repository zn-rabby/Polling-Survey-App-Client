import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://polling-survey-app-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
