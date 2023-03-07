import React from "react";
import Link from "next/link";
import "../src/components/styles.module.css";

const Page = () => (
  <div className="test">
    <h1>Index page</h1>

    <Link href="/notes">
      <a>Notes</a>
    </Link>
  </div>
);

export default Page;
