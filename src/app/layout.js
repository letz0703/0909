//import type { Metadata } from "next"
import "./global.css"

export const metadata = {
	title: 'LETz',
	descirption: '깡통시장 가격정보'
}

export default function RootLayout({children} ) {
  return (
		<html lang="kr">
		<head>
			<title>깡통시장</title>
			<meta name="description" content="letz canmart"/>
		</head>
		<body>
			{/*<div id="root"></div>*/}
			{/*<script>
				console.log(window.location.pathname)
			</script>
			<script type="module" src="/src/main.jsx"></script>*/}
			<div className="child">{children}</div>
		</body>

		</html>)
}