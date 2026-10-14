import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBusinessBySlug, getAllBusinessSlugs } from "@/data/businesses";
import BusinessProfile from "@/components/BusinessProfile";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBusinessSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const business = getBusinessBySlug(resolvedParams.slug);

  if (!business) {
    return {
      title: "Business Not Found | Smart NFC Cards",
      description: "The requested NFC business card profile does not exist.",
    };
  }

  return {
    title: `${business.name} | Smart NFC Business Card`,
    description: business.address
      ? `Contact details, directions, and profile for ${business.name} in ${business.address}.`
      : `Digital business card profile for ${business.name}.`,
    openGraph: {
      title: business.name,
      description: business.address || "Smart NFC Business Card Profile",
      type: "website",
      images: business.logo ? [{ url: business.logo }] : undefined,
    },
    twitter: {
      card: "summary",
      title: business.name,
      description: business.address || "Smart NFC Business Card Profile",
      images: business.logo ? [business.logo] : undefined,
    },
  };
}

export default async function BusinessPage({ params }: PageProps) {
  const resolvedParams = await params;
  const business = getBusinessBySlug(resolvedParams.slug);

  if (!business) {
    notFound();
  }

  return <BusinessProfile business={business} />;
}
