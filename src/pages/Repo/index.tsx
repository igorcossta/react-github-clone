import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={"username"} to={"/igorcossta"}>
          igorcossta
        </Link>

        <span>/</span>

        <Link className={"reponame"} to={"/igorcossta/react-github-clone"}>
          react-github-clone
        </Link>
      </Breadcrumb>

      <p>lorem ipsum dolor sit amet. Dolor mito amet sit.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon />
          <b>3</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/igorcossta/react-github-clone"}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
