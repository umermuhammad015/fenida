"use server"

import { prisma } from '@/app/db';

export default async function FetchTeams(league_code: string) {
// export default async function FetchTeams(season: number, league_code: string) {

    const teams = await prisma.points_long.findMany({
        distinct: ['team'],
        select: {
            team: true,
        },
        where: {
            // position: { in: ['GK', 'LB'] },
            league_start_year: 2024,
            league_code: league_code,
        },
        orderBy: [
            {
                team: 'asc',
            },
        ]
    });

    // console.log("teamsssssss")
    // console.log(teams)

    return (teams)
}