import {useNavigate} from 'react-router-dom'

function Oredr(props) {
    const navigate=useNavigate()

    return (
        <div>
            order component
            <button onClick={()=>navigate('-1')}>Back to</button>
        </div>
    );
}

export default Oredr;