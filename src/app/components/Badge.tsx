interface BadgeProps {
      text: string;
}

export const Badge = ({ text }: BadgeProps) => {
      // Define your tech brand colors here
      //   dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800
      const tagStyles: Record<string, string> = {
            React: "bg-blue-700 text-white",
            Python: "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800",
            JS: "bg-yellow-400 text-black",
            CSS: "bg-purple-900 text-white",
            TypeScript: "bg-sky-900 text-sky-100 ",
            NextJS: "bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700",
      };

      // Fallback style for tags not defined above
      const defaultStyle = "bg-gray-100 text-gray-600 border-none dark:bg-gray-800 dark:text-gray-400";

      // Match the text exactly or default
      const activeStyle = tagStyles[text] || defaultStyle;

      return (
            <span
                  className={`
      inline-flex items-center px-3 py-1 
      rounded-full text-xs font-semibold
      transition-colors duration-200
      ${activeStyle}
    `}
            >
                  {text}
            </span>
      );
};
