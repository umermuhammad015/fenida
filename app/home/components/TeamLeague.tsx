"use client"

import React, { useEffect, useState } from 'react'
import { useQueryState, } from 'nuqs'
import FetchTeams from './Fetchteams';
// import FetchSeason from './fetchSeason';
import { useSearchParams } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// type SeasonType = {
//     league_start_year: bigint | null;
// };

// type TeamType = {
//     team: string | null;
// };

type Teamleague = {
    league_start_year: string | null;
    user_league_code: string | null;
    user_team: string | null;
}

export default function FetchTeamLeague({ user_league_code, user_team }: Teamleague) {
    // export default function FetchTeamLeague({ league_start_year, user_league_code, user_team }: Teamleague) {

    // console.log("component renderd")
    // const router = useRouter();
    const searchParams = useSearchParams();

    // const params = new URLSearchParams(searchParams);

    const [loading, setLoading] = useState(true);
    const [loadingTeams, setLoadingTeams] = useState(true);
    // const [loading, setLoading] = useState(true);

    // const [season, setSeason] = useState(league_start_year || 2024);
    // const [season, setSeason] = useQueryState("season",
    //     {
    //         defaultValue: league_start_year || "2024",
    //         shallow: false,
    //         scroll: false,
    //     });
    // const [seasonsList, setSeasonsList] = useState<SeasonType[] | null>(null);

    // const [league, setLeague] = useState<any>(user_league_code || 'ENG1');
    // const [league, setLeague] = useQueryState("league",
    //     { parseAsString.withDefault(user_league_code || "ENG1"), shallow: false, scroll: false },
    // );

    // const [league, setLeague] = useQueryState("league",
    //     parseAsString().withOptio
    //     { parseAsString.withDefault(user_league_code || "ENG1"), shallow: false, scroll: false },
    // );

    const [league, setLeague] = useQueryState(
        "league",
        {
            defaultValue: user_league_code || "ENG1",
            shallow: false,
            scroll: false,
        }
    );

    const [team, setTeam] = useQueryState("team", {
        defaultValue: user_team || "Nottingham Forest",
        shallow: false,
        scroll: false,
    });

    const [teamsList, setTeamsList] = useState<(string | null)[]>([])

    // Initial data loading
    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                setLoading(true);
                // Fetch the initial league data
                const teams = await FetchTeams(league);
                const uniqueTeams = [...new Set(teams.map(item => item.team))];
                setTeamsList(uniqueTeams);

                // Check if current team exists in the fetched teams
                const currentTeamInURL = searchParams.get('team');
                const teamExists = currentTeamInURL && uniqueTeams.includes(currentTeamInURL);

                if (!teamExists) {
                    // Set default team if current doesn't exist
                    if (uniqueTeams.includes("Nottingham Forest")) {
                        setTeam("Nottingham Forest");
                    } else if (uniqueTeams.includes("Rio Ave")) {
                        setTeam("Rio Ave");
                    } else if (uniqueTeams.includes("Olympiakos Piraeus")) {
                        setTeam("Olympiakos Piraeus");
                    } else if (uniqueTeams.includes("Damac")) {
                        setTeam("Damac");
                    } else if (uniqueTeams.includes("Neom SC")) {
                        setTeam("Neom SC");
                    } else if (uniqueTeams.length > 0) {
                        setTeam(uniqueTeams[0]);
                    }
                }
            } catch (error) {
                console.error('Error fetching initial data:', error);
            } finally {
                setLoading(false);
                setLoadingTeams(false);
            }
        };

        fetchInitialData();
    }, []); // Run only once on component mount

    // Effect to handle league changes
    useEffect(() => {
        // Skip the initial render where league might be undefined
        if (!league) return;

        const fetchTeamsForLeague = async () => {
            try {
                setLoadingTeams(true);
                const teams = await FetchTeams(league);
                const uniqueTeams = [...new Set(teams.map(item => item.team))];
                setTeamsList(uniqueTeams);

                // Check if current team exists in new league
                if (team && !uniqueTeams.includes(team)) {
                    // Set a default team for the new league
                    let defaultTeam: string | null = null;

                    if (uniqueTeams.includes("Nottingham Forest")) {
                        defaultTeam = "Nottingham Forest";
                    } else if (uniqueTeams.includes("Rio Ave")) {
                        defaultTeam = "Rio Ave";
                    } else if (uniqueTeams.includes("Olympiakos Piraeus")) {
                        defaultTeam = "Olympiakos Piraeus";
                    } else if (uniqueTeams.includes("Damac")) {
                        defaultTeam = "Damac";
                    } else if (uniqueTeams.includes("Neom SC")) {
                        setTeam("Neom SC");
                    } else if (uniqueTeams.length > 0) {
                        defaultTeam = uniqueTeams[0];
                    }

                    if (defaultTeam) {
                        setTeam(defaultTeam);
                    }
                }
            } catch (error) {
                console.error('Error fetching teams for league:', error);
            } finally {
                setLoadingTeams(false);
            }
        };

        fetchTeamsForLeague();
    }, [league]); // Only run when league changes

    function onLeagueChange(value: string) {
        setLeague(value);
        // We don't need to manually fetch teams here as the useEffect will handle it
    }

    if (loading) {
        return (<>Loading....</>)
    } else {
        return (
            <>
                {/* <button onClick={() => {
                    console.log(season)
                    console.log(league)
                    console.log(team)
                }}>Check </button> */}
                <div className="flex gap-2 rounded-lg mt-2">
                    {/* season */}
                    {/* <div className="">
                        <label htmlFor="">
                            Season
                        </label>

                        <Select value={season} onValueChange={onSeasonChange}>
                            <SelectTrigger className="py-2 font-medium bg-background rounded-lg xs:w-24 md:w-24 lg:w-24 xl:w-40">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className='rounded-lg'>
                                {seasonsList && seasonsList.map((season_value: SeasonType, index: number) => (
                                    <SelectItem
                                        key={index}
                                        value={Number(season_value.league_start_year).toString()}
                                    // className="py-2 font-medium dark:bg-gray-800 dark:text-gray-200"
                                    >
                                        {season_value.league_start_year}
                                    </SelectItem>))}
                            </SelectContent>
                        </Select>
                    </div> */}

                    {/* League */}
                    <div className="">
                        <label htmlFor="">
                            League
                        </label>
                        <Select value={league} onValueChange={onLeagueChange}>
                            <SelectTrigger className="py-2 font-medium bg-background rounded-lg xs:w-24 md:w-24 lg:w-40 xl:w-56">
                                <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent className='rounded-lg'>
                                <SelectItem
                                    key={1}
                                    value={"ENG1"}
                                // className="py-2 font-medium dark:bg-gray-800 dark:text-gray-200"
                                >
                                    Premier League (England)
                                </SelectItem>
                                <SelectItem
                                    key={2}
                                    value={"GRE1"}
                                // className="py-2 font-medium dark:bg-gray-800 dark:text-gray-200"
                                >
                                    Super League (Greece)
                                </SelectItem>
                                <SelectItem
                                    key={3}
                                    value={"POR1"}
                                // className="py-2 font-medium dark:bg-gray-800 dark:text-gray-200"
                                >
                                    Primeira Liga (Portugal)
                                </SelectItem>
                                <SelectItem
                                    key={4}
                                    value={"SAU1"}
                                // className="py-2 font-medium dark:bg-gray-800 dark:text-gray-200"
                                >
                                    Pro League (Saudi Arabia)
                                </SelectItem>
                                <SelectItem
                                    key={5}
                                    value={"SAU2"}
                                // className="py-2 font-medium dark:bg-gray-800 dark:text-gray-200"
                                >
                                    First Division (Saudi Arabia)
                                </SelectItem>
                                {/* <SelectItem
                                    key={4}
                                    value={"FRA1"}
                                // className="py-2 font-medium dark:bg-gray-800 dark:text-gray-200"
                                >
                                    FRA1
                                </SelectItem>
                                <SelectItem
                                    key={5}
                                    value={"GER1"}
                                // className="py-2 font-medium dark:bg-gray-800 dark:text-gray-200"
                                >
                                    GER1
                                </SelectItem> */}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* team */}
                    <div className="">
                        <label htmlFor="">
                            Team
                        </label>
                        {loadingTeams ? (
                            <div className="py-2">Loading...</div>
                        ) : (
                            <Select value={team} onValueChange={setTeam}>
                                <SelectTrigger
                                    className="py-2 font-medium bg-background rounded-lg xs:w-24 md:w-24 lg:w-60">
                                    <SelectValue placeholder="Select Team" />
                                </SelectTrigger>
                                <SelectContent className='rounded-lg'>
                                    {(teamsList.length > 0) && teamsList.map((teamItem, index: number) => (
                                        <SelectItem
                                            key={index}
                                            value={teamItem as string}
                                        // className="py-2 font-medium dark:bg-gray-800 dark:text-gray-200"
                                        >
                                            {teamItem}
                                        </SelectItem>))}
                                </SelectContent>
                            </Select>
                        )}
                    </div>
                </div>
            </>
        )
    }
}