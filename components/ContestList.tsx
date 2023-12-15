// ContestList.tsx
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { fetchData } from '../services/api'; // Adjust the path accordingly
import tw from 'twrnc';

interface Contest {
    id: number;
    event: string;
    host: string;
    start: string;
}


const contests = [
    {
        id: 1,
        event: "1st International Olympiad in Informatics. Bulgaria",
        host: "GFG Codechef",
        start: "16.05 Tue 05:30",
    },
    {
        id: 2,
        event: "IOI 1989",
        host: "cphof.org",
        start: "19.05 Fri 05:30",
    },
    {
        id: 3,
        event: "2nd International Olympiad in Informatics. Soviet Union",
        host: "stats.ioinformatics.org",
        start: "15.07 Sun 05:30",
    },
];


const ContestList: React.FC = () => {
    // const [contests, setContests] = useState<Contest[]>([]);

    // useEffect(() => {
    //     const loadContests = async () => {
    //         try {
    //             const data = await fetchData();
    //             setContests(data); // Update state with the fetched data
    //         } catch (error) {
    //             console.error('Error loading contests:', error);
    //         }
    //     };

    //     loadContests();
    // }, []); // Empty dependency array to run the effect only once

    return (
        <ScrollView style={tw`pt-50px`}>
            <Text style={tw`text-white text-4xl font-bold tracking-wide`}>CONTEST LIST</Text>
            <View style={tw`pt-40px w-full`}>
                {contests.map((contest) => (
                    <View style={tw` py-4 px-4 rounded-xl bg-[#1E293B] mt-4`} key={contest.id}>
                        <View style={tw`flex`}>
                            <Text style={tw`text-white font-semibold`}>{contest.host}</Text>
                            <Text style={tw`text-white font-light`}>{contest.start}</Text>
                        </View>
                        <Text style={tw`text-white `}>{contest.event}</Text>
                    </View>

                ))}
            </View>
        </ScrollView>
    );
};

export default ContestList;
