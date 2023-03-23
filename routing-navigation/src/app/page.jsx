import Link from "next/link"

function HomePage() {
  return (
    <div>
      <Link href="/aboutus">About Us</Link>
      <br />
      <Link href="/docs/post-1">Post 1</Link>
      <br />
      <Link href="/docs/post-1/post-2">Post 2</Link>
      <br />
      <Link
      target="_blank"
      className="test"
      href={{
        pathname:"/aboutus",
        query: {
          name: "Next.js",
          surname:"Library"
        }
      }}>About Page with Object</Link>
    </div>
  )
}

export default HomePage