import React, { useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import Layout from '~/components/Layout';

import {
  Container,
  Wrapper,
  Content,
  MobileWarning,
  KeyboardContainer,
  ControlArrowsContainer,
  Numpad,
} from './styles';

function CreateCfg() {
  const [input, setInput] = useState('');

  const handleKeyPress = (key) => {
    setInput(key);
  };

  const commonKeyboardOptions = {
    onKeyPress: handleKeyPress,
    theme: 'simple-keyboard hg-theme-default hg-layout-default',
    physicalKeyboardHighlight: false,
    syncInstanceInputs: true,
    mergeDisplay: true,
    debug: false,

    buttonTheme: [
      {
        class: 'activeBtn',
        buttons: input,
      },
    ],
  };

  const keyboardOptions = {
    ...commonKeyboardOptions,
    layout: {
      default: [
        '{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}',
        "' 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
        '{tab} q w e r t y u i o p ´ [ {enter}',
        '{capslock} a s d f g h j k l ç ~ ] {spacer}',
        '{shiftleft} \\ z x c v b n m , . ; / {shiftright}',
        '{controlleft} {windows} {altleft} {space} {altright} {fn} {controlright}',
      ],
      shift: [
        '{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}',
        '~ ! @ # $ % ^ & * ( ) _ + {backspace}',
        '{tab} Q W E R T Y U I O P { } |',
        '{capslock} A S D F G H J K L : " {enter}',
        '{shiftleft} Z X C V B N M < > ? {shiftright}',
        '{controlleft} {altleft} {metaleft} {space} {metaright} {altright} {controlright}',
      ],
    },
    display: {
      '{escape}': 'esc ⎋',
      '{tab}': 'tab ⇥',
      '{backspace}': 'Back ⌫',
      '{enter}': 'enter',
      '{capslock}': 'caps ⇪',
      '{shiftleft}': 'shift',
      '{shiftright}': 'shift',
      '{controlleft}': 'ctrl',
      '{controlright}': 'ctrl',
      '{altleft}': 'Alt',
      '{altright}': 'AltGr',
      '{metaleft}': 'cmd ⌘',
      '{metaright}': 'cmd ⌘',
      '{spacer}': ' ',
      '{windows}': 'Win',
      '{fn}': 'Fn',
    },
  };

  const keyboardControlPadOptions = {
    ...commonKeyboardOptions,
    layout: {
      default: [
        '{prtscr} {scrolllock} {pause}',
        '{insert} {home} {pageup}',
        '{delete} {end} {pagedown}',
      ],
    },
  };

  const keyboardArrowsOptions = {
    ...commonKeyboardOptions,
    layout: {
      default: ['{arrowup}', '{arrowleft} {arrowdown} {arrowright}'],
    },
  };

  const keyboardNumPadOptions = {
    ...commonKeyboardOptions,
    layout: {
      default: [
        '{numlock} {numpaddivide} {numpadmultiply}',
        '{numpad7} {numpad8} {numpad9}',
        '{numpad4} {numpad5} {numpad6}',
        '{numpad1} {numpad2} {numpad3}',
        '{numpad0} {numpaddecimal}',
      ],
    },
  };

  const keyboardNumPadEndOptions = {
    ...commonKeyboardOptions,
    layout: {
      default: ['{numpadsubtract}', '{numpadadd}', '{numpadenter}'],
    },
  };

  return (
    <Layout>
      <Container>
        <Wrapper>
          <MobileWarning>
            Acesse a versão desktop para as demais teclas
          </MobileWarning>

          <Content>
            <h1>Selecione a tecla</h1>
            <p>Depois, escolha a arma da vez</p>
          </Content>

          <KeyboardContainer className="keyboardContainer">
            <Keyboard
              baseClass="simple-keyboard-main"
              layoutName="default"
              {...keyboardOptions}
            />

            <ControlArrowsContainer className="controlArrows">
              <Keyboard
                baseClass="simple-keyboard-control"
                {...keyboardControlPadOptions}
              />
              <Keyboard
                baseClass="simple-keyboard-arrows"
                {...keyboardArrowsOptions}
              />
            </ControlArrowsContainer>

            <Numpad className="numPad">
              <Keyboard
                baseClass="simple-keyboard-numpad"
                {...keyboardNumPadOptions}
              />
              <Keyboard
                baseClass="simple-keyboard-numpadEnd"
                {...keyboardNumPadEndOptions}
              />
            </Numpad>
          </KeyboardContainer>
        </Wrapper>
      </Container>
    </Layout>
  );
}

export default CreateCfg;
