const NetworkStatus = () => {
  return (
    <div className="fixed bottom-8 right-8 flex gap-2 items-center px-4 py-2 border border-border bg-background/80 backdrop-blur-sm">
      <div className="flex gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" style={{ animationDelay: '0ms' }} />
        <div className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" style={{ animationDelay: '150ms' }} />
        <div className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" style={{ animationDelay: '300ms' }} />
      </div>
      <span className="text-xs font-light text-muted-foreground tracking-wide">NODES ONLINE</span>
    </div>
  );
};

export default NetworkStatus;
