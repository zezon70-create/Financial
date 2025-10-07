import { useState } from 'react'
import ExplanationToggle from './ExplanationToggle'

export default function ResultCard({id, title, short, value, explanation, onSaveComment}:{
  id:string, title:string, short:string, value:string|number, explanation:any, onSaveComment?: (id:string, text:string)=>void
}){
  const [comment,setComment] = useState('')
  const [notes,setNotes] = useState<string[]>([])

  function save(){
    if(!comment) return
    setNotes(n=>[...n, comment])
    onSaveComment?.(id, comment)
    setComment('')
  }

  return (
    <div className="p-4 bg-white dark:bg-slate-800 rounded border">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold">{title}</h4>
          <div className="text-sm text-slate-500">{short}</div>
        </div>
        <div className="text-2xl font-bold">{value}</div>
      </div>

      <div className="mt-3">
        <ExplanationToggle explanation={explanation} />
      </div>

      <div className="mt-3">
        <div className="text-sm font-semibold">تعليقك</div>
        <textarea value={comment} onChange={(e)=> setComment(e.target.value)} className="w-full p-2 mt-2 bg-transparent border rounded" placeholder="أضف ملاحظة أو إجراء مقترح" />
        <div className="mt-2 flex gap-2">
          <button onClick={save} className="px-3 py-1 bg-blue-600 text-white rounded">حفظ</button>
          <button onClick={()=> setComment('')} className="px-3 py-1 border rounded">إلغاء</button>
        </div>

        {notes.length>0 && (
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
            {notes.map((n,i)=> <li key={i}>{n} <span className="text-xs text-slate-400">(تم الحفظ محليًا)</span></li>)}
          </ul>
        )}
      </div>
    </div>
  )
}
