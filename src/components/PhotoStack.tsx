"use client";
import Image from "next/image";
import { useState } from "react";
import type { AboutPhoto } from "@/content/portfolio";

export default function PhotoStack({ photos }: { photos: AboutPhoto[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected ?? 0;
  const current = photos[active];

  return (
    <figure className="about-photo photo-stack" aria-label="A few snapshots from my life">
      <div className="photo-deck">
        {photos.map((photo, index) => {
          const rank = (index - active + photos.length) % photos.length;
          return (
            <button
              key={photo.src}
              type="button"
              className={`photo-card${rank === 0 && selected !== null ? " is-selected" : ""}`}
              data-rank={rank}
              style={{ zIndex: photos.length - rank }}
              tabIndex={rank === 0 ? 0 : -1}
              aria-label={rank === 0 ? "Show next photo" : `Show ${photo.label} photo`}
              onClick={() => setSelected(rank === 0 ? (active + 1) % photos.length : index)}
            >
              <span className="photo-card-frame">
                <span className={`photo-card-image${photo.clockwise ? " is-clockwise" : ""}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 480px) 85vw, 430px"
                    style={{ objectFit: "cover", objectPosition: photo.position }}
                  />
                </span>
              </span>
            </button>
          );
        })}
      </div>
      <figcaption>
        <p className="photo-caption" aria-live="polite" aria-atomic="true">
          {current.caption}
        </p>
        <div className="photo-choices" role="group" aria-label="Choose a photo">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              aria-pressed={index === active}
              onClick={() => setSelected(index)}
            >
              {photo.label}
            </button>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
