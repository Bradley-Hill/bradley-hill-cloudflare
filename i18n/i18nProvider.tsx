"use client";

import { ReactNode, useState } from "react";
import { I18nContext } from "./i18nContext";
import { translate } from "./i18n"; 

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"en" | "fr">("en");

  const getText = (key: string): string => translate(key, language);

  return (
    <I18nContext.Provider value={{ language, setLanguage, getText }}>
      {children}
    </I18nContext.Provider>
  );
}
