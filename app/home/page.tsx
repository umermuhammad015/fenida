import UpcomingMatches from './components/upcoming_matches';
import CompletedMatches from './components/completed_matches';
import Points from './components/points';
import LeagueTable from './components/league_table';
import { Suspense } from 'react';

// import FetchTeamLeague from './components/TeamLeague';
import { Skeleton } from '@/components/ui/skeleton';
// import LeagueTable2 from './components/league_table2';

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {


    const {
        league = "ENG1",
        season = "2024",
        // user_team = "Nottingham Forest",
        // user_league_code = "ENG1"

    } = await searchParams;




    return (
        <div className="container">

            {/* <Suspense fallback={<>Loading...</>}>
                <div>
                    <FetchTeamLeague
                        league_start_year={season}
                        user_league_code={user_league_code}
                        user_team={user_team}

                    />
                </div>
            </Suspense> */}

            <div className="grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-2 text-xs mt-4">


                <UpcomingMatches />

                <CompletedMatches />

                <Points />
            </div>


            <div className="w-full mt-10">
                <Suspense key={`${league}-${season}`} fallback={
                    <div className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-sm animate-pulse">
                        {/* Title Placeholder */}
                        <Skeleton className="h-10 w-1/3 bg-gray-300 rounded-lg" />

                        {/* Table Row Placeholder */}
                        <div className="space-y-3">
                            {Array.from({ length: 10 }).map((_, i) => (
                                <div key={i} className="flex items-center space-x-4">
                                    <Skeleton className="h-8 w-12 bg-gray-300 rounded-md" /> {/* Icon/Ranking */}
                                    <Skeleton className="h-8 flex-1 bg-gray-300 rounded-md" /> {/* Team Name */}
                                    <Skeleton className="h-8 w-16 bg-gray-300 rounded-md" /> {/* Points */}
                                </div>
                            ))}
                        </div>
                    </div>
                }>
                    <LeagueTable league={league} season={season} />

                </Suspense>


            </div>

        </div>

    )
}


