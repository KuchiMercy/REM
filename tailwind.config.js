/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'homeCover': 'url(./src/assets/images/coverF.jpg)',
        'aboutImage': 'url(./src/assets/images/aboutImage.png)',
        'tunji': 'url(./src/assets/images/tunji.png)',
        'dayo': 'url(./src/assets/images/pst_dayo.png)',
        'adekeye': 'url(./src/assets/images/pst-adekeye.png)',
        'balogun': 'url(./src/assets/images/balogun.png)',
        'prayer': 'url(./src/assets/images/prayer1.png)',
        'contact': 'url(./src/assets/images/contact-cover.png)',
        'event': 'url(./src/assets/images/event.jpg)'

        
      }
    },
  },
  plugins: [],
};
