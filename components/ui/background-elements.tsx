export const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-40 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
};
