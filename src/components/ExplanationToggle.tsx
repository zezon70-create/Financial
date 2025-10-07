export default function ExplanationToggle({explanation}:{explanation:{easy:string,mid:string,pro:string}}){
  return (
    <div>
      <div className="flex gap-2">
        <details className="w-full">
          <summary className="cursor-pointer font-semibold">شرح — مستوى سهل</summary>
          <p className="mt-2 text-sm">{explanation.easy}</p>
        </details>
      </div>
      <div className="mt-2">
        <details>
          <summary className="cursor-pointer font-semibold">شرح — مستوى متوسط</summary>
          <p className="mt-2 text-sm">{explanation.mid}</p>
        </details>
      </div>
      <div className="mt-2">
        <details>
          <summary className="cursor-pointer font-semibold">شرح — مستوى متقدّم</summary>
          <p className="mt-2 text-sm">{explanation.pro}</p>
        </details>
      </div>
    </div>
  )
}
