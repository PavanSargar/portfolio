import Image from "next/image";
import { projectPreviews, type ProjectId } from "@/content/portfolio";
export default function ProjectPreview({
  project,
  large = false,
}: {
  project: ProjectId;
  large?: boolean;
}) {
  const preview = projectPreviews[project];
  return (
    <figure className={large ? "project-preview preview-large" : "project-preview"}>
      <a className="screenshot-link" href={preview.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full screenshot of ${preview.domain}`}>
        <div className="preview-image">
          <Image
            src={preview.src}
            alt={preview.alt}
            width={preview.width}
            height={preview.height}
            sizes={
              large
                ? "(max-width: 760px) 100vw, 1100px"
                : "(max-width: 760px) 100vw, 60vw"
            }
          />
        </div>
      </a>
      <figcaption>
        {preview.caption}{" "}
        <a href={preview.sourceUrl}>Visit source</a>
      </figcaption>
    </figure>
  );
}
