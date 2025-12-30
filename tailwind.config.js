export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "Plus Jakarta Sans",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "sans-serif",
                ],
            },
            colors: {
                primary: "#2563eb",
            },
        },
    },
    plugins: [],
};
