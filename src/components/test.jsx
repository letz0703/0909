const [cell, setCell] = useState("")

const handleCellChange = event => {
  setCell(event.target.value)
}

return (
  <form>
    <label>
      cell
      <input type="tel" value={cell} onChange={handleCellChange} />
    </label>
  </form>
)
