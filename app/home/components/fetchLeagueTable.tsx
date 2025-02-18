"use server"
import { prisma } from '@/app/db';


export default async function fetchLeagueTable(user_league_code: string, season:string) {


    const league_table = await prisma.standings.findMany({

        where: {
            league_code: user_league_code,
            league_start_year:  Number(season),
            // team: user_team

        },
        orderBy: [
            {
                pts: 'desc',
            },
        ],
        take:
            20,
        

    });

    // console.log(upcoming_matches)


    if (league_table) {
        return league_table
    }

    return (null)
}