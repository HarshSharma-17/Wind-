export interface Project {

    id: number;

    user_id: number;

    title: string;

    description: string;

    framework: string;

    style: string;

    preview_image: string | null;

    code: string;

    favorite: boolean;

    created_at: string;

    updated_at: string;

}