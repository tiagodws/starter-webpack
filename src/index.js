import "babel-polyfill";

import "./style/default.scss";

const fallbackLocale = "en-US";
const userLocale = navigator.language;

bootstrapApplication();

function bootstrapApplication() {
    getUserLanguageBundle()
        .then(languageBundle => {
            document.getElementById("app").innerHTML = languageBundle.welcomeText;
        });
}

function getUserLanguageBundle(locale = userLocale) {
    return fetch(`./locales/${locale}.json`)
        .then(response => response.json())
        .catch(() => {
            console.warn(`Locale ${locale} not available.`);
            return getUserLanguageBundle(fallbackLocale);
        });
}

