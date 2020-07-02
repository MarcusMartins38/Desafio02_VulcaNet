import styled from "styled-components";

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 312px 58px auto 235px;
  grid-template-rows: 24px 65px auto;

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
