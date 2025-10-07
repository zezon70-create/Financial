import { useEffect, useState } from 'react'

export default function CurrencyTicker(){
  const [rate,setRate] = useState<number>(30.95)
  useEffect(()=>{
    // mocked exchange rate updater
    const t = setInterval(()=> setRate(r=> + (r + (Math.random()-0.45)*0.05).toFixed(2)), 3000)
    return ()=> clearInterval(t)
  },[])
  return <div className="px-3 py-1 border rounded">USD: {rate}</div>
}
