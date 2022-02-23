import {useNavigate} from 'react-router-dom'
function Home(props) {
    const navigate=useNavigate()
    return (
        <div>
            <h1>Hom Page</h1>
            <button onClick={()=>navigate('order',{replace:true})}> Order</button>
        </div>
    );
}

export default Home;