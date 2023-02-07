import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img className={clsx('logo', styles.logoBanner)} src={require('@site/static/img/banner.png').default} />
        <p className={clsx('tagline', styles.tagline)}>{siteConfig.tagline}</p>
        <p>詳細は<a href='/docs/intro'>ドキュメントページ</a>をご覧ください</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://demo.phrude.com">
            デモ
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
