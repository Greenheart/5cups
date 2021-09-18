import Head from 'next/head'
import { useContext } from 'react'

import Cup from '../components/Cup'
import { types, GlobalContext } from '../GlobalState'

const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date)
}

export default function Home() {
    const { cupValues, date, resetCupValues } = useContext(GlobalContext)

    const handleCheckIn = () => {
        let entries = []
        try {
            entries = JSON.parse(localStorage.entries)
        } catch (_) {}

        entries.push({
            ...cupValues,
            date: new Date().toISOString(),
        })

        localStorage.entries = JSON.stringify(entries)

        // Reset current entry
        resetCupValues()
    }

    // const csv = `
    // physical;emotional;social;cognitive;spiritual;date;
    // 73;23;34;57;12;2021-09-18T14:34:34.445Z;
    // `

    return (
        <div className="font-thin tracking-wide text-sm sm:text-base md:text-lg select-none">
            <Head>
                <title>5 cups</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, user-scalable=no width=device-width"
                />
            </Head>

            {cupValues ? (
                <>
                    <main className="text-center">
                        <h1 className="text-4xl font-black mt-16">
                            Your 5 cups
                        </h1>
                        <p className="my-4 h-4 text-sm">{formatDate(date)}</p>
                        <p className="my-4 h-5">
                            Fill them in based on how you feel.
                        </p>

                        <div className="grid grid-cols-5 gap-2 max-w-md sm:max-w-xl mx-auto px-2 mt-12">
                            {types.map((type) => (
                                <Cup
                                    type={type}
                                    key={type}
                                    value={cupValues[type]}
                                />
                            ))}
                        </div>

                        <button
                            className="py-3 px-12 bg-green-400 rounded-md mt-12 active:bg-green-500 font-bold tracking-wide text-base"
                            onClick={handleCheckIn}
                        >
                            Check in
                        </button>
                        {process.env.NODE_ENV !== 'production' ? (
                            <button
                                className="block mx-auto py-1 px-4 bg-red-400 rounded-md mt-4 active:bg-red-500 font-bold tracking-wide text-sm"
                                onClick={() => (localStorage.entries = '')}
                            >
                                Reset entries
                            </button>
                        ) : null}
                    </main>

                    {/* IDEA: Make it possible to expand a list with previous entries */}
                    {/* IDEA: When clicking a previous entry, the state from those cups are shown */}
                    {/* IDEA: When clicking a previous entry, the date and time for the entry is shown below the heading (without affecting layout) */}
                    <footer className="flex justify-center items-center mt-32 pb-8">
                        <a href="https://29k.org" className="flex items-center">
                            Inspired by
                            <div className="ml-2 flex items-center">
                                <img
                                    src="./29k.jpg"
                                    alt="29k Logo"
                                    rel="preload"
                                    className="rounded-full"
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
