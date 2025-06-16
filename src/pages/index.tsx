import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function preCheck(siteConfig:any){
  console.log(siteConfig.themeConfig["navbar"].items);
  let items =siteConfig.themeConfig["navbar"].items
  const hasLoginRoute = items.some(item => item.to === '/login' || item.to === '/logout')
  if(!hasLoginRoute){
    // 未登录
    items.push({to:"/login",
      label: 'Login',
      position: 'right'})
    // 已登录
    items.push({to:"/logout",
      label: 'Logout',
      position: 'right'})
  }
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
    return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/*<div className={styles.buttons}>*/}
        {/*  <Link*/}
        {/*    className="button button--secondary button--lg"*/}
        {/*    to="/blog">*/}
        {/*      Let's start the journey !⏱️*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  console.log(siteConfig);
  // preCheck(siteConfig)
  return (
      <Layout
          title={`Welcome to ${siteConfig.title}`}
          description="Description will go into a meta tag in <head />">
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
  );
}
