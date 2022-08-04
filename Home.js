

import React, { useContext } from "react";
import * as Paths from '../Paths';
import './Home.css';

import { Link } from "react-router-dom";
import { AppContext } from "../context/ContextApi";
import { Header } from "../widgets/Header";
import {useTranslation} from 'react-i18next';
const Home = () => {
    const { isLogin } = useContext(AppContext);
    const {t}=useTranslation();
    if (!isLogin) {
        window.location.replace(Paths.login.path);
    }
    return <div className="homeComponent">
        <Header></Header>
        <div className="modelsContainer">
            <div className="modelContainer">
                <Link to={Paths.modelA.path} className="model" > {t('modelaTitle')}</Link>
                <p className="modelDescription">{t('modelaDescription')}</p>
            </div>
            <div className="modelContainer">
                <Link to={Paths.modelB.path} className="model"> {t('modelbTitle')}</Link>
                <p className="modelDescription">{t('modelbDescription')}</p>
            </div>
        </div>
    </div>
}
export default Home
