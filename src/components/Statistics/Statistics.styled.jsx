import styled from '@emotion/styled';

export const StatList = styled.ul`
  padding: 12px;
  max-width: 480px;
  margin: 0 auto;

  border-radius: ${p => p.theme.radius.normal};
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  background: #4ecdc4;
  background: -webkit-linear-gradient(to right, #556270, #4ecdc4);
  background: linear-gradient(to right, #556270, #4ecdc4);

  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12),
    0px 2px 1px 0px rgba(0, 0, 0, 0.08), 0px 3px 1px 0px rgba(0, 0, 0, 0.1);
`;

export const StatItem = styled.li`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  transition: all 0.2s ease-in-out;

  color: ${props => props.theme.colors.button};
`;
