import Image from "next/image";
import type { Photo as PhotoData } from "@/content/portfolio";
export default function Photo({ photo }: { photo: PhotoData }) {
  const zoom = photo.zoom ?? 1;
  return (
    <figure className="portrait-figure">
      <div className="photo-frame">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={`(max-width: 600px) ${65 * zoom}vw, ${290 * zoom}px`}
          priority
          style={{
            objectFit: "cover",
            objectPosition: photo.position,
            transform: photo.zoom ? `scale(${photo.zoom})` : undefined,
            transformOrigin: photo.zoomOrigin,
          }}
        />
      </div>
    </figure>
  );
}
