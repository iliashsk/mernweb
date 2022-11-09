import React from 'react';

function FeedbackStats({number}){
	let avg=number.reduce((accum,curr)=>{return (accum+curr.rating)},0)/(number.length);

	return(<div>

	<h2>{number.length} reviews</h2>
	<h3>average rating is :{isNaN(avg) ? 0 : avg}</h3>

		</div>)

}

export default FeedbackStats;