import { faEnvelope, faPhone, faRss } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
// import image from '../asset/sample_tux.png';
import image from '../asset/profile_image.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '사현진',
    small: '',
  },
  contact: [
    {
      title: 'tkguswls1106@naver.com',
      link: 'mailto:tkguswls1106@naver.com',
      icon: faEnvelope,
    },
    // {
    //   title: 'Please contact me by email',
    //   icon: faPhone,
    //   badge: true,
    // },
    {
      link: 'https://github.com/tkguswls1106',
      icon: faGithub,
    },
    // {
    //   link: 'https://www.facebook.com/groups/ubuntu.ko',
    //   icon: faFacebook,
    // },
    {
      title: 'Tech Blog',
      link: 'https://velog.io/@tkguswls1106/series',
      icon: faRss,
    },
  ],
  // notice: {
  //   title:
  //     "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
  //   icon: faBell,
  // },
};

export default profile;
