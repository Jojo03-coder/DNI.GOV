module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep institutional navy
        primary: {
          50: "#F0F4F8", // Very light navy
          100: "#D9E2EC", // Light navy
          200: "#BCCCDC", // Medium light navy
          300: "#9FB3C8", // Medium navy
          400: "#829AB1", // Medium dark navy
          500: "#627D98", // Base navy
          600: "#486581", // Dark navy
          700: "#334E68", // Darker navy
          800: "#243B53", // Very dark navy
          900: "#1B365D", // Deep institutional navy
          DEFAULT: "#1B365D", // Deep institutional navy
        },
        // Secondary Colors - Supporting navy
        secondary: {
          50: "#F1F5F9", // Very light supporting navy
          100: "#E2E8F0", // Light supporting navy
          200: "#CBD5E0", // Medium light supporting navy
          300: "#A0AEC0", // Medium supporting navy
          400: "#718096", // Medium dark supporting navy
          500: "#4A5568", // Base supporting navy
          600: "#2E5984", // Supporting navy
          700: "#2C5282", // Dark supporting navy
          800: "#2A4365", // Very dark supporting navy
          900: "#1A365D", // Deepest supporting navy
          DEFAULT: "#2E5984", // Supporting navy
        },
        // Accent Colors - Strategic red
        accent: {
          50: "#FEF2F2", // Very light red
          100: "#FEE2E2", // Light red
          200: "#FECACA", // Medium light red
          300: "#FCA5A5", // Medium red
          400: "#F87171", // Medium dark red
          500: "#EF4444", // Base red
          600: "#DC2626", // Dark red
          700: "#C41E3A", // Strategic red
          800: "#991B1B", // Very dark red
          900: "#7F1D1D", // Deepest red
          DEFAULT: "#C41E3A", // Strategic red
        },
        // Background Colors
        background: "#FAFBFC", // Clean canvas
        surface: "#F1F3F5", // Subtle elevation
        // Text Colors
        text: {
          primary: "#1A1D23", // Extended reading
          secondary: "#4A5568", // Clear hierarchy
        },
        // Status Colors
        success: {
          50: "#F0FDF4", // Very light green
          100: "#DCFCE7", // Light green
          200: "#BBF7D0", // Medium light green
          300: "#86EFAC", // Medium green
          400: "#4ADE80", // Medium dark green
          500: "#22C55E", // Base green
          600: "#16A34A", // Dark green
          700: "#15803D", // Darker green
          800: "#22543D", // Mission accomplished
          900: "#14532D", // Deepest green
          DEFAULT: "#22543D", // Mission accomplished
        },
        warning: {
          50: "#FFFBEB", // Very light yellow
          100: "#FEF3C7", // Light yellow
          200: "#FDE68A", // Medium light yellow
          300: "#FCD34D", // Medium yellow
          400: "#FBBF24", // Medium dark yellow
          500: "#F59E0B", // Base yellow
          600: "#D97706", // Dark yellow
          700: "#B7791F", // Security alert
          800: "#92400E", // Very dark yellow
          900: "#78350F", // Deepest yellow
          DEFAULT: "#B7791F", // Security alert
        },
        error: {
          50: "#FEF2F2", // Very light error red
          100: "#FEE2E2", // Light error red
          200: "#FECACA", // Medium light error red
          300: "#FCA5A5", // Medium error red
          400: "#F87171", // Medium dark error red
          500: "#EF4444", // Base error red
          600: "#DC2626", // Dark error red
          700: "#C53030", // Critical attention
          800: "#991B1B", // Very dark error red
          900: "#7F1D1D", // Deepest error red
          DEFAULT: "#C53030", // Critical attention
        },
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // Clean borders
          accent: "#C41E3A", // Strategic borders
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'], // Body text
        headline: ['Inter', 'sans-serif'], // Headlines
        body: ['Source Sans Pro', 'sans-serif'], // Body text
        accent: ['Source Serif Pro', 'serif'], // Accents
        inter: ['Inter', 'sans-serif'], // Inter font
        'source-sans': ['Source Sans Pro', 'sans-serif'], // Source Sans Pro
        'source-serif': ['Source Serif Pro', 'serif'], // Source Serif Pro
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }], // 56px
        'display': ['3rem', { lineHeight: '1.2', fontWeight: '700' }], // 48px
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }], // 40px
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }], // 32px
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }], // 24px
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }], // 20px
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }], // 12px
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(27, 54, 93, 0.08)', // Subtle elevation
        'medium': '0 6px 16px rgba(27, 54, 93, 0.12)', // Medium elevation
        'strong': '0 8px 24px rgba(27, 54, 93, 0.16)', // Strong elevation
        'card': '0 4px 12px rgba(27, 54, 93, 0.08)', // Card shadow
        'card-hover': '0 6px 16px rgba(27, 54, 93, 0.12)', // Card hover shadow
      },
      borderRadius: {
        'card': '0.75rem', // 12px
        'button': '0.5rem', // 8px
        'input': '0.5rem', // 8px
      },
      spacing: {
        '18': '4.5rem', // 72px
        '88': '22rem', // 352px
        '128': '32rem', // 512px
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'slide-down': 'slideDown 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-out',
      },
    },
  },
  plugins: [],
}