import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'


export default function LeagueSkeleton() {
    return (
        <>
            <div className="flex flex-col gap-1 mt-10">
                <Skeleton className="h-10 w-full bg-gray-600" />
                <div className="space-y-2">
                    <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                    <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                    <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                    <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                    <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                    <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                    <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                    <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                    <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                    <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                    <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                    <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
                </div>

            </div>
        </>
    )
}

