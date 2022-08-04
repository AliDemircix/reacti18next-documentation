# i18n Documentations

1. Installing
    1. npm install i18next --save
    2. yarn add i18next
2. Create i18n.js file 
3. Import i18n to index.js file
    
    ```jsx
    import './i18n'
    ```
    
4. Import useTranslation to App.js 
    
    ```jsx
    import {useTranslation , Trans} from 'react-i18next';
    
    const App=()=>{
    const {t}=useTranslation();
    return <div> {t('login')}
    					<p>
    					<Trans i18nKey="description">
    						Edit <code>src/App.js</code>and save o reload.
    					<Trans>
    					</p>
    			 </div>
    
    ```
    
5. Importing i18next to i18n.js
    
    ```jsx
    import i18next from 'i18next';
    import {initReactI18next} from 'react-i18next';
    import LanguageDetector from 'i18next-browser-languagedetector'
    ```
    
6. Creating translation 
    
    ```jsx
    i18next
    	.use(initReactI18next)
    	.use(LanguageDetector)
    	.init({
    		debug:true,
    		fallbackLng:'en',
    		resources: {
    			en: {
    				translation: {
    					login:'Login Here',
    					description:'Edit <1>src/App.js</1> and save to reload.'
    				}
    			},
    			de: {
    				translation: {
    					login:'Anmeldung',
    					description:'Editiere<1>src/App.js</1> und speichere um neu zu laden.'
    		}
    	})
    ```
    
7. Make Language Selection in App.js
    - Define some languages
        
        ```jsx
        const lngs= {
        	en: { nativeName: 'English' },
        	de: { nativeName: 'Deutsch' }
        };
        ```
        
    - Add language select button and add i18n to useTranslation()
        
        ```jsx
        const {t,i18n} = useTranslation(); // t was already added
        <div>
        	{Object.keys(lngs).map((lng) => (
        		<button type="submit" key={lng} onClick={()=> i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage===lng}>{lngs[lng].nativeName} 
        ```
        
    1. Separate to language files using npm i i18next-http-backend package
        
        ```jsx
        npm i i18next-http-backend;
        ```
        
        - import Backend to the App.js
            
            ```jsx
            import Backend from 'i18next-http-backend';
            ```
            
        - use backend in i18next
            
            ```jsx
            i18next
            	.use(Backend)
            ```
            
        - Create a locales folder in public folder
        - Create a language folder in locales folder locales/en
        - Create a JSON file named translation.json
            
            ```jsx
            {
            			"login":"Login Here",
            			"description":"Edit <1>src/App.js</1> and save to reload."
            }
            ```
            
        - Remove to resources property in the i18n.js file.
            
            ```jsx
            i18next
            	.use(initReactI18next)
            	.use(LanguageDetector)
            	.init({
            		debug:true,
            		fallbackLng:'en',
            		~~resources: {
            			en: {
            				translation: {
            					login:'Login Here',
            					description:'Edit <1>src/App.js</1> and save to reload.'
            				}
            			},
            			de: {
            				translation: {
            					login:'Anmeldung',
            					description:'Editiere<1>src/App.js</1> und speichere um neu zu laden.'
            		}~~
            	})
            ```
            
        - Add Suspense wrapper to index.js
            
            ```jsx
            root.render(
            	<React.StrictMode>
            			<React.Suspense fallback="loading">
            				<App/>
            			</React.Suspense>
            	</React.StrictMode>
            );
            ```
            
    2. Add saveMissing:true property in i18n.js
        
        ```jsx
        i18next
        	.init({
        saveMissing:true
        })
        ```
        
    3. Missing key check  App.js with using saveMissing:true if we use locize backend it will automatically added and translated with other languages. [19:25](https://youtu.be/SA_9i4TtxLQ) 
        
        ```jsx
        <p>{t('new.key','this will be added automatically')} </p>
        ```
        
    
    NOTE: We can use locize backend also with installing:
    
    - If we use this our locales folder will be storaged to the locize server so we dont need to store them public/locales folder.
        - [ ]  Delete locales folder in public folder
        - [ ]  Add backend property with projectId and apiKey in locize
    
    ```jsx
    npm i i18next-locize-backend
    
    import Backend from 'i18nex-locize-backend' // in i18n.js
    
    .init({
    	backend:{
    		projectId:'',
    		apiKey:''
    }
    })
    ```
