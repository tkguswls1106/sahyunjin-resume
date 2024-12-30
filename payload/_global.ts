import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.png';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Resume : 사현진';
const description = "사현진's Resume 입니다.";

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph linkthumbnail',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Lorem',
        lastName: 'ipsum',
        username: 'lorem',
        gender: 'female',
      },
    },
  },
};
