import { useState } from 'react'

export default function Cup({ type, defaultValue = 30 }) {
    const [value, setValue] = useState(defaultValue)

    const handleClick = (e) => {
        const rect = e.target.getBoundingClientRect()
        const elementY = e.clientY - rect.top
        const updated = Math.round(
            ((rect.height - elementY) / rect.height) * 100,
        )

        setValue(updated)
    }

    return (
        <div className="flex flex-col items-center">
            <div
                className="h-24 w-14 2xs:h-24 2xs:w-16 sm:h-32 sm:w-20 bg-white shadow-md rounded-md mb-4 flex flex-col justify-end"
                onClick={handleClick}
            >
                {value ? (
                    <div
                        className="bg-blue-400 rounded-t-none rounded-b-md shadow-sm transition-all duration-[250ms] ease-out"
                        style={{ height: value + '%' }}
                    />
                ) : null}
            </div>
            {type}
        </div>
    )
}
