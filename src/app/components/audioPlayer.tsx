interface AudioProps {
      src: string;
      title?: string;
}

export const AudioPlayer = ({ src, title }: AudioProps) => {
      return (
            <div className="my-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                  {title && (
                        <p className="text-sm font-medium mb-3 text-slate-500 dark:text-slate-400">Listen: {title}</p>
                  )}
                  <audio controls className="w-full h-10 accent-blue-500">
                        <source src={src} type="audio/mpeg" />
                        Your browser does not support the audio element.
                  </audio>
            </div>
      );
};
