import { useState } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const NetworkStatus = () => {
  const [expanded, setExpanded] = useState(false);

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
    <div className="fixed bottom-8 right-8 z-50">
      <div 
        className={`
          border border-border bg-background/95 backdrop-blur-sm cursor-pointer
          transition-all duration-300 ease-out origin-bottom-right overflow-hidden
          ${expanded ? 'w-80 p-6' : 'w-auto px-6 py-3'}
        `}
        onClick={() => setExpanded(!expanded)}
      >
        {!expanded ? (
          <div className="space-y-3">
            <div className="flex gap-3 items-center">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '300ms' }} />
              </div>
              <span className="text-sm font-light text-green-500 tracking-wide">NODES ONLINE</span>
            </div>
            <div className="flex gap-3 items-center justify-center">
              <a 
                href="https://grafana.com" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Grafana</span>
              </a>
              <div className="w-px h-3 bg-border" />
              <a 
                href="https://statuspage.io" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>StatusPage</span>
              </a>
            </div>
          </div>
          <div className="w-px h-3 bg-border" />
<a 
  href="https://seublog.com" 
  target="_blank" 
  rel="noopener noreferrer"
  onClick={(e) => e.stopPropagation()}
  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
>
  <Book className="w-3.5 h-3.5" />
  <span>Blog</span>
</a>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-lg border-b border-border pb-2 flex-1">Status da Infraestrutura</h2>
            </div>
            
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
        )}
      </div>
    </div>
  );
};

export default NetworkStatus;
