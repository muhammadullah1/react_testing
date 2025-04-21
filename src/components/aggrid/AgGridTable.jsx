import { AgGridReact } from 'ag-grid-react'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'
ModuleRegistry.registerModules([AllCommunityModule])

import { useState, useRef, useEffect, useMemo, useCallback } from 'react'

function AgGridTable() {
  const gridRef = useRef()
  const [rowData, setRowData] = useState()
  const [columnDefs] = useState([
    { field: 'athlete' },
    { field: 'year', filter: true, filterParams: { title: 'Bonkers!' } },
    { field: 'age', filter: true, filterParams: { title: 'Flippers!' } },
    { field: 'country' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ])

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData))
  }, [])

  return (
    <div className='ag-theme-quartz' style={{ height: '100%' }}>
      <div style={{ height: '100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          ref={gridRef}
          animateRows={true}
        />
      </div>
    </div>
  )
}

export default AgGridTable
