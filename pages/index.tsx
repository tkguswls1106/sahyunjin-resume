/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Education } from '../component/education';
import { Etc } from '../component/etc';
import { Experience } from '../component/experience';
import { Footer } from '../component/footer';
import { Introduce } from '../component/introduce';
import { OpenSource } from '../component/openSource';
import { Presentation } from '../component/presentation';
import { Profile } from '../component/profile';
import { Project } from '../component/project';
import { Skill } from '../component/skill';
import { Style } from '../component/common/Style';
import Payload from '../payload';
import { Article } from '../component/article';

function Yosume() {
  return (
    <>
      <NextSeo {...Payload._global.seo} />
      <Head>
        <title>{Payload._global.headTitle}</title>
        <link rel="shortcut icon" href={Payload._global.favicon} />
      </Head>
      <Container style={Style.global}>
        <Profile.Component payload={Payload.profile} />
        <Introduce.Component payload={Payload.introduce} />
        <Experience.Component payload={Payload.experience} />
        <Project.Component payload={Payload.project} />
        <Skill.Component payload={Payload.skill} />
        <Education.Component payload={Payload.education} />

        {/* <OpenSource.Component payload={Payload.openSource} /> */}
        {/* <Presentation.Component payload={Payload.presentation} /> */}
        <Article.Component payload={Payload.article} />
        {/* 위 Article에 Post로 https://velog.io/@tkguswls1106/Github-%EC%95%BD-3%EB%85%84-%ED%9A%8C%EA%B3%A0-%EB%82%98%EC%97%90%EA%B2%8C-1%EC%9D%BC1%EC%BB%A4%EB%B0%8B%EC%9D%80-%EB%AC%B4%EC%8A%A8-%EC%9D%98%EB%AF%B8%EC%98%80%EB%8A%94%EA%B0%80 */}
        {/* <Etc.Component payload={Payload.etc} /> */}
        <Footer.Component payload={Payload.footer} />
      </Container>
    </>
  );
}

export default Yosume;
