
import { Skeleton } from "@/components/ui/skeleton"
// import prisma from "../db";
import UpcomingMatches from './components/upcoming_matches';
import CompletedMatches from './components/completed_matches';
import Points from './components/points';
import LeagueTable from './components/league_table';
import { Suspense } from 'react';

import FetchTeamLeague from './components/TeamLeague';


// const CompletedMatches = lazy(() => import('./components/completed_matches'))

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {


    const {
        league= "ENG1",
        season = "2024",
        // team = "Nottingham Forest",
        user_team = "Nottingham Forest",
        user_league_code = "ENG1"

    } = await searchParams;



    // await new Promise(resolve => setTimeout(resolve, 3000));

    // const user_team = "Nottingham Forest";
    // const user_league_code = "ENG1";

    // Query to fetch data from database table
    // const upcoming_matches = await prisma.upcoming_matches.findMany({
    //     select: {
    //         home_team: true,
    //         away_team: true,
    //         home_team_short: true,
    //         away_team_short: true,
    //         league: true,
    //         date: true,
    //         prob1: true,
    //         prob_draw: true,
    //         prob2: true,
    //         id: true,
    //         country: true,

    //     },
    //     where: {
    //         OR: [{ home_team: user_team }, { away_team: user_team }],

    //         league_code: user_league_code,

    //     },

    // });


    // Query to fetch data from database table
    // const dashboard_points = await prisma.dashboard_points.findFirst({
    //     select: {

    //         total_home_deserved_points: true,
    //         total_home_predicted_points: true,
    //         total_home_points: true,
    //         total_home_deserved_points_percentile: true,
    //         total_home_points_percentile: true,
    //         total_home_predicted_points_percentile: true,
    //         total_away_deserved_points: true,
    //         total_away_predicted_points: true,
    //         total_away_points: true,
    //         total_away_deserved_points_percentile: true,
    //         total_away_points_percentile: true,
    //         total_away_predicted_points_percentile: true,
    //         total_points: true

    //     },
    //     where: {
    //         team: user_team
    //     },
    // });

    // const completed_matches = await fetchCompletedMatches(user_league_code, user_team);

    // console.log("completed_matches from parent")
    // // console.log(completed_matches)



    // const league_table_old = await prisma.eng1_forecast_wide.findMany({
    //     select: {
    //         team: true,
    //         place1: true,
    //         place2: true,
    //         place3: true,
    //         place4: true,
    //         place5: true,
    //         place6: true,
    //         place7: true,
    //         place8: true,
    //         place9: true,
    //         place10: true,
    //         place11: true,
    //         place12: true,
    //         place13: true,
    //         place14: true,
    //         place15: true,
    //         place16: true,
    //         place17: true,
    //         place18: true,
    //         place19: true,
    //         place20: true
    //     },
    //     where: {

    //     },
    // });

    // console.log(upcoming_matches)

    // console.log(league_table)

    // console.log("page loaded")



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


                {/* <UpcomingMatches /> */}

                {/* <CompletedMatches />
                
                <Points /> */}
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


