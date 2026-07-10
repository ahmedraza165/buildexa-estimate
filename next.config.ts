import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // old website structure on this domain used /service/<name>; map everything to the services hub
      {
        source: "/service",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/:slug*",
        destination: "/services",
        permanent: true,
      },
      // other common old-site paths
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blogs/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/portfolio/:slug*",
        destination: "/samples",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/pricing-plans",
        destination: "/pricing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
