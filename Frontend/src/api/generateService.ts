import axios from "./axios";

const getToken = () => {
    return localStorage.getItem("token");
};

export const generateProject = async (data: {
    prompt: string;
    framework: string;
    style: string;
}) => {

    const response = await axios.post(

        "/generate",

        data,

        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }

    );

    return response.data;

};

export const getHistory = async () => {

    const response = await axios.get(

        "/generate/history",

        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }

    );

    return response.data;

};

export const deleteHistory = async (id: number) => {

    const response = await axios.delete(

        `/generate/history/${id}`,

        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }

    );

    return response.data;

};