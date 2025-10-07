import { useState } from 'react'

export default function Upload(){
  const [fileName,setFileName] = useState('')
  return (
    <div>
      <h2 className="text-2xl font-semibold">Upload</h2>
      <p className="text-sm text-slate-500">ارفع ملف Excel/CSV. الواجهة تقوم بعمل mapping تلقائي لكن النتائج المعروضة ستكون ملخّصة ومؤكدة فقط.</p>
      <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded">
        <input type="file" onChange={(e)=> setFileName(e.target.files?.[0]?.name || '')} />
        <div className="mt-3">{fileName ? `تم اختيار: ${fileName}` : 'لم يتم اختيار ملف'}</div>
        <div className="mt-3"><button className="px-3 py-1 bg-blue-600 text-white rounded">Parse & Map</button></div>
      </div>
    </div>
  )
}
