import React from "react";
import { useTranslation } from "react-i18next";
function app() {
  const { t, i18n } = useTranslation();
  const setLangCodition = (langCode) => {
    i18n.changeLanguage(langCode);
  };
  return (
    <div>
      {t("message")}
      <div className="flex">
        <button onClick={() => setLangCodition("zhCN")}>切换中文</button>
        <button onClick={() => setLangCodition("en")}>切换英文</button>
        <button onClick={() => setLangCodition("de")}>切换德语</button>
        <button onClick={() => setLangCodition("fr")}>切换法语</button>
      </div>
    </div>
  );
}

export default app;
