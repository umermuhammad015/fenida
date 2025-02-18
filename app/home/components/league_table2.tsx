// "use client"

// import React, { useEffect, useState } from 'react'
// import { clsx } from 'clsx';
// import { useSearchParams } from 'next/navigation'
// // import { motion } from 'framer-motion'
// import Image from 'next/image'
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"
// // import UpcomingSkeleton from './upcomingSkeleton'
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
// import fetchLeagueTable from './fetchLeagueTable';
// import LeagueSkeleton from './LeagueSkeleton';

// // type LeagueTableTypes = {
// //     id: number,
// //     country: string
// //     league_start_year: number,
// //     league_code: string,
// //     team: string,
// //     team_short: string,
// //     team_code: string,
// //     games: number,
// //     position: number,
// //     points: number,
// //     pts: number,
// //     wins: number,
// //     draws: number,
// //     goalsF: number,
// //     goalsA: number,
// //     goalDiff: number,
// //     champion: number,
// //     top_4: number,
// //     relegation: number,
// //     goals_sum: number,
// //     goals_against_sum: number,
// //     xg_mean: number,
// //     xg_against_mean: number,
// //     xga_percent_rank: number,
// //     xgf_percent_rank: number,
// //     off_rank: number,
// //     def_rank: number,
// //     result: string,
// //     upload_date_time: Date
// // }


// type LeagueTableTypesWithNulls = {
//     id: number,
//     country: string | null,
//     league_start_year: bigint | null,
//     league_code: string | null,
//     team: string | null,
//     team_short: string | null,
//     team_code: string | null,
//     games: bigint | null,
//     position: bigint | null,
//     points: number | null,
//     pts: bigint | null,
//     wins: bigint | null,
//     draws: bigint | null,
//     goalsF: bigint | null,
//     goalsA: bigint | null,
//     goalDiff: number | null,
//     champion: bigint | null,
//     top_4: bigint | null,
//     relegation: bigint | null,
//     goals_sum: bigint | null,
//     goals_against_sum: bigint | null,
//     xg_mean: bigint | null,
//     xg_against_mean: bigint | null,
//     xga_percent_rank: bigint | null,
//     xgf_percent_rank: bigint | null,
//     off_rank: number | null,
//     def_rank: number | null,
//     result: string | null,
//     upload_date_time: string | null
// }

// // type LeagueTableTypesWithNulls = {
// //     id: number | null,
// //     country: string | null,
// //     league_start_year: number | null,
// //     league_code: string | null,
// //     team: string | null,
// //     team_short: string | null,
// //     team_code: string | null,
// //     games: number | null,
// //     position: number | null,
// //     points: number | null,
// //     pts: number | null,
// //     wins: number | null,
// //     draws: number | null,
// //     goalsF: number | null,
// //     goalsA: number | null,
// //     goalDiff: number | null,
// //     champion: number | null,
// //     top_4: number | null,
// //     relegation: number | null,
// //     goals_sum: number | null,
// //     goals_against_sum: number | null,
// //     xg_mean: number | null,
// //     xg_against_mean: number | null,
// //     xga_percent_rank: number | null,
// //     xgf_percent_rank: number | null,
// //     off_rank: number | null,
// //     def_rank: number | null,
// //     result: string | null,
// //     upload_date_time: Date | null
// // }



// export default function LeagueTable2() {

//     const searchParams = useSearchParams()

//     const [isLoading, setIsLoading] = useState(true);

//     const [league_table, setLeagueTable] = useState<LeagueTableTypesWithNulls[]>([]);
//     // const [league_table, setLeagueTable] = useState<any>([]);
//     // const [upcoming_matches_all, setUpcomingMatchesAll] = useState<any>([])

//     const user_league_code = searchParams.get('league') || "ENG1"
//     const season = searchParams.get('season') || "2024"
//     // const user_team = searchParams.get('team') || "Nottingham Forest"

//     function formatRank(off_rank: number) {
//         const off = off_rank.toString();

//         if (off === "1") {
//             return "1st"
//         }

//         if (off === "2") {
//             return "2nd"
//         }

//         if (off === "3") {
//             return "3rd"
//         }

