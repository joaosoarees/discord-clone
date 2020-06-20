import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
};

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 2</Role>
      <UserRow nickname="João Vitor" />
      <UserRow nickname="Pedro Maia" isBot />

      <Role>Indisponível - 18</Role>
      <UserRow nickname="Fulanos" />
      <UserRow nickname="Fulanos" />
      <UserRow nickname="Fulanos" />
      <UserRow nickname="Fulanos" />
      <UserRow nickname="Fulanos" />
      <UserRow nickname="Fulanos" />
      <UserRow nickname="Fulanos" />
      <UserRow nickname="Fulanos" />
      <UserRow nickname="Fulanos" />
      <UserRow nickname="Fulanos" />
      <UserRow nickname="Fulanos" />
      <UserRow nickname="Fulanos" />
      <UserRow nickname="Fulanos" />
      <UserRow nickname="Fulanos" />
      <UserRow nickname="Fulanos" />
      <UserRow nickname="Fulanos" />
      <UserRow nickname="Fulanos" />
      <UserRow nickname="Fulanos" />
    </Container>
  );
};

export default UserList;