export function calculateDuctSizes(airWidth, airHeight, insulationType, insulationThickness) {
  const extra = 2 * insulationThickness

  if (insulationType === 'internal') {
    return {
      air: { width: airWidth, height: airHeight },
      sheet: { width: airWidth + extra, height: airHeight + extra },
      outside: { width: airWidth + extra, height: airHeight + extra },
    }
  }

  return {
    air: { width: airWidth, height: airHeight },
    sheet: { width: airWidth, height: airHeight },
    outside: { width: airWidth + extra, height: airHeight + extra },
  }
}