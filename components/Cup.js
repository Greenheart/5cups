import { useRef, useContext } from 'react'

import { GlobalContext } from '../GlobalState'

export default function Cup({ type }) {
    const { cupValues, setCupValue } = useContext(GlobalContext)
    const cupRef = useRef(null)

    const handleClick = (e) => {
        const rect = cupRef.current.getBoundingClientRect()
        const elementY = e.clientY - rect.top
        const updated = Math.round(
            ((rect.height - elementY) / rect.height) * 100,
        )

        setCupValue(type, updated)
    }

    // IDEA: add possibility to drag to change the value quickly with touch devices
    return (
        <div className="flex flex-col items-center">
            <div
                className="overflow-hidden h-24 w-14 2xs:h-24 2xs:w-16 sm:h-32 sm:w-20 bg-white shadow-md rounded-md mb-4 flex flex-col justify-end cursor-pointer"
                ref={cupRef}
                onPointerDown={handleClick}
            >
                <span
                    className="bg-blue-400 rounded-b-md shadow-sm transition-all duration-[250ms] ease-out"
                    style={{ height: cupValues[type] + '%' }}
                />
            </div>
            <span className="capitalize-first">{type}</span>
        </div>
    )
}
