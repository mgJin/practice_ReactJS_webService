import { useState,useEffect } from "react";

function App_coin(){
  const [loading,setLoading] = useState(true);
  const [coins,setCoins] = useState([]);
  const [money,setMoney] = useState(0);
  const [selected_coin,setSelected_coin] = useState({
    coin_name:"",
    coin_price:0,
    coin_each:0
  });
  
  useEffect(()=> {
      fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response)=>response.json())
      .then((json)=>{
        setCoins(json)
        setLoading(false)
      });
  }, [])
  const moneyChange=(event)=>{
    // console.log(event);
    setMoney(event.target.value);
    
  }

  /**moeny가 바뀔때마다 setSelected_coin도 바뀌어야함 */
  useEffect(()=>setSelected_coin((currency)=>{
      console.dir(currency);
      // console.log(currency.coin_name);
      return {
        coin_name:currency.coin_name,
        coin_price:currency.coin_price,
        coin_each:currency.coin_price/money,
      }
    }),[money]);

  const deal =(e)=>{
    
    const coin = JSON.parse(e.target.value);
    
    setSelected_coin(()=>{
      return {
        coin_name:coin.name,
        coin_price:coin.quotes.USD.price,
        coin_each:coin.quotes.USD.price/money,
      }
    })
    
  }
  
  console.log(selected_coin);
  
  
  return (
    <div>
        <h1>The Conins! {loading? null: `${coins.length}`}</h1>
        <h4>
          You have $<input onChange={moneyChange} value={money} type="number"/>
        </h4>

        {loading ? <strong>"Loading..."</strong>:
          <select onChange={deal} >
            {coins.map((coin)=>{
                
                return(

                  <option  key={coin.id} value={JSON.stringify(coin)}>
                  {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                </option>
                )
             }
            )
            }
          </select>
          
        }
        {money>0&&
         <h4>You can have {selected_coin.coin_each} {selected_coin.coin_name}.</h4>
        }
    </div>
  )
}

export default coin;