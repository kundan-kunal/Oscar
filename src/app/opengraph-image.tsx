import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#090909",
          color: "#f3f3f1",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 2,
            color: "#999999",
          }}
        >
          <span>PERSONAL SPACE</span>
          <span>TECHNOLOGY · BUSINESS · IDEAS</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 108,
              lineHeight: 1.05,
              letterSpacing: -4,
            }}
          >
            {site.name}
            <span style={{ color: "#e4cbb5" }}>.</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              lineHeight: 1.5,
              color: "#b7b7b7",
              maxWidth: 820,
            }}
          >
            {site.description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            borderTop: "1px solid #292929",
            paddingTop: 28,
            fontSize: 22,
            color: "#666666",
            letterSpacing: 2,
          }}
        >
          {site.location}
        </div>
      </div>
    ),
    size,
  );
}
