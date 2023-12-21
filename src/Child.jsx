export function Child() {
  useEffect(() => {
    throw new Error("Component")
  }, [])
  return <h1>Child</h1>
}
