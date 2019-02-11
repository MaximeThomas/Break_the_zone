import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from './en.json';
import fr from './fr.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
  fr
};

const currentLocale = I18n.currentLocale();

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
};

// Get the date
export function date(name, params = {}) {
  var date = new Date();
  if (currentLocale == 'en'){
    return I18n.strftime(date, "%d/%m/%Y");
  } else {
    return I18n.strftime(date, "%m/%d/%Y");
  }
};

export default I18n;