"use server"
import { prisma } from '@/app/db';


export default async function fetchPoint(user_league_code: string, user_team: string) {

    const dashboard_points = await prisma.dashboard_points.findFirst({
        select: {

            total_home_deserved_points: true,
            total_home_predicted_points: true,
            total_home_points: true,
            total_home_deserved_points_percentile: true,
            total_home_points_percentile: true,
            total_home_predicted_points_percentile: true,
            total_away_deserved_points: true,
            total_away_predicted_points: true,
            total_away_points: true,
            total_away_deserved_points_percentile: true,
            total_away_points_percentile: true,
            total_away_predicted_points_percentile: true,
            total_points: true

        },
        where: {
            OR: [{ team: user_team }, { team: user_team }],

            league_code: user_league_code,

        },
    });

    // console.log(dashboard_points)

    // if(dashboard_points){
    //     return dashboard_points
    // } 

    return dashboard_points
}