import { useState, createContext } from 'react'

export const GlobalContext = createContext()

export const types = [
    'physical',
    'emotional',
    'social',
    'cognitive',
    'spiritual',
]

function GlobalState({ children }) {
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

    return (
        <GlobalContext.Provider
            value={{
                cupValues,
                setCupValue,
                setCupValues,
                date,
                setDate,
                touched,
                resetCupValues,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState
