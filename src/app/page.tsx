import Link from "next/link";
import styles from "./page.module.css";
import AnalyticsButton from "./components/AnalyticsButton";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <AnalyticsButton />
    </div>
  );
}
