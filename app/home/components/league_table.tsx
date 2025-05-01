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
        FROM points_long 
        WHERE league_start_year = 2024 
        AND status = 'completed' 
        AND league_code NOT IN ('UEL', 'UCL')
    ) ranked_teams
    WHERE row_num <= 5
    ORDER BY team, date DESC
`;
  


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
                                                <div className='text-sm'>{(row?.team)}</div>
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

