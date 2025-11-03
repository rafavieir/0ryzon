import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const NetworkStatus = () => {
  const [open, setOpen] = useState(false);

  const nodes = [
    { name: "Ethereum Validator", status: "online", uptime: "99.8%" },
    { name: "Polkadot Validator", status: "online", uptime: "99.9%" },
    { name: "Cosmos Validator", status: "online", uptime: "99.7%" },
    { name: "Avalanche Node", status: "online", uptime: "99.6%" },
  ];

  const services = [
    { name: "RPC Endpoints", status: "online", requests: "2.4M/dia" },
    { name: "API Gateway", status: "online", requests: "1.8M/dia" },
    { name: "WebSocket Feed", status: "online", connections: "12K" },
  ];

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="fixed bottom-8 right-8 flex gap-2 items-center px-4 py-2 border border-border bg-background/80 backdrop-blur-sm cursor-pointer hover:bg-background transition-colors">
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '150ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '300ms' }} />
            </div>
            <span className="text-xs font-light text-green-500 tracking-wide">NODES ONLINE</span>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif">Status da Infraestrutura</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div>
              <h3 className="text-sm font-light mb-3 tracking-wide">VALIDADORES & NODES</h3>
              <div className="space-y-2">
                {nodes.map((node) => (
                  <div key={node.name} className="flex items-center justify-between py-2 border-b border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-sm">{node.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{node.uptime}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-light mb-3 tracking-wide">SERVIÇOS</h3>
              <div className="space-y-2">
                {services.map((service) => (
                  <div key={service.name} className="flex items-center justify-between py-2 border-b border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-sm">{service.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {service.requests || service.connections}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NetworkStatus;
