import ReactMarkdown from "react-markdown";

interface MarkdownSection {
  content: string;
}

export default function MarkdownSection({ content }: MarkdownSection) {
  return (
    <div className=" p-4 py-2 rounded-2xl w-full">
      <ReactMarkdown
        components={{
          h2: ({ node, ...props }) => (
            <h2
              className="text-xl sm:text-2xl font-bold text-white my-4 font-roboto"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p className="font-roboto my-4" {...props} />
          ),
          code: ({ node, ...props }) => (
            <code className="text-violet-600" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="text-green-600" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
