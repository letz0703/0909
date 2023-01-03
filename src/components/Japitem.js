import {useState,useEffect, useContext} from "react";
import {japitemContext} from "./App";

export default function japitem(props) {
	const {handleJapitemDelete} = useContext(JapitemContext);
	const {id,name, cookTime, servings, instruction, ingredients} = props
	return (
		<div className="japitem">
			<div className="japitem__header">
				<h3 className="japitem__title">name</h3>
				<div>
					<button className="btn-gradient blue mini">Add</button>
					<button className="btn-gradient gray mini" onClick={()=>handleJapitemDelete(id)}>Delete</button>
				</div>
			</div>
			<div className="japitem__row">
				<span className="japitem__label">Price:</span>
				<span className="japitem__value">1990</span>
			</div>
			<div className="japitem__row">
				<span className="japitem__label">Category: </span>
				<span className="japitem__value"> category</span>
			</div>
			<div className="japitem__row">
				<span className="japitem__label">description</span>
				<div className="japitem__value japitem__value--indented japitem__instructions">
					discription
				</div>
			</div>
			<div className="japitem__row">
				<span className="japitem__label">Opitons: </span>
				<div className="japitem__value japitem__value--indented">
					<Options options={options}/>
				</div>
			</div>
		</div>
	)
}
