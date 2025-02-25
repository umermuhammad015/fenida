"use client"

import React, { useEffect, useState } from 'react'
import { clsx } from 'clsx';
import { useSearchParams } from 'next/navigation'
// import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import fetchUpcomingMatches from './fetchUpcomingMatches'
import UpcomingSkeleton from './upcomingSkeleton'
import fetchUpcomingMatchesAll from './FetchupcomingMatchesAll';
import { SlidingNumber } from '@/components/ui/sliding-number';

// type UpcomingMatchesType = {
//     time: string;
//     away_country: string;
//     away_cumulative_points: number;
//     away_team: string;
//     away_team_short: string;
//     date: Date; // Convert from string to Date object
//     home_country: string;
//     home_cumulative_points: number;
//     home_team: string;
//     home_team_short: string;
//     id: number;
//     league: string;
//     prob1: number;
//     prob2: number;
//     prob_draw: number;
// }

type UpcomingMatchesTypeNull = {
    time: string | null;
    away_country: string | null;
    away_cumulative_points: number | null;
    away_team: string | null;
    away_team_short: string | null;
    date: string | null; // Convert from string to Date object
    home_country: string | null;
    home_cumulative_points: number | null;
    home_team: string | null;
    home_team_short: string | null;
    id: number | null;
    league: string | null;
    prob1: number | null;
    prob2: number | null;
    prob_draw: number | null;
}



