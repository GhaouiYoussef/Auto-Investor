/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ap75nc4Ed2v
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
// import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ResponsiveLine } from "@nivo/line"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import Link from "next/link";
import Link from "next/link";
import styles from "./currency.module.css"; // Import CSS file

export default function Currency() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Crypto Investing</h1>
      </header>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <h2 className={styles.navTitle}>Investment Categories</h2>
          <ul className={styles.navList}>
            <li>
              <Link href="#" className={styles.navLink}>Bitcoin</Link>
            </li>
            <li>
              <Link href="#" className={styles.navLink}>Ethereum</Link>
            </li>
            <li>
              <Link href="#" className={styles.navLink}>Altcoins</Link>
            </li>
            <li>
              <Link href="#" className={styles.navLink}>DeFi</Link>
            </li>
            <li>
              <Link href="#" className={styles.navLink}>NFTs</Link>
            </li>
          </ul>
        </nav>
        <main className={styles.main}>
          <section>
            <h2 className={styles.sectionTitle}>Research Cryptocurrencies</h2>
            <div className={styles.cardContainer}>
              <Card>
                {/* Card content */}
              </Card>
              <Card>
                {/* Card content */}
              </Card>
              <Card>
                {/* Card content */}
              </Card>
            </div>
          </section>
          <section>
            <h2 className={styles.sectionTitle}>Track Portfolio Performance</h2>
            <div className={styles.cardContainer}>
              <Card>
                {/* Card content */}
              </Card>
            </div>
          </section>
          <section>
            <h2 className={styles.sectionTitle}>Make Manual Trades</h2>
            <div className={styles.cardContainer}>
              <Card>
                {/* Card content */}
              </Card>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

function LineChart(props) {
  return (
    <div {...props}>
      {/* Line chart component */}
    </div>
  );
}
