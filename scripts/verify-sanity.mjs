import { createClient } from "next-sanity";

const required = (value, name) => {
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
};

const client = createClient({
  projectId: required(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    "NEXT_PUBLIC_SANITY_PROJECT_ID",
  ),
  dataset: required(
    process.env.NEXT_PUBLIC_SANITY_DATASET,
    "NEXT_PUBLIC_SANITY_DATASET",
  ),
  apiVersion: required(
    process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    "NEXT_PUBLIC_SANITY_API_VERSION",
  ),
  perspective: "published",
  useCdn: false,
});

const project = await client.fetch(`
  *[
    _type == "project" &&
    portfolioVisible != false &&
    slug.current == "221-middleton-street"
  ][0] {
    _id,
    title,
    "slug": slug.current,
    "clientName": select(
      showClientOnWebsite == true && defined(publicClientName) => publicClientName,
      "Confidential"
    ),
    "location": location.displayLocation,
    "hasCardImage": defined(cardImage.image.asset),
    "hasHeroImage": defined(heroImage.image.asset),
    "seoReady": defined(seo.title) && defined(seo.description)
  }
`);

if (!project) throw new Error("Published project 221 Middleton Street was not found.");
if (!project.hasCardImage || !project.hasHeroImage) {
  throw new Error("The published project is missing a card image or hero image.");
}
if (!project.seoReady) throw new Error("The published project is missing required SEO fields.");

console.log(
  JSON.stringify(
    {
      ok: true,
      project,
    },
    null,
    2,
  ),
);
