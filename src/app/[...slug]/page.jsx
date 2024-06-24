import '../../index.css'
import {ClientOnly} from "./client"
//import logo from '../public/logo.svg'

export function generateStaticParams() {
  return [{ slug: [''] }]
}

export default function Page() {
  return (
		<>
		{/*<img src={logo.src}/>*/}
	<ClientOnly/>
		</>
	)
}