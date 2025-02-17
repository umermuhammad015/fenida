"use server"

import { prisma } from '@/app/db';

export default async function FetchLeagueCodes(season: number) {

    const league_codes = await prisma.points_long.findMany({
        distinct: ['league_code'],
        select: {
            league_code: true,
        },
        where: {
            // position: { in: ['GK', 'LB'] },
            league_start_year: season
        },
        orderBy: [
            {
                league_code: 'asc',
            },
        ]
    });

    // console.log("league_codesaaaa")
    // console.log(league_codes)

    return (league_codes)
}