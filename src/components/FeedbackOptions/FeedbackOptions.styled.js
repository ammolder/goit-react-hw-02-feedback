import styled from 'styled-components';

export const Button = styled.button`
  margin-left: 5px;
  margin-right: 5px;
  background: transparent;
  padding: 0;
  border: none;
  --border-right: 2px;
  --text-stroke-color: rgba(255, 255, 255, 0.6);
  --animation-color: #37ff8b;
  --fs-size: 2em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: 'Arial';
  position: relative;
  /* text-transform: uppercase; */
  /* color: transparent; */
  -webkit-text-stroke: 1px var(--text-stroke-color);
  :hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
  }
`;
export const HoverText = styled.span`
  /* this is the text, when you hover on button */

  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.2s;
  -webkit-text-stroke: 1px var(--animation-color);
`;
