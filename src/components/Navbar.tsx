import Link from 'next/link'
import { useState } from 'react'
import CurrencyTicker from './CurrencyTicker'

export default function Navbar(){
  const [dark,setDark] = useState(false)
  return (
    <nav className={`w-full border-b ${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="logo" className="w-10 h-10"/>
          <div className="text-lg font-semibold">Financial Analyzer</div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/">الرئيسية</Link>
          <Link href="/input">Input</Link>
          <Link href="/upload">Upload</Link>
          <Link href="/report">Report</Link>
          <Link href="/dashboard">Dashboard</Link>
          <CurrencyTicker/>
          <button onClick={()=>{ setDark(!dark); document.documentElement.classList.toggle('dark')}} className="px-3 py-1 rounded border">{dark? 'Light' : 'Dark'}</button>
        </div>
      </div>
    </nav>
  )
}
