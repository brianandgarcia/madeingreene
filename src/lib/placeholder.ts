/*
  Turns "[PLACEHOLDER: ...]" inside a content string into a visible tag, so
  anything still waiting on a decision can't be mistaken for final copy.
  Returns HTML: use with set:html. Everything else in the string is escaped.
*/
const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function withPlaceholders(text: string): string {
  return escape(text).replace(
    /\[PLACEHOLDER:\s*([^\]]+)\]/g,
    (_, note) => `<span class="ph-tag"><span class="ph-tag__label">Placeholder</span> ${note}</span>`,
  );
}
