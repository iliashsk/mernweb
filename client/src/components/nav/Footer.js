
import FeedbackContext from '../../context/FeedbackContext';
import {useContext} from 'react';

function Footer(){
const {feedback}=useContext(FeedbackContext);

  
return(<>
      

<div style={{backgroundColor:"lightCyan",height:"100px"}} className="footer">
<p align="center">{feedback[0].text}</p>
<p align="center">mobile: {feedback[0].mobile}</p>

  </div>
  
</>
  )
};
export default Footer;