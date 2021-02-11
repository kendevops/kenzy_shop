import Head from "next/head";
import Link from "next/Link";
import products from "../products.json";
import styles from "../styles/Home.module.css";
import { fromImageToUrl, API_URL } from "../utils/urls";
import { twoDecimals } from "../utils/format";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kenny Shopz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {products.map((product) => (
        <div key={products.name} className={styles.product}>
          <Link href={`products/${product.slug}`}>
            <a>
              <div className={styles.product__Row}>
                <div className={styles.img}>
                  <img src={fromImageToUrl(product.image)} alt="image" />
                </div>
                <div className={styles.product__col}>
                  {product.name} ${twoDecimals(product.price)}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  //Fetch the products
  const product_res = await fetch(`${API_URL}/products/`);
  const product = await product_res.json();
  //Return the Products as props
  return {
    props: {
      products,
    },
  };
}
