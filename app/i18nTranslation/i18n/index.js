import i18n from 'i18n-js';

const en = require('../En');
const ar = require('../Ja');

i18n.fallbacks = true;
i18n.translations = {en, ar};

export default i18n;
