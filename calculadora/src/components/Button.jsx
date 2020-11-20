import React from "react";
import "./Button.css";

const button = (props) => {
	let classes = "button ";
	classes += 'button props.operation ? "operation" : ""';
	classes += 'button props.double ? "double" : ""';
	classes += 'button props.triple ? "triple" : ""';

	return (
		<button
			onClick={(e) => props.click && props.click(props.label)}
			className={classes}
		>
			{props.label}
		</button>
	);
};

export default button;
