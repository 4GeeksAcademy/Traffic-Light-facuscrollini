import React from "react";
import TrafficLight from './TrafficLight'

//create your first component
const Home = () => {
	return (<>
		<div className="container text-center d-flex justify-content-center my-5">
		<TrafficLight/>
		</div>
		</>
	);
};

export default Home;