export default function UpcomingMatches() {

    const searchParams = useSearchParams()

    const [isLoading, setIsLoading] = useState(true);

    const [upcoming_matches, setUpcomingMatches] = useState<UpcomingMatchesTypeNull[]>([]);
    const [upcoming_matches_all, setUpcomingMatchesAll] = useState<UpcomingMatchesTypeNull[]>([]);

    const [count, setCount] = useState(0);
    // const [isAnimating, setIsAnimating] = useState(false);
    // const upcoming_matches_length = upcoming_matches.length
    const upcoming_matches_length = upcoming_matches ? upcoming_matches.length : 0

    const user_league_code = searchParams.get('league') || "ENG1"
    const user_team = searchParams.get('team') || "Nottingham Forest"

    // const [isLoading, setIsLoading] = useState(true);

    // const [upcoming_matches, setUpcomingMatches] = useState<UpcomingMatches | null>(null);

    // const [count, setCount] = useState(0);
    // const upcoming_matches_length = upcoming_matches?.length


    // function addOne() {
    //     if (count < upcoming_matches_length - 1) {
    //         setIsAnimating(true);
    //         setTimeout(() => {
    //             setCount(count + 1);
    //             setIsAnimating(false);
    //         }, 300); // Match this with the CSS transition duration
    //     }
    // }


    // function subtractOne() {
    //     if (count > 0) {
    //         setIsAnimating(true);
    //         setTimeout(() => {
    //             setCount(count - 1);
    //             setIsAnimating(false);
    //         }, 300);
    //     }
    // }

    function addOne() {
        if (count < upcoming_matches_length - 1) {
            setCount(count + 1);
        }
    }

    function subtractOne() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function formatDate(date: string | Date): string {
        const d = new Date(date);

        // Ensure the date is valid
        if (isNaN(d.getTime())) {
            throw new Error("Invalid date format");
        }

        const month = d.toLocaleString('default', { month: 'short' });
        let day = d.getDate().toString();
        const year = d.getFullYear();

        if (day.length < 2) {
            day = '0' + day;
        }

        return [day, month, year].join(' ');
    }


    useEffect(() => {

        setIsLoading(true)

        // console.log("upcoming matches usefffect")
        // console.log(user_league_code)
        // console.log(user_team)

        const fetchData = async () => {
            try {
                const um = await fetchUpcomingMatches(user_league_code, user_team);

                // console.log("um")
                // console.log(um)

                setUpcomingMatches(um);
                setIsLoading(false)

            } catch (error) {
                console.error('Error fetching completed matches data:', error);
            }
        };

        fetchData();

    }, [user_league_code, user_team]);

    useEffect(() => {

        setIsLoading(true)

        // console.log("upcoming matches usefffect")
        // console.log(user_league_code)
        // console.log(user_team)

        const fetchData = async () => {
            try {
                const uma = await fetchUpcomingMatchesAll(user_league_code);

                // console.log("uma")
                // console.log(uma)

                setUpcomingMatchesAll(uma);
                setIsLoading(false)

            } catch (error) {
                console.error('Error fetching completed matches data:', error);
            }
        };

        fetchData();


    }, [user_league_code]);


    if (isLoading) {
        return (
            <>
                <UpcomingSkeleton />
            </>)
    }


    if (upcoming_matches.length > 0) {
        return (
            <>
                <div className="bg-background rounded-lg p-4">
                    <div className="text-xs">
                        <div className=" p-1 text-sm font-semibold border-b-2">
                            <h2>Upcoming Matches</h2>

                        </div>
                        {/* <div className={`transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}> */}


                        <div className="flex justify-center font-semibold pt-5">
                            {upcoming_matches[count]?.league}
                        </div>
                        <div className="flex justify-center text-gray-400 mb-5">
                            {upcoming_matches[count]?.date && formatDate(upcoming_matches[count]?.date)}
                        </div>

                        <div className="flex justify-around ">
                            <div className="flex flex-col justify-center text-center w-1/2">
                                <div className="mx-auto">
                                    {/* <img src="dortmund.png" className="object-contain" alt="" width="50" height="50" /> */}
                                    <Image
                                        // src="/images/teams/{(row?.country)}.concat{(row?.team)}.png"
                                        src={"/images/teams/" + upcoming_matches[count]?.home_country + " - " + upcoming_matches[count]?.home_team + ".png"}

                                        width={50}
                                        height={50}
                                        className="object-contain"
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className="transition  ease-in-out delay-150 font-semibold">{upcoming_matches[count]?.home_team_short}</div>

                                <div className="text-gray-400">
                                    {/* {Number(upcoming_matches[count]?.home_cumulative_points) + " Point"} */}
                                    {/* <div className="inline-flex items-center justify-center">
                                        <SlidingNumber value={Number(upcoming_matches[count]?.home_cumulative_points)} />Point

                                    </div> */}
                                    <div className="inline-flex items-center gap-1 justify-center">
                                        <SlidingNumber value={Number(upcoming_matches[count]?.home_cumulative_points)} />
                                        <span>Point</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: '50px', width: '2px' }} className=" bg-gray-100 mt-4 dark:bg-muted"></div>
                            <div className="flex flex-col justify-center text-center w-1/2">
                                <div className="mx-auto">
                                    {/* <img src="rbl.png" className="object-contain" alt="" width="50" height="50" /> */}
                                    <Image
                                        // src="/images/teams/{(row?.country)}.concat{(row?.team)}.png"
                                        src={"/images/teams/" + upcoming_matches[count]?.away_country + " - " + upcoming_matches[count]?.away_team + ".png"}

                                        width={50}
                                        height={50}
                                        className="object-contain"
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className="font-semibold">{upcoming_matches[count]?.away_team_short}</div>
                                <div className="text-gray-400">
                                    {/* {Number(upcoming_matches[count]?.away_cumulative_points) + " Point"} */}
                                    <div className="inline-flex items-center gap-1 justify-center">
                                        <SlidingNumber value={Number(upcoming_matches[count]?.away_cumulative_points)} />
                                        <span>Point</span>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="flex justify-between text-gray-400 m-2 pt-3">
                            <div className="inline-flex items-center justify-center">
                                <SlidingNumber value={Number(upcoming_matches[count]?.prob1 && Math.round(upcoming_matches[count]?.prob1 * 100))} />%
                            </div>
                            {/* <div>{upcoming_matches[count]?.prob1 && Math.round(upcoming_matches[count]?.prob1 * 100).toString() + "%"}</div> */}
                            <div className="inline-flex items-center justify-center">
                                <SlidingNumber value={Number(upcoming_matches[count]?.prob2 && Math.round(upcoming_matches[count]?.prob2 * 100))} />%
                            </div>
                            {/* <div>{upcoming_matches[count]?.prob2 && Math.round(upcoming_matches[count]?.prob2 * 100).toString() + "%"}</div> */}
                        </div>

                        <div className="flex justify-between pb-10">
                            {/* className={clsx(
                                    `w-14 text-center p-2 border bg-gray-100 rounded-l dark:bg-muted`,
                                    {
                                        'border-blue-600':
                                            completed_matches[completed_matches_count]?.home_goals !==
                                            completed_matches[completed_matches_count]?.away_goals &&
                                            completed_matches[completed_matches_count]?.home_team === user_team,
                                    }
                                )} */}
                            <div style={{
                                width: (upcoming_matches[count]?.prob1 && Math.round(upcoming_matches[count]?.prob1 * 100).toString()) + "%",
                                backgroundColor: upcoming_matches[count]?.home_team === user_team ? 'rgb(44,86,235)' : '#FA4265'
                            }} className="h-2 ml-2 rounded-l-lg"></div>

                            <div style={{
                                width: (upcoming_matches[count]?.prob_draw && Math.round(upcoming_matches[count]?.prob_draw * 100).toString()) + "%"
                            }} className="h-2 bg-gray-200 ml-0.5 mr-0.5 dark:bg-muted"></div>

                            <div style={{
                                width: (upcoming_matches[count]?.prob2 && Math.round(upcoming_matches[count]?.prob2 * 100).toString()) + "%",
                                backgroundColor: upcoming_matches[count]?.away_team === user_team ? 'rgb(44,86,235)' : '#FA4265'
                            }} className="h-2 mr-2 rounded-r-lg"></div>
                        </div>
                    </div>
                    <div className=" flex justify-between gap-2 ">
                        {/* <button className="border w-16 rounded-lg p-2"
                                onClick={subtractOne}
                                style={{ color: count === 0 && 'gray', cursor: count === 0 && 'not-allowed' }}
                                disabled={count === 0 && true}  >Previous
                            </button> */}
                        <button
                            onClick={subtractOne}
                            disabled={count === 0 && true}
                            className={clsx(`border w-16 rounded-lg p-2 `, {
                                'text-gray-400': count === 0,
                                'cursor-not-allowed': count === 0,
                            })}
                        >
                            Previous
                        </button>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="border w-16 bg-blue-700 text-white p-2 rounded-lg">Details</Button>
                            </DialogTrigger>
                            <DialogContent className="overflow-y-scroll max-h-screen lg:max-w-[50%] md:max-w-[60%] sm:max-w-[80%] xs:max-w-[90%]">

                                <div className=" bg-background rounded-xl">
                                    <div className=" p-1 text-sm font-semibold border-b-2 flex justify-between">
                                        <h2>Upcoming Matches</h2>
                                        {/* <Button>
                                                            <Link href="/home">Cancel</Link>
                                                        </Button> */}
                                    </div>


                                    <Table className="">
                                        <TableBody>
                                            {upcoming_matches_all.map((row: UpcomingMatchesTypeNull, i: number) => (

                                                <TableRow className={clsx(`h-16`, {
                                                    'border-primary': row?.home_team === user_team || row?.away_team === user_team,
                                                    'border-t-2': row?.home_team === user_team || row?.away_team === user_team,
                                                    'border-b-2': row?.home_team === user_team || row?.away_team === user_team,
                                                    // 'border-red-600': row?.home_goals < row?.away_goals && row?.home_team === user_team




                                                }
                                                )} key={i} >
                                                    <TableCell>
                                                        <div>{row?.date && formatDate(row?.date)}</div>
                                                        {/* <div className="text-center">{(row?.time)}</div> */}
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex gap-2 items-center">
                                                            <Image

                                                                src={"/images/teams/" + row?.home_country + " - " + row?.home_team + ".png"}

                                                                width={25}
                                                                height={25}
                                                                className="object-contain"
                                                                alt="Picture of the author"
                                                            />
                                                            <div className="">{(row?.home_team)}</div>
                                                        </div>

                                                    </TableCell>
                                                    <TableCell className="flex justify-center items-center mt-3 gap-2 ">
                                                        {/* <div className={`w-10 h-10 border flex justify-center items-center` + (Number(row?.prob1) < 50 ? ' text-blue-600 bg-blue-100 ' : 'text-red-600 bg-red-100')}>{Math.round(parseFloat(row?.prob1) * 100).toString() + "%"}</div> */}
                                                        <div className={clsx(`w-10 h-10 border flex justify-center items-center`, {
                                                            'bg-secondary': row?.home_team === user_team,
                                                            // 'border-red-600': row?.home_goals < row?.away_goals && row?.home_team === user_team




                                                        }
                                                        )}>{row?.prob1 && Math.round(row?.prob1 * 100).toString() + "%"}</div>
                                                        <div className="w-10 h-10 border flex justify-center items-center">{row?.prob_draw && Math.round(row?.prob_draw * 100).toString() + "%"}</div>

                                                        {/* <div className="w-10 h-10 border flex justify-center items-center">{Math.round(parseFloat(row?.prob2) * 100).toString() + "%"}</div> */}
                                                        <div className={clsx(`w-10 h-10 border flex justify-center items-center`, {
                                                            'bg-secondary': row?.away_team === user_team,
                                                            // 'border-red-600': row?.home_goals < row?.away_goals && row?.home_team === user_team




                                                        }
                                                        )}>{row?.prob2 && Math.round(row?.prob2 * 100).toString() + "%"}</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex gap-2 justify-end">

                                                            <div className="">{(row?.away_team)}</div>
                                                            <Image
                                                                // src="/images/teams/{(row?.country)}.concat{(row?.team)}.png"
                                                                src={"/images/teams/" + row?.away_country + " - " + row?.away_team + ".png"}

                                                                width={25}
                                                                height={25}
                                                                className="object-contain"
                                                                alt="Picture of the author"
                                                            />
                                                        </div>

                                                    </TableCell>

                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </DialogContent>
                        </Dialog>
                        {/* <button className="border w-16 rounded-lg p-2" onClick={addOne}
                                style={{ color: count === upcoming_matches_length - 1 && 'gray', cursor: count === upcoming_matches_length - 1 && 'not-allowed' }}
                                disabled={count === upcoming_matches_length - 1 && true}>Next
                            </button> */}
                        <button
                            onClick={addOne}
                            disabled={count === upcoming_matches_length - 1 && true}
                            className={clsx(`border w-16 rounded-lg p-2 `, {
                                'text-gray-400': count === upcoming_matches_length - 1,
                                'cursor-not-allowed': count === upcoming_matches_length - 1,
                            })}
                        >
                            Next
                        </button>
                    </div>
                </div>
                {/* </div> */}
            </>

        )
    } else {
        return (
            <>
                <div className="bg-background rounded-lg h-[360px]">
                    <div className="p-4 text-xs">
                        <div className=" p-1 text-sm font-semibold border-b-2">
                            <h2>Upcoming Matches</h2>

                        </div>
                        <div className="flex justify-center items-center mt-36">
                            <div className="">
                                No Upcoming Matches
                            </div>
                        </div>


                    </div>
                </div>
            </>

        )
    }



}

