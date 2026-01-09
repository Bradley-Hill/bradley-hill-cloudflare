"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { translate, useI18n } from "./i18n";

type I18nContextType = {
    language: 'en' | 'fr';
    setLanguage: Dispatch<SetStateAction<'en'|'fr'>>;
    translate: (key:string, language: 'en' | 'fr') => string;
}

export let I18nContext = createContext<I18nContextType | null>(null);