/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,vue}"],
    theme: {
        extend: {
            colors: {
                primaryColor: "#40196d",
                primaryLight: "#DFE3FF"
            },
        },
    },
    darkMode: "media",
    plugins: [],
};
