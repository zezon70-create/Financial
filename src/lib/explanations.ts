export function explainCurrentRatio(value:number){
  const easy = value >= 1 ? 'السيولة كافية لتغطية الالتزامات قصيرة الأجل.' : 'قد تواجه الشركة صعوبة في تغطية التزاماتها قصيرة الأجل.'
  const mid = value >= 1 ? 'Current Ratio أعلى من 1 يشير إلى قدرة الشركة على سداد الالتزامات قصيرة الأجل.' : 'Current Ratio أقل من 1 يتطلب مراجعة إدارة الذمم والسيولة وربما تأمين خطوط ائتمان.'
  const pro = `Current Ratio = ${value.toFixed(2)}. تحليل متقدم: افحص مكونات الأصول المتداولة واستبعد المخزون إن كانت دورة التشغيل طويلة.`
  return {easy, mid, pro}
}

export function explainNetProfitMargin(delta:number, value:number){
  const easy = delta >=0 ? 'تحسّن في هامش الربح الصافي.' : 'تراجع في هامش الربح الصافي.'
  const mid = delta >=0 ? 'التحسّن قد يعود إلى زيادة المبيعات أو خفض التكاليف.' : 'يجب فحص تكاليف المبيعات والمصاريف التشغيلية.'
  const pro = `Net Profit Margin = ${value.toFixed(2)}%. YoY change = ${delta.toFixed(2)}%. تحليل متقدم: افحص تأثير التغيرات في تكلفة المبيعات والتكاليف غير المتكررة.`
  return {easy, mid, pro}
}
