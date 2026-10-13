/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          main: '#0B0D12',
          secondary: '#11151D',
          card: '#151A24',
          subtle: '#1C2230',
        },
        accent: {
          blue: '#5B8CFF',
          blueLight: '#8AB4FF',
          blueDark: '#3A6BE6',
          blueMuted: 'rgba(91, 140, 255, 0.12)',
        },
        content: {
          primary: '#F3F5F9',
          secondary: '#A1A8B7',
          muted: '#6E7687',
        },
        border: {
          subtle: '#252C39',
          highlight: 'rgba(91, 140, 255, 0.3)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(91, 140, 255, 0.15)',
        'glow-md': '0 0 25px -4px rgba(91, 140, 255, 0.25)',
        'glow-lg': '0 0 40px -6px rgba(91, 140, 255, 0.35)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
