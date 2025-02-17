"use client";
// import clsx from 'clsx';
import Image from 'next/image'
// import React, { useEffect, useState } from 'react'
import React from 'react'
import ThemeToggleButton from './ThemeToggleButton';
import Link from "next/link"
import {
  // Activity,
  // ArrowUpRight,
  // CircleUser,
  // CreditCard,
  // DollarSign,
  Menu,
  // Package2,
  // Search,
  // Users,
} from "lucide-react"
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import FetchPlayer from './FetchPlayer';
import { usePathname } from 'next/navigation';


function Header() {

  // const [positions, setPositions] = useState<any>([]);
  const pathname = usePathname()

  // 

  // function handlePositions(p) {
  //   console.log(p);

  //   console.log(positions.includes(p));

  //   if (positions.includes(p)) {

  //     setPositions((current_p) => {
  //       return current_p.filter(item => item !== p)
  //     })

  //     //setPositions(positions.filter(item => item !== p));

  //   } else {
  //     setPositions((current_p) => {
  //       return [...current_p, p]
  //     })

  //     // setPositions([...positions, p]);

  //   }



  // }
  // function BoldedText(text: string, shouldBeBold: string) {

  //   const textArray = text.split(shouldBeBold);

  //   return (
  //     <span>
  //       {textArray.map((item, index) => (
  //         <>
  //           {item}
  //           {index !== textArray.length - 1 && <b>{shouldBeBold}</b>}
  //         </>
  //       ))}
  //     </span>
  //   );
  // }

  // useEffect(() => {

  //   if (name !== "") {
  //     const fetchData = async () => {
  //       try {
  //         const Players_names = await FetchPlayer(name)
  //         console.log(Players_names);

  //         setPlayerNames(Players_names);
  //       } catch (error) {

  //         console.error('Error fetching data:', error);
  //       }
  //     };

  //     fetchData();
  //   }


  // }, [name]);



  return (
    <>

      <header className=" top-0 h-24 gap-4 p-2 border-b bg-background px-4 md:px-6">

        <div className="grid grid-cols-3 pt-2 items-center">
          <div className="">
            <Link href="/home"><Image
              // src="/images/teams/{(row?.country)}.concat{(row?.team)}.png"
              src={"/images/icon/fenida.png"}

              width={150}
              height={150}
              className="object-contain"
              alt="Picture of the author"
            />
            </Link>
          </div>
          <nav className="hidden mx-auto text-lg dark:text-muted-foreground  md:flex font-semibold md:flex-row md:items-center   md:gap-6 md:text-base lg:gap-7">
            {/* <Link type="link"
              onClick={() => handlePositions(0)}
              className={` ${positions.includes(0) ? " text-blue-700" :
                "bg-white text-black dark:bg-muted dark:text-white"} 
                transition-colors hover:text-foreground`}
              href="/home">Dashboard
            </Link> */}
            <Link
              href="/home"
              className={`${pathname.includes("/home") ? "transition-colors text-blue-600" : "text-gray-500"
                }`}
            >
              Dashboard
            </Link>

            {/* <Link
              href="/profile"
              className=" transition-colors hover:text-foreground"
            >
              Profile
            </Link> */}
            {/* <Link
              href="/create-team"
              className=" transition-colors hover:text-foreground "
            >
              Team
            </Link> */}

            {/* <Link
              href="/player-result"
              className=" transition-colors hover:text-foreground "
            >
              Players Result
            </Link> */}

            <Link
              href="#"
              className={`${pathname.includes("/survey") ? "transition-colors text-blue-600" : "text-gray-500"
                }`}
            >
              Survey
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>Players</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel></DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link
                    href="#"
                    className=" transition-colors hover:text-foreground "
                  >
                    <div className="flex gap-5 p-2">

                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tally-5 mt-6 rounded-lg w-12 h-8 border p-2"><path d="M4 4v16" /><path d="M9 4v16" /><path d="M14 4v16" /><path d="M19 4v16" /><path d="M22 6 2 18" /></svg>

                      <div className="">
                        <div className="font-semibold">
                          Market search
                        </div>
                        <div className="text-muted-foreground">Filter worldwide, and shortlist players directly from our database</div>
                      </div>
                    </div>

                  </Link>

                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link
                    href="#"
                    className=" transition-colors hover:text-foreground "
                  >
                    <div className="flex gap-5 p-2">

                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tally-5 mt-6 rounded-lg w-12 h-8 border p-2"><path d="M4 4v16" /><path d="M9 4v16" /><path d="M14 4v16" /><path d="M19 4v16" /><path d="M22 6 2 18" /></svg>

                      <div className="">
                        <div className="font-semibold">
                          Scout Search
                        </div>
                        <div className="text-muted-foreground">Filter worldwide, and shortlist players directly from our database</div>
                      </div>
                    </div>

                  </Link>

                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link
                    href="#"
                    className=" transition-colors hover:text-foreground"
                  >
                    <div className="flex gap-4 p-2">
                      <Image
                        // src="/images/teams/{(row?.country)}.concat{(row?.team)}.png"
                        src={"/images/icon/book.png"}

                        width={50}
                        height={50}
                        className="object-contain"
                        alt="Picture of the author"
                      />
                      <div className="">
                        <div className="font-semibold">
                          Club Search
                        </div>
                        <div className="text-muted-foreground">Search for any club and analysis their players</div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="#"
                    className=" transition-colors hover:text-foreground "
                  >
                    <div className="flex gap-6 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-6 rounded-lg w-12 h-8 border p-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                      </svg>
                      <div className="">
                        <div className="font-semibold">
                          ShortList
                        </div>
                        <div className="text-muted-foreground">Manage, rank and follow your shortlisted players throughout their careers</div>
                      </div>
                    </div>


                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>Coaches</DropdownMenuTrigger>
              <DropdownMenuContent className="">
                <DropdownMenuLabel></DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link
                    href="#"
                    className=" transition-colors hover:text-foreground "
                  >
                    <div className="flex gap-5 p-2">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-6 rounded-lg w-12 h-8 border p-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>


                      <div className="">
                        <div className="font-semibold">
                          Coach search
                        </div>
                        <div className="text-muted-foreground">Search for any coach by name and analyse their data</div>
                      </div>
                    </div>

                  </Link>

                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link
                    href="#"
                    className=" transition-colors hover:text-foreground"
                  >
                    <div className="flex gap-4 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tally-5 mt-6 rounded-lg w-12 h-8 border p-2"><path d="M4 4v16" /><path d="M9 4v16" /><path d="M14 4v16" /><path d="M19 4v16" /><path d="M22 6 2 18" /></svg>

                      <div className="">
                        <div className="font-semibold">
                          Market Search
                        </div>
                        <div className="text-muted-foreground">Filter worldwide, and shortlist coaches directly from our database</div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="#"
                    className=" transition-colors hover:text-foreground "
                  >
                    <div className="flex gap-6 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-6 rounded-lg w-12 h-8 border p-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                      </svg>
                      <div className="">
                        <div className="font-semibold">
                          ShortList
                        </div>
                        <div className="text-muted-foreground">Manage, rank and follow your shortlisted coaches throughout their careers</div>
                      </div>
                    </div>


                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* <DropdownMenu>
              <DropdownMenuTrigger>Coaches</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel></DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link
                    href="/coach-search"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Coaches search
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/Coach"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Market Search
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/coach-shortlist"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    ShortList
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
            {/* <Link
            href="/home"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link> */}


          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden "
              >
                <Menu className="h-8 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <div className="bg-background relative flex m-4 h-10 flex-wrap items-stretch rounded-lg border border-solid">
                  {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
                  <div className="flex">

                    {/* <button

                    className="relative border-none z-[2]  flex justify-center h-10 items-center p-4 text-xs font-medium uppercase leading-tight text-gray-800 transition duration-150 ease-in-out  focus:outline-none focus:ring-0 active:bg-primary-800 "
                    type="button"
                    id="button-addon1"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    // onClick={(e) => {
                    //     handleSearch(e.target.value);
                    //     router.push(`/coach-search?name=${selectedCoach}`);
                    // }}
                    defaultValue={selectedname}

                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd" />
                    </svg>


                  </button> */}
                    <Input
                      type="search"
                      className="pl-8 h-18"
                      placeholder="Search for a player"
                      aria-label="Search"
                      aria-describedby="button-addon1"


                    // defaultValue={selectedname}
                    // key={selectedname}
                    // onChange={(e) => {
                    //   setName(e.target.value)
                    //   // this.onChange(setCoach)

                    // }}
                    />


                    {/* <div
                      className={clsx(`w-full absolute bg-muted rounded-lg mt-10 rounded-t-none`, {
                        'hidden': name === '',


                      })}
                    >
                      <ul>

                        {playerNames?.length > 0 && playerNames.map((row: any, i: any) => (

                          <li className="cursor-pointer p-2 hover:bg-slate-300" key={i}

                            onClick={() => {
                              setPlayerNames([])
                              setSelectedName(row.name)
                             
                            }}
                          >
                           
                            <Link className='flex flex-col gap-4' href={'profile?name=' + row.name}>
                              {BoldedText(row.name, name)}
                              
                            </Link>
                            
                          </li>



                        ))}

                      </ul>


                    </div> */}

                  </div>
                </div>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Dashboardaa
                </Link>
                <Link
                  href=""
                  className="text-muted-foreground hover:text-foreground"
                >
                  Team
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Players
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Coaches
                </Link>
                {/* <Link
                href=""
                className="text-muted-foreground hover:text-foreground"
              >

              </Link> */}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="  text-lg dark:text-muted-foreground flex  w-full items-center  ">
            <div className="mx-auto hidden md:flex gap-4 md:flex-row md:items-center  md:text-base md:ml-auto md:gap-2 lg:gap-2">
              <Link
                href="#"
                className=" transition-colors font-semibold hover:text-foreground "
              >


                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart ml-16 border p-2 rounded-lg"><line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="16" /></svg>




              </Link>
              <form className="ml-auto sm:flex-initial">

                {/* <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 h-18"
                />
              </div> */}
                <div className="bg-background relative flex m-4 h-10 flex-wrap items-stretch rounded-lg border border-solid">
                  {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
                  <div className="flex">

                    {/* <button

                    className="relative border-none z-[2]  flex justify-center h-10 items-center p-4 text-xs font-medium uppercase leading-tight text-gray-800 transition duration-150 ease-in-out  focus:outline-none focus:ring-0 active:bg-primary-800 "
                    type="button"
                    id="button-addon1"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    // onClick={(e) => {
                    //     handleSearch(e.target.value);
                    //     router.push(`/coach-search?name=${selectedCoach}`);
                    // }}
                    defaultValue={selectedname}

                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd" />
                    </svg>


                  </button> */}
                    <Input
                      type="search"
                      className="pl-8 h-18 w-60"
                      placeholder="Search for a player"
                      aria-label="Search"
                      aria-describedby="button-addon1"
                    // onChange={(e) => {
                    //     handleSearch(e.target.value);
                    // }}
                    // defaultValue={searchParams.get("name")?.toString()}
                    // defaultValue={coach}

                    // defaultValue={selectedname}
                    // key={selectedname}
                    // onChange={(e) => {
                    //   setName(e.target.value)
                    //   // this.onChange(setCoach)

                    // }}
                    />


                    {/* <div
                      className={clsx(`absolute w-full bg-background border rounded-xl mt-16`, {
                        'hidden': name === '',


                      })}
                    >
                      <ul>

                        {playerNames?.length > 0 && playerNames.map((row: any, i: any) => (

                          <li className="cursor-pointer  p-2 hover:bg-slate-300" key={i}

                            onClick={() => {
                              setPlayerNames([])
                              setSelectedName(row.name)
                              // router.refresh()
                              // setCoach(row.coach)

                            }}
                          >
                           
                            <Link className='flex flex-col gap-4' href={'profile?name=' + row.name}>
                              {BoldedText(row.name, name)}
                              
                            </Link>
                            
                          </li>



                        ))}

                      </ul>


                    </div> */}

                  </div>
                </div>
              </form>
            </div>


            <div className="">
              <ThemeToggleButton />
            </div>
          </div>
        </div>
      </header >


      {/* <nav className="container mx-auto flex gap-2 bg-background ">
        <div className="flex justify-between border gap-6 mt-4  ">
          <div className="border">
            <img className="w-16" src="download.jfif" alt="" />
          </div>
          <div className=" flex justify-center text-sky-500 gap-5 my-auto mt-2">
            <div><a href="/home">Home</a></div>
            <div><a href="/rankings">Rankings</a></div>
            <div><a href="/metric">Metric</a></div>
            {/* <div><a href="/create-team">Create Team</a></div> */}
      {/* <div><a href="/players">Players</a></div> */}
      {/* <div><a href="/comparison">Comparison</a></div> */}
      {/* <div><a href="/profile">Profile</a></div> */}
      {/* <div><a href="/Coach">Coach</a></div> */}
      {/* <div><a href="/club">club</a></div> */}
      {/* <div><a href="/playershortlist">Player shortlist</a></div> */}
      {/* <div><a href="/finances">Finances</a></div> */}
      {/* <div><a href="/survey">Survey</a></div> */}
      {/* <div><a href="/player-result">player result</a></div> */}
      {/* <div><a href="/main">Main</a></div> */}
      {/* <div><a href="/coach-shortlist">coach shortlist</a></div>
            <div><a href="/coach-search">Coach search</a></div> */}


      {/* </div> */}
      {/* <div className=" text-right my-auto flex gap-4">
            <button
              className="bg-white hover:bg-gray-100  text-black font-semibold py-2 px-4 border border-inherit-700 rounded w-20">
              sreach
            </button>
            <button
              className="bg-white hover:bg-gray-100  text-black font-semibold py-2 px-4 border border-inherit-700 rounded">
              Sign up
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border rounded">
              Login
            </button>

          </div>
        </div>

      </nav> */}
    </>



  )
}

export default Header