const defaultTheme = require('tailwindcss/defaultTheme')

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
    plugins: [],
}
