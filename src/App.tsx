import { useState , useEffect} from 'react';
import axios from "axios";
import './App.css'
import Print from "./Print"

function App() {
	// hr, minutes, seconds, milliseconds
	// seconds <- millis

	const [isStarted,setIsStarted] = useState(false);
	const [time,setTime] = useState(0);
	const [laps,setLaps] = useState([]);
	const [showLaps,setShowLaps] = useState(0);
	const [isend,setIsend] = useState(0);
	const [start,setStart] = useState();
	const [end,setEnd] = useState();

	useEffect(function(){
		let id;
		if(isStarted===true){
			id = setInterval(function(){
				setTime(function(prev){
					return prev+1;
				});
			},10);//milliseconds
		}
		return ()=>{
			clearInterval(id);
		}
	},[time,isStarted]);

	useEffect(function(){

		function handleKeyDown(event){
			if(event.code==="Space"){
				setIsStarted(function(prev){
					if(prev===false)return true;
					else return false;
				});
			}
			if(event.key==="r"){
				setIsStarted(function(prev){
					if(prev===false)return true;
					else return false;
				});
			}
		}

		document.addEventListener("keydown",handleKeyDown);
	},[]);

	// milliseconds = time%100
	// seconds = (time%6000) / 100
	// minutes = (time % 360000) / 6000
	// hr = time / 360000

	const ms = Math.floor(time%100);
	const sec = Math.floor((time%6000)/100);
	const min = Math.floor((time%360000)/6000);
	const hr = Math.floor((time/360000));

	function handleStart(){
		setIsStarted(function(prev){
			if(prev===false)return true;
			else return false;
		});
	}

	function handleReset(){
		setTime(0);
	}

	async function handleLap(){
		const ob = {hour:hr,minutes:min,seconds:sec};
		// setLaps(function(prevArr){
		// 	return [...prevArr,ob];
		// });

		// int ms = (hr*3600 + min*60 + sec)*1000

		// const obj = {
		// 	duration:,
		// 	start:,
		// 	end:
		// };
		if(isend===0){
			// means it is start of a lap
			setStart(ob);
			setIsend(1);
		}
		else{
			setIsend(0);
			//insert into db
			let startms = (start.hour*3600 + start.minutes*60 + start.seconds)*1000;
			let endms = (ob.hour*3600 + ob.minutes*60 + ob.seconds)*1000;

			let duration = endms-startms;
			const dbobj = {
				duration : duration,
				start:startms,
				end : endms
			};
			const response = await axios.post("http://localhost:3000/laps",dbobj);
		}
	}

	function handleDisplay(){
		setShowLaps(function(val){
			if(val===false)return true;
			else return false;
		});
	}

    return (
		<div className='page'>
			<div className="watch-cont">
				<div className="watch">
					<div>Hr</div>
					<div>{hr}</div>
				</div>
				<div className="watch">
					<div>Min</div>
					<div>{min}</div>
				</div>
				<div className="watch">
					<div>Sec</div>
					<div>{sec}</div>
				</div>
			</div>
			<div className="btns">
				<button onClick={handleStart}>Start</button>
				<button onClick={handleStart}>Stop</button>
				<button onClick={handleReset}>Reset</button>
				<button onClick={handleLap}>Lap</button>
				<button onClick={handleDisplay}>Display</button>
			</div>
			{showLaps === true ? <Print /> : null}
		</div>
    )
}

export default App
