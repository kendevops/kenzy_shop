import Link from "next/Link";


import styles from "../styles/Header.module.css";
export default () => (
  <div>
    <div className={styles.title}>
      <Link href="/">
        <a>
          <h1>Kennyz Shop</h1>
        </a>
      </Link>
    </div>
  </div>
);
