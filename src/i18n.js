import kz from './trans/kz.json'
import ru from './trans/ru.json'

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'


const resources = {
    kz: {
        translation: kz,
    },
    ru:{
        translation:ru,
    }
}

i18n
.use(initReactI18next)
.init({
    resources,
    lng:JSON.parse(localStorage.getItem('language')),
    fallbackLng:'ru'
})

export default i18n;