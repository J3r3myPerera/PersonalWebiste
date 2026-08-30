import { ImageResponse } from "next/og";

export const alt =
  "Jeremy Perera — Associate Software Engineer at IFS, Colombo, Sri Lanka";
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
          backgroundColor: "#100f0d",
          backgroundImage:
            "radial-gradient(55% 60% at 18% 0%, rgba(224,101,59,0.20) 0%, rgba(16,15,13,0) 72%)",
          padding: "76px 88px",
          color: "#f3efe6",
          // Satori only renders fonts it is handed explicitly; the site's
          // Newsreader is not available here, so this falls back to the
          // renderer's default sans on purpose.
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#e0653b",
          }}
        >
          Colombo, Sri Lanka
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 120, letterSpacing: "-0.03em", lineHeight: 1.02 }}>
            Jeremy Perera
          </div>
          <div
            style={{
              display: "flex",
              width: 340,
              height: 5,
              backgroundColor: "#e0653b",
              margin: "36px 0",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 38,
              color: "#a7a196",
              maxWidth: 820,
            }}
          >
            Associate Software Engineer at IFS. Web, backend and applied machine
            learning.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
