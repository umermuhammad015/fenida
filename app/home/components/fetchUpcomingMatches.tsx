"use server"
import { prisma } from '@/app/db';


export default async function fetchUpcomingMatches(user_league_code: string, user_team: string) {



    // await setTimeout(3000);

    // Query to fetch data from database table
    // const completed_matches_prisma = await prisma.points.findMany({

    //     select: {
    //         country: true,
    //         home_team: true,
    //         away_team: true,
    //         home_team_short: true,
    //         away_team_short: true,
    //         home_xg: true,
    //         away_xg: true,
    //         home_goals: true,
    //         away_goals: true,
    //         // home_xG_BP: true,
    //         // away_xG_BP: true,
    //         date: true,
    //         league_code: true,
    //         home_win_prob: true,
    //         tie_prob: true,
    //         away_win_prob: true,

    //     },
    //     where: {
    //         OR: [{ home_team: user_team }, { away_team: user_team }],

    //         status: 'completed',
    //         // date: {
    //         //     lte: new Date("2022-01-30"),
    //         //     get: new Date("2022-01-15"),
    //         //   },

    //     },

    //     orderBy: {
    //         date: 'desc',
    //     },
    //     //   take: 32,

    // });

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