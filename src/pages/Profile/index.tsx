import React from "react";
import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">5</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line"></span>
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={"igorcossta"}
            name={"Igor"}
            avatarUrl={"https://avatars.githubusercontent.com/u/65612587?v=4"}
            followers={1230}
            following={7}
            location={"Brazil"}
            email={"igor-clone@gmail.com"}
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>

          <Repos>
            <h2>Popular repositories</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"igorcossta"}
                  reponame={"github-clone"}
                  description={"lorem ipsum dolor"}
                  language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                  stars={10}
                  forks={5}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>Random Calendar</CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
