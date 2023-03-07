import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const id = 2;

  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }));

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={(e) => router.push("/")}>Go Home</button>
      <br />
      <br />
      {notes.map((note) => (
        <div key={note.id}>
          <Link href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
