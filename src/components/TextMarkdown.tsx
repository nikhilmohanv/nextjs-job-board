import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface TextMarkdownProps {
  children: string;
}
export default function TextMarkdown({ children }: TextMarkdownProps) {
  return (
    <Markdown
      className="space-y-3"
      remarkPlugins={[remarkGfm]}
      components={{
        ul: (props) => <ul className="list-disc list-inside" {...props} />,
      }}
    >
      {children}
    </Markdown>
  );
}
