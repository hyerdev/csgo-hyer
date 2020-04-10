import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  background: #273366;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;

  h1 {
    font-size: 60px;
    margin-bottom: 0;
  }

  p {
    font-size: 32px;
    letter-spacing: 1px;
    opacity: 0.9;
  }
`;

export const KeyboardContainer = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
  width: 1024px;
  margin: 0 auto;
  border-radius: 5px;
  color: #333;

  .simple-keyboard {
    &.hg-theme-default {
      display: inline-block;

      .hg-button {
        &.hg-selectedButton {
          background: rgba(5, 25, 70, 0.53);
          color: white;
        }
      }
    }

    .hg-button {
      &.selectedButton {
        background: rgba(5, 25, 70, 0.53);
        color: white;
      }

      &.emptySpace {
        pointer-events: none;
        background: none;
        border: none;
        box-shadow: none;
      }

      &:hover:not(.activeBtn) {
        background: ${lighten(0.075, '#c83232')};
        color: #fff;
        border-color: #c83232;
      }
    }

    .activeBtn {
      background: #c83232;
      color: #fff;
      border-color: ${darken(0.2, '#c83232')};
    }
  }

  .simple-keyboard-main {
    &.simple-keyboard {
      width: 640px;
      min-width: 640px;
      background: none;

      .hg-row:first-child {
        margin-bottom: 10px;
      }
    }
  }

  .hg-button {
    &.hg-functionBtn {
      &.hg-button-space {
        width: 350px;
      }

      &.hg-button-enter {
        width: 43px;
      }

      &.hg-button-spacer {
        width: 27px;
      }
    }
  }
`;

export const ControlArrowsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column;

  .simple-keyboard-arrows {
    &.simple-keyboard {
      align-self: flex-end;
      background: none;
    }

    .hg-row {
      justify-content: center;
    }

    .hg-button {
      width: 50px;
      flex-grow: 0;
      justify-content: center;
      display: flex;
      align-items: center;
    }
  }

  .simple-keyboard-control {
    &.simple-keyboard {
      background: none;

      .hg-row:first-child {
        margin-bottom: 10px;
      }
    }

    .hg-button {
      width: 50px;
      flex-grow: 0;
      justify-content: center;
      display: flex;
      align-items: center;
    }
  }
`;

export const Numpad = styled.div`
  display: flex;
  align-items: flex-end;

  .simple-keyboard-numpad {
    &.simple-keyboard {
      background: none;
      width: 160px;

      .hg-button {
        width: 50px;
        justify-content: center;
        display: flex;
        align-items: center;
      }
    }
  }

  .simple-keyboard-numpadEnd {
    &.simple-keyboard {
      width: 50px;
      background: none;
      margin: 0;
      padding: 5px 5px 5px 0;

      .hg-button {
        align-items: center;
        justify-content: center;
        display: flex;

        &.hg-button-enter {
          height: 85px;
        }
      }
    }

    .hg-button {
      &.hg-standardBtn {
        &.hg-button-plus {
          height: 85px;
        }
      }
    }
  }
`;
