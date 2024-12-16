export const CHART_DIMENSIONS = {
  height: 384, // Increased by 20%
  width: 552,  // Increased by 20%
  padding: 30, // Reduced from 40
  nodeWidth: 20, // Reduced from 24
  flowWidth: 408 // Increased by 20%
} as const;

export const CHART_STYLES = {
  minNodeHeight: 20, // Reduced from 24
  cornerRadius: 3,
  baseOpacity: 0.3,
  maxOpacityBoost: 0.4,
  fontSize: {
    header: '1rem',
    label: '0.875rem',
    value: '0.75rem'
  },
  labelPadding: 8 // Reduced from 12
} as const;