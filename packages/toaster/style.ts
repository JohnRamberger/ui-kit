import { css } from "emotion";
import { atMediaUp } from "../shared/styles/breakpoints";
import { coreColors } from "../shared/styles/color";
const { greyDark } = coreColors();

export const toaster = css`
  max-width: 100%;
  ${atMediaUp.medium(css`
    max-width: 20em;
  `)};
`;

// TODO: use a design token for border-radius when it exists
export const toast = css`
  background-color: ${greyDark};
  box-sizing: border-box;
  border-radius: 6px;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    "title dismiss"
    "desc  desc"
    "btn   btn";
  width: 100%;
`;

export const toastTitle = css`
  grid-area: title;
  text-transform: capitalize;
`;

export const toastDesc = css`
  grid-area: desc;
`;

export const toastActions = css`
  grid-area: btn;
`;

export const toastDismiss = css`
  grid-area: dismiss;
`;