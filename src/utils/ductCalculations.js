function round(value) {
  return Math.round(value * 10) / 10
}

export function calculateDuctSizes(duct) {
  let insideInsulation = 0
  let outsideInsulation = 0

  if (duct.insulationType === 'internal') {
    insideInsulation = 2 * duct.insulationThickness
  }

  if (duct.insulationType === 'external') {
    outsideInsulation = 2 * duct.insulationThickness
  }

  const metal = 2 * duct.sheetThickness
  const totalExtra = insideInsulation + metal + outsideInsulation

  let airWidth = duct.width
  let airHeight = duct.height

  if (duct.inputMode === 'outside') {
    airWidth = duct.width - totalExtra
    airHeight = duct.height - totalExtra
  }

  return {
    air: {
      width: round(airWidth),
      height: round(airHeight),
    },
    sheetInside: {
      width: round(airWidth + insideInsulation),
      height: round(airHeight + insideInsulation),
    },
    sheetOutside: {
      width: round(airWidth + insideInsulation + metal),
      height: round(airHeight + insideInsulation + metal),
    },
    overall: {
      width: round(airWidth + totalExtra),
      height: round(airHeight + totalExtra),
    },
  }
}