import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

// Generates the social-share card shown when the site link is posted
// (LinkedIn, X, WhatsApp, etc.). Rendered at build time.
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050506",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top accent */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: "#22d3ee",
            }}
          />
          <div style={{ color: "#22d3ee", fontSize: 26, letterSpacing: 2 }}>
            {profile.location}
          </div>
        </div>

        {/* name + title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              color: "#ededf2",
              lineHeight: 1.05,
            }}
          >
            {profile.name}
          </div>
          <div style={{ fontSize: 44, color: "#a2a3b0", marginTop: 8 }}>
            {profile.title}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#7c5cff",
              marginTop: 28,
              maxWidth: 900,
            }}
          >
            {profile.tagline}
          </div>
        </div>

        {/* bottom gradient bar */}
        <div
          style={{
            height: 10,
            width: "100%",
            borderRadius: 9999,
            background: "linear-gradient(90deg, #7c5cff, #f0abfc, #22d3ee)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
