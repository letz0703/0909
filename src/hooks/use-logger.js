import {useState, useEffect} from "react";

export function useLogger(){
	const [value, setValue] = useState()

		useEffect(() => {
			console.log('value:',value)
		}, [value]);
	return { value, setValue }
};