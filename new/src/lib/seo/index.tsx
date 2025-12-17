import { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
}

export const constructMetadata = ({
  title,
  description,
  image,
}: MetadataProps = {}): Metadata => {
  // Nilai default jika parameter kosong
  const defaultTitle = "Taufik Wandani Portofolio";
  const defaultDesc = "Website Portofolio Taufik Wandani";
  const defaultImage = "/images/Icons/favicon.png";

  return {
    // Jika title diisi, formatnya jadi "Login | Taufik Wandani Portofolio"
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDesc,
    keywords: [
      "Taufik Wandani",
      "Portofolio",
      "Web Developer",
      "Frontend Developer",
    ],

    // Google Verification
    verification: {
      google: "bD3G_3rRzaI-hCuW8hAa2BHvLFVpafzJGWC6nI-abWE",
    },

    // Open Graph
    openGraph: {
      title: title || defaultTitle,
      description: description || defaultDesc,
      url: "https://taufikwandani.vercel.app/",
      siteName: "Taufik Wandani Portofolio",
      images: [{ url: image || defaultImage }],
      type: "website",
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: title || defaultTitle,
      description: description || defaultDesc,
      images: [image || defaultImage],
    },

    // Icons
    icons: {
      icon: "/images/Icons/favicon.png",
    },

    metadataBase: new URL("https://taufikwandani.vercel.app/"),
  };
};
