import styled from "styled-components";
import { RiBookMarkLine } from "react-icons/ri";

export const Container = styled.div`
  --horizontal: 16px;
  --vertical: 24px;

  padding: var(--vertical) var(--horizontal);
  overflow: hidden;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  padding: 0 var(--horizontal);

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RightSide = styled.div`
  padding: 0 var(--horizontal);

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const Repos = styled.div`
  margin-top: var(--vertical);

  > h2 {
    font-size: 16px;
    font-weight: normal;
  }

  > div {
    margin-top: 8px;
    display: grid;
    grid-gap: 16px;

    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`;

export const CalendarHeading = styled.span`
  font-size: 16px;
  margin: 36px 0 9px;
  display: inline-flex;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  width: 16px;
  height: 16px;

  margin-right: 4px;
`;

export const Tab = styled.div`
  background: var(--primary);

  .content {
    display: flex;
    align-items: center;
    width: min-content;

    padding: 14px 16px;
    border-bottom: 2px solid var(--orange);

    .label {
      font-size: 14px;
      padding: 0 7px;
      font-weight: 600;
    }

    .number {
      font-size: 12px;
      background: var(--ticker);
      padding: 2px 6px;
      border-radius: 50%;
    }
  }

  .line {
    display: flex;
    width: 200vh;
    border-bottom: 1px solid var(--border);
    margin-left: -5vh;
  }

  &.mobile {
    margin-top: var(--vertical);

    .content {
      margin: 0 auto;
    }

    @media (min-width: 768px) {
      display: none;
    }
  }

  &.desktop {
    display: none;

    @media (min-width: 768px) {
      display: unset;

      .wrapper {
        display: flex;
        margin: 0 auto;
        max-width: 1280px;
      }

      .offset {
        width: 25%;
        margin-right: var(--horizontal);
      }
    }
  }
`;
