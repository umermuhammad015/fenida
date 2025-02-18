import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'


export default function UpcomingSkeleton() {
    return (
        <>
            <div className="flex flex-col space-y-2 bg-gray-50 rounded-xl p-4 shadow-sm">
                {/* Header */}
                <div className="pb-2">
                    <Skeleton className="h-5 w-[140px] bg-gray-300 animate-pulse rounded" />
                </div>

                {/* League Name */}
                <div className="py-1">
                    <Skeleton className="h-6 w-[90px] rounded-lg mx-auto bg-gray-300 animate-pulse" />
                </div>

                {/* Teams */}
                <div className="flex justify-around items-center py-3">
                    {/* Home Team */}
                    <div className="flex flex-col items-center space-y-2">
                        <Skeleton className="h-10 w-10 rounded-full bg-gray-300 animate-pulse shadow-sm" />
                        <Skeleton className="h-3 w-14 bg-gray-300 animate-pulse rounded" />
                    </div>

                    {/* Away Team */}
                    <div className="flex flex-col items-center space-y-2">
                        <Skeleton className="h-10 w-10 rounded-full bg-gray-300 animate-pulse shadow-sm" />
                        <Skeleton className="h-3 w-14 bg-gray-300 animate-pulse rounded" />
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="py-2">
                    <Skeleton className="h-2 w-3/4 rounded-full mx-auto bg-gray-300 animate-pulse" />
                </div>

                {/* Buttons */}
                <div className="flex justify-between pt-2">
                    <Skeleton className="h-7 w-14 bg-gray-300 animate-pulse rounded" />
                    <Skeleton className="h-7 w-14 bg-gray-300 animate-pulse rounded" />
                    <Skeleton className="h-7 w-14 bg-gray-300 animate-pulse rounded" />
                </div>
            </div>
        </>
    )
}