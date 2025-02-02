import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
