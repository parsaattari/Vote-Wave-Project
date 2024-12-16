interface NodePosition {
  y: number;
  height: number;
  value: number;
}

export const calculateNodePositions = (
  data: { value: number }[],
  height: number,
  padding: number
): NodePosition[] => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentY = padding;
  const spacing = 8; // Increased spacing between nodes
  const availableHeight = height - padding * 2 - (data.length - 1) * spacing;
  
  return data.map(item => {
    const nodeHeight = Math.max((item.value / total) * availableHeight, 20);
    const position = currentY;
    currentY += nodeHeight + spacing;
    return {
      y: position,
      height: nodeHeight,
      value: item.value
    };
  });
};

export const generateFlowPath = (
  sourceY: number,
  sourceHeight: number,
  targetY: number,
  targetHeight: number,
  width: number,
  sourceValue: number,
  targetValue: number
): string => {
  const sourceX = 0;
  const targetX = width;
  const controlPoint1X = width * 0.35;
  const controlPoint2X = width * 0.65;
  
  const sourceControlY = sourceY + sourceHeight / 2;
  const targetControlY = targetY + targetHeight / 2;
  
  return `
    M ${sourceX} ${sourceY}
    C ${controlPoint1X} ${sourceY},
      ${controlPoint2X} ${targetY},
      ${targetX} ${targetY}
    L ${targetX} ${targetY + targetHeight}
    C ${controlPoint2X} ${targetY + targetHeight},
      ${controlPoint1X} ${sourceY + sourceHeight},
      ${sourceX} ${sourceY + sourceHeight}
    Z
  `;
};