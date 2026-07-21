import axios from "./axios";

const getToken = () => {
    return localStorage.getItem("token");
};

export const getProjects = async () => {

    const response = await axios.get("/projects", {

        headers: {
            Authorization: `Bearer ${getToken()}`
        }

    });

    return response.data;

};

export const getProjectById = async (id: number) => {

    const response = await axios.get(`/projects/${id}`, {

        headers: {
            Authorization: `Bearer ${getToken()}`
        }

    });

    return response.data;

};

export const deleteProject = async (id: number) => {

    const response = await axios.delete(`/projects/${id}`, {

        headers: {
            Authorization: `Bearer ${getToken()}`
        }

    });

    return response.data;

};
export const saveProject = async (historyId: number) => {

    const response = await axios.post(

        `/projects/save/${historyId}`,

        {},

        {

            headers: {

                Authorization: `Bearer ${getToken()}`

            }

        }

    );

    return response.data;

};