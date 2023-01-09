import { css } from "astroturf";
import { FunctionComponent, ReactNode } from "react";

export const Button: FunctionComponent<{ children: ReactNode }> = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      css={css`
        color: blue;
        border: 1px solid blue;
        padding: 0 1rem;
        border-radius: 0.25rem;
      `}
    >
      {children}
    </button>
  );
};
