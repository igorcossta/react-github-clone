import React from "react";
import { Container, Main, LeftSide, RightSide, Repos } from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";

const Profile: React.FC = () => {
  return (
    <Container>
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
          <Repos>
            <h2>Random Repos</h2>
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
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
