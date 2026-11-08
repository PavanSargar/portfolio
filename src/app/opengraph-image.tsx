import { ImageResponse } from "next/og";
import { profile } from "@/content/portfolio";
export const alt = `${profile.name} — ${profile.role} at ${profile.company}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F5DEE8",
          color: "#492E40",
          padding: 72,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", fontSize: 34 }}>{profile.name}</div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            lineHeight: 1.08,
            maxWidth: 960,
          }}
        >
          {profile.headline}
        </div>
        <div style={{ display: "flex", color: "#64304F", fontSize: 27 }}>
          {profile.role} · {profile.company} ({profile.affiliation})
        </div>
      </div>
    ),
    size,
  );
}
