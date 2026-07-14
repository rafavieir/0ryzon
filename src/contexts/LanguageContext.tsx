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
    header: {
      cta: "Fale com a 0ryzon"
    },
    hero: {
      kicker: "Tecnologia aplicada a processos",
      title: "Tecnologia para processos mais eficientes.",
      subtitle:
        "Desenvolvemos soluções que conectam dados, sistemas e inteligência para simplificar operações e melhorar resultados.",
      ctaPrimary: "Fale com a 0ryzon",
      capabilities: ["Dados", "Automação", "Sistemas", "Inteligência aplicada"]
    },
    footer: {
      brand: "Tecnologia aplicada à melhoria de processos.",
      contact: "Contato"
    }
  },

  // ---------------------------------------------
  // --------------- ESPAÑOL ----------------------
  // ---------------------------------------------
  es: {
    header: {
      cta: "Habla con 0ryzon"
    },
    hero: {
      kicker: "Tecnología aplicada a procesos",
      title: "Tecnología para procesos más eficientes.",
      subtitle:
        "Desarrollamos soluciones que conectan datos, sistemas e inteligencia para simplificar operaciones y mejorar resultados.",
      ctaPrimary: "Habla con 0ryzon",
      capabilities: ["Datos", "Automatización", "Sistemas", "Inteligencia aplicada"]
    },
    footer: {
      brand: "Tecnología aplicada a la mejora de procesos.",
      contact: "Contacto"
    }
  },

  // ---------------------------------------------
  // ---------------- ENGLISH ---------------------
  // ---------------------------------------------
  en: {
    header: {
      cta: "Talk to 0ryzon"
    },
    hero: {
      kicker: "Technology applied to processes",
      title: "Technology for more efficient processes.",
      subtitle:
        "We build solutions that connect data, systems and intelligence to simplify operations and improve results.",
      ctaPrimary: "Talk to 0ryzon",
      capabilities: ["Data", "Automation", "Systems", "Applied intelligence"]
    },
    footer: {
      brand: "Technology applied to improving processes.",
      contact: "Contact"
    }
  }
};
