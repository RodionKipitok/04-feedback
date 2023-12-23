import React from "react";
import '../Feedback/feedback.css';





function Statistics (data) {

	
	const {good,neutral,bad,total,countPercentage} = data;
   
 
	return (
	
	
	<ul className="list__statistics">
	
	 <li><span className="statistics__value'">Good:{good}</span></li>
	 <li><span className="statistics__value'">Neutral:{neutral}</span></li>
	 <li><span className="statistics__value">Bad:{bad}</span></li>
	 <li><span className="statistics__value">Total: {total()}</span></li>
	<li><span className="statistics__value">Positive feedback:{countPercentage().toFixed()}%</span></li> 
    </ul>
	 
	 )
};

export default Statistics;

