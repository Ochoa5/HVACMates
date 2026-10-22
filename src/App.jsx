import { useState } from 'react'
import { calculateDuctSizes } from './utils/ductCalculations.js'

function App() {
  const [inputMode, setInputMode] = useState('air')
  const [width, setWidth] = useState(400)
  const [height, setHeight] = useState(300)
  const [insulationType, setInsulationType] = useState('internal')
  const [insulationThickness, setInsulationThickness] = useState(25)
  const [sheetThickness, setSheetThickness] = useState(0.7)

  const sizes = calculateDuctSizes({
    inputMode: inputMode,
    width: width,
    height: height,
    insulationType: insulationType,
    insulationThickness: insulationThickness,
    sheetThickness: sheetThickness,
  })

  return (
    <main>
      <h1>HVACMates</h1>
      <p>Diseño de ductos rectangulares para aire acondicionado</p>

      <h2>Medidas del ducto</h2>

      <p>
        <label>
          Medida ingresada
          <br />
          <select value={inputMode} onChange={(event) => setInputMode(event.target.value)}>
            <option value="air">Paso de aire (interior)</option>
            <option value="outside">Exterior total</option>
          </select>
        </label>
      </p>

      <p>
        <label>
          Ancho (mm)
          <br />
          <input
            type="number"
            value={width}
            onChange={(event) => setWidth(Number(event.target.value))}
          />
        </label>
      </p>

      <p>
        <label>
          Alto (mm)
          <br />
          <input
            type="number"
            value={height}
            onChange={(event) => setHeight(Number(event.target.value))}
          />
        </label>
      </p>

      <p>
        <label>
          Tipo de aislación
          <br />
          <select value={insulationType} onChange={(event) => setInsulationType(event.target.value)}>
            <option value="none">Sin aislación</option>
            <option value="internal">Interior</option>
            <option value="external">Exterior</option>
          </select>
        </label>
      </p>

      <p>
        <label>
          Espesor de aislación (mm)
          <br />
          <input
            type="number"
            value={insulationThickness}
            onChange={(event) => setInsulationThickness(Number(event.target.value))}
          />
        </label>
      </p>

      <p>
        <label>
          Espesor de lámina
          <br />
          <select value={sheetThickness} onChange={(event) => setSheetThickness(Number(event.target.value))}>
            <option value="0.55">0,55 mm (calibre 26)</option>
            <option value="0.6">0,6 mm</option>
            <option value="0.7">0,7 mm (calibre 24)</option>
            <option value="0.8">0,8 mm</option>
            <option value="0.85">0,85 mm (calibre 22)</option>
            <option value="1">1,0 mm (calibre 20)</option>
            <option value="1.2">1,2 mm</option>
            <option value="1.31">1,31 mm (calibre 18)</option>
          </select>
        </label>
      </p>

      <h2>Resultados (mm)</h2>

      <table>
        <thead>
          <tr>
            <th>Medida</th>
            <th>Ancho</th>
            <th>Alto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paso de aire</td>
            <td>{sizes.air.width}</td>
            <td>{sizes.air.height}</td>
          </tr>
          <tr>
            <td>Lámina por dentro</td>
            <td>{sizes.sheetInside.width}</td>
            <td>{sizes.sheetInside.height}</td>
          </tr>
          <tr>
            <td><strong>Lámina por fuera (taller)</strong></td>
            <td><strong>{sizes.sheetOutside.width}</strong></td>
            <td><strong>{sizes.sheetOutside.height}</strong></td>
          </tr>
          <tr>
            <td>Exterior total</td>
            <td>{sizes.overall.width}</td>
            <td>{sizes.overall.height}</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default App