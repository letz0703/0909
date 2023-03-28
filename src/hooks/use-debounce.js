import { useState, useEffect } from "react"
import useTimeout from "./use-timeout"

//function here

export default function useDebounce(callback, delay, dependencies) {
	const { reset, clear} = useTimeout(callback, delay)
	useEffect(reset, [...dependencies, reset])
	useEffect(clear, [])
}
/**
 * https://bit.ly/3TxInb6 wds 4:43
 */