/**
 * WCAG Contrast Ratio Calculator Tool (Native Implementation)
 * 
 * Calculates the contrast ratio between two colors and provides accessibility verdicts.
 * 
 * @param {Object} fg - Foreground color {r, g, b, a} (0-1 range)
 * @param {Object} bg - Background color {r, g, b, a} (0-1 range)
 * @returns {Object} - { ratio: float, passes_AA: bool, passes_AA_large: bool, suggested_fix: hex }
 */
function calc_wcag_contrast(fg, bg) {
  const getLuminance = (color) => {
    const { r, g, b } = color;
    const components = [r, g, b].map(c => {
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * components[0] + 0.7152 * components[1] + 0.0722 * components[2];
  };

  const L1 = getLuminance(fg);
  const L2 = getLuminance(bg);

  const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);

  const passes_AA = ratio >= 4.5;
  const passes_AA_large = ratio >= 3.0;

  let suggested_fix = null;
  if (!passes_AA) {
    // Basic logic to step the color towards compliance
    // In a real implementation, this would iterate to find the nearest compliant shade
    suggested_fix = L2 > 0.5 ? "#000000" : "#FFFFFF"; 
  }

  return {
    ratio: parseFloat(ratio.toFixed(2)),
    passes_AA,
    passes_AA_large,
    suggested_fix
  };
}

module.exports = { calc_wcag_contrast };