//         return (off.concat("th"))

//     }


//     function formatGoalDiff(v: number | null | undefined) {

//         if (v === undefined || v === null) {
//             // GD = 0; // or any default value you prefer
//             return (<>-</>)
//         } else if (Math.round(v) > 0) {

//             return (<>+{v}</>)
//             // GD = Math.round(goalDiff);
//         } else {
//             return (<>{v}</>)
//         }


//     }


//     useEffect(() => {

//         setIsLoading(true)

//         const fetchData = async () => {
//             try {
//                 const lt = await fetchLeagueTable(user_league_code, season);

//                 console.log("um")
//                 console.log(lt)

//                 setLeagueTable(lt);
//                 setIsLoading(false)

//                 console.log("um")
//                 console.log(lt)
//             } catch (error) {
//                 console.error('Error fetching completed matches data:', error);
//             }
//         };

//         fetchData();

//     }, [user_league_code, season]);








//     if (isLoading) {
//         return (
//             <>
//                 <LeagueSkeleton />
//             </>)
//     } else {
//         return (
//             <>


//                 <div className=" shadow-none rounded-lg text-xs">
//                     <div className="">
//                         <div className="flex justify-between bg-background rounded-t-lg  w-full p-4  ">
//                             <div className="p-2 text-sm font-semibold">League Table2</div>
//                             {/* <FetchLeague /> */}
//                         </div>

//                         <div className="w-full  border-t h-full pb-6">
//                             <Table id="eng1-table" className="table-auto w-full bg-background rounded">
//                                 <TableHeader>
//                                     <TableRow className=' text-xs my-8'>
//                                         <TableHead>
//                                             <div className="text-gray-400 my-2">PTS</div>
//                                         </TableHead>
//                                         <TableHead>
//                                             <div className="text-gray-400"></div>
//                                         </TableHead>
//                                         <TableHead>
//                                             <div className=" text-gray-400 text-left">TEAM</div>
//                                         </TableHead>
//                                         <TableHead>
//                                             <div className=""></div>
//                                         </TableHead>

//                                         <TableHead>
//                                             <div className=" text-gray-400 mr-2">OFF</div>
//                                         </TableHead>
//                                         <TableHead>
//                                             <div className=" text-gray-400 mr-2">DEF</div>
//                                         </TableHead>
//                                         <TableHead>
//                                             <div className=""></div>
//                                         </TableHead>
//                                         <TableHead>
//                                             <div className="text-gray-400">GD</div>
//                                         </TableHead>
//                                         <TableHead>
//                                             <div className="text-gray-400 text-center">POINTS</div>
//                                         </TableHead>
//                                         <TableHead>
//                                             <div className=""></div>
//                                         </TableHead>

//                                         <TableHead>
//                                             <div className="text-gray-400 text-center">FORM</div>
//                                         </TableHead>
//                                         <TableHead>
//                                             <div className=""></div>
//                                         </TableHead>
//                                         <TableHead>
//                                             <div className="text-gray-400 mr-2">RELEGATION</div>
//                                         </TableHead>
//                                         <TableHead>
//                                             <div className="text-gray-400 mr-2">UCL QUALI</div>
//                                         </TableHead>
//                                         <TableHead>
//                                             <div className="text-gray-400 mr-2">LEAGUE WIN</div>
//                                         </TableHead>

//                                     </TableRow>
//                                 </TableHeader>
//                                 <TableBody>

//                                     {league_table && league_table?.map((row: LeagueTableTypesWithNulls, index: number) => (


//                                         <TableRow key={index} className="border-b rounded-3xl">
//                                             <TableCell >
//                                                 <div className="text-center bg-gray-100 rounded w-10 p-1 m-4 font-semibold dark:bg-muted">
//                                                     {(row?.pts)}
//                                                 </div>
//                                             </TableCell >
//                                             <TableCell >
//                                                 <div className="">{index + 1}.</div>
//                                             </TableCell >
//                                             <TableCell >
//                                                 <div className="flex gap-2 items-center">
//                                                     {/* <img src="images/manchester city.png" alt="" width="12%" height="10%" /> */}
//                                                     <Image
//                                                         // src="/images/teams/{(row?.country)}.concat{(row?.team)}.png"
//                                                         src={"/images/teams/" + row?.country + " - " + row?.team + ".png"}

