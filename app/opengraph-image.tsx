import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kiln Studio — brand and digital design for independent businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const swatches = ["#C88A2E", "#566246", "#8A3B2B", "#E0B36B", "#241F18", "#7C8A68"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#E4DDCE",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "58%" }}>
          <div style={{ fontSize: 28, color: "#5C5548", marginBottom: 16 }}>Kiln Studio</div>
          <div style={{ fontSize: 52, color: "#241F18", lineHeight: 1.15, fontWeight: 600 }}>
            Brands that don&apos;t need a big budget to look considered.
          </div>
        </div>
        <div
          style={{
            width: "42%",
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            alignContent: "center",
          }}
        >
          {swatches.map((color) => (
            <div key={color} style={{ backgroundColor: color, borderRadius: 8, width: 130, height: 130 }} />
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
