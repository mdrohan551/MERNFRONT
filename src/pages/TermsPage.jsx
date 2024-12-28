import React, {useEffect} from 'react';
import featureStore from "../store/FeatureStore.js";
import Layout from "../components/layout/Layout.jsx";
import LegalsContent from "../components/features/LegalsContent.jsx";

const TermsPage = () => {
    const {LegalsDetailsRequest}=featureStore();
    useEffect(() => {
        (async ()=>{
            await LegalsDetailsRequest("terms")
        })()
    }, []);
    return (
        <Layout>
            <LegalsContent/>
        </Layout>
    );
};

export default TermsPage;