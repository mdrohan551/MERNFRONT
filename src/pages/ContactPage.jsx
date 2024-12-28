import React, {useEffect} from 'react';
import featureStore from "../store/FeatureStore.js";
import Layout from "../components/layout/Layout.jsx";
import LegalsContent from "../components/features/LegalsContent.jsx";

const ContactPage = () => {
    const {LegalsDetailsRequest}=featureStore();
    useEffect(() => {
        (async ()=>{
            await LegalsDetailsRequest("contact")
        })()
    }, []);
    return (
        <Layout>
            <LegalsContent/>
        </Layout>
    );
};

export default ContactPage;