/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      axiforma: ["Axiforma", "system-ui"],
      anglecia: ["Anglecia Pro Display", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
      redhat: ["Red Hat Text", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        backImg: "url('/background.png')",
        backCube: "url('/cube2.png')",
        backSpec: "url('/spec2.png')",
        backCone: "url('/cone2.png')",
        backVpn: "url('/choosePlan.png')",
        backMoon: "url('/moon.png')",
        backMoonFooter: "url('/moonFooter.svg')",
        backMoonFooterMobile: "url('/moonFooterMobile.png')",
        backMoonFooter2: "url('/moonFooter2.png')",
        backSubscribe: "url('/subscribeBack.png')",
        back404: "url('/404Page.png')",
        back404Man: "url('/404Man.png')",
        backComingSoon: "url('/ComingSoonBg.svg')",
        backGalaxyComingMobile: "url('/galaxyComingMobile.png')",
        backGridLine: "url('/gridLine.svg')",
        backGalaxyComing: "url('/galaxyComing.png')",
        backManWalkMoon: "url('/manWalkMoon.svg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
};
