import getConfig from 'next/config';

export const resolveImageDomain = (cmpr = 'cloudinary') => {
  const {
    publicRuntimeConfig: { images },
  } = getConfig();

  const match = images.domains.find(
    (domain) => domain.toLowerCase().indexOf(cmpr.toLowerCase()) >= 0
  );

  if (!match) return '';

  if (cmpr === 'cloudinary') {
    return `https://${match}/dvjphfbsq/image/upload`;
  } else {
    return `https://${match}/`;
  }
};
