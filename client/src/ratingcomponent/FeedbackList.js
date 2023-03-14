 import {motion,AnimatePresence} from 'framer-motion';
import React, {useEffect} from 'react';
import FeedbackItem from './FeedbackItem'
function FeedbackList({feedback,handleDelete}){
		
		return(
			<div className="list" id="scrolltop">
			<div >
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