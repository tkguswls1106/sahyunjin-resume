import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '개발을 통해 문제를 해결하고 성능을 개선하여, 서비스의 가치를 높이는 데 큰 보람을 느낍니다.\n안정적인 서비스를 위해 항상 고민하며, 모듈화와 지속적인 리팩토링을 통해 깔끔하고 유연한 코드를 추구합니다.\n특히 다중 쿼리와 대용량 데이터를 효율적으로 처리할 수 있는 견고한 서비스를 구축한 경험이 있습니다.',
    '3년간 총 두 번의 서비스를 운영한 경험이 있습니다. 고객의 불편을 파악하고 피드백을 반영하며, 백엔드 개발자로서 프론트엔드와 인프라까지 아우르는 전체적인 흐름을 이해하기 위해 노력해왔습니다.\n이를 통해 보다 넓은 시각으로 문제의 본질을 파악하고 개선하여, 최상의 서비스를 제공하고자 합니다.',
  ],
  sign: 'Hyunjin',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
