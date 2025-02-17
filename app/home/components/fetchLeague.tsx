// "use client"

// import React, { useEffect, useState } from 'react'
// import FetchLeagueCodes from './FetchLeagueCodeX';
// // import { useRouter } from 'next/navigation'
// // import FetchSeason from './fetchSeason';

// export default function FetchLeague() {

//     console.log("component renderd")

//     // const router = useRouter()

//     const [league, setLeague] = useState<any>('ENG1');
//     const [leagueCodesList, setLeagueCodesList] = useState<any>([])

//     const [season, setSeason] = useState<any>('2024');
//     // const [seasonList, setSeasonList] = useState<any>([])

//     useEffect(() => {

//         console.log("FetchLeagues() loaded")

//         const fetchData = async () => {
//             try {
//                 const all_league = await FetchLeagueCodes()

//                 // console.log("league list");
//                 // console.log(all_league);

//                 setLeagueCodesList(all_league);
//             } catch (error) {

//                 console.error('Error fetching league code list:', error);
//             }
//         };

//         fetchData();

//     }, []);

//     // useEffect(() => {

//     //     console.log("FetchSeason() loaded")

//     //     const fetchData = async () => {
//     //         try {
//     //             console.log("trying season list");
//     //             const all_season = await FetchSeason()

//     //             console.log("season list");
//     //             console.log(all_season);

//     //             setSeasonList(all_season);
//     //         } catch (error) {

//     //             console.error('Error fetching season list:', error);
//     //         }
//     //     };

//     //     fetchData();

//     // }, []);


//     // useEffect(() => {
 
//     //     // console.log("us" + league + " " + season)

//     //     const query = {
//     //         league_code: league,
//     //         season: season,

//     //     }
//     //     const url = qs.stringifyUrl({
//     //         url: window.location.href,
//     //         query
//     //     }, { skipNull: true, skipEmptyString: true })

//     //     router.push(url)

//     // }, [league, season])

//     return (
//         <>
//             <div className="flex gap-2 rounded-lg  mt-1">
//                 <select className="select border w-20 dark:bg-muted h-10 rounded-lg p-1"
//                     value={league}
//                     onChange={e => setLeague(e.target.value)}>

//                     {/* <option disabled selected>Leagues</option> */}
//                     {leagueCodesList.length > 0 && leagueCodesList.map((lc: any, i:any) => <option className="text-primary" key={i}>{lc.league_code}</option>)}


//                 </select>

                

//                 <div className="flex flex-col gap-1">
//                     <div className="">
//                         <select className="select border h-10 w-20 rounded-lg p-1 dark:bg-muted" defaultValue={season} onChange={e => setSeason(e.target.value)}>
//                             {/* <option disabled selected>Select Season</option> */}
//                             <option value={2024}>2024-25</option>
//                             <option value={2023}>2023-24</option>
//                             <option value={2022}>2022-23</option>
//                             <option value={2021}>2021-22</option>
//                             <option value={2020}>2020-21</option>
//                             <option value={2019}>2019-20</option>
//                         </select>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

