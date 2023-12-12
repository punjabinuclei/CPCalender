import axios from 'axios';

const apiKey = 'be65f278452f80cd9b221cdbb27831f66abad7b6';
const apiUrl = 'https://clist.by/api/v4/contest/';

interface Contest {
    id: number;
    event: string;
    host: string;
    // Add other properties as needed
}

interface ContestResponse {
    meta: {
        limit: number;
        next: string;
        offset: number;
        previous: string;
        total_count: number;
    };
    objects: {
        contest: Contest[];
    };
}

export const fetchContests = async (): Promise<Contest[]> => {
    try {
        const response = await axios.get<ContestResponse>(apiUrl, {
            headers: {
                Authorization: `ApiKey ${apiKey}`,
            },
        });

        return response.data.objects.contest;
    } catch (error) {
        console.error('Error fetching contests:', error);
        throw error; // Rethrow the error to handle it in the component or other parts of your app
    }
};
