import React from 'react' ;
import { useNavigate } from 'react-router-dom'; 


import './ProfileScreen.css' ; 
  
function ProfileScreen() {

   const navigate = useNavigate()

  return (
    <div>
  
      

    <div className = 'profileScreen'>
        <div className='profileScreen__body'>
        <div className='profileScreen__info'>
        <img 
           src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'alt=''/>
           <div className='profileScreen__details'>
          
             
                <button onClick = {()=> { navigate('/')} }className='profileScreen__signOut'>Back To Homepage</button>
                
             
           </div>
        </div>
        </div>
      </div>

      </div>  
    
  )
}

export default ProfileScreen;