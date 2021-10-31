module.exports = {
   mode: "jit",
   purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         fontFamily: {
            'body': ['"Comic Sans MS"', '"Comic Sans"', '"cursive"' ]
         }
      },
   },
   variants: {
      extend: {},
   },
   plugins: [
     require('@tailwindcss/typography'),
     require('@tailwindcss/forms'),
     require('@tailwindcss/aspect-ratio')
   ]
};
