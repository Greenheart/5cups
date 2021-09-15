const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

const capitalizeFirst = plugin(function ({ addUtilities }) {
    const newUtilities = {
        '.capitalize-first:first-letter': {
            textTransform: 'uppercase',
        },
    }
    addUtilities(newUtilities, ['responsive', 'hover'])
})

module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false,
    theme: {
        screens: {
            '2xs': '400px',
            xs: '475px',
            ...defaultTheme.screens,
        },
    },
    variants: {},
    plugins: [capitalizeFirst],
}
