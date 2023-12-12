import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { fetchContests } from '../services/api';

interface Contest {
    id: number;
    event: string;
    host: string;
    // Add other properties as needed
}

const ContestList: React.FC = () => {
    const [contests, setContests] = useState<Contest[]>([]);

    useEffect(() => {
        const getContests = async () => {
            try {
                const contestsData = await fetchContests();
                setContests(contestsData);
            } catch (error) {
                console.error('Error fetching contests:', error);
            }
        };

        getContests();
    }, []);

    return (
        <View>
            {contests.map((contest) => (
                <View key={contest.id}>
                    <Text>{contest.event}</Text>
                    <Text>{contest.host}</Text>
                    {/* Display other contest information as needed */}
                </View>
            ))}
        </View>
    );
};

export default ContestList;
