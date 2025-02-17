import UpcomingMatches from './components/upcoming_matches';
import CompletedMatches from './components/completed_matches';
import Points from './components/points';
// import LeagueTable from './components/league_table';
import { Suspense } from 'react';

import FetchTeamLeague from './components/TeamLeague';

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {


    const {
        // league= "ENG1",
        season = "2024",
        user_team = "Nottingham Forest",
        user_league_code = "ENG1"

    } = await searchParams;




    return (
        <>

            <Suspense fallback={<>Loading...</>}>
                <div className="">
                    <FetchTeamLeague
                        league_start_year={season}
                        user_league_code={user_league_code}
                        user_team={user_team}

                    />
                </div>
            </Suspense>

            <div className="grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-[33%,33%,33%] gap-2 text-xs mt-4">


                <UpcomingMatches />

                <CompletedMatches />
                
                <Points /> 
            </div>


            {/* <div className=' w-full mt-10 '>


                <Suspense fallback={
                    <div className="flex flex-col gap-1 mt-10">
                        <div className="space-y-2">
                            <Skeleton className="h-10 w-full bg-gray-600" />

                        </div>
                        <div className="flex flex-col gap-0.5">
                            <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                            <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                            <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                            <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                            <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                            <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                            <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                            <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                            <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                            <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                            <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                            <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                        </div>

                    </div>

                }>
                    <LeagueTable league={league} season={season} />
                </Suspense>

            </div> */}





        </>

    )
}


