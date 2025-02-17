"use server"
import { prisma } from '@/app/db';;

export default async function fetchCompletedMatches(user_league_code: string, user_team: string) {

    // await new Promise(resolve => setTimeout(resolve, 3000));

    // await setTimeout(3000);

    // Query to fetch data from database table
    const completed_matches = await prisma.points.findMany({

        select: {
            home_country: true,
            away_country: true, 
            league: true,
            home_team: true,
            away_team: true,
            home_team_short: true,
            away_team_short: true,
            home_xg: true,
            away_xg: true,
            home_goals: true,
            away_goals: true,
            // home_xG_BP: true,
            // away_xG_BP: true,
            date: true,
            league_code: true,
            home_win_prob: true,
            tie_prob: true,
            away_win_prob: true,

        },
        where: {
            OR: [{ home_team: user_team }, { away_team: user_team }],

            status: 'completed',
            // date: {
            //     lte: new Date("2022-01-30"),
            //     get: new Date("2022-01-15"),
            //   },

        },

        orderBy: {
            date: 'desc',
        },
          take: 38,

    });

    // const completed_matches = await prisma.$queryRaw`SELECT t1.country, t1.league, t1.league_code, t1.home_team, t1.away_team, t1.league, t1.date, t1.home_team_short, t1.away_team_short, t1.league, t1.date, t1.home_xg, t1.away_xg, t1.home_goals, t1.away_goals, t1.home_win_prob, t1.tie_prob, t1.away_win_prob FROM fenida_fenida.points t1 INNER JOIN ( SELECT league_code, MAX(league_start_year) AS max_league_start_year FROM fenida_fenida.points GROUP BY league_code ) t2 ON t1.league_code = t2.league_code AND t1.league_start_year = t2.max_league_start_year WHERE (t1.home_team = ${user_team} OR t1.away_team = ${user_team}) AND t1.status = 'completed' AND t1.league_code = ${user_league_code} ORDER BY t1.date DESC;`;

    // console.log(completed_matches)

    if(completed_matches){
        return completed_matches
    }

    return (null)
}