import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'


export default function Points_Skeleton() {
    return (
        <>

            <div className="flex flex-col space-y-2 bg-gray-50 rounded-xl p-4 shadow-sm">
                {/* Header */}
                <div className="p-1 text-sm font-semibold border-b-2 dark:text-background">
                    <h2>Points</h2>
                </div>

                {/* Two Circles */}
                <div className="flex justify-around py-2">
                    <Skeleton className="h-[25px] w-[25px] bg-gray-300 animate-pulse rounded-full" />
                    <Skeleton className="h-[25px] w-[25px] bg-gray-300 animate-pulse rounded-full" />
                </div>

                {/* Bar Charts */}
                <div className="flex justify-between gap-8 py-2">
                    {/* Left Bars */}
                    <div className="flex justify-around gap-4 w-1/2">
                        <Skeleton className="h-[90px] w-[6px] bg-gray-300 animate-pulse rounded-full" />
                        <Skeleton className="h-[90px] w-[6px] bg-gray-300 animate-pulse rounded-full" />
                        <Skeleton className="h-[90px] w-[6px] bg-gray-300 animate-pulse rounded-full" />
                    </div>

                    {/* Right Bars */}
                    <div className="flex justify-around gap-4 w-1/2">
                        <Skeleton className="h-[90px] w-[6px] bg-gray-300 animate-pulse rounded-full" />
                        <Skeleton className="h-[90px] w-[6px] bg-gray-300 animate-pulse rounded-full" />
                        <Skeleton className="h-[90px] w-[6px] bg-gray-300 animate-pulse rounded-full" />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex justify-center pt-2">
                    <Skeleton className="h-[30px] w-[450px] bg-gray-300 animate-pulse rounded-lg" />
                </div>
                {/* Legend */}
                <div className="flex justify-between">
                    <div className="flex gap-1">
                        <div style={{ backgroundColor: '#FB923C' }} className="w-2 h-2 rounded-full mt-1"></div>
                        <div className="text-gray-400">Predicted</div>
                    </div>
                    <div className="flex gap-1">
                        <div style={{ backgroundColor: '#02B059' }} className="w-2 h-2 rounded-full mt-1"></div>
                        <div className="text-gray-400">Achieved</div>
                    </div>
                    <div className="flex gap-1">
                        <div style={{ backgroundColor: '#1D4ED8' }} className="w-2 h-2 rounded-full mt-1"></div>
                        <div className="text-gray-400">Deserved</div>
                    </div>
                </div>

            </div>

        </>
    )
}

