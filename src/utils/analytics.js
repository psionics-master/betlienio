export function trackEvent(name, props) {
  window.plausible?.(name, props ? { props } : undefined);
}
