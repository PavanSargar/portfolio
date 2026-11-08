import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="shell not-found">
      <p className="section-intro">404 · Page not found</p>
      <h1>A small wrong turn.</h1>
      <p>
        This page doesn’t exist. There’s plenty of work to explore back home.
      </p>
      <Link href="/" className="button button-primary">
        Back to home
      </Link>
    </main>
  );
}
