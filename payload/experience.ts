import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: true,
  list: [
    {
      title: 'Fiveworks / 풀스택 개발자 (Intern)',
      disableEachPeriod: true,
      team: '빅데이터 팀',
      positions: [
        {
          title:
            '◦ <a href="omnimix-ai.com">Omnimix 서비스</a> : 네트워크 약리학의 약재 성분 및 유전자 분석 서비스.\n2,500만개의 대용량 데이터를 처리하며, 전반적인 Backend 및 Frontend 개발을 담당.',
          startedAt: '2024-07',
          endedAt: '2024-09',
          descriptions: [
            {
              feature: '신규 RESTful 서버 개발 & 레거시 서버리스 시스템의 마이그레이션',
              problem:
                'AWS Lambda 서버리스로 API가 운영되어, 유지보수 및 추가 기능에 대한 유연한 대처가 어려움',
              solve:
                'Java Spring 기반의 RESTful 서버를 개발, Python Lambda 서버리스 코드의 마이그레이션',
              result:
                '확장성 높은 모듈화된 백엔드 아키텍처를 구축하여, 코드의 재사용성 및 유지보수성 향상',
            },
            {
              feature: '메인페이지 로딩 속도 개선',
              problem:
                '통합 API 1개로 페이지 내 모든 데이터를 처리하며, 메인페이지 로딩에 과도한 딜레이 발생',
              solve:
                '\n단일 API의 비즈니스 로직을 기능별 4개의 REST API로 분리하고, 통합 로딩화면도 기능별로 분리.\n메인페이지 접근 시, React Query가 기능별로 4개의 API를 개별적으로 동시 호출.',
              result:
                '모든 분석 결과가 로딩될 때까지 30초 이상 접근할 수 없었던 메인페이지를 즉시 이용 가능',
            },
            {
              feature: '질병 기능의 DB 조회 성능 개선 (2500만 데이터)',
              problem:
                '질병 데이터가 테이블에 2500만개 이상 적재되면서, DB의 Read 부하 증대 및 속도가 저하됨',
              solve:
                '질병은 WHERE Read 전용이므로, 대용량의 질병 테이블에 질병명 기준 DB indexing을 진행',
              result:
                '\n’질병 연관 유전자 조회’ 기능을 평균 33.86초에서 1.32초로 약 96% 개선.\n’약재의 타겟 질병 분석’ 기능을 평균 36.53초에서 8.15초로 약 78% 개선. (1차 개선)',
            },
          ],
          backendSkillKeywords: ['Spring Boot', 'Java', 'Spring Security', 'JWT', 'MongoDB'],
          frontendSkillKeywords: ['React.js', 'TypeScript', 'React Query', 'Recoil'],
        },
      ],
    },
  ],
};

export default experience;
