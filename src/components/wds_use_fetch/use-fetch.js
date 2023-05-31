import {useState, useEffect} from "react";

export function useFetch(url){

	const [data, setData] = useState()
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);


	//function

	useEffect(() => {
		setData(undefined)
		setIsError(false)
		setIsLoading(true)
		fetch(url).then(res => res.json).then(setData).catch()
	}, [url])

	return { data, isError, isLoading }
};