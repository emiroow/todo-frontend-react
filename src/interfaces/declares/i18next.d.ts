// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import translationEN from "./locales/en.json";
import translationFa from "./locales/fa.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "fa";
    // custom resources type
    resources: {
      fa: typeof translationFa;
      en: typeof translationEN;
    };
    // other
  }
}
