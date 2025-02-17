"use server"

import { prisma } from '@/app/db';

export default async function FetchLeagueCodesX() {

    const league_codes = await prisma.standings.findMany({
        distinct: ['league_code'],
        select: {
            league_code: true,
            
        },
        orderBy: [
            {
                league_code: 'asc',
            },
        ]
    });

    console.log(league_codes)

    return (league_codes)
}