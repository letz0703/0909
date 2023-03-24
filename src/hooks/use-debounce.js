import { useState, useEffect } from "react"

//function here

export default function useDebounce(callback, delay, dependencies) {
	const { reset, clear} = useTimeout(callback, delay)
	useEffect(reset, [...dependencies])
	useEffect(clear, [])
}
/**
 * https://bit.ly/3TxInb6 wds
 */