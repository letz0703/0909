import React, { useState } from "react"
import Papa from "papaparse"

const CSVtoJSONConverter = () => {
  const [csvFile, setCSVFile] = useState(null)
  const [jsonData, setJSONData] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setCSVFile(file)
  }

  const convertCSVtoJSON = () => {
    Papa.parse(csvFile, {
      header: true,
      complete: (results) => {
        setJSONData(results.data)
        downloadJSONFile(results.data)
      },
    })
  }

  const downloadJSONFile = (data) => {
    const filename = "convertedData.json"
    const jsonDataStr = JSON.stringify(data, null, 2)
    const blob = new Blob([jsonDataStr], { type: "application/json" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = filename
    link.click()

    URL.revokeObjectURL(url)
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={convertCSVtoJSON} className={`btn btn--primary`}>
        Convert
      </button>
      <div
        className={`btn btn--danger`}
        onClick={() =>
          window.open(
            "https://console.firebase.google.com/u/0/project/project-631666835521049928/database/project-631666835521049928-default-rtdb/data/~2Fjapitems"
          )
        }
      >
        Fire Base
      </div>
      {jsonData && <pre>{JSON.stringify(jsonData, null, 2)}</pre>}
    </div>
  )
}

export default CSVtoJSONConverter
