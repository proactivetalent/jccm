import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";

import { dataset, projectId } from "@/sanity/env";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(source: SanityImageSource) {
  return builder.image(source).auto("format").fit("max");
}

type ImageWithMetadata = {
  asset?: {
    metadata?: {
      dimensions?: {
        width?: number;
        height?: number;
      } | null;
      lqip?: string | null;
    } | null;
  } | null;
} | null;

export function getImageMetadata(image: ImageWithMetadata) {
  const dimensions = image?.asset?.metadata?.dimensions;

  if (!dimensions?.width || !dimensions.height) return null;

  return {
    width: dimensions.width,
    height: dimensions.height,
    blurDataURL: image?.asset?.metadata?.lqip || undefined,
  };
}
