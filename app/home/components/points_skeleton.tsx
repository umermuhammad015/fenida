import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'


export default function Points_Skeleton() {
    return (
        <>

            <div className="flex flex-col space-y-2 bg-gray-50 rounded-xl p-4 shadow-sm">
                {/* Header */}
                <div className="pb-2">
                    <Skeleton className="h-5 w-[80px] bg-gray-200/80 animate-pulse rounded" />
                </div>

                {/* Two Circles */}
                <div className="flex justify-around py-2">
                    <Skeleton className="h-[25px] w-[25px] bg-gray-200/80 animate-pulse rounded-full" />
                    <Skeleton className="h-[25px] w-[25px] bg-gray-200/80 animate-pulse rounded-full" />
                </div>

                {/* Bar Charts */}
                <div className="flex justify-between gap-8 py-2">
                    {/* Left Bars */}
                    <div className="flex justify-around gap-4 w-1/2">
                        <Skeleton className="h-[90px] w-[6px] bg-gray-200/80 animate-pulse rounded-full" />
                        <Skeleton className="h-[90px] w-[6px] bg-gray-200/80 animate-pulse rounded-full" />
                        <Skeleton className="h-[90px] w-[6px] bg-gray-200/80 animate-pulse rounded-full" />
                    </div>

                    {/* Right Bars */}
                    <div className="flex justify-around gap-4 w-1/2">
                        <Skeleton className="h-[90px] w-[6px] bg-gray-200/80 animate-pulse rounded-full" />
                        <Skeleton className="h-[90px] w-[6px] bg-gray-200/80 animate-pulse rounded-full" />
                        <Skeleton className="h-[90px] w-[6px] bg-gray-200/80 animate-pulse rounded-full" />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex justify-center pt-2">
                    <Skeleton className="h-[30px] w-[200px] bg-gray-200/80 animate-pulse rounded-lg" />
                </div>
            </div>

        </>
    )
}

