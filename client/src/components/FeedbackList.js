import {motion,AnimatePresence} from 'framer-motion';
import React from 'react';
import FeedbackItem from './FeedbackItem'
function FeedbackList({feedback,handleDelete}){


		console.log(feedback)
		return(
			<div >
			<div>
			<AnimatePresence>
			{
				feedback.map((item)=>{
				return(
					<motion.div
					key={item.id}
					initial={{opacity:0}}
					animate={{opacity:1}}
					exit={{opacity:0}}
					>
				<FeedbackItem 
				key={item.id}
				 item={item} 
				handleDelete={handleDelete}
				/>
				</motion.div>

				)
			}
			)
			}
			</AnimatePresence>
			</div>
			</div>
			)


	}
		

export default FeedbackList;