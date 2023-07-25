import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.space[4]}px;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;

  margin: ${p => p.theme.space[0]};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radius.normal};
  transition: all 0.2s ease-in-out;

 
  color: ${p => p.theme.colors.button}; 
  background: #4ECDC4; 
  background: linear-gradient(to right, #556270, #4ECDC4); 
 


  cursor: pointer;

  :hover,
  :focus {
    border: ${p => p.theme.borders.none};
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.buttonHover};
  
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12), 
    0px 2px 1px 0px rgba(0, 0, 0, 0.08), 
    0px 3px 1px 0px rgba(0, 0, 0, 0.10);

`;
