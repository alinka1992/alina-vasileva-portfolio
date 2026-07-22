import type { CaseItem } from "./content";

const base = import.meta.env.BASE_URL;

const caseImages: Record<CaseItem["visual"], { src: string; alt: string }> = {
  growth: {
    src: `${base}assets/case-commercial-pipeline-growth.png?v=f1ed7a44`,
    alt: "Рост коммерческих предложений до 40 миллионов рублей",
  },
  automation: {
    src: `${base}assets/case-automation-system.png?v=f0bc2bb3`,
    alt: "Масштабируемая коммерческая система на базе Битрикс24, 1С, DataLens и AI",
  },
  funnel: {
    src: `${base}assets/case-ecommerce-funnel.png?v=3cbe4108`,
    alt: "Воронка интернет-магазина от охвата до сделки",
  },
  pipeline: {
    src: `${base}assets/case-business-unit-network.png?v=f2bd9748`,
    alt: "Семинар, партнёрская сеть и новый бизнес-юнит",
  },
};

export default function CaseVisual({ type }: { type: CaseItem["visual"] }) {
  const image = caseImages[type];

  return (
    <img
      className="data-visual case-visual-image"
      src={image.src}
      alt={image.alt}
      width="1254"
      height="1254"
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  );
}
