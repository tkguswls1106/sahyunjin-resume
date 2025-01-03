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
                'AWS Lambda 서버리스로 API가 운영되어, 유지보수 및 추가 기능에 대한 유연성 부족',
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
                '\n단일 API의 비즈니스 로직을 기능별 4개의 REST API로 분리, 통합 로딩화면도 기능별로 분리.\n메인페이지 접근 시, React Query가 기능별로 4개의 API를 개별적으로 동시 호출.',
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
            {
              feature: '비효율적인 순차 로직의 병렬 최적화',
              problem:
                '서로 의존성이 없는 약재 추출과 질병 추출의 두 작업을 순차적으로 처리하는 비효율 발견',
              solve:
                '비동기 CompletableFuture로 두 작업을 논블로킹 병렬 처리 후, join으로 블로킹해 데이터 통합',
              result:
                '\n’약재의 타겟 질병 분석’ 기능을 평균 8.15초에서 3.31초로 약 60% 개선. (2차 개선)\n이로써 위 기능의 최종적인 개선 수치가 평균 36.53초에서 3.31초로 약 97%를 달성.',
            },
            {
              feature: '세부 필터링 기능의 응답 속도 개선',
              problem: '필터링 기능 사용 시, 매번 대량의 데이터를 응답하며 대기시간 증가',
              solve:
                '기존의 DB 일괄 조회 방식을 60개 단위로 Slice 처리하도록 변경, 무한 스크롤 페이징 적용',
              result: '필터링 API의 응답 속도를 평균 10.52초에서 1.31초로 약 88% 개선',
            },
            {
              feature: 'JWT 기반 로그인 시스템 개발',
              problem:
                '레거시 비로그인 시스템을 로그인 체제로 전환하며, 새로운 인증 프로세스의 도입 필요',
              solve:
                '계정별 다중 세션 관리는 불필요, JWT(Access & Refresh) 기반 Spring Security 인증 도입',
              result:
                '\nJWT 내 부여한 계정 권한에 따라, 서버 URI 접근 제한을 손쉽게 설정 가능.\n다중 토큰 운용을 통해, Refresh 토큰으로 Access 토큰 탈취 위험에 보다 효과적으로 대응 가능.',
            },
            {
              feature: '빅데이터 분석 결과의 효과적인 시각화',
              solve:
                'React 기반의 표와 다양한 그래프(Cytoscape, Dot Plot, Venn Diagram)로 통계 시각화',
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
