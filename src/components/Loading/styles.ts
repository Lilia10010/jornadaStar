import styled from "styled-components";
export const LoadingText = styled.p`
  color: var(--color-primary);
  padding: 50px 0;
  display: flex;
  justify-content: center;
  .letter-holder {
    letter-spacing: 3px;
    display: flex;
    font-size: 20px;
  }

  .load .letter {
    animation-name: loading;
    animation-duration: 1.6s;
    animation-iteration-count: infinite;
    animation-direction: linear;
  }

  .l-1 {
    animation-delay: 0.48s;
  }
  .l-2 {
    animation-delay: 0.6s;
  }
  .l-3 {
    animation-delay: 0.72s;
  }
  .l-4 {
    animation-delay: 0.84s;
  }
  .l-5 {
    animation-delay: 0.96s;
  }
  .l-6 {
    animation-delay: 1.08s;
  }
  .l-7 {
    animation-delay: 1.2s;
  }
  .l-8 {
    animation-delay: 1.32s;
  }
  .l-9 {
    animation-delay: 1.44s;
  }
  .l-10 {
    animation-delay: 1.56s;
  }

  @keyframes loading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
