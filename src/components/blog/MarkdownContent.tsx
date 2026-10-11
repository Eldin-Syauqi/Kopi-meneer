import ReactMarkdown from "react-markdown";

export default function MarkdownContent({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: (props) => <h2 className="mt-8 mb-3 text-3xl" {...props} />,
        h2: (props) => <h2 className="mt-8 mb-3 text-2xl" {...props} />,
        h3: (props) => <h3 className="mt-6 mb-2 text-xl" {...props} />,
        p: (props) => <p className="my-4 leading-relaxed" {...props} />,
        ul: (props) => <ul className="my-4 list-disc space-y-1 pl-6" {...props} />,
        ol: (props) => <ol className="my-4 list-decimal space-y-1 pl-6" {...props} />,
        a: (props) => (
          <a className="text-primary underline underline-offset-4" target="_blank" rel="noreferrer" {...props} />
        ),
        blockquote: (props) => (
          <blockquote className="my-4 border-l-4 border-primary/40 pl-4 italic text-muted-foreground" {...props} />
        ),
        code: (props) => <code className="rounded bg-muted px-1.5 py-0.5 text-sm" {...props} />,
        strong: (props) => <strong className="font-semibold" {...props} />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}