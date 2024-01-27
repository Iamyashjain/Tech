import { myAxios } from "./helper";

export const signUp = async (data) => {
    console.log(data)
    const response = await myAxios.post('/otp/step1');
    return response.data;
};