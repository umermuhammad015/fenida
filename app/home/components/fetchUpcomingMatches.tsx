"use server"
import { prisma } from '@/app/db';


export default async function fetchUpcomingMatches(user_league_code: string, user_team: string) {


    const upcoming_matches = await prisma.upcoming_matches.findMany({
        select: {
            time: true,
            home_team: true,
            away_team: true,
            home_team_short: true,
            away_team_short: true,
            league: true,
            date: true,
            prob1: true,
            prob_draw: true,
            prob2: true,
            id: true,
            home_country: true,
            away_country: true,
            home_cumulative_points: true,
            away_cumulative_points: true
        },
        where: {
            OR: [{ home_team: user_team }, { away_team: user_team }],

            league_code: user_league_code,

        },

    });

    // console.log(upcoming_matches)


    if (upcoming_matches) {
        return upcoming_matches
    }

    return ([])
}