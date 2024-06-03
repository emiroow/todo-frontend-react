import axios from "axios";

const axiosService = async (path: string, options: any) => {
  try {
    const { data } = await axios({
      baseURL: "",
      url: "",
      ...options,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
