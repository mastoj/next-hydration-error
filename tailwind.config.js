module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [1, 2, 3, 4, 5, 6, 7, 8].flatMap(num =>
        ["", "sm", "md", "lg"].flatMap(breakpoint =>
            ["col", "row"].flatMap(direction =>
                breakpoint ? `${breakpoint}:${direction}-start-${num}` : `${direction}-start-${num}`,
            )
        )),
    theme: {
        extend: {
            fontSize: {
                "tiny": ["0.6rem", "0.75rem"],
            },
            fontFamily: {
                elkjop: ["OpenSans-Regular", "sans-serif"],
                "elkjop-text": ["ElkjopBodytext", "sans-serif"],
                "elkjop-regular": ["ElkjopBodytext-Regular", "sans-serif"],
                "elkjop-bold": ["ElkjopBodytext-DemiBold", "sans-serif"],
                "elkjop-header": ["ElkjopHeadline-Regular", "sans-serif"],
            },
            transitionProperty: {
                'border': 'border,border-radius,box-shadow,background-color',
            },
            colors: {
                petroleum: {
                    light: '#03374C',
                    dark: '#022030',
                },
                accept: {
                    DEFAULT: '#5C9E5E',
                    dark: '#6DAF4F',
                },
                brand: {
                    DEFAULT: "#1A1E64",
                    neutral: "#1A1E64",
                    light: "#2B31A5",
                    dark: "#0E1137"
                },
                accent: {
                    DEFAULT: "#6AA334",
                    neutral: "#6AA334",
                    light: "#7EC23E",
                    dark: "#4E7826"
                },
                primary: {
                    DEFAULT: "#242424",
                    neutral: "#242424",
                    dark: "#080808",
                    light: "#4D4D4D",
                    'extra-light': "#767676"
                },
                secondary: {
                    DEFAULT: "#F8F8F8",
                    neutral: "#F8F8F8",
                    dark: "#C0C0C0",
                    light: "#FFFFFF",

                    //  'neutral-inverted': colors.gray["800"],
                    //  'dark-inverted': colors.gray["900"],
                    //  'light-inverted': colors.gray["700"],
                },
                warning: {
                    DEFAULT: "#dd4b39",
                    neutral: "#dd4b39",
                    light: "#eea59c"
                },
                success: {
                    DEFAULT: "#00a65a",
                    neutral: "#00a65a",
                    light: "#53ffb0"
                }
            }
        }
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
};
