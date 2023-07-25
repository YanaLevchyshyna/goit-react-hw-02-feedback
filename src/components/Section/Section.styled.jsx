import styled from '@emotion/styled';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;
`;

export const SectionTitle = styled.h1`
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
  color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSizes.l};
`;
