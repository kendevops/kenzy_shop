import Head from "next/head";
import products from "../products.json";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kenny Shopz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {products.map((product) => (
        <div key={products.name} className={styles.product}>
          <div className={styles.product__Row}>
            <div className={styles.img}>
              <img src="" alt="image" />
            </div>
            <div>
              {product.name} {product.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
