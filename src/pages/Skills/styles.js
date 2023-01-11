import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  margin: 2rem 0;
  gap: 3rem;
  opacity: ${(props) => (props.position ? 1 : 0)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;

  h1 {
    font-size: 2rem;
    color: white;
    margin-top: 8rem;
    text-align: center;
    padding: 1rem;
  }
`;

export const Cont = styled.div`
  width: 90%;

  h4 {
    color: white;
    font-size: 1.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  flex-wrap: wrap;
  background: rgb(130, 0, 80, 50);
  border-radius: 10px;
`;

export const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 15px 15px;
  transform: scale(0.9);
  transition: all 0.1s ease-in;
  border-radius: 15px;
  gap: 1rem;

  transform: scale(0.8);
  transition: all 0.2s ease-in-out;

  .skillHtml {
    font-size: 5rem;
    color: white;

    &:hover {
      color: #f75421;
    }
  }

  .skillCss {
    font-size: 5rem;
    color: white;

    &:hover {
      color: #2965f1;
    }
  }

  .skillBootstrap {
    font-size: 5rem;
    color: white;

    &:hover {
      color: #6e41a4;
    }
  }

  .skillJavascript {
    font-size: 5rem;
    color: white;

    &:hover {
      color: #f7e018;
    }
  }

  .skillReact {
    font-size: 5rem;
    color: white;

    &:hover {
      color: #61dbfb;
    }
  }

  .skillNodeJS {
    font-size: 5rem;
    color: white;

    &:hover {
      color: #3cb371;
    }
  }

  .skillLight {
    font-size: 5rem;
    color: white;

    &:hover {
      color: yellow;
    }
  }

  .skillPuzzle {
    font-size: 5rem;
    color: white;

    &:hover {
      color: #61dbfb;
    }
  }

  .skillTalk {
    font-size: 5rem;
    color: white;

    &:hover {
      color: #6e41a4;
    }
  }

  .skillHelping {
    font-size: 5rem;
    color: white;

    &:hover {
      color: green;
    }
  }

  .skillClock {
    font-size: 5rem;
    color: white;

    &:hover {
      color: #2965f1;
    }
  }

  .skillLight {
    font-size: 5rem;
    color: white;

    &:hover {
      color: yellow;
    }
  }

  &:hover {
    transform: scale(1);
  }
`;
