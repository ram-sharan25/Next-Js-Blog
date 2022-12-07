import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h1>
        Back to the <Link href="/">Home page</Link>
      </h1>
    </>
  );
}
