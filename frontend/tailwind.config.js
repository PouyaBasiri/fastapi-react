import rtl from 'tailwindcss-rtl';
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [rtl]
}
