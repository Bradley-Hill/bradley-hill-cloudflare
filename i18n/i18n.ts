import en from "../locales/en.json";
import fr from "../locales/fr.json";
import { useContext } from "react";
import { I18nContext } from "./i18nContext";

type Translations = {
  common: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
  home: {
    welcomeMessage: string;
    introduction: string;
  };
  projects: {
    title: string;
    description: string;
  };
  about: {
    title: string;
    bio: string;
  };
  contact: {
    title: string;
    email: string;
  };
};

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error("useI18n must be used within an I18nsProvider");
    }
    return context;
}

export function translate(key:string, language: "en" | "fr") {
    const translations = { en, fr };
    const keyParts = key.split(".");
    let current: unknown = translations[language];

    for (const part of keyParts) {
      if (typeof current === "object" && current !== null) {
        current = (current as Record<string, unknown>)[part];
      } else {
        return key;
      }
    }

    return typeof current === "string" ? current : key;

}
