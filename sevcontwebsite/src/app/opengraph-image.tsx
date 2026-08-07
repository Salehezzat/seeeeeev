import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #071426, #102a43)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, letterSpacing: 4 }}>
          <span style={{ color: "#d4af37" }}>SEV</span>
          <span>CONT</span>
          <span style={{ marginLeft: 16, fontSize: 28, alignSelf: "center", color: "#a9bbd0" }}>
            GLOBAL
          </span>
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 32, color: "#dde6f0" }}>
          Global Industrial Sourcing &amp; Engineering Solutions
        </div>
      </div>
    ),
    { ...size }
  );
}
