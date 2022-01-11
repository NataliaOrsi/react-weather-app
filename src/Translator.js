import React from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownButton } from "react-bootstrap";

import "./App.css";

const lngs = {
  en: { nativeName: "English" },
  pt: { nativeName: "Português" },
  es: { nativeName: "Español " },
  fr: { nativeName: "Français" },
  nl: { nativeName: "Nederlands" },
};

export default function Translator() {
    const { t, i18n } = useTranslation();
    return (
      <div className="row row-position">
        <div className="col-9"></div>
        <div className="col-3">
          <DropdownButton
            className="dropdown-button"
            drop="down"
            title={t("description.languageButton")}
          >
            {Object.keys(lngs).map((lng) => (
              <Dropdown.Item
                className="languages-button"
                as="button"
                key={lng}
                style={{
                  fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
                }}
                onClick={() => i18n.changeLanguage(lng)}
              >
                {" "}
                {lngs[lng].nativeName}{" "}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      </div>
    );
}
