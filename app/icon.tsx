import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const data = readFileSync(join(process.cwd(), "public/talha.jpeg"));
  const src = `data:image/jpeg;base64,${data.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          width={64}
          height={64}
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>
    ),
    { ...size }
  );
}
