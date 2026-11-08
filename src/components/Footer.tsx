import Link from "next/link";
import { profile } from "@/content/portfolio";
export default function Footer() {
  return (
    <footer className="shell site-footer">
      <Link className="wordmark" href="/">
        pawan<span>.</span>
      </Link>
      <p>Made with curiosity. Still a work in progress.</p>
      <div>
        <a href={profile.links.github}>GitHub</a>
        <a href={profile.links.linkedin}>LinkedIn</a>
        <span>© {new Date().getFullYear()} · v4</span>
      </div>
    </footer>
  );
}
