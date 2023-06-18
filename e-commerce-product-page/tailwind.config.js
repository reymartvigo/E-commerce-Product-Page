/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      Orange: "hsl(26, 100%, 55%)",
      Paleorange: "hsl(25, 100%, 94%)",
      Verydarkblue: " hsl(220, 13%, 13%)",
      Darkgrayishblue: " hsl(219, 9%, 45%)",
      Darkgrayishblue2: " hsla(219, 9%, 45%,0.5)",
      Grayishblue: "hsl(220, 14%, 75%)",
      Lightgrayishblue: "hsl(223, 64%, 98%)",
      White: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [require("flowbite/plugin")],
};
