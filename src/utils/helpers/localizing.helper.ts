import i18n from "@/i18n";

export const changeLanguage = (lang: "fa" | "en") => {
  i18n.changeLanguage(lang);
  document.body.style.direction = lang === "fa" ? "rtl" : "ltr";
};
