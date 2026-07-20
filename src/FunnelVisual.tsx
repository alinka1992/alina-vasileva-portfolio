export default function FunnelVisual() {
  const stages = [
    { y: 70, left: 92, right: 668, label: "КОНТЕНТ", tone: 1 },
    { y: 188, left: 132, right: 628, label: "САЙТ", tone: 2 },
    { y: 306, left: 184, right: 576, label: "ЗАЯВКА", tone: 3 },
    { y: 424, left: 246, right: 514, label: "СДЕЛКА", tone: 4 },
  ];
  return (
    <svg className="data-visual funnel-visual" viewBox="0 0 760 590" role="img" aria-label="Вертикальная воронка от контента до сделки">
      <defs>
        <linearGradient id="funnelGlass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#174052" stopOpacity=".74" /><stop offset="1" stopColor="#04111a" stopOpacity=".96" /></linearGradient>
        <linearGradient id="funnelEdge" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#1a5d73" /><stop offset=".58" stopColor="#28cee8" /><stop offset="1" stopColor="#bdfaff" /></linearGradient>
        <filter id="funnelGlow" x="-35%" y="-35%" width="170%" height="170%"><feGaussianBlur stdDeviation="6" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <g className="funnel-grid">
        {Array.from({ length: 8 }).map((_,index) => <line key={`fv-${index}`} x1={74+index*88} y1="46" x2={74+index*88} y2="534" />)}
        {Array.from({ length: 6 }).map((_,index) => <line key={`fh-${index}`} x1="56" y1={74+index*92} x2="704" y2={74+index*92} />)}
      </g>
      <text className="funnel-caption" x="78" y="38">VOLUME</text><text className="funnel-caption" x="682" y="38" textAnchor="end">QUALITY</text>
      <g className="funnel-stage-list">
        {stages.map((stage,index) => (
          <g className={`funnel-stage stage-${stage.tone}`} key={stage.label}>
            <polygon className="funnel-stage-shadow" points={`${stage.left+12},${stage.y+18} ${stage.right+12},${stage.y+18} ${stage.right-10},${stage.y+94} ${stage.left+34},${stage.y+94}`} />
            <polygon className="funnel-stage-glass" fill="url(#funnelGlass)" points={`${stage.left},${stage.y} ${stage.right},${stage.y} ${stage.right-22},${stage.y+76} ${stage.left+22},${stage.y+76}`} />
            <polyline className="funnel-stage-edge" stroke="url(#funnelEdge)" points={`${stage.left},${stage.y} ${stage.right},${stage.y} ${stage.right-22},${stage.y+76}`} />
            <line className="funnel-stage-reflection" x1={stage.left+30} y1={stage.y+14} x2={stage.right-30} y2={stage.y+14} />
            <text x={(stage.left+stage.right)/2} y={stage.y+48} textAnchor="middle">{stage.label}</text>
            <text className="funnel-cohort" x={stage.right-34} y={stage.y+48} textAnchor="end">0{index+1}</text>
          </g>
        ))}
      </g>
      <path className="funnel-spine" d="M380 104 C380 152 380 190 380 222 S380 292 380 340 S380 410 380 458" />
      <g className="funnel-flow-points" filter="url(#funnelGlow)">{[104,222,340,458].map((y,index) => <circle key={y} cx="380" cy={y} r={5+index} />)}</g>
      <g className="conversion-index"><text x="604" y="548">CONVERSION INDEX</text><path d="M586 520 C608 504 610 480 630 466 S656 420 674 388" /><circle cx="586" cy="520" r="4" /><circle cx="630" cy="466" r="4" /><circle cx="674" cy="388" r="5" /></g>
      <g className="funnel-particles">{[0,1,2,3,4,5].map((i) => <circle key={i} cx={320+i*24} cy={120+i*64} r={2.5+i*.3} />)}</g>
    </svg>
  );
}
