import React from 'react';
import styled from 'styled-components';
import My from './../../images/me.jpg';

function Profile() {
  console.log('profile');
  return (
    <Profiles.Container>
      <Profiles.Image src={My} />
      <Profiles.Section>
        <Profiles.Name>예지</Profiles.Name>
        <Profiles.Intro>열심히 살자</Profiles.Intro>
      </Profiles.Section>
    </Profiles.Container>
  );
}
const Profiles = {
  Container: styled.div`
    display: flex;
    align-items: center;
  `,
  Image: styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
  `,
  Section: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8px;
  `,
  Name: styled.div`
    font-weight: bold;
    font-size: 15px;
  `,
  Intro: styled.div`
    font-size: 12px;
  `,
};

export default Profile;
