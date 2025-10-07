export default function ConfirmCard({title,subtitle}:{title:string,subtitle:string}){
  return (
    <div className="p-4 border rounded shadow-sm bg-white dark:bg-slate-800">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm mt-2">{subtitle}</p>
      <div className="mt-3 flex gap-2">
        <button className="px-3 py-1 bg-blue-600 text-white rounded">تأكيد</button>
        <button className="px-3 py-1 border rounded">حفظ كمسودة</button>
      </div>
    </div>
  )
}
