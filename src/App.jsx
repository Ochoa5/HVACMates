import { calculateDuctSizes } from './utils/ductCalculations.js'

function App() {
  const internalResult = calculateDuctSizes(400, 300, 'internal', 25)
  const externalResult = calculateDuctSizes(400, 300, 'external', 25)

  return (
    <main>
      <h1>HVACMates</h1>
      <p>Diseño de ductos rectangulares para aire acondicionado</p>

      <h2>Prueba: paso de aire 400 × 300 mm, aislación de 25 mm</h2>

      <h3>Aislación interior</h3>
      <p>Paso de aire: {internalResult.air.width} × {internalResult.air.height} mm</p>
      <p>Lámina: {internalResult.sheet.width} × {internalResult.sheet.height} mm</p>
      <p>Exterior: {internalResult.outside.width} × {internalResult.outside.height} mm</p>

      <h3>Aislación exterior</h3>
      <p>Paso de aire: {externalResult.air.width} × {externalResult.air.height} mm</p>
      <p>Lámina: {externalResult.sheet.width} × {externalResult.sheet.height} mm</p>
      <p>Exterior: {externalResult.outside.width} × {externalResult.outside.height} mm</p>
    </main>
  )
}

export default App