// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import LegalsContent from "../components/features/LegalsContent.jsx";
import featureStore from "../store/FeatureStore.js";

const AboutPage = () => {
    const {LegalsDetailsRequest}=featureStore();
    useEffect(() => {
        (async ()=>{
           await LegalsDetailsRequest("about")
        })()
    }, []);
    return (
        <Layout>
            <LegalsContent/>
        </Layout>
    );
};

export default AboutPage;