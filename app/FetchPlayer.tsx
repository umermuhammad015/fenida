"use server"

import { prisma } from '@/app/db';

export default async function FetchPlayer(name:string) {

    // console.log("suggested_player")
    // console.log(name)

    const suggested_player = await prisma.eng1_unique_players.findMany({
        select:{
            name: true
        },
        take: 5,
        where: {
            name: {
                contains: name
                }
        },
        distinct: ['name'],
    });

    // console.log("suggested_player")
    console.log(suggested_player)

    return (suggested_player)
}