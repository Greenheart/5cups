import { useRef, useState } from 'react'

export default function Cup({ type, defaultValue }) {
    const [value, setValue] = useState(defaultValue)
    const cupRef = useRef(null)

    const handleClick = (e) => {
        cupRef.current.getBoundingClientRect()
        const rect = cupRef.current.getBoundingClientRect()
        const elementY = e.clientY - rect.top
        const updated = Math.round(
            ((rect.height - elementY) / rect.height) * 100,
        )

        setValue(updated)
    }

    // IDEA: add possibility to drag to change the value quickly with touch devices
    return (
        <div className="flex flex-col items-center capitalize-first">
            <div
                className="h-24 w-14 2xs:h-24 2xs:w-16 sm:h-32 sm:w-20 bg-white shadow-md rounded-md mb-4 flex flex-col justify-end cursor-pointer hover:shadow-lg"
                ref={cupRef}
                onPointerDown={handleClick}
            >
                <span
                    className="bg-blue-400 rounded-t-none rounded-b-md shadow-sm transition-all duration-[250ms] ease-out"
                    style={{ height: (value ? value : 0.00001) + '%' }}
                />
            </div>
            {type}
        </div>
    )
}
