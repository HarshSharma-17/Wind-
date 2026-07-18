export interface HistoryItem {
    id: number;
    user_id: number;
    prompt: string;
    framework: string;
    style: string;
    generated_code: string;
    created_at: string;
}