//                                                         width={25}
//                                                         height={25}
//                                                         className="object-contain"
//                                                         alt="Picture of the author"
//                                                     />
//                                                     <div className='text-sm'>{(row?.team)}</div>
//                                                 </div>
//                                             </TableCell >
//                                             <TableCell >
//                                                 <div style={{ height: "1.5rem", width: "0.1rem" }} className=" mx-6 bg-gray-200 dark:bg-muted"></div>
//                                             </TableCell >
//                                             <TableCell >
//                                                 {/* <div className="w-12 p-1 mx-1 border border-gray-200 rounded text-center font-semibold dark:border-muted">{(row?.off_rank)}</div> */}
//                                                 <div className="w-12 p-1 mx-1 border border-gray-200 rounded text-center font-semibold dark:border-muted">
//                                                     {row.off_rank === null ? "-" : formatRank(row.off_rank).toString()}
//                                                 </div>
//                                             </TableCell >
//                                             <TableCell >
//                                                 {/* <div className=" w-12 p-1 mx-1 border border-gray-200 rounded text-center font-semibold dark:border-muted">{(row?.def_rank)}</div> */}
//                                                 <div className="w-12 p-1 mx-1 border border-gray-200 rounded text-center font-semibold dark:border-muted">
//                                                     {row.def_rank === null ? "-" : formatRank(row.def_rank)}
//                                                 </div>
//                                             </TableCell >
//                                             <TableCell >
//                                                 <div style={{ height: "1.5rem", width: "0.1rem" }} className=" mx-6 bg-gray-200 dark:bg-muted"></div>
//                                             </TableCell >
//                                             <TableCell >
//                                                 <div className="w-12 p-1 mx-1 bg-gray-100 text-gray-400 rounded text-center font-semibold dark:bg-muted">
//                                                     {formatGoalDiff(row?.goalDiff)}

//                                                 </div>
//                                                 {/* <div className={`w-12 h-8  flex items-center ml-2 justify-center rounded  text-center ` + (Number(row.goalDiff) > 0 ? '+' : '-')}> 
//                                             {(row?.goalDiff)}%</div> */}

//                                             </TableCell >
//                                             <TableCell >
//                                                 <div className="w-12 p-1 mx-1 bg-gray-100 text-gray-400 rounded text-center font-semibold dark:bg-muted">{Math.round(row?.points as number)}</div>
//                                             </TableCell >
//                                             <TableCell >
//                                                 <div style={{ height: "1.5rem", width: "0.1rem" }} className=" bg-gray-200 dark:bg-muted"></div>
//                                             </TableCell >
//                                             <TableCell className='my-auto'>
//                                                 <div className='flex justify-center items-center gap-1'>


//                                                     {(row.result)?.split('').map((char, index) => (
//                                                         <TooltipProvider delayDuration={1} key={index}>
//                                                             <Tooltip>
//                                                                 <TooltipTrigger asChild>
//                                                                     <div key={index}

//                                                                         className={clsx(` p-1 rounded flex justify-center items-center w-7 h-8 font-bold`, {
//                                                                             'bg-green-100': char === 'W',
//                                                                             'text-green-700': char === 'W',
//                                                                             'bg-red-100': char === 'L',
//                                                                             'text-red-700': char === 'L',
//                                                                             'bg-orange-100': char === 'D',
//                                                                             'text-orange-700': char === 'D',

//                                                                         })}>

//                                                                         {char}
//                                                                     </div>
//                                                                 </TooltipTrigger>
//                                                                 <TooltipContent className="p-3 bg-background text-black dark:text-gray-400 rounded-lg text-base">

//                                                                     {/* {

