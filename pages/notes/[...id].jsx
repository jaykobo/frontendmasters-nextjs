import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
    <div>
      <h1>Note title: {id}</h1>

      <Link href="/notes">
        <a>⬅ back to Notes</a>
      </Link>
    </div>
  );
};

export default Page;
