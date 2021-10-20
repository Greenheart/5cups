import { useContext } from 'react'
import { SliderInput, SliderTrack, SliderRange } from '@reach/slider'
import '@reach/slider/styles.css'

import { GlobalContext } from '../GlobalState'

export default function Cup({ type }) {
    const { cupValues, setCupValue } = useContext(GlobalContext)

    return (
        <SliderInput
            key={type}
            orientation="vertical"
            min={1}
            max={100}
            step={1}
            className="!h-24 !w-14 !2xs:h-24 !2xs:w-16 !sm:h-32 !sm:w-20 shadow-md rounded-md overflow-hidden"
            onChange={(value) => setCupValue(type, value)}
            value={cupValues[type]}
        >
            <SliderTrack className="!bg-white">
                <SliderRange className="!bg-blue-400 transition-all duration-[250ms] ease-out !rounded-t-none !rounded-b-md" />
            </SliderTrack>
        </SliderInput>
    )
}
