"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ThemeToggleButton from './ThemeToggleButton';
import Link from "next/link"
import {
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { usePathname } from 'next/navigation';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Add scroll event listener to detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`sticky top-0 z-50 w-full h-auto border-b transition-all duration-300 ${
        isScrolled ? "bg-glassmorf backdrop-blur-md shadow-lg" : "bg-background"
      }`}>
        <div className="container px-4 mx-auto relative">
          <div className="flex items-center justify-between py-4">
            {/* Logo - Left Section */}
            <div className="flex-shrink-0">
              <Link href="/home">
                <Image
                  src="/images/icon/fenida.png"
                  width={150}
                  height={150}
                  className="object-contain h-10 sm:h-12"
                  alt="Fenida Logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Center Section */}
            <nav className="hidden absolute left-1/2 transform -translate-x-1/2 md:flex items-center space-x-4 lg:space-x-6">
              <Link
                href="/home"
                className={`${
                  pathname.includes("/home") ? "text-blue-600" : "text-gray-500"
                } font-semibold text-sm lg:text-base transition-colors hover:text-foreground`}
              >
                Dashboard
              </Link>
              
              <Link
                href="#"
                className={`${
                  pathname.includes("/survey") ? "text-blue-600" : "text-gray-500"
                } font-semibold text-sm lg:text-base transition-colors hover:text-foreground`}
              >
                Survey
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="font-semibold text-sm lg:text-base text-gray-500 hover:text-foreground">
                  Players
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="#" className="w-full">
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 w-8 h-8 p-1 mt-1 border rounded-lg">
                          <path d="M4 4v16" /><path d="M9 4v16" /><path d="M14 4v16" /><path d="M19 4v16" /><path d="M22 6 2 18" />
                        </svg>
                        <div>
                          <div className="font-semibold">Market search</div>
                          <div className="text-xs text-muted-foreground">Filter worldwide, and shortlist players directly from our database</div>
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Link href="#" className="w-full">
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 w-8 h-8 p-1 mt-1 border rounded-lg">
                          <path d="M4 4v16" /><path d="M9 4v16" /><path d="M14 4v16" /><path d="M19 4v16" /><path d="M22 6 2 18" />
                        </svg>
                        <div>
                          <div className="font-semibold">Scout Search</div>
                          <div className="text-xs text-muted-foreground">Filter worldwide, and shortlist players directly from our database</div>
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Link href="#" className="w-full">
                      <div className="flex items-start gap-2">
                        <div className="shrink-0 w-8 h-8 mt-1">
                          <Image
                            src="/images/icon/book.png"
                            width={32}
                            height={32}
                            className="object-contain"
                            alt="Book icon"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">Club Search</div>
                          <div className="text-xs text-muted-foreground">Search for any club and analysis their players</div>
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Link href="#" className="w-full">
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="shrink-0 w-8 h-8 p-1 mt-1 border rounded-lg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                        <div>
                          <div className="font-semibold">ShortList</div>
                          <div className="text-xs text-muted-foreground">Manage, rank and follow your shortlisted players throughout their careers</div>
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Right Section - Search, Stats Icon, Theme Toggle */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Stats icon - visible on desktop */}
              <Link href="#" className="hidden md:flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 p-2 border rounded-lg">
                  <line x1="12" x2="12" y1="20" y2="10" />
                  <line x1="18" x2="18" y1="20" y2="4" />
                  <line x1="6" x2="6" y1="20" y2="16" />
                </svg>
              </Link>
              
              {/* Search field - visible on desktop */}
              <div className="hidden md:block relative">
                <Input
                  type="search"
                  className="w-40 lg:w-56 h-10"
                  placeholder="Search for a player"
                  aria-label="Search"
                />
              </div>
              
              {/* Theme toggle - always visible */}
              <div className="flex-shrink-0">
                <ThemeToggleButton />
              </div>
              
              {/* Mobile menu button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[80%] sm:w-[350px] ">
                  <SheetTitle></SheetTitle>
                  <div className="py-4">
                    <Link href="/home" className="flex items-center mb-6">
                      <Image
                        src="/images/icon/fenida.png"
                        width={100}
                        height={100}
                        className="object-contain h-8"
                        alt="Fenida Logo"
                      />
                    </Link>
                    
                    {/* Mobile search */}
                    <div className="relative mb-6">
                      <Input
                        type="search"
                        className="w-full"
                        placeholder="Search for a player"
                        aria-label="Search"
                      />
                    </div>
                    
                    {/* Mobile navigation */}
                    <nav className="space-y-4">
                      <Link
                        href="#"
                        className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                      >
                        Dashboard
                      </Link>
                      <Link
                        href=""
                        className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                      >
                        Team
                      </Link>
                      <Link
                        href="#"
                        className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                      >
                        Players
                      </Link>
                      <Link
                        href="#"
                        className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                      >
                        Coaches
                      </Link>
                      <Link
                        href="#"
                        className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                      >
                        Survey
                      </Link>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header