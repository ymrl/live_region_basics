export const SlideFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="w-full md:h-screen min-h-screen bg-white text-black overflow-auto"
    >
      {children}
    </div>
  );
};
