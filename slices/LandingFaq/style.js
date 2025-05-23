import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 2rem 10rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Icon = styled.span`
  position: relative;
  display: inline-block;
  width: 10px;
  height: 10px;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: #333;
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  /* horizontal line */
  &::before {
    top: 50%;
    left: 0;
    right: 0;
    height: 3px;
    transform: translateY(-50%);
  }

  /* vertical line */
  &::after {
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    transform-origin: center;
    transform: translateX(-50%) rotate(0deg);
    opacity: 1;
  }

  /* when open (minus) */
  &.open::after {
    transform: translateX(-50%) rotate(90deg);
    opacity: 0;
  }

  &.open::before {
    background-color: white;
  }
`;

export const FaqSection = styled.section`
  .title h1 {
    font-size: 2rem;
    text-align: center;
    color: #3962e9;
    margin-top: 0;
  }

  .faq-item {
    border-bottom: 1px solid #ddd;
    padding: 0.5rem 0;

    &.open .faq-question {
      font-weight: 600;
      background-color: #3962e9;
      color: white;
      border-radius: 5px;
    }
  }

  .faq-question {
    cursor: pointer;
    display: flex;
    gap: 2rem;
    align-items: center;
    font-size: 1.1rem;
    user-select: none;
    padding: 0.5rem;
    p {
      font-weight: bold;
    }
  }

  .faq-answer {
    p {
      padding: 0.5rem;
    }
  }
`;
