import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default async function Analysis() {

    await new Promise(function (resolve) {
        setTimeout(resolve, 3000);
    });
    return (
        <>
            <div className="bg-background rounded-lg">
                <div className=" p-4">
                    <div className="flex justify-between p-1 text-sm font-semibold border-b-2 ">
                        <h2>Analysis</h2>
                        <h2 className="text-blue-700">Details</h2>
                    </div>
                    <div className="">

                        <div className=" py-3 mt-4 px-2 w-auto flex justify-between bg-gray-100 rounded-lg dark:bg-muted">
                            <div>Coach</div>
                            <div className="flex gap-2">
                                <div className="text-gray-400">Mid-Table</div>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="flex gap-0.5 justify-center items-center">
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Add to library</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                            </div>

                        </div>
                        <div className=" py-3 px-2 w-auto flex justify-between rounded-lg">
                            <div>Goalkeeper</div>
                            <div className="flex gap-2">
                                <div className="text-gray-400">Relegation</div>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="flex gap-0.5 justify-center items-center">
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Add to library</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                            </div>




                        </div>


                        <div className=" py-3 px-2 w-auto flex justify-between bg-gray-100 rounded-lg dark:bg-muted">
                            <div>Centre-Backs</div>
                            <div className="flex gap-2">
                                <div className="text-gray-400">Europa League</div>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="flex gap-0.5 justify-center items-center">
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Add to library</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                            </div>

                        </div>



                        <div className=" py-3 px-2 w-auto flex justify-between rounded-lg">
                            <div>Full-Backs</div>
                            <div className="flex gap-2">
                                <div className="text-gray-400">Mid-Table</div>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="flex gap-0.5 justify-center items-center">
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Add to library</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                            </div>




                        </div>
                        <div className=" py-3 px-2 w-auto flex justify-between bg-gray-100 rounded-lg dark:bg-muted">
                            <div>Central Midfielders</div>
                            <div className="flex gap-2">
                                <div className="text-gray-400">Bottom 3rd</div>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="flex gap-0.5 justify-center items-center">
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Add to library</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                            </div>


                        </div>
                        <div className=" py-3 px-2 w-auto flex justify-between ">
                            <div>Attacking Midfielders</div>
                            <div className="flex gap-2">
                                <div className="text-gray-400">Europa League</div>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="flex gap-0.5 justify-center items-center">
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Add to library</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>

                        </div>
                        <div className=" py-3 px-2 w-auto flex justify-between bg-gray-100 rounded-lg dark:bg-muted">
                            <div>Centre-Forwards</div>
                            <div className="flex gap-2">
                                <div className="text-gray-400">Europa League</div>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="flex gap-0.5 justify-center items-center">
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Add to library</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

