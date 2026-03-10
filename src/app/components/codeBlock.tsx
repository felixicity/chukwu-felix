"use client";

import { useState, useRef, ComponentPropsWithoutRef } from "react";
import { Check, Copy } from "lucide-react";

// Define an interface that extends the standard 'pre' attributes
interface CodeBlockProps extends ComponentPropsWithoutRef<"pre"> {
      // rehype-pretty-code adds these custom data attributes
      "data-language"?: string;
      "data-theme"?: string;
}

export const CodeBlock = ({ children, ...props }: CodeBlockProps) => {
      const [isCopied, setIsCopied] = useState(false);
      const preRef = useRef<HTMLPreElement>(null);

      // Extract language from the data-language attribute
      const language = props["data-language"] || "code";

      const copyToClipboard = async () => {
            // to ensure we get exactly what the user sees, sans formatting objects.
            const rawCode = preRef.current?.textContent || "";

            await navigator.clipboard.writeText(rawCode);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
      };

      return (
            <div className="relative my-6 rounded-lg border border-white/10 bg-[#272822] overflow-hidden group">
                  <div className="flex items-center justify-between px-4 py-2 bg-black/30 border-b border-white/5">
                        <span className="text-xs font-mono uppercase tracking-widest text-slate-400">{language}</span>
                        <button
                              onClick={copyToClipboard}
                              className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                        >
                              {isCopied ? (
                                    <>
                                          <Check size={14} className="text-green-400" />
                                          <span>Copied!</span>
                                    </>
                              ) : (
                                    <>
                                          <Copy size={14} />
                                          <span>Copy</span>
                                    </>
                              )}
                        </button>
                  </div>

                  {/* We attach the Ref here to pull innerText later */}
                  <pre ref={preRef} {...props} className="p-4 mt-0 overflow-x-auto text-sm leading-relaxed">
                        {children}
                  </pre>
            </div>
      );
};
