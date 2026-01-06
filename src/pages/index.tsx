import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Open Heat</title>
        <meta
          name="description"
          content="Open, community-driven standards for the global spicy community."
        />
      </Head>

      <main className={styles.page}>
        <div className={styles.flowBackground} aria-hidden="true" />

        <div className="container">
          <header className={styles.header}>
            <h1 className={styles.title}>Open Heat</h1>
            <p className={styles.subtitle}>
              Open, community-driven standards for the global spicy community.
            </p>
          </header>

          <section className={styles.grid} aria-label="Open Heat sections">
            <Link to="/standards/community-code" className={styles.card}>
              <div className={styles.cardTop} aria-hidden="true" />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>Standards</h3>
                <p className={styles.cardText}>
                  Read and adopt Open Heat standards, starting with the Community Code.
                </p>
              </div>
              <span className={styles.cardArrow} aria-hidden="true">
                →
              </span>
            </Link>

            <Link to="/adoption" className={styles.card}>
              <div className={styles.cardTop} aria-hidden="true" />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>Adoption</h3>
                <p className={styles.cardText}>
                  How to adopt, adapt, translate, and attribute the standards.
                </p>
              </div>
              <span className={styles.cardArrow} aria-hidden="true">
                →
              </span>
            </Link>

            <Link
              to="https://github.com/openheat/openheat"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.cardTop} aria-hidden="true" />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>Open Source</h3>
                <p className={styles.cardText}>
                  View the repository, contribute improvements, and track changes.
                </p>
              </div>
              <span className={styles.cardArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </section>
        </div>
      </main>
    </Layout>
  );
}
