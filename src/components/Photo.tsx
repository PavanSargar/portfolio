import Image from "next/image";
import type { Photo as PhotoData } from "@/content/portfolio";
export default function Photo({
  photo,
  portrait = false,
}: {
  photo: PhotoData;
  portrait?: boolean;
}) {
  const zoom = photo.zoom ?? 1;
  return (
    <figure className={portrait ? "portrait-figure" : "about-figure"}>
      <div className="photo-frame">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={
            portrait
              ? `(max-width: 600px) ${65 * zoom}vw, ${290 * zoom}px`
              : "(max-width: 760px) 100vw, 420px"
          }
          priority={portrait}
          style={{
            objectFit: "cover",
            objectPosition: photo.position,
            transform: photo.zoom ? `scale(${photo.zoom})` : undefined,
            transformOrigin: photo.zoomOrigin,
          }}
        />
      </div>
      {(photo.placeholder || photo.credit) && (
        <figcaption>
          {photo.placeholder && "Placeholder photo. "}
          {photo.creditUrl ? <a href={photo.creditUrl}>{photo.credit}</a> : photo.credit}
        </figcaption>
      )}
    </figure>
  );
}
