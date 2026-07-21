export default function GrowthVisual() {
  const points = [
    { x: 86, y: 420, label: "СТАРТ" },
    { x: 268, y: 354, label: "3 млн ₽" },
    { x: 470, y: 246, label: "15 млн ₽" },
    { x: 676, y: 104, label: "40+ млн ₽" },
  ];

  return (
    <svg className="data-visual growth-visual" viewBox="0 0 760 560" role="img" aria-label="Рост суммы коммерческих предложений до более чем 40 миллионов рублей за четыре месяца">
      <defs>
        <linearGradient id="growthArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#22cbe5" stopOpacity=".34" /><stop offset="1" stopColor="#22cbe5" stopOpacity="0" /></linearGradient>
        <linearGradient id="growthStroke" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#15566d" /><stop offset=".58" stopColor="#25cce7" /><stop offset="1" stopColor="#c4fbff" /></linearGradient>
        <filter id="growthGlow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <text className="growth-title" x="58" y="54">СУММА КОММЕРЧЕСКИХ ПРЕДЛОЖЕНИЙ ЗА 4 МЕСЯЦА</text>
      <g className="chart-grid">
        {Array.from({ length: 8 }).map((_, index) => <line key={`x-${index}`} x1={62 + index * 88} y1="82" x2={62 + index * 88} y2="438" />)}
        {Array.from({ length: 5 }).map((_, index) => <line key={`y-${index}`} x1="58" y1={104 + index * 78} x2="704" y2={104 + index * 78} />)}
      </g>
      <g className="growth-bars">
        <rect x="78" y="388" width="26" height="38" rx="5" />
        <rect x="254" y="316" width="26" height="110" rx="5" />
        <rect x="456" y="202" width="26" height="224" rx="5" />
        <rect x="662" y="82" width="26" height="344" rx="5" />
      </g>
      <path className="chart-area" d="M86 420 C154 414 208 386 268 354 S394 306 470 246 S590 160 676 104 L676 438 L86 438 Z" fill="url(#growthArea)" />
      <path className="chart-line chart-line-secondary" d="M86 430 C174 418 218 398 282 382 S400 328 478 292 S590 218 676 166" />
      <path className="chart-line chart-line-main" filter="url(#growthGlow)" stroke="url(#growthStroke)" d="M86 420 C154 414 208 386 268 354 S394 306 470 246 S590 160 676 104" />
      <g className="chart-points">
        {points.map((point, index) => (
          <g key={point.label} className={index === points.length - 1 ? "growth-point is-final" : "growth-point"}>
            {index === points.length - 1 && <circle className="growth-final-halo" cx={point.x} cy={point.y} r="23" />}
            <circle cx={point.x} cy={point.y} r={index === points.length - 1 ? 8 : 6} />
            <text x={point.x} y={point.y - 22} textAnchor={index === 0 ? "start" : index === points.length - 1 ? "end" : "middle"}>{point.label}</text>
          </g>
        ))}
      </g>
      <g className="growth-total">
        <rect x="58" y="470" width="646" height="54" rx="10" />
        <text x="80" y="503">40+ МЛН ₽ КОММЕРЧЕСКИХ ПРЕДЛОЖЕНИЙ В PIPELINE</text>
      </g>
    </svg>
  );
}
