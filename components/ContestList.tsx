// ContestList.tsx
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { fetchData } from '../services/api'; // Adjust the path accordingly
import tw from 'twrnc';
import { Link } from "react-router-native";
import { Image } from 'react-native';

interface Contest {
    id: number;
    event: string;
    host: string;
    start: string;
    href: string;
    resource: string;
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
    const [contests, setContests] = useState<Contest[]>([]);

    useEffect(() => {
        const loadContests = async () => {
            try {
                const data = await fetchData();
                setContests(data); // Update state with the fetched data
            } catch (error) {
                console.error('Error loading contests:', error);
            }
        };

        loadContests();
    }, []); // Empty dependency array to run the effect only once

    return (
        <ScrollView style={tw`pt-50px`}>
            <Text style={tw`text-white text-[2.5rem] font-bold tracking-tight text-center`}>CONTEST LIST</Text>
            <View style={tw`pt-40px`}>
                {contests.map((contest) => (
                    <View style={tw`mx-4 py-8 px-4 rounded-2xl bg-[#f8f7ff] mt-4`} key={contest.id}>
                        <Text style={tw`font-bold text-[1rem] text-center text-[#9381ff]`}>{contest.event}</Text>
                        <Text style={tw`font-medium text-[0.8rem] text-center text-[#9381ff]`}>{contest.start}</Text>
                        <Text style={tw`text-center text-[#9381ff]`}>{contest.host}</Text>
                        {/* <View>
                            resource = {contest.resource};
                            const re=(".");
                            const newResource = resource.replace(re, "_");
                            <Image
                                source={require(`https://clist.by//media/sizes/32x32/img/resources/${newResource}.png`)}
                                style={{ width: 16, height: 16 }}
                            />
                        </View> */}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default ContestList;
