"use client";

import { useState, ReactNode } from "react";
import { I18nContext } from "./i18nContext";
import { translate } from "./i18n";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"en" | "fr">("en");
  return (
    <I18nContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </I18nContext.Provider>
  );
}
