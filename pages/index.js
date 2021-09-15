import Head from 'next/head'
import { useEffect, useState } from 'react'

import Cup from '../components/Cup'

const defaultValue = 0.00001
const types = ['physical', 'emotional', 'social', 'cognitive', 'spiritual']

const createEntry = () => {
    const entry = { date: new Date() }

    for (const type of types) {
        entry[type] = defaultValue
    }
    return entry
}

const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date)
}

export default function Home() {
    const [entry, setEntry] = useState()

    useEffect(() => {
        setEntry(createEntry())
    }, [])

    // const handleCheckIn = () => {
    //     let entries = []
    //     try {
    //         entries = JSON.parse(localStorage.entries)
    //     } catch (_) {}

    //     entries.push({
    //         ...entry,
    //         date: entry.date.toISOString(),
    //     })

    //     localStorage.entries = JSON.stringify(entries)

    //     // Reset current entry
    //     setEntry(createEntry())
    // }

    return (
        <div className="font-thin tracking-wide text-sm sm:text-base md:text-lg select-none">
            <Head>
                <title>5 cups</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, user-scalable=no width=device-width"
                />
            </Head>

            {entry ? (
                <>
                    <main className="text-center">
                        <h1 className="text-4xl font-black mt-16">
                            Your 5 cups
                        </h1>
                        <p className="my-4 h-4 text-sm">
                            {entry && entry.date
                                ? formatDate(entry.date)
                                : null}
                        </p>
                        <p className="my-4 h-5">
                            Fill them in based on how you feel.
                        </p>

                        <div className="grid grid-cols-5 gap-2 max-w-md sm:max-w-xl mx-auto px-2 mt-12">
                            {types.map((type) => (
                                <Cup
                                    type={type}
                                    key={type}
                                    defaultValue={entry[type]}
                                    value={entry[type]}
                                />
                            ))}
                        </div>

                        {/* <button
                            className="py-3 px-12 bg-green-400 rounded-md mt-12 active:bg-green-500 font-bold tracking-wide text-base"
                            onClick={handleCheckIn}
                        >
                            Check in
                        </button> */}
                        {/* <button
                            className="block mx-auto py-1 px-4 bg-red-400 rounded-md mt-12 active:bg-red-500 font-bold tracking-wide text-sm"
                            onClick={() => (localStorage.entries = '')}
                        >
                            Reset entry
                        </button> */}
                    </main>

                    {/* IDEA: Add save button, which adds current entry to localStorage with timestamp and teh 5 cup values */}
                    {/* IDEA: Make it possible to expand a list with previous entries */}
                    {/* IDEA: When clicking a previous entry, the state from those cups are shown */}
                    {/* IDEA: When clicking a previous entry, the date and time for the entry is shown below the heading (without affecting layout) */}

                    {/* IDEA: Add short text about checking in based on how you feel */}
                    {/* IDEA: The save button should have the copy "Check in" */}

                    <footer className="flex justify-center items-center mt-32">
                        <a href="https://29k.org" className="flex items-center">
                            Inspired by
                            <div className="ml-2 flex items-center">
                                <img
                                    src="./29k.jpg"
                                    alt="29k Logo"
                                    rel="preload"
                                    width={32}
                                    height={32}
                                />
                            </div>
                        </a>
                    </footer>
                </>
            ) : null}
        </div>
    )
}
