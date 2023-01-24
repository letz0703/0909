export default function Wait (duration) {
	return new Promise(resolve => setTimeout(resolve, duration))
}