export default function Settings(){
  return (
    <div>
      <h2 className="text-2xl font-semibold">Settings</h2>
      <p className="text-sm text-slate-500">إعدادات الحساب، تحميل اللوجو، إعدادات العلامة المائية، العملة الافتراضية.</p>
      <div className="mt-4 bg-white dark:bg-slate-800 p-4 rounded">
        <label className="block">Company Logo (preview)</label>
        <input type="file" />
      </div>
    </div>
  )
}