//                                                                         showFixtureResult(
//                                                                             last_Five_Matches.filter((match) => match.team === row.team)[index].team,
//                                                                             last_Five_Matches.filter((match) => match.team === row.team)[index].team_against,
//                                                                             last_Five_Matches.filter((match) => match.team === row.team)[index].ground,
//                                                                             last_Five_Matches.filter((match) => match.team === row.team)[index].goals,
//                                                                             last_Five_Matches.filter((match) => match.team === row.team)[index].goals_against,
//                                                                             last_Five_Matches.filter((match) => match.team === row.team)[index].date
//                                                                         )
//                                                                     } */}
//                                                                 </TooltipContent>
//                                                             </Tooltip>
//                                                         </TooltipProvider>

//                                                     ))}

//                                                 </div>
//                                             </TableCell >
//                                             {/* <TableCell className='flex justify-center items-center mt-4'>
//                                             <TooltipProvider>
//                                                 <Tooltip>
//                                                     <TooltipTrigger asChild>
//                                                         <div className='flex justify-center items-center gap-1 '>


//                                                             {(row.result).split('').map((char, index) => (
//                                                                 <div key={index}

//                                                                     className={clsx(` p-1 rounded flex justify-center items-center w-7 h-8 font-bold`, {
//                                                                         'bg-green-100': char === 'W',
//                                                                         'text-green-700': char === 'W',
//                                                                         'bg-red-100': char === 'L',
//                                                                         'text-red-700': char === 'L',
//                                                                         'bg-orange-100': char === 'D',
//                                                                         'text-orange-700': char === 'D',

//                                                                     })}>

//                                                                     {char}
//                                                                 </div>
//                                                             ))}

//                                                         </div>
//                                                     </TooltipTrigger>
//                                                     <TooltipContent>
//                                                         <p>Add to library</p>
//                                                     </TooltipContent>
//                                                 </Tooltip>
//                                             </TooltipProvider>
//                                         </TableCell > */}
//                                             <TableCell >
//                                                 <div style={{ height: "1.5rem", width: "0.1rem" }} className=" mx-6 bg-gray-200 dark:bg-muted"></div>
//                                             </TableCell >
//                                             <TableCell >
//                                                 <div className="flex flex-col gap-1 justify-center items-center">
//                                                     <div className="flex justify-center items-center">{row?.relegation + "%"}</div>
//                                                     <TooltipProvider>
//                                                         <Tooltip>
//                                                             <TooltipTrigger asChild>
//                                                                 <div className="flex  relative w-20">
//                                                                     <div style={{ width: '100%' }} className="h-1 bg-gray-200 rounded dark:bg-muted"></div>
//                                                                     <div style={{ width: row?.relegation + "%", backgroundColor: 'rgb(44,86,235)' }} className="h-1  rounded absolute"></div>

//                                                                 </div>
//                                                             </TooltipTrigger>
//                                                             <TooltipContent>
//                                                                 <p>Add to library</p>
//                                                             </TooltipContent>
//                                                         </Tooltip>
//                                                     </TooltipProvider>

//                                                 </div>
//                                             </TableCell >
//                                             <TableCell >
//                                                 <div className="flex flex-col gap-1 justify-center items-center">
//                                                     <div className="flex justify-center items-center">{row?.top_4 + "%"}</div>
//                                                     <div className="flex  relative w-20">
//                                                         <div style={{ width: '100%' }} className="h-1 bg-gray-200 rounded dark:bg-muted"></div>
//                                                         <div style={{ width: row?.top_4 + "%", backgroundColor: 'rgb(44,86,235)' }} className="h-1 rounded absolute"></div>

//                                                     </div>
//                                                 </div>

//                                             </TableCell >
//                                             <TableCell >
//                                                 <div className="flex flex-col gap-1 justify-center items-center">
//                                                     <div className="flex justify-center items-center">{row?.champion + "%"}</div>
//                                                     <div className="flex  relative w-20">
//                                                         <div style={{ width: '100%' }} className="h-1 bg-gray-200 rounded dark:bg-muted"></div>
//                                                         <div style={{ width: row?.champion + "%", backgroundColor: 'rgb(44,86,235)' }} className="h-1  rounded absolute"></div>

//                                                     </div>
//                                                 </div>

//                                             </TableCell >

//                                         </TableRow>
//                                     ))}



//                                 </TableBody>
//                             </Table>
//                         </div>


//                     </div>
//                 </div>





//             </>
//         )
//     }



// }

