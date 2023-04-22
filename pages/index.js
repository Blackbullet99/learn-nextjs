import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "@/components/bannersugar";
import Image from "next/image";
import Card from "@/components/cardsugar";
import coffeeStore from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  console.log("context", context)
  return {
    props: {
      coffeeStore,
    }, // will be passed to the page component as props
  };
}

export default function Home({ coffeeStore }) {
  console.log("coffeeStore", coffeeStore);
  const handleOnClickBtn = () => {
    console.log("button clicked");
  };
  return (
    <>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner
          buttonText="View Stores nearby!"
          handleOnClick={handleOnClickBtn}
        />
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            alt="coffee"
            width={1000}
            height={450}
          />
        </div>
        <div className={styles.cardLayout}>
          {coffeeStore.map((coffeeStore) => {
            return (
              <Card key={coffeeStore.id}
                href={`/coffee-store/${coffeeStore.id}`}
                name={coffeeStore.name}
                imgUrl={coffeeStore.imgUrl}
                alt="Darkhorse Coffee"
                className={styles.card}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
