import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  pt: {
    hero: {
      title: "Soluções para Web3",
      titleAlt: "Descentralizadas",
      subtitle: "Alta disponibilidade, observabilidade e redundância para redes blockchain e projetos descentralizados."
    },
    networkStatus: {
      title: "Status em Tempo Real",
      subtitle: "Monitoramento 24/7 de nossa infraestrutura",
      networks: "Redes Ativas",
      uptime: "Uptime Médio",
      nodes: "Nodes Operando"
    },
    vision: {
      visionTitle: "Visão",
      visionText: "Ser um operador líder de infraestrutura descentralizada, conectando provedores distribuídos, empresas e comunidades a um novo modelo de internet — aberta, resiliente e colaborativa.",
      missionTitle: "Missão",
      missionText: "Trazer profissionalismo, segurança e transparência à operação de nodes e validadores, contribuindo para o crescimento sustentável do ecossistema Web3 global."
    },
    networks: {
      title: "Redes & Ecossistemas",
      subtitle: "Atuamos e colaboramos com projetos líderes em DePIN e Web3",
      more: "+ Diversas outras redes PoS e DePIN em expansão"
    },
    differentials: {
      title: "Diferenciais",
      items: [
        {
          title: "Infraestrutura 100% Monitorada",
          description: "Painéis públicos de uptime e logs auditáveis em tempo real."
        },
        {
          title: "Operação Multi-Rede",
          description: "Experiência comprovada em performance e segurança em múltiplas blockchains."
        },
        {
          title: "Expertise Técnico Real",
          description: "Conhecimento profundo em cloud, containers, networking e arquitetura corporativa."
        },
        {
          title: "Redundância & Resiliência",
          description: "Arquitetura distribuída com múltiplos pontos de presença garantindo alta disponibilidade."
        },
        {
          title: "Educação & Expansão",
          description: "Compromisso com o crescimento e educação do ecossistema Web3 global."
        }
      ]
    },
    services: {
      title: "Serviços",
      subtitle: "Soluções profissionais para o ecossistema Web3",
      items: [
        {
          title: "Alta Disponibilidade",
          description: "Infraestrutura resiliente com redundância e uptime garantido para suas operações"
        },
        {
          title: "Observabilidade",
          description: "Monitoramento 24/7 com métricas, logs e alertas em tempo real"
        },
        {
          title: "Soluções Web3",
          description: "Arquitetura e implementação de projetos descentralizados"
        }
      ]
    },
    footer: {
      brand: "Infraestrutura descentralizada enterprise de alta disponibilidade",
      contact: "Contato",
      monitoring: "Monitoramento",
      statusPage: "Status Page",
      grafanaDashboard: "Grafana Dashboard",
      social: "Redes"
    }
  },
  es: {
    hero: {
      title: "Soluciones para Web3",
      titleAlt: "Descentralizadas",
      subtitle: "Alta disponibilidad, observabilidad y redundancia para redes blockchain y proyectos descentralizados."
    },
    networkStatus: {
      title: "Estado en Tiempo Real",
      subtitle: "Monitoreo 24/7 de nuestra infraestructura",
      networks: "Redes Activas",
      uptime: "Uptime Promedio",
      nodes: "Nodos Operando"
    },
    vision: {
      visionTitle: "Visión",
      visionText: "Ser un operador líder de infraestructura descentralizada, conectando proveedores distribuidos, empresas y comunidades a un nuevo modelo de internet — abierta, resiliente y colaborativa.",
      missionTitle: "Misión",
      missionText: "Aportar profesionalismo, seguridad y transparencia a la operación de nodos y validadores, contribuyendo al crecimiento sostenible del ecosistema Web3 global."
    },
    networks: {
      title: "Redes & Ecosistemas",
      subtitle: "Actuamos y colaboramos con proyectos líderes en DePIN y Web3",
      more: "+ Diversas otras redes PoS y DePIN en expansión"
    },
    differentials: {
      title: "Diferenciales",
      items: [
        {
          title: "Infraestructura 100% Monitoreada",
          description: "Paneles públicos de uptime y registros auditables en tiempo real."
        },
        {
          title: "Operación Multi-Red",
          description: "Experiencia comprobada en rendimiento y seguridad en múltiples blockchains."
        },
        {
          title: "Experiencia Técnica Real",
          description: "Conocimiento profundo en cloud, contenedores, redes y arquitectura corporativa."
        },
        {
          title: "Redundancia & Resiliencia",
          description: "Arquitectura distribuida con múltiples puntos de presencia garantizando alta disponibilidad."
        },
        {
          title: "Educación & Expansión",
          description: "Compromiso con el crecimiento y educación del ecosistema Web3 global."
        }
      ]
    },
    services: {
      title: "Servicios",
      subtitle: "Soluciones profesionales para el ecosistema Web3",
      items: [
        {
          title: "Alta Disponibilidad",
          description: "Infraestructura resiliente con redundancia y uptime garantizado para sus operaciones"
        },
        {
          title: "Observabilidad",
          description: "Monitoreo 24/7 con métricas, logs y alertas en tiempo real"
        },
        {
          title: "Soluciones Web3",
          description: "Arquitectura e implementación de proyectos descentralizados"
        }
      ]
    },
    footer: {
      brand: "Infraestructura descentralizada enterprise de alta disponibilidad",
      contact: "Contacto",
      monitoring: "Monitoreo",
      statusPage: "Página de Estado",
      grafanaDashboard: "Panel Grafana",
      social: "Redes"
    }
  },
  en: {
    hero: {
      title: "Solutions for Web3",
      titleAlt: "Decentralized",
      subtitle: "High availability, observability and redundancy for blockchain networks and decentralized projects."
    },
    networkStatus: {
      title: "Real-Time Status",
      subtitle: "24/7 monitoring of our infrastructure",
      networks: "Active Networks",
      uptime: "Average Uptime",
      nodes: "Operating Nodes"
    },
    vision: {
      visionTitle: "Vision",
      visionText: "To be a leading decentralized infrastructure operator, connecting distributed providers, enterprises and communities to a new internet model — open, resilient and collaborative.",
      missionTitle: "Mission",
      missionText: "Bring professionalism, security and transparency to node and validator operations, contributing to the sustainable growth of the global Web3 ecosystem."
    },
    networks: {
      title: "Networks & Ecosystems",
      subtitle: "We operate and collaborate with leading DePIN and Web3 projects",
      more: "+ Various other expanding PoS and DePIN networks"
    },
    differentials: {
      title: "Differentials",
      items: [
        {
          title: "100% Monitored Infrastructure",
          description: "Public uptime dashboards and auditable logs in real-time."
        },
        {
          title: "Multi-Network Operation",
          description: "Proven experience in performance and security across multiple blockchains."
        },
        {
          title: "Real Technical Expertise",
          description: "Deep knowledge in cloud, containers, networking and corporate architecture."
        },
        {
          title: "Redundancy & Resilience",
          description: "Distributed architecture with multiple points of presence ensuring high availability."
        },
        {
          title: "Education & Expansion",
          description: "Commitment to growth and education of the global Web3 ecosystem."
        }
      ]
    },
    services: {
      title: "Services",
      subtitle: "Professional solutions for the Web3 ecosystem",
      items: [
        {
          title: "High Availability",
          description: "Resilient infrastructure with redundancy and guaranteed uptime for your operations"
        },
        {
          title: "Observability",
          description: "24/7 monitoring with real-time metrics, logs and alerts"
        },
        {
          title: "Web3 Solutions",
          description: "Architecture and implementation of decentralized projects"
        }
      ]
    },
    footer: {
      brand: "High availability enterprise decentralized infrastructure",
      contact: "Contact",
      monitoring: "Monitoring",
      statusPage: "Status Page",
      grafanaDashboard: "Grafana Dashboard",
      social: "Social"
    }
  }
};
