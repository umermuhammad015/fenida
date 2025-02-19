"use client"

import React, { useEffect, useState } from 'react'
import { useQueryState, } from 'nuqs'
import FetchTeams from './Fetchteams';
// import FetchSeason from './fetchSeason';
import { useRouter, useSearchParams } from 'next/navigation';
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

export default function FetchTeamLeague({ league_start_year, user_league_code, user_team }: Teamleague) {

    // console.log("component renderd")
    const router = useRouter();
    const searchParams = useSearchParams();

    const params = new URLSearchParams(searchParams);

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


    useEffect(() => {



        // const fetchSeasons = async () => {
        //     // console.log("fetchData() in FetchLeagueCodes() useEffect")

        //     try {
        //         // console.log("tring fetching league code")

        //         const all_seasons = await FetchSeason()

        //         // console.log("seasons list");
        //         // console.log(all_seasons);

        //         setSeasonsList(all_seasons);

        //     } catch (error) {

        //         console.error('Error fetching league codes list:', error);
        //     } finally {
        //         setLoading(false)
        //     }
        // };

        const fetchLeagues = async () => {
            // console.log("fetchData() in FetchLeagueCodes() useEffect")

            try {
                // console.log("tring fetching league code")

                // const all_league_codes = await FetchLeagueCodes(Number(season))

                // console.log("league code list");
                // console.log(all_league_codes);

                // setLeagueCodesList(all_league_codes);
            } catch (error) {

                console.error('Error fetching league codes list:', error);
            } finally {
                setLoading(false)
            }
        };

        const fetchTeams = async () => {
            setLoadingTeams(true)
            try {
                const teams = await FetchTeams(league)
                // const teams = await FetchTeams(Number(season), league)



                const uniqueTeams = [...new Set(teams.map(item => item.team))];
                if (uniqueTeams.includes("Nottingham Forest")) {
                    setTeam("Nottingham Forest")
                } else if (uniqueTeams.includes("Rio Ave")) {
                    setTeam("Rio Ave")
                } else if (uniqueTeams.includes("Olympiakos Piraeus")) {
                    setTeam("Olympiakos Piraeus")
                }
                setTeamsList(uniqueTeams);

            } catch (error) {

                console.error('Error fetching teams list:', error);
            } finally {
                setLoadingTeams(false)
            }
        };

        // fetchSeasons();
        fetchLeagues();
        fetchTeams();

    }, [league]);
    // }, [season, league]);

    // async function onSeasonChange(value: string) {

    //     const newSeason = value;
    //     setSeason(newSeason);

    //     // Update or add the season parameter
    //     params.set('season', newSeason);

    //     // Remove team parameter if it exists
    //     params.delete('team');

    //     // Remove team parameter if it exists
    //     params.delete('league_code');




    //     // const fetchSeasons = async () => {
    //     //     // console.log("fetchData() in FetchLeagueCodes() useEffect")

    //     //     try {
    //     //         // console.log("tring fetching league code")

    //     //         const all_seasons = await FetchSeason()

    //     //         // console.log("seasons list");
    //     //         // console.log(all_seasons);

    //     //         setSeasonsList(all_seasons);

    //     //     } catch (error) {

    //     //         console.error('Error fetching league codes list:', error);
    //     //     } finally {
    //     //         setLoading(false)
    //     //     }
    //     // };



    //     const fetchTeams = async () => {
    //         setLoadingTeams(true)
    //         try {
    //             const teams = await FetchTeams(Number(season), league)

    //             // console.log("teams list");
    //             // console.log(teams);

    //             const uniqueTeams = [...new Set(teams.map(item => item.team))];
    //             // console.log("teams list");
    //             // console.log(uniqueTeams);
    //             if (uniqueTeams.includes("Nottingham Forest")) {
    //                 setTeam("Nottingham Forest")
    //             } else if (uniqueTeams.includes("Rio Ave")) {
    //                 setTeam("Rio Ave")
    //             } else if (uniqueTeams.includes("Olympiakos Piraeus")) {
    //                 setTeam("Olympiakos Piraeus")
    //             }

    //             setTeamsList(uniqueTeams);


    //             // setTeamsList(teams);
    //         } catch (error) {

    //             console.error('Error fetching teams list:', error);
    //         } finally {
    //             setLoadingTeams(false)
    //         }
    //     };

    //     // fetchSeasons();
    //     // fetchLeagues();
    //     fetchTeams();

    // };


    function onLeagueChange(value: string) {

        const league = value

        // const league = e.target.value;
        setLeague(league);

        // Update or add the season parameter
        // params.set('league_code', league);

        // Remove team parameter if it exists
        // params.delete('team');


        // Push the new URL with updated search params
        // router.push(`?${params.toString()}`);



        // console.log("Fetching data for ", league)

        if (league !== "") {
            const fetchTeams = async () => {
                try {
                    setLoadingTeams(true)
                    // const teams = await FetchTeams(Number(season), league)
                    const teams = await FetchTeams(league)

                    // console.log("teams list");
                    // console.log(teams);

                    const uniqueTeams = [...new Set(teams.map(item => item.team))];
                    // console.log("teams list");
                    // console.log(uniqueTeams);
                    if (uniqueTeams.includes("Nottingham Forest")) {
                        setTeam("Nottingham Forest")
                    } else if (uniqueTeams.includes("Rio Ave")) {
                        setTeam("Rio Ave")
                    } else if (uniqueTeams.includes("Olympiakos Piraeus")) {
                        setTeam("Olympiakos Piraeus")
                    }
                    setTeamsList(uniqueTeams);

                    // setTeamsList(teams);
                    // setTeam(teams[0].team)

                    // Remove team parameter if it exists
                    // params.delete('team');

                    // Push the new URL with updated search params
                    // router.push(`?${params.toString()}`);

                    // Update or add the season parameter
                    if (teams[0].team) {
                        params.set('team', teams[0].team);
                        // Push the new URL with updated search params
                        router.push(`?${params.toString()}`);
                    }



                } catch (error) {

                    console.error('Error fetching teams list:', error);
                } finally {
                    setLoadingTeams(false)


                }
            };

            fetchTeams();
        }


    }

    // function onTeamChange(e: any) {

    //     // e => setTeam(e.target.value)

    //     // const team = e.target.value

    //     // const league = e.target.value;
    //     setTeam(team);

    //     // Update or add the season parameter
    //     // params.set('team', team);

    //     // Push the new URL with updated search params
    //     // router.push(`?${params.toString()}`, { scroll: false });
    // }


    // useEffect(() => {

    //     // console.log("us" + league + " " + season)

    //     const query = {
    //         league_code: league,
    //         season: season,
    //         teams: teams,

    //     }
    //     const url = qs.stringifyUrl({
    //         url: window.location.href,
    //         query
    //     }, { skipNull: true, skipEmptyString: true })

    //     router.push(url)

    // }, [league, season, teams])


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
                            <SelectTrigger className="py-2 font-medium bg-background rounded-lg xs:w-24 md:w-24 lg:w-24 xl:w-40">
                                <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent className='rounded-lg'>

                                <SelectItem
                                    key={1}
                                    value={"ENG1"}
                                // className="py-2 font-medium dark:bg-gray-800 dark:text-gray-200"
                                >
                                    ENG1
                                </SelectItem>
                                <SelectItem
                                    key={2}
                                    value={"GRE1"}
                                // className="py-2 font-medium dark:bg-gray-800 dark:text-gray-200"
                                >
                                    GRE1
                                </SelectItem>
                                <SelectItem
                                    key={3}
                                    value={"POR1"}
                                // className="py-2 font-medium dark:bg-gray-800 dark:text-gray-200"
                                >
                                    POR1
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* team */}

                    {
                        !loadingTeams ?
                            <>

                                <div className="">
                                    <label htmlFor="">
                                        Team
                                    </label>
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

                                </div>

                            </> : <>Loading...</>
                    }



                </div>
            </>
        )

    }
}




