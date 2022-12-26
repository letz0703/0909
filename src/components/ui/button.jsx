export default function Button({text, onClick}) {
  return (
    <button onClick={onClick} className="bg-brand rounded-xl hover:text-white">
      {text}
    </button>
  )
}
