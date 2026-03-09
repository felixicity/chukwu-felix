interface BadgeProps {
      text: string;
}

export const Badge = ({ text }: BadgeProps) => {
      // Define your tech brand colors here
      const tagStyles: Record<string, string> = {
            React: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
            Python: "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800",
            JS: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800",
            CSS: "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800",
            TypeScript:
                  "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800",
            NextJS: "bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700",
      };

      // Fallback style for tags not defined above
      const defaultStyle =
            "bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700";

      // Match the text exactly or default
      const activeStyle = tagStyles[text] || defaultStyle;

      return (
            <span
                  className={`
      inline-flex items-center px-2.5 py-0.5 
      rounded-full text-xs font-semibold border
      transition-colors duration-200
      ${activeStyle}
    `}
            >
                  {text}
            </span>
      );
};
