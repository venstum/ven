import { marked } from "marked";

marked.setOptions({
  gfm: true,
  breaks: false,
});

export function renderMarkdown(input: string): { __html: string } {
  return { __html: marked.parse(input) as string };
}
