import Link from "next/link";
import type { Metadata } from "next";
import { profile, photos, selectedProjects, experience, earlierWork, testimonials } from "@/content/portfolio";
import { getAllPosts, formatDate } from "@/lib/blog";
import Photo from "@/components/Photo";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";

export const metadata: Metadata = { alternates: { canonical: "/" } };

function ExperienceRow({ entry }: { entry: (typeof experience)[number] }) {
  return (
    <article className="experience-row">
      <p className="experience-date">{entry.from} — {entry.to}</p>
      <div>
        <h3>{entry.role}</h3>
        <p className="experience-company">{entry.company}</p>
        <p>{entry.description}</p>
      </div>
    </article>
  );
}

export default function Home() {
  const posts = getAllPosts().slice(0, 2);
  return (
    <main id="main">
      <section className="shell journal-hero" aria-label="A little introduction">
        <h1 className="hero-name">Pawan{" "}<span>Sargar.</span></h1>
        <div className="hero-collage">
          <div className="hero-copy">
            <p className="hero-introduction">{profile.personalIntroduction}</p>
            <p className="hero-aside">A little code, a lot of curiosity.<br />Based in {profile.location}.</p>
            <a href="#work" className="text-link">A few things I’ve built <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-portrait"><Photo photo={photos.portrait} portrait /></div>
          <aside className="hero-now">
            <div className="journal-stamp" aria-label="Always learning, always building">Always<br />learning.<br />Always building.</div>
            <div className="now-note"><p>These days</p><p><strong>{profile.role}</strong><br />{profile.company}<br /><span>({profile.affiliation})</span></p></div>
          </aside>
        </div>
      </section>

      <section id="work" className="shell work-section">
        <span id="projects" className="anchor-alias" aria-hidden="true" />
        <div className="section-heading"><h2>Things I’ve helped bring to life.</h2><p>A selection of recent work.</p></div>
        <div className="project-grid">{selectedProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
        <details className="earlier-work">
          <summary>Some earlier experiments &amp; projects <span aria-hidden="true">+</span></summary>
          <div>{earlierWork.map((item) => (
            <article className="archive-row" key={item.name}>
              <h3>{item.url ? <a className="text-link" href={item.url}>{item.name} <span aria-hidden="true">↗</span></a> : item.name}</h3>
              <p>{item.description}</p><span>{item.stack}</span>
            </article>
          ))}</div>
        </details>
      </section>

      <section id="about" className="shell about-section section-space">
        <span id="About" className="anchor-alias" aria-hidden="true" />
        <div className="about-copy">
          <h2>There’s always<br />something to figure out.</h2>
          <p>That’s the part I like. A new product, an unfamiliar technology, an idea that doesn’t quite have a shape yet.</p>
          <p>I’m a developer who learns by building. I’m comfortable picking up a new stack, asking questions, and working through the details until an idea becomes a real, useful product.</p>
          <p>My work has taken me from web interfaces to video editing, desktop apps, and AI integration. These days, I lead full-stack development at Cassandra Risk, across frontend, backend, UI/UX, AI, and GCP deployments.</p>
          <div className="about-links"><a className="text-link" href={profile.links.github}>Find me on GitHub</a><Link className="text-link" href="/blog">Read my notebook</Link></div>
        </div>
        <div className="about-photo"><Photo photo={photos.about} /><p className="photo-note">Room for a little of life outside the screen.</p></div>
      </section>

      <section id="experience" className="shell experience-section section-space">
        <div className="experience-grid">
          <div className="section-heading vertical"><h2>A little of<br />the journey.</h2><p>Different teams. New problems.<br />A lot learned along the way.</p><a className="text-link" href={profile.links.linkedin}>The longer version on LinkedIn</a></div>
          <div>{experience.slice(0, 3).map((entry) => <ExperienceRow key={entry.company} entry={entry} />)}
            <details className="experience-more"><summary>Earlier chapters <span aria-hidden="true">+</span></summary>{experience.slice(3).map((entry) => <ExperienceRow key={entry.company} entry={entry} />)}</details>
          </div>
        </div>
      </section>

      <section className="notebook-section">
        <div className="shell notebook-grid">
          <div><p className="section-intro">A place to think out loud</p><h2>From my<br />notebook.</h2><p>Things I’m learning, building, and figuring out along the way.</p><Link className="text-link" href="/blog">All my writing</Link></div>
          <div className="notebook-entries">{posts.map((post) => <article key={post.slug}><time dateTime={post.date}>{formatDate(post.date)}</time><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p></article>)}</div>
        </div>
      </section>

      <section id="testimonials" className="shell testimonials-section section-space" aria-labelledby="testimonials-title">
        <div className="section-heading"><h2 id="testimonials-title">Kind words, kept close.</h2><p>From people I’ve worked with.</p></div>
        <div className="testimonials">
          {testimonials.map((item) => (
            <figure key={item.name}>
              <figcaption>
                <a href={item.url}>{item.name}</a>
                <span>Client on Fiverr</span>
              </figcaption>
              <blockquote>{item.quote}</blockquote>
            </figure>
          ))}
        </div>
      </section>
      <Contact />
    </main>
  );
}
