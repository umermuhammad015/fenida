"use server"

import { prisma } from '@/app/db';

export default async function FetchSeason() {

    const season = await prisma.points_long.findMany({
        distinct: ['league_start_year'],
        select: {
            league_start_year: true,
        },
        orderBy: [
            {
                league_start_year: 'asc',
            },
        ]
    });

    if(season){
        return season
    }

    // console.log(season)

    return null
}