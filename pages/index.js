import Head from 'next/head'
import Image from 'next/image'

import Cup from '../components/Cup'

export default function Home() {
    const types = ['Physical', 'Emotional', 'Social', 'Cognitive', 'Spiritual']

    return (
        <div className="font-thin tracking-wide text-sm">
            <Head>
                <title>5 cups</title>
            </Head>

            <main className="text-center">
                <h1 className="text-4xl font-black my-16">5 cups</h1>

                <div className="grid grid-cols-5 gap-2 max-w-xl mx-auto px-2">
                    {types.map((type) => (
                        <Cup type={type} key={type} />
                    ))}
                </div>
            </main>

            <footer className="flex justify-center items-center mt-32">
                <a href="https://29k.org" className="flex items-center">
                    Inspired by
                    <div className="ml-2 flex items-center">
                        <Image
                            src="/29k.jpg"
                            alt="29k Logo"
                            width={32}
                            height={32}
                        />
                    </div>
                </a>
            </footer>
        </div>
    )
}
