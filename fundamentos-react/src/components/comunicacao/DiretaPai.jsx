import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
	return (
		<div>
			<DiretaFilho texto='Duda' numero={9} bool={true} />
			<DiretaFilho texto='Caio' numero={4} bool={false} />
		</div>
	);
};
