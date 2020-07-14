import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  background: linear-gradient(180deg, #39a0b8 0%, #2b6d7d 100%);

  grid-template-columns: 310px 64px auto 250px;
  grid-template-rows: 10px 65px auto;

  /* LU = List Users 
   BRD = Borda Superior
   ILU = Icons List Util
   FFB = Function Finish Bar
   CC = Central Chat
   UI = User Info*/

  grid-template-areas:
    "LU BRD BRD BRD"
    "LU ILU FFB UI"
    "LU ILU CC UI";

  height: 100vh;
`;
