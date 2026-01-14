"use client";

import { ReactNode, useState, useEffect } from "react";
import { I18nContext } from "./i18nContext";
import { translate } from "./i18n";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"en" | "fr">("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("userLanguage");
      if(savedLanguage === 'en' || savedLanguage === 'fr'){
        setLanguage(savedLanguage);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("userLanguage", language);
    }
  }, [language]);

  const getText = (key: string): string => translate(key, language);

  return (
    <I18nContext.Provider value={{ language, setLanguage, getText }}>
      {children}
    </I18nContext.Provider>
  );
}
