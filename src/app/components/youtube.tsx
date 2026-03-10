const YouTube = ({ id }: { id: string }) => {
      return (
            <div className="my-8 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="relative aspect-video">
                        <iframe
                              src={`https://www.youtube.com/embed/${id}`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="absolute top-0 left-0 h-full w-full"
                              title="YouTube video player"
                        />
                  </div>
            </div>
      );
};

export default YouTube;
