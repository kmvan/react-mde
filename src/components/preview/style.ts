import { css } from 'styled-components'
export const MdePreviewCss = css`
  display: flow-root;
  padding: 1rem;
  & > * {
    margin: 1em 0;
    :first-child {
      margin-top: 0;
    }
    :last-child {
      margin-bottom: 0;
    }
  }
  a {
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.45em;
  }
  h3 {
    font-size: 1.4em;
  }
  h4 {
    font-size: 1.35em;
  }
  h5 {
    font-size: 1.3em;
  }
  h6 {
    font-size: 1.25em;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  table,
  blockquote,
  p,
  ul,
  ol,
  hr,
  pre,
  blockquote {
    margin-top: 1em;
    margin-bottom: 1em;
  }
  ul,
  ol {
    padding-left: 1.5em;
    margin-bottom: 1em;
    ul,
    ol {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  p {
    text-align: justify;
  }
  code {
  }
  pre {
    overflow-x: auto;
  }
  pre,
  blockquote,
  code {
    padding: 0 0.5em;
  }
  pre,
  blockquote {
    display: block;
    padding: 1em;
    & > *:first-child {
      margin-top: 0;
    }
    & > *:last-child {
      margin-bottom: 0;
    }
    code {
      background-color: unset;
    }
  }
`
