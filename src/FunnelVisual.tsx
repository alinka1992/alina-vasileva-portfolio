import { useState } from "react";

const stages = [
  { id: "reach", y: 68, left: 82, right: 678, label: "ОХВАТ" },
  { id: "traffic", y: 190, left: 132, right: 628, label: "ТРАФИК" },
  { id: "lead", y: 312, left: 188, right: 572, label: "ЗАЯВКА" },
  { id: "deal", y: 434, left: 248, right: 512, label: "СДЕЛКА" },
] as const;

export default function FunnelVisual() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <svg className="data-visual funnel-visual" viewBox="0 0 760 570" role="img" aria-label="Интерактивная воронка от охвата до сделки" onMouseLeave={() => setActive(null)}>
      <defs>
        <linearGradient id="funnelTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1b5368" stopOpacity=".78" /><stop offset="1" stopColor="#061823" stopOpacity=".96" /></linearGradient>
        <linearGradient id="funnelFront" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0c3344" stopOpacity=".86" /><stop offset="1" stopColor="#04111a" stopOpacity=".98" /></linearGradient>
        <linearGradient id="funnelEdge" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#1a5d73" /><stop offset=".58" stopColor="#28cee8" /><stop offset="1" stopColor="#bdfaff" /></linearGradient>
      </defs>
      <g className="funnel-floor-grid">{Array.from({ length: 7 }).map((_, index) => <line key={`fh-${index}`} x1="58" y1={82 + index * 74} x2="702" y2={82 + index * 74} />)}</g>
      <g className="funnel-stage-list">
        {stages.map((stage) => {
          const isActive = active === stage.id;
          const isDim = active !== null && !isActive;
          const top = `${stage.left},${stage.y} ${stage.right},${stage.y} ${stage.right-24},${stage.y+54} ${stage.left+24},${stage.y+54}`;
          const front = `${stage.left+24},${stage.y+54} ${stage.right-24},${stage.y+54} ${stage.right-38},${stage.y+88} ${stage.left+38},${stage.y+88}`;
          return (
            <g
              className={`funnel-stage${isActive ? " is-active" : ""}${isDim ? " is-dim" : ""}`}
              key={stage.id}
              role="button"
              tabIndex={0}
              aria-label={`${stage.label}: этап воронки`}
              onMouseEnter={() => setActive(stage.id)}
              onFocus={() => setActive(stage.id)}
              onBlur={() => setActive(null)}
              onClick={() => setActive((value) => value === stage.id ? null : stage.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActive((value) => value === stage.id ? null : stage.id);
                }
              }}
            >
              <polygon className="funnel-stage-shadow" points={`${stage.left+14},${stage.y+18} ${stage.right+14},${stage.y+18} ${stage.right-20},${stage.y+102} ${stage.left+48},${stage.y+102}`} />
              <polygon className="funnel-stage-top" fill="url(#funnelTop)" points={top} />
              <polygon className="funnel-stage-front" fill="url(#funnelFront)" points={front} />
              <polyline className="funnel-stage-edge" stroke="url(#funnelEdge)" points={`${stage.left},${stage.y} ${stage.right},${stage.y} ${stage.right-24},${stage.y+54}`} />
              <line className="funnel-stage-reflection" x1={stage.left+36} y1={stage.y+14} x2={stage.right-36} y2={stage.y+14} />
              <text x={(stage.left+stage.right)/2} y={stage.y+37} textAnchor="middle">{stage.label}</text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
