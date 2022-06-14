import i18n from 'i18n-js';

const en = require('../En');
const hn = require('../Hn');

i18n.fallbacks = true;
i18n.translations = {en, hn};

export default i18n;
