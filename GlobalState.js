import { useState, createContext } from 'react'

export const GlobalContext = createContext()

export const defaultValue = 0.00001
export const types = [
    'physical',
    'emotional',
    'social',
    'cognitive',
    'spiritual',
]

function GlobalState() {
    function getDefaultCupValues() {
        return types.reduce((cupValues, type) => {
            cupValues[type] = defaultValue
            return cupValues
        }, {})
    }

    const [cupValues, setCupValues] = useState(getDefaultCupValues())
    const [date, setDate] = useState(new Date())

    function setCupValue(type, value) {
        setCupValues({
            ...cupValues,
            [type]: value,
        })
    }

    function resetCupValues() {
        setCupValues(getDefaultCupValues())
    }

    return (
        <GlobalContext.Provider
            value={{
                cupValues,
                setCupValue,
                setCupValues,
                date,
                setDate,
                resetCupValues,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState
