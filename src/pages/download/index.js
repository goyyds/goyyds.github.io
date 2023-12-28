import React from 'react';
import Layout from '@theme/Layout';

export default function Index() {
    return (
        <Layout title="Hello" description="Hello React Page">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <p>
                    download
                </p>
            </div>
        </Layout>
    );
}