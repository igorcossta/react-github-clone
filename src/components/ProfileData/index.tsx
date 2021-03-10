import React from "react";

import {
  Container,
  Flex,
  Avatar,
  Row,
  PeopleIcon,
  Column,
  LocationIcon,
  EmailIcon,
} from "./styles";

interface Props {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  location?: string;
  email?: string;
}

const ProfileData: React.FC<Props> = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
  location,
  email,
}) => {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt={username} />

        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
      </Flex>

      <Row>
        <li>
          <PeopleIcon />
          <b>{followers}</b>
          <span>followers</span>
          <span></span>
        </li>

        <li>
          <b>{following}</b>
          <span>following</span>
        </li>
      </Row>

      <Column>
        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}

        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default ProfileData;
