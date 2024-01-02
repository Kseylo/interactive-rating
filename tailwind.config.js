/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    orange: 'hsl(25, 97%, 53%)',
                },
                neutral: {
                    'grey-light': 'hsl(217, 12%, 63%)',
                    'grey-medium': 'hsl(216, 12%, 54%)',
                    'blue-dark': 'hsl(213, 19%, 18%)',
                    'blue-very-dark': 'hsl(216, 12%, 8%)',
                },
            },
        },
    },
    plugins: [],
}
