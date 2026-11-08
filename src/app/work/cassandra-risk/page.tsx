import type { Metadata } from "next";
import Link from "next/link";
import { cassandra } from "@/content/portfolio";
import ProjectPreview from "@/components/ProjectPreview";
export const metadata: Metadata = {
  title: "Cassandra Risk — Selected work",
  description:
    "Full-stack leadership for Cassandra Risk: frontend, backend, Vertex AI integration, UI/UX, and Google Cloud delivery.",
  alternates: { canonical: "/work/cassandra-risk" },
  twitter: {
    card: "summary_large_image",
    title: "Cassandra Risk — Selected work",
    description: cassandra.description,
  },
  openGraph: {
    title: "Cassandra Risk — Selected work",
    description: cassandra.description,
    url: "/work/cassandra-risk",
  },
};
export default function CassandraPage() {
  return (
    <main id="main" className="case-page">
      <header className="shell case-header">
        <Link className="text-link" href="/#work">
          Back to selected work
        </Link>
        <p className="section-intro">Cassandra Risk (Improbable Worlds)</p>
        <h1>
          Building for
          <br />
          earlier understanding.
        </h1>
        <p className="case-lead">{cassandra.description}</p>
        <div className="case-meta">
          <div>
            <span>My role</span>
            <strong>{cassandra.role}</strong>
          </div>
          <div>
            <span>Timeline</span>
            <strong>{cassandra.timeline}</strong>
          </div>
          <div>
            <span>Platform milestone</span>
            <strong>
              {cassandra.milestone.value} {cassandra.milestone.label}
            </strong>
            <small>As of {cassandra.milestone.date}</small>
          </div>
          <a className="button button-primary" href={cassandra.url}>
            Visit Cassandra Risk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>
      <div className="shell">
        <ProjectPreview project="cassandra" large />
      </div>
      <section className="shell case-section">
        <h2>The product</h2>
        <div>
          <p>
            Cassandra Risk brings conflict early warning into public view.
            People contribute forecasts about warning signs of conflict;
            questions resolve against named public sources, and forecasting
            accuracy is tracked over time.
          </p>
          <p>
            The public platform gives community judgement a place in
            understanding emerging risk. Its forecasts are contributed by
            people, with transparent resolution and scoring to help participants
            learn over time.
          </p>
        </div>
      </section>
      <section className="shell case-section">
        <h2>My contribution</h2>
        <div>
          <p className="case-lead">{cassandra.contribution}</p>
          <div className="responsibility-list">
            {cassandra.responsibilities.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="shell case-section">
        <h2>How I approach the work</h2>
        <div>
          <p>
            Working across the stack means following a feature beyond the first
            interface. I design the user experience, build the frontend and
            backend, connect the AI services, and manage deployment on Google
            Cloud.
          </p>
          <p>
            Working on the whole product means learning whatever the next
            problem needs, and understanding how the interface, services, and
            infrastructure fit together.
          </p>
          <ul className="tag-list">
            {cassandra.capabilities.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="shell case-end">
        <h2>Have a product to build?</h2>
        <Link className="button button-primary" href="/#contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
