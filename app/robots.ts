import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://istofiyusuf.com"; // Ganti dengan domain Anda

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [], // Tidak ada yang diblokir
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
