import type { ComponentType } from "react";
import type { CaseItem } from "./content";
import AutomationVisual from "./AutomationVisual";
import FunnelVisual from "./FunnelVisual";
import GrowthVisual from "./GrowthVisual";
import PipelineVisual from "./PipelineVisual";

const visuals: Record<CaseItem["visual"], ComponentType> = {
  growth: GrowthVisual,
  automation: AutomationVisual,
  funnel: FunnelVisual,
  pipeline: PipelineVisual,
};

export default function CaseVisual({ type }: { type: CaseItem["visual"] }) {
  const Visual = visuals[type];
  return <Visual />;
}
