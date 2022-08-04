import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init(
        {
            debug: true,
            fallbackLng: 'en',
            resources: {
                en: {
                    translation: {
                        modelaTitle: 'Impact of Product Taxation on the Coca-Cola System Value Chain',
                        modelaDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident neque ratione reiciendis architecto et libero laudantium natus, consectetur cum ipsum suscipit error vel illo dicta accusamus delectus sequi perspiciatis beatae.',
                        modelbTitle: 'Impact of Product Taxation on the Food & Beverage Industry',
                        modelbDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    }
                },
                de: {
                    translation: {
                        modelaTitle: 'Auswirkungen der Produktbesteuerung auf die Wertschöpfungskette des Coca-Cola-Systems',
                        modelaDescription: 'Editiere<1>src/App.js</1> und speichere um neu zu laden.',
                        modelbTitle: 'Auswirkungen der Produktbesteuerung auf die Lebensmittel- und Getränkeindustrie',
                        modelbDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    }
                }
            }
        }
    );
