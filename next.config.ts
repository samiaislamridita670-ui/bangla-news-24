// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
//   Images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "ichef.bbci.co.uk"
//       }
//     ]
//   }
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  /* config options here */

  reactCompiler: true,

  images: {

    remotePatterns: [

      {

        protocol: "https",

        hostname: "ichef.bbci.co.uk"

      }

    ]

  }

};

export default nextConfig;