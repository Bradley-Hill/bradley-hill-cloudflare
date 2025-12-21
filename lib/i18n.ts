// lib/i18n.ts (pseudocode - we'll build this)
// export function useI18n() {
//   const [language, setLanguage] = useState('en');
//   const translations = { en, fr };
  
//   const t = (key: string) => {
//     return getValueByPath(translations[language], key);
//   };
  
//   return { language, t, setLanguage };
// }

import en from "../locales/en.json";
import fr from "../locales/fr.json";
import { useState } from "react";


export function useI18n(){
    const [language, setLanguage] = useState('en');
    const translations = { en, fr };

    const translate = (key:string) =>{
        //TODO: improve this to handle nested keys
        return {language, translate, setLanguage}
    }

}