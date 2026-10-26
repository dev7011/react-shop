♦️ create project
  npx create-react-app react-shop
  cd react-shop

♦️ build / start
    npm run build
    npm start

https://v3.tailwindcss.com/docs/customizing-colors
https://tailwindcss.com/docs/columns

♦️tailwind implementieren
  nano tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
         colors: {
            primary: "#FF0000"
          } 
      },
    },
    plugins: [],
    }

 nano index.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;