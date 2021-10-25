import { useState } from 'preact/compat'

export const types = [
    'physical',
    'emotional',
    'social',
    'cognitive',
    'spiritual',
]

export default function useCups() {
    function getDefaultCupValues(defaultValue = 1) {
        return types.reduce((cupValues, type) => {
            cupValues[type] = defaultValue
            return cupValues
        }, {})
    }

    const [cupValues, setCupValues] = useState(getDefaultCupValues())
    const [touched, setTouched] = useState(getDefaultCupValues(false))
    const [date, setDate] = useState(new Date())

    function setCupValue(type, value) {
        setCupValues({
            ...cupValues,
            [type]: value,
        })
        setTouched({
            ...touched,
            [type]: true,
        })
    }

    function resetCupValues() {
        setCupValues(getDefaultCupValues())
        setTouched(getDefaultCupValues(false))
    }

    return {
        cupValues,
        setCupValue,
        setCupValues,
        date,
        setDate,
        touched,
        resetCupValues,
    }
}
