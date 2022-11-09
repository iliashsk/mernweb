import React from 'react';

function FeedbackStats({number}){
	let avg=number.reduce((accum,curr)=>{return (accum+curr.rating)},0)/(number.length);

	return(<div>

	<h2 style={{color:'Blue'}}>{number.length} Reviews</h2>
	<h3 style={{color:'Blue'}}> average rating is :{isNaN(avg) ? 0 : avg}</h3>

		</div>)

}

export default FeedbackStats;