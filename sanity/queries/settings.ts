import { defineQuery } from "next-sanity";

export const PORTFOLIO_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    portfolioHeading,
    portfolioIntroduction,
    projectsPerPage,
    "featuredProjects": featuredProjects[]->[
      portfolioVisible != false &&
      defined(slug.current)
    ] {
      _id,
      title,
      "slug": slug.current,
      status,
      shortExcerpt,
      "location": location.displayLocation,
      cardImage {
        alt,
        caption,
        image {
          ...,
          asset->{
            _id,
            url,
            metadata {
              lqip,
              dimensions {
                width,
                height,
                aspectRatio
              }
            }
          }
        }
      }
    },
    "defaultSeo": {
      "title": defaultSeo.title,
      "description": defaultSeo.description,
      "canonicalUrl": defaultSeo.canonicalUrl,
      "noIndex": coalesce(defaultSeo.noIndex, false),
      "social": {
        "title": coalesce(defaultSeo.social.title, defaultSeo.title),
        "description": coalesce(defaultSeo.social.description, defaultSeo.description),
        "image": defaultSeo.social.image
      }
    }
  }
`);
