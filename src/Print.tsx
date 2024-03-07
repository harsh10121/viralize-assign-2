import { useState , useEffect} from 'react';
import axios from "axios";

function Print(){

    const [arr,setArr] = useState([]);

    useEffect(function(){
        axios.get("http://localhost:3000/laps")
            .then(function(response){
                setArr(response.data);
            });
    },[]);

    function createCard(card,index){
		return (
			<div key={index}>
				<p>{card.duration} {card.start} {card.end}</p>
			</div>
		);
	}

    return (
        <div>
            {arr.map(createCard)}
        </div>
    );
}

export default Print;