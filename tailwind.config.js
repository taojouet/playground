/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'white': '#ffffff',
                'black': '#000000',
                'dark-blue': '#264653',
                'green': '#2A9D8F',
                'yellow': '#E9C46A',
                'orange': '#F4A261',
                'dark-orange': '#E76F51'
            },
        },
    },
    plugins: [],
}