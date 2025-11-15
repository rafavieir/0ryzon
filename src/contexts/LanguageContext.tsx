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
      title: "Soluções em Tecnologia",
      titleAlt: "que Simplificam seu Dia a Dia",
      subtitle:
        "Suporte, infraestrutura e automação em T.I. para quem precisa de tecnologia funcionando, sem complicação."
    },
    networkStatus: {
      title: "Status em Tempo Real",
      subtitle: "Monitoramento 24/7 dos serviços e infraestrutura que operamos",
      networks: "Serviços Ativos",
      uptime: "Disponibilidade Média",
      nodes: "Chamados em Andamento"
    },
    vision: {
      visionTitle: "Visão",
      visionText:
        "Ser referência em soluções de T.I. que tornam a tecnologia invisível para o usuário final — estável, simples e sempre disponível.",
      missionTitle: "Missão",
      missionText:
        "Facilitar a vida de pessoas e empresas através de suporte, infraestrutura e automação em tecnologia, com foco na experiência do usuário final."
    },
    networks: {
      title: "Soluções & Áreas de Atuação",
      subtitle:
        "Atuamos em suporte, infraestrutura, nuvem, redes, automação e observabilidade para usuários finais e empresas.",
      more: "+ Outras soluções sob medida em tecnologia da informação"
    },
    differentials: {
      title: "Diferenciais",
      items: [
        {
          title: "Foco no Usuário Final",
          description:
            "Tudo é pensado para reduzir fricção, tirar dúvidas rápido e manter a tecnologia fora do caminho."
        },
        {
          title: "Monitoramento Proativo",
          description:
            "Acompanhamos serviços e infraestrutura em tempo real para agir antes do problema aparecer."
        },
        {
          title: "Expertise em T.I.",
          description:
            "Experiência sólida em suporte, redes, nuvem, segurança e integração de sistemas."
        },
        {
          title: "Estabilidade & Confiabilidade",
          description:
            "Arquiteturas pensadas para disponibilidade, segurança e previsibilidade na operação."
        },
        {
          title: "Educação & Documentação",
          description:
            "Guias, boas práticas e orientação contínua para que usuários se sintam seguros com a tecnologia."
        }
      ]
    },
    services: {
      title: "Serviços",
      subtitle: "Soluções completas em T.I. para facilitar o dia a dia digital",
      items: [
        {
          title: "Suporte & Help Desk",
          description:
            "Atendimento ágil para incidentes, dúvidas e problemas do dia a dia com computadores, sistemas e acessos."
        },
        {
          title: "Infraestrutura & Nuvem",
          description:
            "Gestão de servidores, redes, acessos, backup e serviços em nuvem com foco em estabilidade e segurança."
        },
        {
          title: "Automação & Integrações",
          description:
            "Automatização de rotinas e integração entre ferramentas para reduzir trabalho manual e erros."
        }
      ]
    },
    clients: {
      title: "Nossos Clientes",
      subtitle:
        "Criamos soluções de T.I. que trabalham nos bastidores e deixam a operação deles fluir sem atrito.",
      storyLabel: "História de impacto",
      activeLabel: "Ativo",
      viewStory: "Ver história",
      more:
        "E outras empresas que contam com a 0ryzon para eliminar fricção da tecnologia no dia a dia.",
      items: [
        {
          title: "Opus Construtora com tecnologia que não atrapalha a obra",
          context:
            "A Opus precisava de tecnologia que funcionasse sem virar mais um problema no meio da reforma. Orçamentos, documentos, fotos de obra e comunicação com clientes estavam espalhados em vários apps e dispositivos.",
          howWeHelp:
            "Organizamos o ecossistema digital da Opus, estruturando acessos, armazenamento em nuvem e automações leves para orçamentos e registros de obra. Hoje, a equipe acompanha tudo com facilidade, sem arquivos perdidos ou logins quebrados.",
          highlight:
            "A Opus foca em entregar obras impecáveis, e nós garantimos que o digital não trave o dia."
        },
        {
          title: "Mordelicia com uma operação de delivery mais fluida",
          context:
            "A Mordelicia recebia pedidos de vários canais, com equipe no corre o dia inteiro e sistemas que não se integravam bem. Quem sofria era o cliente final.",
          howWeHelp:
            "Conectamos ferramentas, organizamos acessos e criamos automações para pedidos, relatórios e comunicação interna. O resultado foi menos caos, menos retrabalho e muito mais previsibilidade.",
          highlight:
            ""
        }
      ]
    },
    footer: {
      brand: "Soluções em tecnologia para simplificar o dia a dia digital",
      contact: "Contato",
      monitoring: "Monitoramento",
      statusPage: "Status dos Serviços",
      grafanaDashboard: "Painel de Observabilidade",
      social: "Redes"
    }
  },

  // ---------------------------------------------
  // --------------- ESPAÑOL ----------------------
  // ---------------------------------------------
  es: {
    hero: {
      title: "Soluciones en Tecnología",
      titleAlt: "que Simplifican tu Día a Día",
      subtitle:
        "Soporte, infraestructura y automatización en T.I. para quienes necesitan tecnología funcionando sin complicaciones."
    },
    networkStatus: {
      title: "Estado en Tiempo Real",
      subtitle: "Monitoreo 24/7 de los servicios e infraestructura que operamos",
      networks: "Servicios Activos",
      uptime: "Disponibilidad Promedio",
      nodes: "Tickets en Curso"
    },
    vision: {
      visionTitle: "Visión",
      visionText:
        "Ser referencia en soluciones de T.I. que hacen que la tecnología sea invisible para el usuario final: estable, simple y siempre disponible.",
      missionTitle: "Misión",
      missionText:
        "Facilitar la vida de personas y empresas mediante soporte, infraestructura y automatización tecnológica, con foco en la experiencia del usuario final."
    },
    networks: {
      title: "Soluciones & Áreas de Actuación",
      subtitle:
        "Actuamos en soporte, infraestructura, nube, redes, automatización y observabilidad para usuarios finales y empresas.",
      more: "+ Otras soluciones a medida en tecnología de la información"
    },
    differentials: {
      title: "Diferenciales",
      items: [
        {
          title: "Enfoque en el Usuario Final",
          description:
            "Todo está pensado para reducir fricción, resolver dudas rápido y mantener la tecnología fuera del camino."
        },
        {
          title: "Monitoreo Proactivo",
          description:
            "Acompañamos servicios e infraestructura en tiempo real para actuar antes de que aparezca el problema."
        },
        {
          title: "Experiencia en T.I.",
          description:
            "Sólida experiencia en soporte, redes, nube, seguridad e integración de sistemas."
        },
        {
          title: "Estabilidad & Confiabilidad",
          description:
            "Arquitecturas diseñadas para disponibilidad, seguridad y previsibilidad en la operación."
        },
        {
          title: "Educación & Documentación",
          description:
            "Guías, buenas prácticas y orientación continua para que los usuarios se sientan seguros con la tecnología."
        }
      ]
    },
    services: {
      title: "Servicios",
      subtitle: "Soluciones completas en T.I. para facilitar el día a día digital",
      items: [
        {
          title: "Soporte & Help Desk",
          description:
            "Atención ágil para incidentes, dudas y problemas diarios con computadoras, sistemas y accesos."
        },
        {
          title: "Infraestructura & Nube",
          description:
            "Gestión de servidores, redes, accesos, copias de seguridad y servicios en la nube con foco en estabilidad y seguridad."
        },
        {
          title: "Automatización & Integraciones",
          description:
            "Automatización de rutinas e integración entre herramientas para reducir trabajo manual y errores."
        }
      ]
    },
    clients: {
      title: "Nuestros Clientes",
      subtitle:
        "Construimos soluciones de T.I. que se quedan en segundo plano y dejan la operación fluir sin fricción.",
      storyLabel: "Historia de impacto",
      activeLabel: "Activo",
      viewStory: "Ver historia",
      more:
        "Y otras empresas que eligen a 0ryzon para quitar la fricción de la tecnología en su día a día.",
      items: [
        {
          title: "Opus Construtora con tecnología que no estorba la obra",
          context:
            "Opus necesitaba tecnología que funcionara sin convertirse en un problema más en medio de la reforma. Presupuestos, documentos, fotos de obra y comunicación con clientes estaban dispersos en varias apps y dispositivos.",
          howWeHelp:
            "Organizamos el entorno de T.I. de Opus, estructurando cuentas, accesos, almacenamiento en la nube y automatizaciones sencillas. El equipo ahora trabaja con claridad y sin pérdidas de información.",
          highlight:
            "El papel de 0ryzon es mantener la tecnología en backstage: Opus se enfoca en construir, nosotros en que nada digital se rompa."
        },
        {
          title: "Mordelicia con una operación de delivery más fluida",
          context:
            "Mordelicia recibía pedidos desde varios canales y usaba sistemas que no se integraban bien. El caos afectaba la experiencia del cliente.",
          howWeHelp:
            "Conectamos herramientas, organizamos accesos y creamos automatizaciones para pedidos, reportes y comunicación interna. Flujo limpio, menos errores, más velocidad.",
          highlight:
            "Con 0ryzon, la cocina se enfoca en el sabor, el equipo en las personas — y la tecnología simplemente funciona."
        }
      ]
    },
    footer: {
      brand: "Soluciones tecnológicas para simplificar el día a día digital",
      contact: "Contacto",
      monitoring: "Monitoreo",
      statusPage: "Estado de los Servicios",
      grafanaDashboard: "Panel de Observabilidad",
      social: "Redes"
    }
  },

  // ---------------------------------------------
  // ---------------- ENGLISH ---------------------
  // ---------------------------------------------
  en: {
    hero: {
      title: "Technology Solutions",
      titleAlt: "that Simplify Your Day-to-Day",
      subtitle:
        "Support, infrastructure and automation for people and businesses that need technology working without hassle."
    },
    networkStatus: {
      title: "Real-Time Status",
      subtitle: "24/7 monitoring of the services and infrastructure we operate",
      networks: "Active Services",
      uptime: "Average Availability",
      nodes: "Open Tickets"
    },
    vision: {
      visionTitle: "Vision",
      visionText:
        "To be a reference in IT solutions that make technology invisible to the end user — stable, simple and always available.",
      missionTitle: "Mission",
      missionText:
        "To make life easier for people and organizations through support, infrastructure and automation, with a strong focus on the end-user experience."
    },
    networks: {
      title: "Solutions & Expertise",
      subtitle:
        "We operate in support, infrastructure, cloud, networking, automation and observability for individuals and companies.",
      more: "+ Several other tailor-made IT solutions"
    },
    differentials: {
      title: "Differentials",
      items: [
        {
          title: "End-User Focus",
          description:
            "Everything is designed to reduce friction, solve issues quickly and keep technology out of the way."
        },
        {
          title: "Proactive Monitoring",
          description:
            "We monitor services and infrastructure in real time to act before problems arise."
        },
        {
          title: "IT Expertise",
          description:
            "Strong experience in support, networking, cloud, security and system integration."
        },
        {
          title: "Stability & Reliability",
          description:
            "Architectures designed for availability, security and predictable operation."
        },
        {
          title: "Education & Documentation",
          description:
            "Guides, best practices and continuous guidance so users feel safe with technology."
        }
      ]
    },
    services: {
      title: "Services",
      subtitle:
        "End-to-end IT solutions to simplify the digital day-to-day",
      items: [
        {
          title: "Support & Help Desk",
          description:
            "Fast response for incidents, questions and everyday issues with devices, systems and access."
        },
        {
          title: "Infrastructure & Cloud",
          description:
            "Management of servers, networks, access, backups and cloud services with a focus on stability and security."
        },
        {
          title: "Automation & Integrations",
          description:
            "Workflow automation and integration between tools to reduce manual work and errors."
        }
      ]
    },
    clients: {
      title: "Our Clients",
      subtitle:
        "We build IT solutions that stay in the background and let operations flow without friction.",
      storyLabel: "Impact Story",
      activeLabel: "Active",
      viewStory: "View Story",
      more:
        "And other companies that trust 0ryzon to eliminate technology friction from daily operations.",
      items: [
        {
          title: "Opus Construtora with tech that doesn’t get in the way",
          context:
            "Opus needed technology that worked without becoming another problem in the middle of a construction project. Quotes, documents, site photos and communication were scattered across apps and devices.",
          howWeHelp:
            "We organized their digital environment: access control, cloud structure and workflow automations for quotes and site logs. Now the team works with clarity and zero information loss.",
          highlight:
            "0ryzon keeps tech backstage: Opus builds, we make sure nothing digital breaks."
        },
        {
          title: "Mordelicia with a smoother delivery operation",
          context:
            "Mordelicia received orders from multiple channels and dealt with systems that didn’t integrate well. Chaos affected the end-customer experience.",
          howWeHelp:
            "We connected tools, organized access and created automations for orders, reporting and internal communication. Less chaos, fewer mistakes, more consistency.",
          highlight:
            "With 0ryzon, the kitchen focuses on flavor, the team focuses on people — and tech simply works."
        }
      ]
    },
    footer: {
      brand: "Technology solutions to simplify the digital day-to-day",
      contact: "Contact",
      monitoring: "Monitoring",
      statusPage: "Service Status",
      grafanaDashboard: "Observability Dashboard",
      social: "Social"
    }
  }
};
