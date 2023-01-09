import { css } from "astroturf";

export function Button({ children, ...props }) {
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
}
