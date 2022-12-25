import React from 'react'
import currencyList from './----------------------------'

export default function CurrencyConverter() {
    const[currencyOne,setCurrencyOne]=useState("USD");
const[currencyTwo,setCurrencyTwo]=useState("INR");
const[valueOne,setValueOne]=useState(0);
const[valueTwo,setValueTwo]=useState(0);
const [boxChanged, setBoxChanged] = useState(0);


useEffect(() => {
if(currencyOne!="" && currencyTwo!="" valueOne!=0 && valueTwo!=0){
    fetchData();
}
}, [currencyOne,currencyTwo,valueOne,valueTwo]);

const fetchData=()=>{
    let from,todoReducer,amount;
    if(boxChanged===1){
        from=currencyOne
        to=currencyTwo
        amount=valueOne

    }
    else if(boxChanged===2){
        from=currencyTwo
        to=curreOne
        amount=valueTwo
    }
   
    if(amount){
       let myHeaders = new Headers()
    myHeaders.append("apikey", "03AlhgkujJYyuWVN362A9EWQN3ubRf38")

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    }

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
	console.log(result)
	if(boxChanged===1){
	setValueTwo(result.result.toFixed(2))
	}else if(boxChanged===2){
		setValueOne(result.result.toFixed(2))
		}	
})
      .catch((error) => console.log("error", error))
    }


}
    return (
        <div className="App">
              <div className="container">
        <div className="input">
            <div>
                <select value={currencyOne}
                onChange={(e)=>{setCurrencyOn(e.target.value) setBoxChanged(1)}}>
                    
                {currencyList.map((item,index)=>{
                    if(currencyOne!=item)
                        return <option key={`firstdropdown_${index}`} value={item}>{item}</option>
                    })}
                </select>
            </div>
            <div>
            <input type="number" placeholder="Eneter number" value={valueOne} onChange={
                (e)=>{setValueOne(e.target.value) setBoxChanged(1)}
            }></input>
            </div>
        </div>
        <div className="input">
            <div>
                <select
                value={currencyTwo}
                
                onChange={(e)=>{setCurrencyOn(e.target.value) setBoxChanged(2)}}>
              
                {currencyList.map((item,index)=>{
                    if(currencyTwo!=item)
                        return <option key={`seconddropdown_${index}`} value={item}>{item}</option>
                    })}
                </select>
            </div>
            <div>
            <input type="number" placeholder="Eneter number" value={valueTwo} onChange={
                (e)=>{setValueTwo(e.target.value) setBoxChanged(2)}
            }></input>
            </div>
        </div>
    </div>
            
        </div>
    )
}
