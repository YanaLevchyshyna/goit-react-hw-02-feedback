import styled from '@emotion/styled';

export const NotificationMessage = styled.h2`
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSizes.m};
`;
