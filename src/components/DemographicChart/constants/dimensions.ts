export const CHART_DIMENSIONS = {
  height: 320,
  width: 560,
  padding: 80,
  nodeWidth: 20,
  flowWidth: 400  // Increased to match the space between nodes
} as const;

export const CHART_STYLES = {
  minNodeHeight: 20,
  cornerRadius: 3,
  baseOpacity: 0.3,
  maxOpacityBoost: 0.4,
  fontSize: {
    header: '0.875rem',
    label: '0.75rem',
    value: '0.675rem'
  },
  labelPadding: 12,
  nodePadding: 6
} as const;