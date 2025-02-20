import Image from 'next/image'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import clsx from 'clsx';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { prisma } from '@/app/db';
import { standings } from '@prisma/client'

interface LeagueTableProps {
    league: string;
    season: string;
}

type MatchData = {
    team: string;
    team_against: string;
    goals: number;
    goals_against: number;
    league_code: string;
    ground: "home" | "away";  // Restricting values to "home" or "away"
    date: string;
    // league_start_year: BigInt;
    // row_num: BigInt;
    league_start_year: number;
    row_num: number;
};

// type StandingsProps = {
//     standings: standings | null; // Use the type defined in the Prisma schema
// };

// type LeagueTableTypes = {
//     id: number,
//     country: string
//     league_start_year: number,
//     league_code: string,
//     team: string,
//     team_short: string,
//     team_code: string,
//     games: number,
//     position: number,
//     points: number,
//     pts: number,
//     wins: number,
//     draws: number,
//     goalsF: number,
//     goalsA: number,
//     goalDiff: number,
//     champion: number,
//     top_4: number,
//     relegation: number,
//     goals_sum: number,
//     goals_against_sum: number,
//     xg_mean: number,
//     xg_against_mean: number,
//     xga_percent_rank: number,
//     xgf_percent_rank: number,
//     off_rank: number,
//     def_rank: number,
//     result: string,
//     upload_date_time: Date
// }
// type LeagueTableTypesWithNulls = {
//     id: number | null,
//     country: string | null,
//     league_start_year: number | null,
//     league_code: string | null,
//     team: string | null,
//     team_short: string | null,
//     team_code: string | null,
//     games: number | null,
//     position: number | null,
//     points: number | null,
//     pts: number | null,
//     wins: number | null,
//     draws: number | null,
//     goalsF: number | null,
//     goalsA: number | null,
//     goalDiff: number | null,
//     champion: number | null,
//     top_4: number | null,
//     relegation: number | null,
//     goals_sum: number | null,
//     goals_against_sum: number | null,
//     xg_mean: number | null,
//     xg_against_mean: number | null,
//     xga_percent_rank: number | null,
//     xgf_percent_rank: number | null,
//     off_rank: number | null,
//     def_rank: number | null,
//     result: string | null,
//     // upload_date_time: Date | null
//     upload_date_time: string | null
// }

async function fetchStandings(league: string, season: string): Promise<standings[] | undefined> {


    try {
        const league_table = await prisma.standings.findMany({
            where: {
                league_code: league,
                league_start_year: Number(season)
            },
            orderBy: [
                {
                    pts: 'desc',
                },
            ],
            // take: 10,
        });

        // console.log("league_table")
        // console.log(league_table)

        if (!league_table) return []

        return (league_table)

    } catch (error) {
        console.error('Error fetching league table data:', error);
    }
};
// async function fetchStandings(league: string, season: string): Promise<standings[] | undefined> {


//     try {
//         const league_table = await prisma.standings.findMany({
//             where: {
//                 league_code: league,
//                 league_start_year: Number(season)
//             },
//             orderBy: [
//                 {
//                     pts: 'desc',
//                 },
//             ],
//             // take: 10,
//         });

//         // console.log("league_table")
//         // console.log(league_table)

//         if (!league_table) throw new Error('Failed to fetch League table data')

//         return (league_table)

//     } catch (error) {
//         console.error('Error fetching league table data:', error);
//     }
// };

