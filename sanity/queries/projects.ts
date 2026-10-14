import { defineQuery } from "next-sanity";

export const PORTFOLIO_PROJECTS_QUERY = defineQuery(`
  *[
    _type == "project" &&
    portfolioVisible != false &&
    defined(slug.current)
  ] | order(
    featured desc,
    coalesce(featuredOrder, 9999) asc,
    coalesce(completionDate, publishedAt) desc,
    title asc
  ) {
    _id,
    _updatedAt,
    title,
    "slug": slug.current,
    status,
    featured,
    featuredOrder,
    shortExcerpt,
    projectType,
    completionDate,
    projectSize,
    sizeUnit,
    numberOfUnits,
    "location": location.displayLocation,
    "borough": location.borough,
    "city": location.city,
    "primaryCategory": primaryCategory->{
      _id,
      title,
      "slug": slug.current
    },
    "additionalCategories": additionalCategories[]->{
      _id,
      title,
      "slug": slug.current
    },
    "services": services[]->{
      _id,
      title,
      "slug": slug.current
    },
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
  }
`);

export const PROJECT_BY_SLUG_QUERY = defineQuery(`
  *[
    _type == "project" &&
    portfolioVisible != false &&
    slug.current == $slug
  ][0] {
    _id,
    _updatedAt,
    title,
    "slug": slug.current,
    status,
    publishedAt,
    projectType,
    tags,
    featured,
    shortExcerpt,
    challengeSummary,
    solutionSummary,
    resultSummary,
    projectSize,
    sizeUnit,
    numberOfUnits,
    buildingUse,
    constructionDuration,
    completionDate,
    "client": {
      "isPublic": showClientOnWebsite == true && defined(publicClientName),
      "name": select(
        showClientOnWebsite == true && defined(publicClientName) => publicClientName,
        "Confidential"
      )
    },
    "location": {
      "displayLocation": location.displayLocation,
      "publicStreetAddress": select(
        location.showStreetAddress == true => location.streetAddress,
        null
      ),
      "neighborhood": location.neighborhood,
      "borough": location.borough,
      "city": location.city,
      "state": location.state
    },
    "primaryCategory": primaryCategory->{
      _id,
      title,
      "slug": slug.current
    },
    "additionalCategories": additionalCategories[]->{
      _id,
      title,
      "slug": slug.current
    },
    "services": services[]->{
      _id,
      title,
      "slug": slug.current
    },
    overviewHeading,
    overview,
    challengeHeading,
    challengeIntroduction,
    challengePoints,
    challengeSections[] {
      _key,
      heading,
      description
    },
    solutionHeading,
    solutionIntroduction,
    solutionSections[] {
      _key,
      heading,
      description
    },
    phases[] {
      _key,
      label,
      title,
      summary,
      body,
      keyPoints,
      image {
        alt,
        caption,
        photographerCredit,
        copyright,
        stage,
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
    resultsHeading,
    resultsIntroduction,
    results[] {
      _key,
      heading,
      description
    },
    closingStatement,
    metrics[] {
      _key,
      value,
      label,
      supportingText
    },
    "partners": partners[]->[
      publiclyVisible != false
    ] {
      _id,
      name,
      role,
      website,
      description,
      logo {
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
    },
    "testimonials": testimonials[]->[
      publicationApproved == true
    ] {
      _id,
      quote,
      attributionLabel,
      jobTitle,
      "company": select(showCompany == true => company, null)
    },
    cardImage {
      alt,
      caption,
      photographerCredit,
      copyright,
      stage,
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
    },
    heroImage {
      alt,
      caption,
      photographerCredit,
      copyright,
      stage,
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
    },
    heroSideImageOne {
      alt,
      caption,
      photographerCredit,
      copyright,
      stage,
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
    },
    heroSideImageTwo {
      alt,
      caption,
      photographerCredit,
      copyright,
      stage,
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
    },
    gallery[] {
      _key,
      alt,
      caption,
      photographerCredit,
      copyright,
      stage,
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
    },
    beforeImages[] {
      _key,
      alt,
      caption,
      photographerCredit,
      copyright,
      stage,
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
    },
    afterImages[] {
      _key,
      alt,
      caption,
      photographerCredit,
      copyright,
      stage,
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
    },
    videoUrl,
    "seo": {
      "title": seo.title,
      "description": seo.description,
      "canonicalUrl": seo.canonicalUrl,
      "noIndex": coalesce(seo.noIndex, false),
      "previousUrls": seo.previousUrls,
      "social": {
        "title": coalesce(seo.social.title, seo.title),
        "description": coalesce(seo.social.description, seo.description),
        "image": coalesce(seo.social.image, heroImage.image)
      }
    }
  }
`);

export const PROJECT_SLUGS_QUERY = defineQuery(`
  *[
    _type == "project" &&
    portfolioVisible != false &&
    defined(slug.current)
  ] | order(slug.current asc) {
    _id,
    "slug": slug.current,
    _updatedAt,
    "noIndex": coalesce(seo.noIndex, false)
  }
`);

export const PORTFOLIO_FILTERS_QUERY = defineQuery(`
  {
    "categories": *[
      _type == "category" &&
      isActive != false
    ] | order(coalesce(displayOrder, 9999) asc, title asc) {
      _id,
      title,
      "slug": slug.current,
      "projectCount": count(*[
        _type == "project" &&
        portfolioVisible != false &&
        defined(slug.current) &&
        references(^._id)
      ])
    },
    "services": *[
      _type == "service" &&
      isActive != false
    ] | order(coalesce(displayOrder, 9999) asc, title asc) {
      _id,
      title,
      "slug": slug.current,
      "projectCount": count(*[
        _type == "project" &&
        portfolioVisible != false &&
        defined(slug.current) &&
        references(^._id)
      ])
    }
  }
`);
