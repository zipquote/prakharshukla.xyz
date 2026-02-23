export const resolveImageDomain = (cmpr = 'cloudinary') => {
  const imageDomain = process.env.NEXT_PUBLIC_IMAGE_DOMAIN;

  if (!imageDomain) return '';

  if (cmpr === 'cloudinary') {
    return `https://res.cloudinary.com/dvjphfbsq/image/upload`;
  } else {
    return `https://${imageDomain}/`;
  }
};
