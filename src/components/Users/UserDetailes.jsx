import {useParams} from 'react-router-dom'

function UserDetailes(props) {
    const  userId=useParams()
    
    return ( 
        <div>
            Deatiles about user:{userId}
        </div>
    );
}

export default UserDetailes;