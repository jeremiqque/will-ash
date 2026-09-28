import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Will & Ash | Commercial law firm in Lagos & Abuja";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social-share image, generated at build time in brand style. */
export default async function Image() {
  const [caslon, sans, mark] = await Promise.all([
    readFile(join(process.cwd(), "src/fonts/og/LibreCaslonDisplay-Regular.ttf")),
    readFile(join(process.cwd(), "src/fonts/og/GeneralSans-Medium.otf")),
    readFile(join(process.cwd(), "public/images/logo-mark-silver.png"), "base64"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05070c",
          color: "#fcfcfc",
          padding: "72px 80px",
          fontFamily: "General Sans",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={`data:image/png;base64,${mark}`} width={75} height={48} alt="" />
          <span style={{ fontSize: 26, letterSpacing: 5, textTransform: "uppercase" }}>
            Will <span style={{ color: "#d81b24", margin: "0 10px" }}>&amp;</span> Ash
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 20, letterSpacing: 3, textTransform: "uppercase" }}>
            <div style={{ width: 12, height: 12, border: "2px solid #d81b24", borderRadius: 3, transform: "rotate(45deg)", marginRight: 4 }} />
            Commercial law firm · Lagos &amp; Abuja
          </div>
          <div style={{ fontFamily: "Caslon", fontSize: 92, lineHeight: 1.04, marginTop: 24, letterSpacing: -1.5, maxWidth: 820 }}>
            Built to protect what matters most
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Caslon", data: caslon, weight: 400, style: "normal" },
        { name: "General Sans", data: sans, weight: 500, style: "normal" },
      ],
    },
  );
}
