import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: true,
  list: [
    {
      title: 'Fiveworks / 풀스택 개발자 (Intern)',
      disableEachPeriod: true,
      positions: [
        {
          title:
            '빅데이터팀, Omnimix 서비스 (<a href="omnimix-ai.com">omnimix-ai.com</a>) :\n네트워크 약리학의 약재 성분 및 유전자 분석 서비스.\n2,500만개의 대용량 데이터를 처리하며, 전반적인 Backend 및 Frontend 개발을 담당.',
          startedAt: '2024-07',
          endedAt: '2024-09',
          descriptions: [
            'Steering Kernel patching and updates for various distributions',
            'Automating deployment and integration processes for Linux servers',
            'Spearheading initiatives to enhance Linux kernel security',
            'Collaborating with global developers to coordinate code contributions',
          ],
          backendSkillKeywords: ['Spring Boot', 'Java', 'Spring Security', 'JWT', 'MongoDB'],
          frontendSkillKeywords: ['React.js', 'TypeScript', 'React Query', 'Recoil'],
        },
      ],
    },
  ],
};

export default experience;
