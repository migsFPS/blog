import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
  <p style={{ textAlign: 'justify' }}>
    Yo, I’m Joefer Miguel Tulabut. I’m all about good vibes, new experiences,
    and chasing bigger goals. I love travelling, gaming, and hitting up random
    stores—whether I’m exploring a new place, grinding through a game, or
    hunting for a rare thrift find, I’m always looking for something different.
  </p>

  <p style={{ textAlign: 'justify' }}>
    But I’m not just here to have fun. I’ve got a goal. I’m ready to learn,
    work hard, and level up my skills. At the end of the day, my biggest
    motivation is my parents. I’m starting from where I am, but I’m aiming
    way higher.
  </p>

  <p>
    (This is a sample website - you’ll be building a site like this on{' '}
    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
  </p>
</section>
    </Layout>
  );
}