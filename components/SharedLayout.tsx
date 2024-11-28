import React from "react"
import ThemeProvider from "./ThemeProvider"
import Navbar from "./Navbar"

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="fixed inset-0 flex justify-center sm:px-8">
                <div className="w-full flex max-w-7xl lg:px-8">
                    <div className="bg-white shadow w-full ring-2 ring-purple-500 dark:bg-gray-900 dark:ring-zinc-300" />
                </div>
            </div>
            <div className="relative flex justify-center flex-col w-full">
                <Navbar />
                <div className="relative max-w-2xl mx-auto mt-20 sm:px-12 lg:max-w-4xl px-4">
                    {children}
                </div>
            </div>
        </ThemeProvider>
    )
}

export default SharedLayout