export function supportsModernFeatures() {
  return (
    "IntersectionObserver" in window &&
    "ResizeObserver" in window &&
    window.CSS?.supports?.("aspect-ratio", "1 / 1")
  );
}
