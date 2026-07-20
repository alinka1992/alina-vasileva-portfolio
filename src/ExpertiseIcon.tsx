import type { ExpertiseItem } from "./content";

export default function ExpertiseIcon({ type }: { type: ExpertiseItem["icon"] }) {
  if (type === "strategy") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="14" /><circle cx="24" cy="24" r="5" /><path d="M24 4v7M44 24h-7M24 44v-7M4 24h7" /></svg>;
  }
  if (type === "sales") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 39V25M18 39V17M28 39V10M38 39V5" /><path d="M6 39h35" /></svg>;
  }
  if (type === "marketing") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 20h8l20-9v26l-20-9H7z" /><path d="M15 28l4 12h8l-5-10" /><path d="M39 17c3 2 3 12 0 14" /></svg>;
  }
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 7v17h17" /><circle cx="24" cy="24" r="17" /><path d="M24 24l-11 13" /></svg>;
}
