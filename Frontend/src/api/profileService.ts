import api from "./axios";

export const getProfile = async () => {
    const token = localStorage.getItem("token");

    const { data } = await api.get("/profile", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data.user;
};

export const updateProfile = async (name: string) => {
    const token = localStorage.getItem("token");
    
    const { data } = await api.put(
        "/profile",
        { name },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return data;
};