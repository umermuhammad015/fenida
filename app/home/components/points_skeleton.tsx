import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function Points_Skeleton() {
    return (
        <>
            <div className="bg-background rounded-lg">
                <div className="p-4 font-semibold">
                    <div className="p-1 text-sm font-semibold border-b-2">
                        <h3>Points</h3>
                    </div>
                    
                    {/* Home and Away Icons */}
                    <div className="flex justify-around">
                        {/* Home Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-8 h-8 p-1 mt-2 border-2 text-gray-500 rounded">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                        {/* Away Icon */}
                        <div className="w-8 h-8 p-1 mt-2 border-2 text-gray-500 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                            </svg>
                        </div>
                    </div>

                    {/* Bar Charts */}
                    <div className="flex justify-between gap-6 pt-4">
                        {/* Home Side Bars */}
                        <div className="flex justify-around w-1/2 text-xs">
                            {/* Bar 1 */}
                            <div>
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="flex items-end relative h-24">
                                        <div className="w-1.5 bg-gray-100 rounded dark:bg-muted h-full"></div>
                                        <Skeleton className="w-1.5 rounded absolute h-16 bg-gray-300 animate-pulse" />
                                    </div>
                                    <Skeleton className="w-6 h-4 rounded bg-gray-300 animate-pulse" />
                                </div>
                            </div>
                            
                            {/* Bar 2 */}
                            <div>
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="flex items-end relative h-24">
                                        <div className="w-1.5 bg-gray-100 rounded dark:bg-muted h-full"></div>
                                        <Skeleton className="w-1.5 rounded absolute h-14 bg-gray-300 animate-pulse" />
                                    </div>
                                    <Skeleton className="w-6 h-4 rounded bg-gray-300 animate-pulse" />
                                </div>
                            </div>
                            
                            {/* Bar 3 */}
                            <div>
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="flex items-end relative h-24">
                                        <div className="w-1.5 bg-gray-100 rounded dark:bg-muted h-full"></div>
                                        <Skeleton className="w-1.5 rounded absolute h-18 bg-gray-300 animate-pulse" />
                                    </div>
                                    <Skeleton className="w-6 h-4 rounded bg-gray-300 animate-pulse" />
                                </div>
                            </div>
                        </div>

                        {/* Away Side Bars */}
                        <div className="flex justify-around w-1/2 text-xs">
                            {/* Bar 1 */}
                            <div>
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="flex items-end relative h-24">
                                        <div className="w-1.5 bg-gray-100 rounded dark:bg-muted h-full"></div>
                                        <Skeleton className="w-1.5 rounded absolute h-12 bg-gray-300 animate-pulse" />
                                    </div>
                                    <Skeleton className="w-6 h-4 rounded bg-gray-300 animate-pulse" />
                                </div>
                            </div>
                            
                            {/* Bar 2 */}
                            <div>
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="flex items-end relative h-24">
                                        <div className="w-1.5 bg-gray-100 rounded dark:bg-muted h-full"></div>
                                        <Skeleton className="w-1.5 rounded absolute h-16 bg-gray-300 animate-pulse" />
                                    </div>
                                    <Skeleton className="w-6 h-4 rounded bg-gray-300 animate-pulse" />
                                </div>
                            </div>
                            
                            {/* Bar 3 */}
                            <div>
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="flex items-end relative h-24">
                                        <div className="w-1.5 bg-gray-100 rounded dark:bg-muted h-full"></div>
                                        <Skeleton className="w-1.5 rounded absolute h-14 bg-gray-300 animate-pulse" />
                                    </div>
                                    <Skeleton className="w-6 h-4 rounded bg-gray-300 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Total Points Section */}
                    <div className="flex justify-between mt-4 p-3 bg-gray-100 rounded-lg mb-4 dark:bg-muted">
                        <div className="text-gray-400">Total point</div>
                        <Skeleton className="w-8 h-4 bg-gray-300 animate-pulse rounded" />
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
            </div>
        </>
    );
}