import { ImageResponse } from "next/og";

// Route segment config
// export const runtime = "edge";
// If use 'edge'. This error occurs: The Edge Function "icon" size is 1.15 MB and your plan size limit is 1 MB.

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw="flex items-center justify-center w-full h-full bg-black text-white text-[24px] leading-8">
        CS
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
