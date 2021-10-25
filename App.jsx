import Cup from './Cup'
import useCups, { types } from './useCups'

const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date)
}

export const App = () => {
    const { cupValues, date, touched } = useCups()

    return (
        <div className="font-thin tracking-wide text-lg select-none">
            {cupValues ? (
                <>
                    <main className="text-center px-2">
                        <h1 className="text-4xl font-black mt-16">
                            Your 5 cups
                        </h1>
                        <p className="mt-4">{formatDate(date)}</p>
                        <p className="mt-2">
                            Fill them in based on how you feel.
                        </p>

                        <div className="grid grid-cols-5 gap-2 max-w-md sm:max-w-xl mx-auto my-12">
                            {types.map((type) => (
                                <Cup key={type} type={type} />
                            ))}
                        </div>

                        <div
                            className={
                                types.every((type) => touched[type])
                                    ? ''
                                    : 'hidden'
                            }
                        >
                            <h2 className="text-lg font-black">
                                Thank you for checking in!
                            </h2>
                            <p className="text-lg mt-2">
                                Now, what can you do for yourself in the next 5
                                minutes?
                            </p>
                        </div>
                    </main>

                    <footer className="flex justify-center items-center mt-12 pb-8">
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
