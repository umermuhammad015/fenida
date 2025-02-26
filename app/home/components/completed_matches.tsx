"use client"

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
// import Image from 'next/image'
import { clsx } from 'clsx';
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'

import fetchCompletedMatches from './fetchCompletedMatches';

import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"

import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import CompletedSkeleton from './completed_skeleton';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { SlidingNumber } from '@/components/ui/sliding-number';

interface CompletedMatch {
    away_country: string | null;
    away_goals: number | null;
    away_team: string | null;
    away_team_short: string | null;
    away_win_prob: number | null;
    away_xg: number | null;
    date: Date | null;
    home_country: string | null;
    home_goals: number | null;
    home_team: string | null;
    home_team_short: string | null;
    home_win_prob: number | null;
    home_xg: number | null;
    league: string | null;
    league_code: string | null;
    tie_prob: number | null;
}

export default function CompletedMatches() {
    const searchParams = useSearchParams()
    const [isLoading, setIsLoading] = useState(true);
    const [completed_matches, setCompletedMatches] = useState<CompletedMatch[] | null>(null);
    const [completed_matches_count, set_completed_matches_count] = useState(0);

    const completed_matches_length = completed_matches ? completed_matches.length : 0

    const user_league_code = searchParams.get('league') || "ENG1"
    const user_team = searchParams.get('team') || "Nottingham Forest"

    function show_previous() {
        if (completed_matches_count < completed_matches_length - 1) {
            set_completed_matches_count(completed_matches_count + 1);
        }
    }

    function show_next() {
        if (completed_matches_count > 0) {
            set_completed_matches_count(completed_matches_count - 1);
        }
    }

    function formatDate(date: string | Date): string {
        const d = new Date(date);
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
        const fetchData = async () => {
            try {
                const cm = await fetchCompletedMatches(user_league_code, user_team);
                console.log(cm)
                setCompletedMatches(cm);
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching completed matches data:', error);
            }
        };
        fetchData();
    }, [user_league_code, user_team]);

    if (isLoading) {
        return <CompletedSkeleton />
    } else if (completed_matches) {
        return (
            <div className="bg-background rounded-lg">
                <div className="p-4">
                    <div className="p-1 text-sm font-semibold border-b-2">
                        <h2>Completed Matches</h2>
                    </div>
                    <div>
                        <div className="flex justify-between my-5">
                            <div className="class">
                                <div className="font-semibold">{completed_matches[completed_matches_count]?.league}</div>
                                <div className="flex justify-center text-gray-400">
                                    {completed_matches[completed_matches_count]?.date &&
                                        formatDate(completed_matches[completed_matches_count]?.date)}
                                </div>
                            </div>

                            <TooltipProvider>
                                <div className="flex">
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className={clsx(
                                                `w-14 text-center p-2 border bg-gray-100 rounded-l dark:bg-muted`,
                                                {
                                                    'border-blue-600':
                                                        completed_matches[completed_matches_count]?.home_goals !==
                                                        completed_matches[completed_matches_count]?.away_goals &&
                                                        completed_matches[completed_matches_count]?.home_team === user_team,
                                                }
                                            )}>
                                                <div className="inline-flex items-center justify-center">
                                                    <SlidingNumber value={Number(completed_matches[completed_matches_count]?.home_win_prob &&
                                                        Math.round(completed_matches[completed_matches_count]?.home_win_prob * 100))} />%
                                                </div>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {completed_matches[completed_matches_count]?.home_team === user_team ?
                                                "Probability of Win" : "Probability of Loss"}
                                        </TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className={clsx(
                                                `w-14 text-center p-2 border bg-gray-100 dark:bg-muted`,
                                                {
                                                    'border-blue-600':
                                                        completed_matches[completed_matches_count]?.home_goals ===
                                                        completed_matches[completed_matches_count]?.away_goals,
                                                }
                                            )}>
                                                <div className="inline-flex items-center justify-center">
                                                    <SlidingNumber value={Number(completed_matches[completed_matches_count]?.tie_prob &&
                                                        Math.round(completed_matches[completed_matches_count]?.tie_prob * 100))} />%
                                                </div>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <div>Probability of Draw</div>
                                        </TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className={clsx(
                                                `w-14 text-center p-2 border bg-gray-100 rounded-r dark:bg-muted`,
                                                {
                                                    'border-blue-600':
                                                        completed_matches[completed_matches_count]?.home_goals !==
                                                        completed_matches[completed_matches_count]?.away_goals &&
                                                        completed_matches[completed_matches_count]?.away_team === user_team,
                                                }
                                            )}>
                                                <div className="inline-flex items-center justify-center">
                                                    <SlidingNumber value={Number(completed_matches[completed_matches_count]?.away_win_prob &&
                                                        Math.round(completed_matches[completed_matches_count]?.away_win_prob * 100))} />%
                                                </div>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {completed_matches[completed_matches_count]?.away_team === user_team ?
                                                "Probability of Win" : "Probability of Loss"}
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </TooltipProvider>
                        </div>

                        <div className="flex justify-around font-semibold mb-4">
                            <div className="flex flex-col justify-center items-center w-1/2">
                                <motion.div
                                    key={`home-img-${completed_matches_count}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <img
                                        src={"/images/teams/" + completed_matches[completed_matches_count]?.home_country + " - " +
                                            completed_matches[completed_matches_count]?.home_team + ".png"}
                                        width={50}
                                        height={50}
                                        className="object-contain"
                                        alt="Picture of the author"
                                    />
                                </motion.div>
                                <div className="text-center">{completed_matches[completed_matches_count]?.home_team_short}</div>
                            </div>

                            <div className="flex justify-center items-center">
                                <div className="text-xl bg-gray-100 p-2 rounded font-bold dark:bg-muted">
                                    <SlidingNumber value={completed_matches[completed_matches_count]?.home_goals as number} />
                                </div>
                                <div className="text-2xl mx-3 text-gray-400">:</div>
                                <div className="text-xl bg-gray-100 p-2 rounded font-bold dark:bg-muted">
                                    <SlidingNumber value={completed_matches[completed_matches_count]?.away_goals as number} />
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center w-1/2">
                                <motion.div
                                    key={`away-img-${completed_matches_count}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <img
                                        src={"/images/teams/" + completed_matches[completed_matches_count]?.away_country + " - " +
                                            completed_matches[completed_matches_count]?.away_team + ".png"}
                                        width={50}
                                        height={50}
                                        className="object-contain"
                                        alt="Picture of the author"
                                    />
                                </motion.div>
                                <div className="text-center">{completed_matches[completed_matches_count]?.away_team_short}</div>
                            </div>
                        </div>

                        <div className="flex justify-around mb-1 gap-1">
                            <div className="flex justify-between bg-gray-100 w-1/2 rounded p-2 dark:bg-muted">
                                <div className="ml-1 text-gray-400">Shot-Based xG</div>
                                <div className="mr-1">
                                    <div className="inline-flex items-center justify-center">
                                        <SlidingNumber value={Number(completed_matches[completed_matches_count]?.home_xg)} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between bg-gray-100 w-1/2 rounded p-2 dark:bg-muted">
                                <div className="ml-1 text-gray-400">Shot-Based xG</div>
                                <div className="mr-1">
                                    <div className="inline-flex items-center justify-center">
                                        <SlidingNumber value={Number(completed_matches[completed_matches_count]?.away_xg)} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-around gap-1">
                            <div className="flex justify-between bg-gray-100 w-1/2 rounded p-2 dark:bg-muted">
                                <div className="ml-1 text-gray-400">Non-Shot xG</div>
                                <div className="mr-1">0</div>
                            </div>
                            <div className="flex justify-between bg-gray-100 w-1/2 rounded p-2 dark:bg-muted">
                                <div className="text-gray-400">Non-Shot xG</div>
                                <div className="mr-1">0</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between pt-6 gap-2">
                        <button
                            onClick={show_previous}
                            disabled={completed_matches_count === completed_matches_length - 1}
                            className={clsx(`border w-16 rounded-lg p-2`, {
                                'text-gray-400': completed_matches_count === completed_matches_length - 1,
                                'cursor-not-allowed': completed_matches_count === completed_matches_length - 1,
                            })}
                        >
                            Previous
                        </button>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="border w-16 bg-blue-700 text-white p-2 rounded-lg">Details</Button>
                            </DialogTrigger>
                            <DialogContent className="overflow-y-scroll max-h-screen lg:max-w-[50%] md:max-w-[60%] sm:max-w-[80%] xs:max-w-[90%]">
                                <DialogTitle className="sr-only">Completed Matches Details</DialogTitle>
                                <div className="bg-background rounded-lg">
                                    <div className="p-1 text-sm font-semibold border-b-2 flex justify-between">
                                        <h2>Completed Matches</h2>
                                    </div>

                                    <div className="">
                                        <Table className="">
                                            <TableBody>
                                                {completed_matches.length > 0 && completed_matches.map((row: CompletedMatch, i: number) => (
                                                    <TableRow key={i} className="h-16 w-[70%] cursor-pointer">
                                                        <TableCell>
                                                            <div>{row.date && formatDate(row.date)}</div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className="flex gap-2 items-center">
                                                                <img
                                                                    src={"/images/teams/" + row?.home_country + " - " + row?.home_team + ".png"}
                                                                    width={25}
                                                                    height={25}
                                                                    className="object-contain"
                                                                    alt="Picture of the author"
                                                                />
                                                                <div className="flex justify-center items-center">{(row?.home_team_short)}</div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="flex justify-center items-center mt-3 gap-2">
                                                            <div className={clsx(`w-10 h-9 dark:bg-muted rounded flex justify-center items-center`, {
                                                                'text-green-600 bg-green-100': (row?.home_goals !== null && row?.away_goals !== null) && (
                                                                    (row?.home_team === user_team && row?.home_goals > row?.away_goals) ||
                                                                    (row?.away_team === user_team && row?.home_goals < row?.away_goals)
                                                                ),
                                                                'text-red-600 bg-red-100': (row?.home_goals !== null && row?.away_goals !== null) && (
                                                                    (row?.home_team === user_team && row?.home_goals < row?.away_goals) ||
                                                                    (row?.away_team === user_team && row?.home_goals > row?.away_goals)
                                                                ),
                                                                'text-orange-600 bg-orange-100': (row?.home_goals !== null && row?.away_goals !== null) && (row?.home_goals === row?.away_goals)
                                                            })}>
                                                                {row?.home_goals}
                                                            </div>
                                                            <div className={clsx(`w-10 h-9 dark:bg-muted rounded flex justify-center items-center`, {
                                                                'text-green-600 bg-green-100': (row?.home_goals !== null && row?.away_goals !== null) && (
                                                                    (row?.home_team === user_team && row?.home_goals > row?.away_goals) ||
                                                                    (row?.away_team === user_team && row?.home_goals < row?.away_goals)
                                                                ),
                                                                'text-red-600 bg-red-100': (row?.home_goals !== null && row?.away_goals !== null) && (
                                                                    (row?.home_team === user_team && row?.home_goals < row?.away_goals) ||
                                                                    (row?.away_team === user_team && row?.home_goals > row?.away_goals)
                                                                ),
                                                                'text-orange-600 bg-orange-100': (row?.home_goals !== null && row?.away_goals !== null) && (row?.home_goals === row?.away_goals)
                                                            })}>
                                                                {row?.away_goals}
                                                            </div>
                                                        </TableCell>

                                                        <TableCell>
                                                            <div className="flex gap-2 justify-end">
                                                                <div className="flex justify-center items-center">{(row?.away_team_short)}</div>
                                                                <img
                                                                    src={"/images/teams/" + row?.away_country + " - " + row?.away_team + ".png"}
                                                                    width={25}
                                                                    height={25}
                                                                    className="object-contain"
                                                                    alt="Picture of the author"
                                                                />
                                                            </div>
                                                        </TableCell>

                                                        <TableCell className="flex justify-center items-center mt-3 gap-2">
                                                            <div className={clsx(
                                                                `w-14 text-center p-2 border-2 bg-gray-100 rounded-l dark:bg-muted`,
                                                                {
                                                                    'border-green-600': (row?.home_goals !== null && row?.away_goals !== null) && ((row?.home_goals > row?.away_goals) && (row?.home_team === user_team)),
                                                                    'border-red-600': (row?.home_goals !== null && row?.away_goals !== null) && ((row?.home_goals < row?.away_goals) && (row?.home_team === user_team))
                                                                }
                                                            )}>
                                                                {row?.home_win_prob && Math.round(row?.home_win_prob * 100).toString() + "%"}
                                                            </div>
                                                            <div className={clsx(`w-14 text-center p-2 border-2 bg-gray-100  dark:bg-muted`, {
                                                                'border-orange-600': row?.home_goals === row?.away_goals
                                                            })}>
                                                                {row?.tie_prob && Math.round(row?.tie_prob * 100).toString() + "%"}
                                                            </div>
                                                            <div className={clsx(`w-14 text-center p-2 border-2 bg-gray-100 rounded-r dark:bg-muted`, {
                                                                'border-green-600': (row?.home_goals !== null && row?.away_goals !== null) && ((row?.home_goals < row?.away_goals) && (row?.away_team === user_team)),
                                                                'border-red-600': (row?.home_goals !== null && row?.away_goals !== null) && ((row?.home_goals > (row?.away_goals) && row?.away_team === user_team))
                                                            })}>
                                                                {row?.away_win_prob && Math.round(row?.away_win_prob * 100).toString() + "%"}
                                                            </div>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>

                        <button
                            onClick={show_next}
                            disabled={completed_matches_count === 0}
                            className={clsx(`border w-16 rounded-lg p-2`, {
                                'text-gray-400': completed_matches_count === 0,
                                'cursor-not-allowed': completed_matches_count === 0,
                            })}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}