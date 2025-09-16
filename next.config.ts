import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./next-intl.config.ts");

export default withNextIntl({
  reactStrictMode: true,
});

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
