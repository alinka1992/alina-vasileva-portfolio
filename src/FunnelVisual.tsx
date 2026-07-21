export default function FunnelVisual() {
  const stages = [
    { y: 58, left: 88, right: 672, label: "ОХВАТ", tone: 1 },
    { y: 180, left: 132, right: 628, label: "ТРАФИК", tone: 2 },
    { y: 302, left: 184, right: 576, label: "ЗАЯВКА", tone: 3 },
    { y: 424, left: 246, right: 514, label: "СДЕЛКА", tone: 4 },
  ];
  return (
    <svg className="data-visual funnel-visual" viewBox="0 0 760 570" role="img" aria-label="Воронка от охвата до сделки">
      <defs>
        <linearGradient id="funnelGlass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#174052" stopOpacity=".72" /><stop offset="1" stopColor="#04111a" stopOpacity=".96" /></linearGradient>
        <linearGradient id="funnelEdge" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#1a5d73" /><stop offset=".58" stopColor="#28cee8" /><stop offset="1" stopColor="#bdfaff" /></linearGradient>
      </defs>
      <g className="funnel-grid">{Array.from({ length: 8 }).map((_,index) => <line key={`fv-${index}`} x1={74+index*88} y1="34" x2={74+index*88} y2="528" />)}{Array.from({ length: 6 }).map((_,index) => <line key={`fh-${index}`} x1="56" y1={62+index*92} x2="704" y2={62+index*92} />)}</g>
      <g className="funnel-stage-list">
        {stages.map((stage) => (
          <g className={`funnel-stage stage-${stage.tone}`} key={stage.label}>
            <polygon className="funnel-stage-shadow" points={`${stage.left+12},${stage.y+18} ${stage.right+12},${stage.y+18} ${stage.right-10},${stage.y+94} ${stage.left+34},${stage.y+94}`} />
            <polygon className="funnel-stage-glass" fill="url(#funnelGlass)" points={`${stage.left},${stage.y} ${stage.right},${stage.y} ${stage.right-22},${stage.y+76} ${stage.left+22},${stage.y+76}`} />
            <polyline className="funnel-stage-edge" stroke="url(#funnelEdge)" points={`${stage.left},${stage.y} ${stage.right},${stage.y} ${stage.right-22},${stage.y+76}`} />
            <line className="funnel-stage-reflection" x1={stage.left+30} y1={stage.y+14} x2={stage.right-30} y2={stage.y+14} />
            <text x={(stage.left+stage.right)/2} y={stage.y+48} textAnchor="middle">{stage.label}</text>
          </g>
        ))}
      </g>
      <path className="funnel-spine-static" d="M380 96 L380 472" />
      <g className="funnel-flow-points">{[96,218,340,462].map((y,index) => <circle key={y} cx="380" cy={y} r={5+index} />)}</g>
    </svg>
  );
}
