import {useNavigate} from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import axios from 'axios'


const DeletePhoto=({id,fname1,fname2,fname3,load})=>{

	const {isLoading, loggedIn} = useAuthStatus();
	const navigate=useNavigate()

	const handleDelete=()=>{
		//console.log(id+"/"+fname)
		const data={id,fname1,fname2,fname3}
		axios.post('/cl/delphoto',data)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
             load();
  /*setTimeout(() => {
      navigate(0)
    }, 2000)
*/
		};


		if(loggedIn){
		return(<>
		 <button type="submit" onClick={handleDelete}>Delete</button>
				</>)


		}
		else{
			return(<>
				<p></p></>)
		}
	
}
export default DeletePhoto