// export default async function LeagueTable({ league, season }: LeagueTableProps) {
export default async function LeagueTable({ league, season }: LeagueTableProps) {

    // console.log(league)
    // console.log(season)

    const league_table = await fetchStandings(league, season);
    // const league_table = [
    //     {
    //       id: 32,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Liverpool',
    //       team_short: 'Liverpool',
    //       team_code: 'LIV',
    //       games: 25,
    //       position: 1,
    //       points: 89.5,
    //       pts: 60,
    //       wins: 27.3,
    //       draws: 7.6,
    //       goalsF: 94.3,
    //       goalsA: 37.6,
    //       goalDiff: 56.7,
    //       champion: 95,
    //       top_4: 100,
    //       relegation: 0,
    //       goals_sum: 60,
    //       goals_against_sum: 24,
    //       xg_mean: 2.248,
    //       xg_against_mean: 0.92,
    //       xga_percent_rank: 10,
    //       xgf_percent_rank: 100,
    //       off_rank: 1,
    //       def_rank: 2,
    //       result: 'WWWDW',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 46,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Arsenal',
    //       team_short: 'Arsenal',
    //       team_code: 'ARS',
    //       games: 25,
    //       position: 2,
    //       points: 80.2,
    //       pts: 53,
    //       wins: 23.4,
    //       draws: 10,
    //       goalsF: 77.4,
    //       goalsA: 33.7,
    //       goalDiff: 43.7,
    //       champion: 5,
    //       top_4: 100,
    //       relegation: 0,
    //       goals_sum: 51,
    //       goals_against_sum: 22,
    //       xg_mean: 1.604,
    //       xg_against_mean: 0.8440000000000001,
    //       xga_percent_rank: 5,
    //       xgf_percent_rank: 67.5,
    //       off_rank: 7,
    //       def_rank: 1,
    //       result: 'WDWWW',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 58,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Nottingham Forest',
    //       team_short: 'Nottingham',
    //       team_code: 'NFO',
    //       games: 25,
    //       position: 4.2,
    //       points: 70.1,
    //       pts: 47,
    //       wins: 21,
    //       draws: 7,
    //       goalsF: 63,
    //       goalsA: 44,
    //       goalDiff: 19,
    //       champion: 0,
    //       top_4: 69,
    //       relegation: 0,
    //       goals_sum: 41,
    //       goals_against_sum: 29,
    //       xg_mean: 1.28,
    //       xg_against_mean: 1.156,
    //       xga_percent_rank: 20,
    //       xgf_percent_rank: 30,
    //       off_rank: 15,
    //       def_rank: 4,
    //       result: 'DWLWL',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 64,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Manchester City',
    //       team_short: 'Man City',
    //       team_code: 'MCI',
    //       games: 25,
    //       position: 4.8,
    //       points: 67.6,
    //       pts: 44,
    //       wins: 20.2,
    //       draws: 6.9,
    //       goalsF: 80.8,
    //       goalsA: 54.7,
    //       goalDiff: 26,
    //       champion: 0,
    //       top_4: 45,
    //       relegation: 0,
    //       goals_sum: 52,
    //       goals_against_sum: 35,
    //       xg_mean: 1.84,
    //       xg_against_mean: 1.392,
    //       xga_percent_rank: 50,
    //       xgf_percent_rank: 85,
    //       off_rank: 4,
    //       def_rank: 10,
    //       result: 'DWWLW',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 68,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Bournemouth',
    //       team_short: 'Bournemouth',
    //       team_code: 'BOU',
    //       games: 25,
    //       position: 4.6,
    //       points: 68.2,
    //       pts: 43,
    //       wins: 19.7,
    //       draws: 9,
    //       goalsF: 69.5,
    //       goalsA: 42.8,
    //       goalDiff: 26.7,
    //       champion: 0,
    //       top_4: 58,
    //       relegation: 0,
    //       goals_sum: 44,
    //       goals_against_sum: 29,
    //       xg_mean: 1.864,
    //       xg_against_mean: 1.28,
    //       xga_percent_rank: 35,
    //       xgf_percent_rank: 90,
    //       off_rank: 3,
    //       def_rank: 7,
    //       result: 'DWWLW',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 69,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Chelsea',
    //       team_short: 'Chelsea',
    //       team_code: 'CHE',
    //       games: 25,
    //       position: 5.6,
    //       points: 65,
    //       pts: 43,
    //       wins: 18.6,
    //       draws: 9.1,
    //       goalsF: 72.1,
    //       goalsA: 52.4,
    //       goalDiff: 19.7,
    //       champion: 0,
    //       top_4: 23,
    //       relegation: 0,
    //       goals_sum: 47,
    //       goals_against_sum: 34,
    //       xg_mean: 1.968,
    //       xg_against_mean: 1.424,
    //       xga_percent_rank: 55.00000000000001,
    //       xgf_percent_rank: 95,
    //       off_rank: 2,
    //       def_rank: 11,
    //       result: 'DWLWL',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 72,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Newcastle United',
    //       team_short: 'Newcastle',
    //       team_code: 'NEW',
    //       games: 25,
    //       position: 7.3,
    //       points: 60.7,
    //       pts: 41,
    //       wins: 17.9,
    //       draws: 7.1,
    //       goalsF: 62.8,
    //       goalsA: 48.8,
    //       goalDiff: 14,
    //       champion: 0,
    //       top_4: 3,
    //       relegation: 0,
    //       goals_sum: 42,
    //       goals_against_sum: 33,
    //       xg_mean: 1.672,
    //       xg_against_mean: 1.244,
    //       xga_percent_rank: 30,
    //       xgf_percent_rank: 80,
    //       off_rank: 5,
    //       def_rank: 6,
    //       result: 'WLWLL',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 77,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Fulham',
    //       team_short: 'Fulham',
    //       team_code: 'FUL',
    //       games: 25,
    //       position: 8.7,
    //       points: 57.9,
    //       pts: 39,
    //       wins: 15.6,
    //       draws: 10.9,
    //       goalsF: 57.1,
    //       goalsA: 51.9,
    //       goalDiff: 5.2,
    //       champion: 0,
    //       top_4: 2,
    //       relegation: 0,
    //       goals_sum: 38,
    //       goals_against_sum: 33,
    //       xg_mean: 1.44,
    //       xg_against_mean: 1.12,
    //       xga_percent_rank: 15,
    //       xgf_percent_rank: 57.49999999999999,
    //       off_rank: 9,
    //       def_rank: 3,
    //       result: 'LWLWW',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 83,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Aston Villa',
    //       team_short: 'Aston Villa',
    //       team_code: 'AVL',
    //       games: 25,
    //       position: 10.6,
    //       points: 53.3,
    //       pts: 38,
    //       wins: 14.4,
    //       draws: 10.2,
    //       goalsF: 52,
    //       goalsA: 60.6,
    //       goalDiff: -8.5,
    //       champion: 0,
    //       top_4: 0,
    //       relegation: 0,
    //       goals_sum: 35,
    //       goals_against_sum: 38,
    //       xg_mean: 1.44,
    //       xg_against_mean: 1.2,
    //       xga_percent_rank: 25,
    //       xgf_percent_rank: 57.49999999999999,
    //       off_rank: 10,
    //       def_rank: 5,
    //       result: 'WDDLD',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 87,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Brighton and Hove Albion',
    //       team_short: 'Brighton',
    //       team_code: 'BRI',
    //       games: 25,
    //       position: 9.5,
    //       points: 55.6,
    //       pts: 37,
    //       wins: 14.5,
    //       draws: 12,
    //       goalsF: 58.9,
    //       goalsA: 59.3,
    //       goalDiff: -0.4,
    //       champion: 0,
    //       top_4: 0,
    //       relegation: 0,
    //       goals_sum: 38,
    //       goals_against_sum: 38,
    //       xg_mean: 1.344,
    //       xg_against_mean: 1.472,
    //       xga_percent_rank: 60,
    //       xgf_percent_rank: 40,
    //       off_rank: 13,
    //       def_rank: 12,
    //       result: 'WWLLW',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 630,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Brentford',
    //       team_short: 'Brentford',
    //       team_code: 'BRE',
    //       games: 25,
    //       position: 10.6,
    //       points: 53.1,
    //       pts: 34,
    //       wins: 15.6,
    //       draws: 6.3,
    //       goalsF: 64.8,
    //       goalsA: 62.8,
    //       goalDiff: 2,
    //       champion: 0,
    //       top_4: 0,
    //       relegation: 0,
    //       goals_sum: 43,
    //       goals_against_sum: 42,
    //       xg_mean: 1.604,
    //       xg_against_mean: 1.616,
    //       xga_percent_rank: 70,
    //       xgf_percent_rank: 67.5,
    //       off_rank: 8,
    //       def_rank: 14,
    //       result: 'DLWLW',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 636,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Tottenham Hotspur',
    //       team_short: 'Tottenham',
    //       team_code: 'TOT',
    //       games: 25,
    //       position: 11.3,
    //       points: 51,
    //       pts: 30,
    //       wins: 15.4,
    //       draws: 4.8,
    //       goalsF: 74.5,
    //       goalsA: 58.4,
    //       goalDiff: 16,
    //       champion: 0,
    //       top_4: 0,
    //       relegation: 0,
    //       goals_sum: 49,
    //       goals_against_sum: 37,
    //       xg_mean: 1.668,
    //       xg_against_mean: 1.684,
    //       xga_percent_rank: 80,
    //       xgf_percent_rank: 75,
    //       off_rank: 6,
    //       def_rank: 16,
    //       result: 'LLLWW',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 637,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Everton',
    //       team_short: 'Everton',
    //       team_code: 'EVE',
    //       games: 25,
    //       position: 12.6,
    //       points: 48,
    //       pts: 30,
    //       wins: 12.2,
    //       draws: 11.5,
    //       goalsF: 41.3,
    //       goalsA: 45.9,
    //       goalDiff: -4.6,
    //       champion: 0,
    //       top_4: 0,
    //       relegation: 0,
    //       goals_sum: 27,
    //       goals_against_sum: 31,
    //       xg_mean: 1.052,
    //       xg_against_mean: 1.292,
    //       xga_percent_rank: 40,
    //       xgf_percent_rank: 20,
    //       off_rank: 17,
    //       def_rank: 8,
    //       result: 'WWWDW',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 638,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Crystal Palace',
    //       team_short: 'C. Palace',
    //       team_code: 'CRY',
    //       games: 25,
    //       position: 14,
    //       points: 45,
    //       pts: 30,
    //       wins: 11.3,
    //       draws: 11,
    //       goalsF: 43.2,
    //       goalsA: 49,
    //       goalDiff: -5.8,
    //       champion: 0,
    //       top_4: 0,
    //       relegation: 0,
    //       goals_sum: 29,
    //       goals_against_sum: 32,
    //       xg_mean: 1.412,
    //       xg_against_mean: 1.332,
    //       xga_percent_rank: 45,
    //       xgf_percent_rank: 45,
    //       off_rank: 12,
    //       def_rank: 9,
    //       result: 'WWLWL',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 639,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Manchester United',
    //       team_short: 'Man United',
    //       team_code: 'MUN',
    //       games: 25,
    //       position: 14,
    //       points: 44.5,
    //       pts: 29,
    //       wins: 12.3,
    //       draws: 7.6,
    //       goalsF: 43,
    //       goalsA: 53.4,
    //       goalDiff: -10.4,
    //       champion: 0,
    //       top_4: 0,
    //       relegation: 0,
    //       goals_sum: 28,
    //       goals_against_sum: 35,
    //       xg_mean: 1.416,
    //       xg_against_mean: 1.544,
    //       xga_percent_rank: 65,
    //       xgf_percent_rank: 50,
    //       off_rank: 11,
    //       def_rank: 13,
    //       result: 'WLWLL',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 641,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'West Ham United',
    //       team_short: 'West Ham',
    //       team_code: 'WHU',
    //       games: 25,
    //       position: 15.8,
    //       points: 40,
    //       pts: 27,
    //       wins: 10.6,
    //       draws: 8,
    //       goalsF: 43.2,
    //       goalsA: 70.4,
    //       goalDiff: -27.2,
    //       champion: 0,
    //       top_4: 0,
    //       relegation: 0,
    //       goals_sum: 29,
    //       goals_against_sum: 47,
    //       xg_mean: 1.32,
    //       xg_against_mean: 1.716,
    //       xga_percent_rank: 85,
    //       xgf_percent_rank: 35,
    //       off_rank: 14,
    //       def_rank: 17,
    //       result: 'WLDLL',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 650,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Wolverhampton',
    //       team_short: 'Wolves',
    //       team_code: 'WOL',
    //       games: 25,
    //       position: 16.6,
    //       points: 36.2,
    //       pts: 19,
    //       wins: 10.1,
    //       draws: 6,
    //       goalsF: 55.8,
    //       goalsA: 77.9,
    //       goalDiff: -22.1,
    //       champion: 0,
    //       top_4: 0,
    //       relegation: 8,
    //       goals_sum: 35,
    //       goals_against_sum: 54,
    //       xg_mean: 1.072,
    //       xg_against_mean: 1.636,
    //       xga_percent_rank: 75,
    //       xgf_percent_rank: 25,
    //       off_rank: 16,
    //       def_rank: 15,
    //       result: 'LLLWL',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 651,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Ipswich Town',
    //       team_short: 'Ipswich',
    //       team_code: 'IPS',
    //       games: 25,
    //       position: 18.4,
    //       points: 26.3,
    //       pts: 17,
    //       wins: 5.5,
    //       draws: 9.8,
    //       goalsF: 33.9,
    //       goalsA: 76.8,
    //       goalDiff: -42.9,
    //       champion: 0,
    //       top_4: 0,
    //       relegation: 95,
    //       goals_sum: 23,
    //       goals_against_sum: 50,
    //       xg_mean: 0.908,
    //       xg_against_mean: 1.984,
    //       xga_percent_rank: 95,
    //       xgf_percent_rank: 5,
    //       off_rank: 20,
    //       def_rank: 19,
    //       result: 'LLLLD',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 652,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Leicester City',
    //       team_short: 'Leicester',
    //       team_code: 'LEI',
    //       games: 25,
    //       position: 18.5,
    //       points: 25.9,
    //       pts: 17,
    //       wins: 6.4,
    //       draws: 6.8,
    //       goalsF: 37.6,
    //       goalsA: 84.2,
    //       goalDiff: -46.6,
    //       champion: 0,
    //       top_4: 0,
    //       relegation: 97,
    //       goals_sum: 25,
    //       goals_against_sum: 55,
    //       xg_mean: 0.944,
    //       xg_against_mean: 1.924,
    //       xga_percent_rank: 90,
    //       xgf_percent_rank: 10,
    //       off_rank: 19,
    //       def_rank: 18,
    //       result: 'LLWLL',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     },
    //     {
    //       id: 654,
    //       country: 'England',
    //       league_start_year: 2024,
    //       league_code: 'ENG1',
    //       team: 'Southampton',
    //       team_short: 'Southampton',
    //       team_code: 'SOU',
    //       games: 25,
    //       position: 20,
    //       points: 15.7,
    //       pts: 9,
    //       wins: 3.6,
    //       draws: 4.8,
    //       goalsF: 28.5,
    //       goalsA: 89.1,
    //       goalDiff: -60.6,
    //       champion: 0,
    //       top_4: 0,
    //       relegation: 100,
    //       goals_sum: 19,
    //       goals_against_sum: 57,
    //       xg_mean: 0.968,
    //       xg_against_mean: 2.284,
    //       xga_percent_rank: 100,
    //       xgf_percent_rank: 15,
    //       off_rank: 18,
    //       def_rank: 20,
    //       result: 'LLLWL',
    //       upload_date_time: '2025-02-17T14:39:11.000Z'
    //     }
    //   ]

    // console.log("league_table")
    // console.log(league_table)


    const last_Five_Matches: MatchData[] = await prisma.$queryRaw`
    
            SELECT * FROM (
                SELECT 
                    team,
                    team_against,
                    goals,
                    goals_against,
                    league_code,
                    ground,
                    date,
                    league_start_year,
                    ROW_NUMBER() OVER (
                    PARTITION BY team 
                    ORDER BY date DESC
                    ) as row_num
                FROM fenida_fenida.points_long 
                WHERE league_start_year = 2024 AND status = 'completed' AND league_code IN ('ENG1','GRE1','POR1')
                ) ranked_teams
                WHERE row_num <= 5
                ORDER BY team, date ASC;
            
    `;

    // const last_Five_Matches: MatchData[] = [  {
    //     team: 'Aston Villa',
    //     team_against: 'Wolverhampton',
    //     goals: 0,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-01T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Aston Villa',
    //     team_against: 'Ipswich Town',
    //     goals: 1,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'Bournemouth',
    //     team_against: 'Chelsea',
    //     goals: 2,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-14T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'Bournemouth',
    //     team_against: 'Newcastle United',
    //     goals: 4,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-18T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'Bournemouth',
    //     team_against: 'Nottingham Forest',
    //     goals: 5,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-25T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'Bournemouth',
    //     team_against: 'Liverpool',
    //     goals: 0,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-01T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Bournemouth',
    //     team_against: 'Southampton',
    //     goals: 3,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'Brentford',
    //     team_against: 'Manchester City',
    //     goals: 2,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-14T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'Brentford',
    //     team_against: 'Liverpool',
    //     goals: 0,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-18T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'Brentford',
    //     team_against: 'Crystal Palace',
    //     goals: 2,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-26T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'Brentford',
    //     team_against: 'Tottenham Hotspur',
    //     goals: 0,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-02T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Brentford',
    //     team_against: 'West Ham United',
    //     goals: 1,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'Brighton and Hove Albion',
    //     team_against: 'Ipswich Town',
    //     goals: 2,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-16T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'Brighton and Hove Albion',
    //     team_against: 'Manchester United',
    //     goals: 3,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-19T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'Brighton and Hove Albion',
    //     team_against: 'Everton',
    //     goals: 0,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-25T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'Brighton and Hove Albion',
    //     team_against: 'Nottingham Forest',
    //     goals: 0,
    //     goals_against: 7,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-01T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Brighton and Hove Albion',
    //     team_against: 'Chelsea',
    //     goals: 3,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-14T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'Chelsea',
    //     team_against: 'Bournemouth',
    //     goals: 2,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-14T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'Chelsea',
    //     team_against: 'Wolverhampton',
    //     goals: 3,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-20T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'Chelsea',
    //     team_against: 'Manchester City',
    //     goals: 1,
    //     goals_against: 3,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-25T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'Chelsea',
    //     team_against: 'West Ham United',
    //     goals: 2,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-03T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Chelsea',
    //     team_against: 'Brighton and Hove Albion',
    //     goals: 0,
    //     goals_against: 3,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-14T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'Crystal Palace',
    //     team_against: 'Leicester City',
    //     goals: 2,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'Crystal Palace',
    //     team_against: 'West Ham United',
    //     goals: 2,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-18T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'Crystal Palace',
    //     team_against: 'Brentford',
    //     goals: 1,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-26T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'Crystal Palace',
    //     team_against: 'Manchester United',
    //     goals: 2,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-02T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Crystal Palace',
    //     team_against: 'Everton',
    //     goals: 1,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'Everton',
    //     team_against: 'Tottenham Hotspur',
    //     goals: 3,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-19T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'Everton',
    //     team_against: 'Brighton and Hove Albion',
    //     goals: 1,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-25T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'Everton',
    //     team_against: 'Leicester City',
    //     goals: 4,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-01T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'Everton',
    //     team_against: 'Liverpool',
    //     goals: 2,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-12T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Everton',
    //     team_against: 'Crystal Palace',
    //     goals: 2,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'Fulham',
    //     team_against: 'West Ham United',
    //     goals: 2,
    //     goals_against: 3,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-14T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'Fulham',
    //     team_against: 'Leicester City',
    //     goals: 2,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-18T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'Fulham',
    //     team_against: 'Manchester United',
    //     goals: 0,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-26T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'Fulham',
    //     team_against: 'Newcastle United',
    //     goals: 2,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-01T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Fulham',
    //     team_against: 'Nottingham Forest',
    //     goals: 2,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'Ipswich Town',
    //     team_against: 'Brighton and Hove Albion',
    //     goals: 0,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-16T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'Ipswich Town',
    //     team_against: 'Manchester City',
    //     goals: 0,
    //     goals_against: 6,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-19T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'Ipswich Town',
    //     team_against: 'Liverpool',
    //     goals: 1,
    //     goals_against: 4,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-25T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'Ipswich Town',
    //     team_against: 'Southampton',
    //     goals: 1,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-01T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Ipswich Town',
    //     team_against: 'Aston Villa',
    //     goals: 1,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'Leicester City',
    //     team_against: 'Crystal Palace',
    //     goals: 0,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'Leicester City',
    //     team_against: 'Fulham',
    //     goals: 0,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-18T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'Leicester City',
    //     team_against: 'Tottenham Hotspur',
    //     goals: 2,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-26T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'Leicester City',
    //     team_against: 'Everton',
    //     goals: 0,
    //     goals_against: 4,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-01T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Leicester City',
    //     team_against: 'Arsenal',
    //     goals: 0,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'Liverpool',
    //     team_against: 'Brentford',
    //     goals: 2,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-18T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'Liverpool',
    //     team_against: 'Ipswich Town',
    //     goals: 4,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-25T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'Liverpool',
    //     team_against: 'Bournemouth',
    //     goals: 2,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-01T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'Liverpool',
    //     team_against: 'Everton',
    //     goals: 2,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-12T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Liverpool',
    //     team_against: 'Wolverhampton',
    //     goals: 2,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-16T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'Manchester City',
    //     team_against: 'Brentford',
    //     goals: 2,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-14T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'Manchester City',
    //     team_against: 'Ipswich Town',
    //     goals: 6,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-19T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'Manchester City',
    //     team_against: 'Chelsea',
    //     goals: 3,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-25T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'Manchester City',
    //     team_against: 'Arsenal',
    //     goals: 1,
    //     goals_against: 5,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-02T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Manchester City',
    //     team_against: 'Newcastle United',
    //     goals: 4,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'Manchester United',
    //     team_against: 'Southampton',
    //     goals: 3,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-16T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'Manchester United',
    //     team_against: 'Brighton and Hove Albion',
    //     goals: 1,
    //     goals_against: 3,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-19T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'Manchester United',
    //     team_against: 'Fulham',
    //     goals: 1,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-26T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'Manchester United',
    //     team_against: 'Crystal Palace',
    //     goals: 0,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-02T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Manchester United',
    //     team_against: 'Tottenham Hotspur',
    //     goals: 0,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-16T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'Newcastle United',
    //     team_against: 'Wolverhampton',
    //     goals: 3,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'Newcastle United',
    //     team_against: 'Bournemouth',
    //     goals: 1,
    //     goals_against: 4,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-18T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'Newcastle United',
    //     team_against: 'Southampton',
    //     goals: 3,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-25T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'Newcastle United',
    //     team_against: 'Fulham',
    //     goals: 1,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-01T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Newcastle United',
    //     team_against: 'Manchester City',
    //     goals: 0,
    //     goals_against: 4,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'Nottingham Forest',
    //     team_against: 'Liverpool',
    //     goals: 1,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-14T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'Nottingham Forest',
    //     team_against: 'Southampton',
    //     goals: 3,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-19T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'Nottingham Forest',
    //     team_against: 'Bournemouth',
    //     goals: 0,
    //     goals_against: 5,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-25T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'Nottingham Forest',
    //     team_against: 'Brighton and Hove Albion',
    //     goals: 7,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-01T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Nottingham Forest',
    //     team_against: 'Fulham',
    //     goals: 1,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'Southampton',
    //     team_against: 'Manchester United',
    //     goals: 1,
    //     goals_against: 3,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-16T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'Southampton',
    //     team_against: 'Nottingham Forest',
    //     goals: 2,
    //     goals_against: 3,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-19T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'Southampton',
    //     team_against: 'Newcastle United',
    //     goals: 1,
    //     goals_against: 3,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-25T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'Southampton',
    //     team_against: 'Ipswich Town',
    //     goals: 2,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-01T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Southampton',
    //     team_against: 'Bournemouth',
    //     goals: 1,
    //     goals_against: 3,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'Tottenham Hotspur',
    //     team_against: 'Arsenal',
    //     goals: 1,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'Tottenham Hotspur',
    //     team_against: 'Everton',
    //     goals: 2,
    //     goals_against: 3,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-19T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'Tottenham Hotspur',
    //     team_against: 'Leicester City',
    //     goals: 1,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-26T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'Tottenham Hotspur',
    //     team_against: 'Brentford',
    //     goals: 2,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-02T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Tottenham Hotspur',
    //     team_against: 'Manchester United',
    //     goals: 1,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-16T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'West Ham United',
    //     team_against: 'Fulham',
    //     goals: 3,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-14T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'West Ham United',
    //     team_against: 'Crystal Palace',
    //     goals: 0,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-18T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'West Ham United',
    //     team_against: 'Aston Villa',
    //     goals: 1,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-26T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'West Ham United',
    //     team_against: 'Chelsea',
    //     goals: 1,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-03T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'West Ham United',
    //     team_against: 'Brentford',
    //     goals: 0,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   },
    //   {
    //     team: 'Wolverhampton',
    //     team_against: 'Newcastle United',
    //     goals: 0,
    //     goals_against: 3,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-15T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 5
    //   },
    //   {
    //     team: 'Wolverhampton',
    //     team_against: 'Chelsea',
    //     goals: 1,
    //     goals_against: 3,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-01-20T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 4
    //   },
    //   {
    //     team: 'Wolverhampton',
    //     team_against: 'Arsenal',
    //     goals: 0,
    //     goals_against: 1,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-01-25T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 3
    //   },
    //   {
    //     team: 'Wolverhampton',
    //     team_against: 'Aston Villa',
    //     goals: 2,
    //     goals_against: 0,
    //     league_code: 'ENG1',
    //     ground: 'home',
    //     date: '2025-02-01T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 2
    //   },
    //   {
    //     team: 'Wolverhampton',
    //     team_against: 'Liverpool',
    //     goals: 1,
    //     goals_against: 2,
    //     league_code: 'ENG1',
    //     ground: 'away',
    //     date: '2025-02-16T00:00:00.000Z',
    //     league_start_year: 2024,
    //     row_num: 1
    //   }
    // ] 

    // console.log("last_Five_Matches")
    // console.log(last_Five_Matches)


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


    function formatRank(off_rank: number) {
        const off = off_rank.toString();

        if (off === "1") {
            return "1st"
        }

        if (off === "2") {
            return "2d"
        }

        if (off === "3") {
            return "3rd"
        }

        return (off.concat("th"))

    }


    function formatGoalDiff(v: number | null | undefined) {

        if (v === undefined || v === null) {
            // GD = 0; // or any default value you prefer
            return (<>-</>)
        } else if (Math.round(v) > 0) {

            return (<>+{v}</>)
            // GD = Math.round(goalDiff);
        } else {
            return (<>{v}</>)
        }


    }

    function showFixtureResult(team: string, team_against: string,
        ground: string, goals: number, goals_against: number, date: string) {

        if (ground === "home") {

            return (
                <>
                    <div className="flex flex-col space-y-2 border p-2 shadow-sm rounded-sm">
                        <div className="text-sm text-gray-500 text-center">
                            {formatDate(date)}
                        </div>
                        <div className="flex items-center justify-between gap-3">
                            <span className="">{team}</span>
                            <span className=" font-semibold">{goals}</span>
                            vs
                            <span className=" font-semibold">{goals_against}</span>
                            <span className="">{team_against}</span>
                        </div>
                    </div>

                    {/* <div className="flex flex-col space-y-2">
                        <div className="text-sm text-gray-500">
                            16-Feb-2024
                        </div>
                        <div className="flex items-center justify-between gap-3">
                            <span className="text-gray-700">Liverpool</span>
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-green-600">2</span>
                                <span className="text-gray-400">-</span>
                                <span className="font-semibold text-red-600">0</span>
                            </div>
                            <span className="text-gray-700">Nottingham Forest</span>
                        </div>
                    </div> */}
                </>
            )

        } else if (ground === "away") {

            return (
                <div className="flex flex-col space-y-2 border p-2 shadow-sm rounded-sm">
                    <div className="text-sm text-gray-500 text-center">
                        {formatDate(date)}
                    </div>
                    <div>
                        <span className="mr-3">{team_against}</span>
                        <span className="mr-3 font-semibold">{goals_against}</span>
                        vs
                        <span className=" ml-3 font-semibold">{goals}</span>
                        <span className="ml-3">{team}</span>
                    </div>
                </div>
            )
        } else {
            return ("")
        }

    }


    return (
        <>


            <div className="shadow-none rounded-lg text-xs">
                <div>
                    <div className="flex justify-between bg-background rounded-t-lg  w-full p-4">
                        <div className="p-2 text-sm font-semibold">League Table</div>
                        {/* <FetchLeague /> */}
                    </div>

                    <div className="w-full border-t h-full pb-6">
                        <Table id="eng1-table" className="table-auto w-full bg-background rounded">
                            <TableHeader>
                                <TableRow className=' text-xs my-8'>
                                    <TableHead>
                                        <div className="text-gray-400 my-2">PTS</div>
                                    </TableHead>
                                    <TableHead>
                                        <div className="text-gray-400"></div>
                                    </TableHead>
                                    <TableHead>
                                        <div className=" text-gray-400 text-left">TEAM</div>
                                    </TableHead>
                                    <TableHead>
                                        <div className=""></div>
                                    </TableHead>

                                    <TableHead>
                                        <div className=" text-gray-400 mr-2">OFF</div>
                                    </TableHead>
                                    <TableHead>
                                        <div className=" text-gray-400 mr-2">DEF</div>
                                    </TableHead>
                                    <TableHead>
                                        <div className=""></div>
                                    </TableHead>
                                    <TableHead>
                                        <div className="text-gray-400">GD</div>
                                    </TableHead>
                                    <TableHead>
                                        <div className="text-gray-400 text-center">POINTS</div>
                                    </TableHead>
                                    <TableHead>
                                        <div className=""></div>
                                    </TableHead>

                                    <TableHead>
                                        <div className="text-gray-400 text-center">FORM</div>
                                    </TableHead>
                                    <TableHead>
                                        <div className=""></div>
                                    </TableHead>
                                    <TableHead>
                                        <div className="text-gray-400 mr-2">RELEGATION</div>
                                    </TableHead>
                                    <TableHead>
                                        <div className="text-gray-400 mr-2">UCL QUALI</div>
                                    </TableHead>
                                    <TableHead>
                                        <div className="text-gray-400 mr-2">LEAGUE WIN</div>
                                    </TableHead>

                                </TableRow>
                            </TableHeader>
                            <TableBody>

                                {league_table && league_table?.map((row: standings, index: number) => (


                                    <TableRow key={index} className="border-b rounded-3xl">
                                        <TableCell >
                                            <div className="text-center bg-gray-100 rounded w-10 p-1 m-4 font-semibold dark:bg-muted">
                                                {(row?.pts)}
                                            </div>
                                        </TableCell >
                                        <TableCell >
                                            <div className="">{index + 1}.</div>
                                        </TableCell >
                                        <TableCell >
                                            <div className="flex gap-2 items-center">
                                                {/* <img src="images/manchester city.png" alt="" width="12%" height="10%" /> */}
                                                <Image
                                                    // src="/images/teams/{(row?.country)}.concat{(row?.team)}.png"
                                                    src={"/images/teams/" + row?.country + " - " + row?.team + ".png"}

                                                    width={25}
                                                    height={25}
                                                    className="object-contain"
                                                    alt="Picture of the author"
                                                />
                                                <div className='text-sm cursor-pointer'>{(row?.team)}</div>
                                            </div>
                                        </TableCell >
                                        <TableCell >
                                            <div style={{ height: "1.5rem", width: "0.1rem" }} className=" mx-6 bg-gray-200 dark:bg-muted"></div>
                                        </TableCell >
                                        <TableCell >
                                            {/* <div className="w-12 p-1 mx-1 border border-gray-200 rounded text-center font-semibold dark:border-muted">{(row?.off_rank)}</div> */}
                                            <div className="w-12 p-1 mx-1 border border-gray-200 rounded text-center font-semibold dark:border-muted">
                                                {row.off_rank === null ? "-" : formatRank(row.off_rank).toString()}
                                            </div>
                                        </TableCell >
                                        <TableCell >
                                            {/* <div className=" w-12 p-1 mx-1 border border-gray-200 rounded text-center font-semibold dark:border-muted">{(row?.def_rank)}</div> */}
                                            <div className="w-12 p-1 mx-1 border border-gray-200 rounded text-center font-semibold dark:border-muted">
                                                {row.def_rank === null ? "-" : formatRank(row.def_rank)}
                                            </div>
                                        </TableCell >
                                        <TableCell >
                                            <div style={{ height: "1.5rem", width: "0.1rem" }} className=" mx-6 bg-gray-200 dark:bg-muted"></div>
                                        </TableCell >
                                        <TableCell >
                                            <div className="w-12 p-1 mx-1 bg-gray-100 text-gray-400 rounded text-center font-semibold dark:bg-muted">
                                                {formatGoalDiff(row?.goalDiff)}
                                                {/* {
                                                            (row?.goalDiff === undefined || row?.goalDiff === null) ? "-" : ((Math.round(row?.goalDiff) > 0) && +{row?.goalDiff})
                                                            } else if(Math.round(v) > 0) {
                                                    
                                                                return (<>+{v}</>)
                                                                // GD = Math.round(goalDiff);
                                                            } else {
                                                                return (<>{v}</>)
                                                            }
                                                } */}
                                            </div>
                                            {/* <div className={`w-12 h-8  flex items-center ml-2 justify-center rounded  text-center ` + (Number(row.goalDiff) > 0 ? '+' : '-')}> 
                                            {(row?.goalDiff)}%</div> */}

                                        </TableCell >
                                        <TableCell >
                                            <div className="w-12 p-1 mx-1 bg-gray-100 text-gray-400 rounded text-center font-semibold dark:bg-muted">{Math.round(row?.points as number)}</div>
                                        </TableCell >
                                        <TableCell >
                                            <div style={{ height: "1.5rem", width: "0.1rem" }} className=" bg-gray-200 dark:bg-muted"></div>
                                        </TableCell >
                                        <TableCell className='my-auto'>
                                            <div className='flex justify-center items-center gap-1'>


                                                {(row.result as string)?.split('').map((char, index) => (
                                                    <TooltipProvider delayDuration={1} key={index}>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <div key={index}

                                                                    className={clsx(` p-1 rounded flex justify-center items-center w-7 h-8 font-bold`, {
                                                                        'bg-green-100': char === 'W',
                                                                        'text-green-700': char === 'W',
                                                                        'bg-red-100': char === 'L',
                                                                        'text-red-700': char === 'L',
                                                                        'bg-orange-100': char === 'D',
                                                                        'text-orange-700': char === 'D',

                                                                    })}>

                                                                    {char}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent className="p-3 bg-background text-black dark:text-gray-400 rounded-lg text-base">
                                                                {/* <div className="flex flex-col space-y-2">
                                                                    <div className="text-sm text-gray-500">
                                                                        16-Feb-2024
                                                                    </div>
                                                                    <div className="flex items-center justify-between gap-3">
                                                                        <span className="text-gray-700">Liverpool</span>
                                                                        <div className="flex items-center gap-2">
                                                                            <span className="font-semibold">2</span>
                                                                            <span className="text-gray-400">-</span>
                                                                            <span className="font-semibold">0</span>
                                                                        </div>
                                                                        <span className="text-gray-700">Nottingham Forest</span>
                                                                    </div>
                                                                </div> */}
                                                                {
                                                                    // last_Five_Matches.filter((match:any) => match.team === row.team)[index].team_against === "home" ?


                                                                    // last_Five_Matches.filter((match:any) => (match.team === row.team && match.league_code === row.league_code))[index]
                                                                    // last_Five_Matches.filter((match:any) => (match.team === row.team && match.league_code === row.league_code))[index]

                                                                    showFixtureResult(
                                                                        // last_Five_Matches.filter((match: any) => (match.league_code === row.league_code && match.team === row.team))[index].country,
                                                                        // last_Five_Matches.filter((match: any) => match.team === row.team)[index].country,
                                                                        // (last_Five_Matches as unknown).forEach((match: { team: string; team_against: any; goals: any; goals_against: any; }) => {
                                                                        // last_Five_Matches.length > 0 && (last_Five_Matches).filter((match: any) => match.team === row.team)[index].team,
                                                                        last_Five_Matches.filter((match) => match.team === row.team)[index]?.team,
                                                                        last_Five_Matches.filter((match) => match.team === row.team)[index]?.team_against,
                                                                        last_Five_Matches.filter((match) => match.team === row.team)[index]?.ground,
                                                                        last_Five_Matches.filter((match) => match.team === row.team)[index]?.goals,
                                                                        last_Five_Matches.filter((match) => match.team === row.team)[index]?.goals_against,
                                                                        last_Five_Matches.filter((match) => match.team === row.team)[index]?.date
                                                                    )
                                                                }
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>

                                                ))}

                                            </div>
                                        </TableCell >
                                        {/* <TableCell className='flex justify-center items-center mt-4'>
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <div className='flex justify-center items-center gap-1 '>


                                                            {(row.result).split('').map((char, index) => (
                                                                <div key={index}

                                                                    className={clsx(` p-1 rounded flex justify-center items-center w-7 h-8 font-bold`, {
                                                                        'bg-green-100': char === 'W',
                                                                        'text-green-700': char === 'W',
                                                                        'bg-red-100': char === 'L',
                                                                        'text-red-700': char === 'L',
                                                                        'bg-orange-100': char === 'D',
                                                                        'text-orange-700': char === 'D',

                                                                    })}>

                                                                    {char}
                                                                </div>
                                                            ))}

                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>Add to library</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </TableCell > */}
                                        <TableCell >
                                            <div style={{ height: "1.5rem", width: "0.1rem" }} className=" mx-6 bg-gray-200 dark:bg-muted"></div>
                                        </TableCell >
                                        <TableCell >
                                            <div className="flex flex-col gap-1 justify-center items-center">
                                                <div className="flex justify-center items-center">{row?.relegation + "%"}</div>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <div className="flex  relative w-20">
                                                                <div style={{ width: '100%' }} className="h-1 bg-gray-200 rounded dark:bg-muted"></div>
                                                                <div style={{ width: row?.relegation + "%", backgroundColor: 'rgb(44,86,235)' }} className="h-1  rounded absolute"></div>

                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Add to library</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>

                                            </div>
                                        </TableCell >
                                        <TableCell >
                                            <div className="flex flex-col gap-1 justify-center items-center">
                                                <div className="flex justify-center items-center">{row?.top_4 + "%"}</div>
                                                <div className="flex  relative w-20">
                                                    <div style={{ width: '100%' }} className="h-1 bg-gray-200 rounded dark:bg-muted"></div>
                                                    <div style={{ width: row?.top_4 + "%", backgroundColor: 'rgb(44,86,235)' }} className="h-1 rounded absolute"></div>

                                                </div>
                                            </div>

                                        </TableCell >
                                        <TableCell >
                                            <div className="flex flex-col gap-1 justify-center items-center">
                                                <div className="flex justify-center items-center">{row?.champion + "%"}</div>
                                                <div className="flex  relative w-20">
                                                    <div style={{ width: '100%' }} className="h-1 bg-gray-200 rounded dark:bg-muted"></div>
                                                    <div style={{ width: row?.champion + "%", backgroundColor: 'rgb(44,86,235)' }} className="h-1  rounded absolute"></div>

                                                </div>
                                            </div>

                                        </TableCell >

                                    </TableRow>
                                ))}



                            </TableBody>
                        </Table>
                    </div>


                </div>
            </div>



        </>
    )
}

