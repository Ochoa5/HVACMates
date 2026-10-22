import { calculateDuctSizes } from './utils/ductCalculations.js'

function App() {
  const internalCase = calculateDuctSizes({
    inputMode: 'air',
    width: 400,
    height: 400,
    insulationType: 'internal',
    insulationThickness: 25,
    sheetThickness: 1,
  })

  const externalCase = calculateDuctSizes({
    inputMode: 'air',
    width: 400,
    height: 400,
    insulationType: 'external',
    insulationThickness: 25,
    sheetThickness: 1,
  })

  const fromOutsideCase = calculateDuctSizes({
    inputMode: 'outside',
    width: 452,
    height: 452,
    insulationType: 'internal',
    insulationThickness: 25,
    sheetThickness: 1,
  })

  return (
    <main>
      <h1>HVACMates</h1>
      <p>Diseño de ductos rectangulares para aire acondicionado</p>

      <h3>Caso 1: paso de aire 400 × 400, aislación interior 25 mm, lámina 1 mm</h3>
      <p>Paso de aire: {internalCase.air.width} × {internalCase.air.height}</p>
      <p>Lámina por dentro: {internalCase.sheetInside.width} × {internalCase.sheetInside.height}</p>
      <p>Lámina por fuera (taller): {internalCase.sheetOutside.width} × {internalCase.sheetOutside.height}</p>
      <p>Exterior total: {internalCase.overall.width} × {internalCase.overall.height}</p>

      <h3>Caso 2: paso de aire 400 × 400, aislación exterior 25 mm, lámina 1 mm</h3>
      <p>Paso de aire: {externalCase.air.width} × {externalCase.air.height}</p>
      <p>Lámina por dentro: {externalCase.sheetInside.width} × {externalCase.sheetInside.height}</p>
      <p>Lámina por fuera (taller): {externalCase.sheetOutside.width} × {externalCase.sheetOutside.height}</p>
      <p>Exterior total: {externalCase.overall.width} × {externalCase.overall.height}</p>

      <h3>Caso 3: exterior total 452 × 452, aislación interior 25 mm, lámina 1 mm</h3>
      <p>Paso de aire: {fromOutsideCase.air.width} × {fromOutsideCase.air.height}</p>
      <p>Lámina por dentro: {fromOutsideCase.sheetInside.width} × {fromOutsideCase.sheetInside.height}</p>
      <p>Lámina por fuera (taller): {fromOutsideCase.sheetOutside.width} × {fromOutsideCase.sheetOutside.height}</p>
      <p>Exterior total: {fromOutsideCase.overall.width} × {fromOutsideCase.overall.height}</p>
    </main>
  )
}

export default App