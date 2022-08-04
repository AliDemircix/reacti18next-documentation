import React, { useState, createContext } from 'react';

type ContexType = {
    isLogin: boolean;
    isCalculated: boolean;
    isDisabled: boolean;
    selectedLanguage: any;
    setIsLogin: (a: boolean) => void;
    setIsCalculated: (a: boolean) => void;
    setIsDisabled: (a: boolean) => void;
    setSelectedLanguage: (a: any) => void;
}
type Props = {
    children: any,
};


export const AppContext = createContext<ContexType>({ isLogin: false, isCalculated: false, isDisabled: false, selectedLanguage: '', setIsCalculated() { }, setIsLogin() { }, setIsDisabled() { }, setSelectedLanguage() { } });
const AppContextProvider = (props: Props) => {
    let initialLangState = localStorage.getItem('i18nextLng') === 'en-US' ? "en" : localStorage.getItem('i18nextLng');
    const [isLogin, setIsLogin] = useState(false);
    const [isCalculated, setIsCalculated] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(initialLangState);

    return (
        <AppContext.Provider value={{ isLogin, setIsLogin, isCalculated, setIsCalculated, isDisabled, setIsDisabled, selectedLanguage, setSelectedLanguage }}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;
