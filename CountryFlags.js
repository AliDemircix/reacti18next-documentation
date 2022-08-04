import React, { useContext, useState } from 'react';
import { Select } from "antd";

import { lngs } from './Languages';

import { useTranslation } from 'react-i18next';
import { AppContext } from '../context/ContextApi';
export const CountryFlags = () => {
    const { selectedLanguage, setSelectedLanguage } = useContext(AppContext);
    const [showLanguageOption, setShowLanguageOption] = useState(false);
    const { Option } = Select;
    const { i18n } = useTranslation();

    return <>
        {!showLanguageOption && <img onClick={() => setShowLanguageOption(true)} className="currentlySelectedLanguage" src={lngs[selectedLanguage].flag} alt={selectedLanguage.nativeName} />}
        {showLanguageOption && <Select defaultValue='Lang' onChange={(e) => { setSelectedLanguage(e); i18n.changeLanguage(e); setShowLanguageOption(false) }} >
            {Object.keys(lngs).map((lng) => <Option key={lng} value={lng} ><img className="availableLanguages" src={lngs[lng].flag} alt={lngs[lng].nativeName} /></Option>)}
        </Select>}
    </>

}
