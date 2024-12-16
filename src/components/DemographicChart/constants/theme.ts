export const CHART_THEME = {
  colors: {
    text: {
      primary: 'rgb(31, 41, 55)',    // gray-800
      secondary: 'rgb(75, 85, 99)',   // gray-600
      accent: 'rgb(79, 70, 229)'      // indigo-600
    },
    background: {
      summary: 'rgb(238, 242, 255)'   // indigo-50
    }
  },
  transitions: {
    default: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)'
  }
} as const;