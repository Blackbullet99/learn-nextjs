import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <div>
      <h1>
        Coffee Store Page {router.query.id}
        <Link href="/">Back to Home</Link>
        <Link href="/coffee-store/dynamic">Go to Dynamic</Link>
      </h1>
    </div>
  );
};

export default CoffeeStore;
