import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'


export default function CompletedSkeleton() {
    return (
        <>
            <div className="flex flex-col space-y-3 bg-gray-50 rounded-xl p-5 shadow-md">
                {/* Header */}
                <div className="pb-2 border-b border-gray-100">
                    <Skeleton className="h-5 w-[160px] bg-gray-200/80 animate-pulse rounded" />
                </div>

                {/* League and Probabilities */}
                <div className="flex justify-between items-center py-1">
                    <div className="space-y-1.5">
                        <Skeleton className="h-4 w-[120px] bg-gray-200/80 animate-pulse rounded" />
                        <Skeleton className="h-3.5 w-[90px] bg-gray-200/80 animate-pulse rounded" />
                    </div>
                    <div className="flex gap-0.5">
                        <Skeleton className="h-8 w-[45px] bg-gray-200/80 animate-pulse rounded-l" />
                        <Skeleton className="h-8 w-[45px] bg-gray-200/80 animate-pulse" />
                        <Skeleton className="h-8 w-[45px] bg-gray-200/80 animate-pulse rounded-r" />
                    </div>
                </div>

                {/* Teams and Score */}
                <div className="flex justify-between items-center py-2">
                    {/* Home Team */}
                    <div className="flex flex-col items-center space-y-2 w-1/3">
                        <Skeleton className="h-12 w-12 rounded-full bg-gray-200/80 animate-pulse shadow-sm" />
                        <Skeleton className="h-3.5 w-16 bg-gray-200/80 animate-pulse rounded" />
                    </div>

                    {/* Score */}
                    <div className="flex items-center gap-3">
                        <Skeleton className="h-8 w-8 bg-gray-200/80 animate-pulse rounded" />
                        <div className="text-xl text-gray-200">:</div>
                        <Skeleton className="h-8 w-8 bg-gray-200/80 animate-pulse rounded" />
                    </div>

                    {/* Away Team */}
                    <div className="flex flex-col items-center space-y-2 w-1/3">
                        <Skeleton className="h-12 w-12 rounded-full bg-gray-200/80 animate-pulse shadow-sm" />
                        <Skeleton className="h-3.5 w-16 bg-gray-200/80 animate-pulse rounded" />
                    </div>
                </div>

                {/* Stats */}
                <div className="space-y-2 py-1">
                    <div className="flex gap-2">
                        <Skeleton className="h-7 w-full bg-gray-200/80 animate-pulse rounded" />
                        <Skeleton className="h-7 w-full bg-gray-200/80 animate-pulse rounded" />
                    </div>
                    <div className="flex gap-2">
                        <Skeleton className="h-7 w-full bg-gray-200/80 animate-pulse rounded" />
                        <Skeleton className="h-7 w-full bg-gray-200/80 animate-pulse rounded" />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center pt-2">
                    <Skeleton className="h-7 w-16 bg-gray-200/80 animate-pulse rounded" />
                    <Skeleton className="h-7 w-16 bg-gray-200/80 animate-pulse rounded" />
                    <Skeleton className="h-7 w-16 bg-gray-200/80 animate-pulse rounded" />
                </div>
            </div>
        </>
    )
}

