import React, { useState } from 'react';
import { css } from '@emotion/react';
import A11yHiddenHeading from 'components/atoms/A11yHiddenHeading';
import { Link } from 'react-router-dom';
import IconButton from 'components/molecules/IconButton';
import ModalContainer from 'utils/potal';
import SideBar from 'components/organisms/SideBar';
import ModalOverlay from 'components/atoms/ModalOverlay';
import { AnimatePresence } from 'framer-motion';

export type HeaderProps = {
  TabComp?: any;
};

const Header = ({ TabComp }: HeaderProps) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <header css={headerStyle}>
        <section css={headerContainerStyle}>
          <IconButton name="menu" size={32} onClick={() => setIsShow(true)} />
          <div css={headerLogoStyle}>
            <Link to="/"></Link>
            <A11yHiddenHeading comp="h1">
              CACAO Friends 웹사이트
            </A11yHiddenHeading>
          </div>
          <div css={IconButtonContainerStyle}>
            {/* 추후 아이콘 추가  */}
            <IconButton name="search" size={32} />
          </div>
        </section>
        {TabComp ? <TabComp /> : null}
      </header>
      <AnimatePresence>
        {isShow && (
          <ModalContainer id="modal-root">
            <ModalOverlay
              onClick={() => setIsShow(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
            />
            <SideBar
              initial={{ x: '-100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'none' }}
              exit={{ x: '-100vw', opacity: 0 }}
            />
          </ModalContainer>
        )}
      </AnimatePresence>
    </>
  );
};

const headerStyle = css`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  position: sticky;
  z-index: 1000;
  top: 0;
  margin: 0 auto;
`;
const headerContainerStyle = css`
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 1.3rem 0.7rem;

  & + div {
    margin-top: 20px;
  }
`;
const headerLogoStyle = css`
  width: 147px;
  height: 24px;

  a {
    display: block;
    width: 100%;
    height: 100%;
    background: url('https://t1.kakaocdn.net/friends/new_store/2.0/mobile/new-logo-mo.png');
    background-size: cover;
  }
`;
const IconButtonContainerStyle = css`
  display: flex;
  button + button {
    margin-left: 0.5rem;
  }
`;

export default Header;
