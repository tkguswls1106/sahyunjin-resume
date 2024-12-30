import { Badge, Col, Row } from 'reactstrap';

import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { IExperience } from './IExperience';
import { Style } from '../common/Style';
import Util from '../common/Util';

type PositionWithDates = IExperience.Position & {
  startedAtDate: DateTime;
  endedAtDate: DateTime | null;
  isCurrent: boolean;
};

export default function ExperienceRow({
  item,
  index,
}: PropsWithChildren<{ item: IExperience.Item; index: number }>) {
  const positionsWithDates: PositionWithDates[] = item.positions.map((position) => ({
    ...position,
    startedAtDate: DateTime.fromFormat(position.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL),
    endedAtDate: position.endedAt
      ? DateTime.fromFormat(position.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL)
      : null,
    isCurrent: !position.endedAt,
  }));

  const sortedPositions = positionsWithDates
    .slice()
    .sort((a, b) => b.startedAtDate.toMillis() - a.startedAtDate.toMillis());

  const minStartedAt = DateTime.min(...sortedPositions.map((position) => position.startedAtDate));
  const isCurrentlyEmployed = sortedPositions.some((position) => position.isCurrent);

  function hasEndedAtDate(
    position: PositionWithDates,
  ): position is PositionWithDates & { endedAtDate: DateTime } {
    return position.endedAtDate !== null;
  }

  const endedAtDates = sortedPositions
    .filter(hasEndedAtDate)
    .map((position) => position.endedAtDate);

  let maxEndedAt: DateTime;
  if (isCurrentlyEmployed) {
    maxEndedAt = DateTime.local();
  } else if (endedAtDates.length > 0) {
    maxEndedAt = DateTime.max(...endedAtDates);
  } else {
    maxEndedAt = DateTime.local();
  }

  const periodTitle = createOverallWorkingPeriod(sortedPositions);
  const hasMultiplePositions = sortedPositions.length > 1;

  return (
    <div>
      {index > 0 && <hr />}
      {/* 최상위 Row: 전체 재직 기간과 회사명 표시 */}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <h4 style={Style.gray}>{periodTitle}</h4>
        </Col>
        <Col sm={12} md={9}>
          <h4 style={{ display: 'inline-flex', alignItems: 'center' }}>
            {item.title}&nbsp;&nbsp;{' '}
            <span style={{ fontSize: '65%', display: 'inline-flex', alignItems: 'center' }}>
              {isCurrentlyEmployed && (
                <Badge color="primary" className="ml-1">
                  재직 중
                </Badge>
              )}
              {!item.disableEachPeriod && (
                <Badge color="info" className="ml-1">
                  {Util.getFormattingDuration(minStartedAt, maxEndedAt)}
                </Badge>
              )}
            </span>
          </h4>
          {item.team && (
            <span>
              <i style={{ color: '#212529' }}>- {item.team}</i>
            </span>
          )}
        </Col>
      </Row>

      {/* 각 Position을 최신 순으로 반복하여 개별 재직 기간과 직책 표시 */}
      {sortedPositions.map((position, posIndex) => (
        <Row key={posIndex.toString()} className="mt-2">
          <Col sm={12} md={3} className="text-md-right">
            {/* positions가 1개 이상일 때만 Position의 재직 기간 표시 */}
            {hasMultiplePositions && (
              <span style={Style.gray}>
                {createWorkingPeriod(position.startedAtDate, position.endedAtDate)}
              </span>
            )}
          </Col>
          <Col sm={12} md={9} style={{ whiteSpace: 'pre-line' }}>
            <PositionTitleWithLink title={position.title} />
            <ul className="pt-2">
              {position.descriptions.map((description, descIndex) => (
                <li key={descIndex.toString()}>{description}</li>
              ))}
            </ul>
            {createSkillKeywords(
              position.skillKeywords,
              position.backendSkillKeywords,
              position.frontendSkillKeywords,
            )}
          </Col>
        </Row>
      ))}
    </div>
  );
}

function createOverallWorkingPeriod(positions: PositionWithDates[]) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT.YYYY_DOT_LL;
  const startedAt = positions[positions.length - 1].startedAtDate;
  const isCurrentlyEmployed = positions.some((position) => position.isCurrent);

  function hasEndedAtDate(
    position: PositionWithDates,
  ): position is PositionWithDates & { endedAtDate: DateTime } {
    return position.endedAtDate !== null;
  }

  const endedAtDates = positions.filter(hasEndedAtDate).map((position) => position.endedAtDate);

  let endedAt: DateTime;
  if (isCurrentlyEmployed) {
    endedAt = DateTime.local();
  } else if (endedAtDates.length > 0) {
    endedAt = DateTime.max(...endedAtDates);
  } else {
    endedAt = DateTime.local();
  }

  return `${startedAt.toFormat(DATE_FORMAT)} ~ ${endedAt.toFormat(DATE_FORMAT)}`;
}

function createSkillKeywords(
  skillKeywords?: string[],
  backendSkillKeywords?: string[],
  frontendSkillKeywords?: string[],
) {
  if (!skillKeywords && !backendSkillKeywords && !frontendSkillKeywords) {
    return null;
  }
  return (
    <>
      {skillKeywords && skillKeywords.length > 0 && (
        <li>
          <strong>Skills&nbsp;:&nbsp;</strong>
          <div style={{ display: 'inline-block' }}>
            {skillKeywords.map((keyword, index) => (
              <Badge
                style={Style.skillKeywordBadge}
                key={index.toString()}
                color="secondary"
                className="mr-1"
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </li>
      )}
      {backendSkillKeywords && backendSkillKeywords.length > 0 && (
        <li>
          <strong>Backend Skills&nbsp;:&nbsp;</strong>
          <div style={{ display: 'inline-block' }}>
            {backendSkillKeywords.map((keyword, index) => (
              <Badge
                style={Style.skillKeywordBadge}
                key={index.toString()}
                color="secondary"
                className="mr-1"
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </li>
      )}
      {frontendSkillKeywords && frontendSkillKeywords.length > 0 && (
        <li>
          <strong>Frontend Skills&nbsp;:&nbsp;</strong>
          <div style={{ display: 'inline-block' }}>
            {frontendSkillKeywords.map((keyword, index) => (
              <Badge
                style={Style.skillKeywordBadge}
                key={index.toString()}
                color="secondary"
                className="mr-1"
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </li>
      )}
    </>
  );
}

function createWorkingPeriod(startedAt: DateTime, endedAt?: DateTime | null) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT.YYYY_DOT_LL;

  if (!endedAt) {
    return `${startedAt.toFormat(DATE_FORMAT)} ~`;
  }

  return `${startedAt.toFormat(DATE_FORMAT)} ~ ${endedAt.toFormat(DATE_FORMAT)}`;
}

function PositionTitleWithLink({ title }: { title: string }) {
  return (
    <i style={Style.gray}>
      {title.split(/(<a.*?<\/a>)/g).map((fullText, index) => {
        const linkMatch = fullText.match(/<a href="(.*?)">(.*?)<\/a>/);
        if (linkMatch) {
          const [_, link, linkContent] = linkMatch;
          return (
            <a
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              style={{ fontWeight: 400, color: '#41474c', textDecoration: 'underline' }}
              href={`https://${link}`}
              target="_blank"
              rel="noreferrer"
            >
              {linkContent}
            </a>
          );
        }
        // eslint-disable-next-line react/no-array-index-key
        return <span key={index}>{fullText}</span>;
      })}
    </i>
  );
}
