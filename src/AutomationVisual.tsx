export default function AutomationVisual() {
  const nodes = [
    { x: 128, y: 430, label: "Битрикс24" },
    { x: 260, y: 500, label: "1С" },
    { x: 500, y: 500, label: "DataLens" },
    { x: 632, y: 430, label: "AI" },
  ];
  return (
    <svg className="data-visual automation-visual" viewBox="0 0 760 620" role="img" aria-label="Масштабируемая система коммерческого управления">
      <defs>
        <linearGradient id="autoPanel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#173648" stopOpacity=".78" /><stop offset="1" stopColor="#04111a" stopOpacity=".94" /></linearGradient>
        <radialGradient id="autoCore" cx="50%" cy="35%" r="75%"><stop offset="0" stopColor="#1a7890" stopOpacity=".62" /><stop offset=".48" stopColor="#082536" stopOpacity=".9" /><stop offset="1" stopColor="#02080e" /></radialGradient>
        <filter id="autoGlow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="6" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <ellipse className="auto-floor-glow" cx="380" cy="520" rx="292" ry="74" />
      <polygon className="auto-floor" points="70,510 380,362 690,510 380,606" />
      <g className="auto-floor-grid">
        {[0,1,2,3,4,5,6].map((i) => <path key={`f-${i}`} d={`M${112 + i*44} 490 L380 374 L${648 - i*44} 490`} />)}
        {[0,1,2,3,4].map((i) => <path key={`c-${i}`} d={`M${112 + i*60} ${520 + i*12} Q380 ${430 + i*8} ${648 - i*60} ${520 + i*12}`} />)}
      </g>
      <g className="auto-back-panel"><polygon points="86,152 252,118 252,372 86,405" fill="url(#autoPanel)" /><polyline points="108,330 138,304 164,316 196,262 228,234" />{[0,1,2,3].map((i) => <rect key={i} x={112+i*30} y={182+i*18} width="18" height={72-i*8} rx="3" />)}</g>
      <g className="auto-back-panel"><polygon points="508,118 674,152 674,405 508,372" fill="url(#autoPanel)" /><circle cx="590" cy="242" r="42" /><circle cx="590" cy="242" r="27" /><path d="M590 200 A42 42 0 0 1 626 264" />{[0,1,2].map((i) => <rect key={i} x="536" y={318+i*18} width={94-i*20} height="7" rx="3" />)}</g>
      <g className="auto-center-panel">
        <polygon className="auto-center-shadow" points="262,112 498,112 540,386 220,386" />
        <polygon className="auto-center-glass" points="274,96 486,96 523,366 237,366" fill="url(#autoPanel)" />
        <polyline className="auto-center-highlight" points="274,96 486,96 523,366" />
        <text className="auto-center-kicker" x="380" y="130" textAnchor="middle">CONTROL CENTER</text>
        <text className="auto-center-title" x="380" y="168" textAnchor="middle">МАСШТАБИРУЕМАЯ</text>
        <text className="auto-center-title" x="380" y="196" textAnchor="middle">СИСТЕМА</text>
        <text className="auto-center-subtitle" x="380" y="226" textAnchor="middle">КОНТРОЛ-ЦЕНТР · СИСТЕМАТИЗАЦИЯ · ONLINE</text>
        <g className="auto-mini-chart"><path className="auto-mini-area" d="M278 312 L278 290 C316 282 324 258 350 264 S390 240 414 228 S460 194 486 180 L486 312 Z" /><path className="auto-mini-line" d="M278 290 C316 282 324 258 350 264 S390 240 414 228 S460 194 486 180" />{[278,350,414,486].map((x,i) => <circle key={x} cx={x} cy={[290,264,228,180][i]} r="5" />)}</g>
        <g className="auto-status"><circle cx="288" cy="336" r="4" /><text x="302" y="341">СИНХРОНИЗАЦИЯ</text><circle cx="418" cy="336" r="4" /><text x="432" y="341">ONLINE</text></g>
      </g>
      <g className="auto-core" filter="url(#autoGlow)"><ellipse cx="380" cy="450" rx="92" ry="34" /><ellipse cx="380" cy="448" rx="62" ry="23" /><ellipse cx="380" cy="446" rx="31" ry="12" fill="url(#autoCore)" /><circle cx="380" cy="446" r="7" /></g>
      <g className="auto-links">{nodes.map((node) => <path key={node.label} d={`M380 446 C380 486 ${node.x} ${node.y-34} ${node.x} ${node.y}`} />)}</g>
      <g className="auto-nodes">{nodes.map((node) => <g key={node.label} transform={`translate(${node.x} ${node.y})`}><ellipse className="auto-node-base" cx="0" cy="26" rx="58" ry="18" /><rect className="auto-node-box" x="-58" y="-22" width="116" height="48" rx="10" fill="url(#autoPanel)" /><rect className="auto-node-edge" x="-57" y="-21" width="114" height="46" rx="9" /><circle className="auto-node-dot" cx="-39" cy="2" r="4" /><text x="9" y="8" textAnchor="middle">{node.label}</text></g>)}</g>
    </svg>
  );
}
