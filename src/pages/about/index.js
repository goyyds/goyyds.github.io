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
                    <img src="/img/mg.png" alt="mg"/>

                    <div>Michael</div>

                    <div>V: LuckyBoy_2024_</div>

                    <div>
                        <a href="/about/about">More</a>
                    </div>
                </p>
            </div>
        </Layout>
    );
}