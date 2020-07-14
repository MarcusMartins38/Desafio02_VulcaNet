import styled from "styled-components";

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 310px 64px auto 250px;
  grid-template-rows: 10px 65px auto;

  /* LU = List Users 
   BRD = Borda Superior
   ILU = Icons List Util
   FFB = Function Finish Bar
   CRT = Centro
   UI = User Info*/

  grid-template-areas:
    "LU BRD BRD BRD"
    "LU ILU FFB UI"
    "LU ILU CRT UI";

  height: 100vh;
`;
