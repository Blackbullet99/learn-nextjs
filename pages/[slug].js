// import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const WildCard = () => {
  const router = useRouter();
  console.log("router", router);
  const query = router.query.slug;
  console.log("query", query);
  return (
    <>
      <Head>
        <title>{query}</title>
      </Head>
      <div>
        WildCardRoute:
        {query}
      </div>
    </>
  );
};

export default WildCard;
