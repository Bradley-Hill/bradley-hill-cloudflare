"use client";

import { createContext, Dispatch, SetStateAction } from "react";

type I18nContextType = {
    language: 'en' | 'fr';
    setLanguage: Dispatch<SetStateAction<'en'|'fr'>>;
    getText: (key:string) => string;
}

export let I18nContext = createContext<I18nContextType | null>(null);