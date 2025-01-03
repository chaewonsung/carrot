import styled from 'styled-components';
import { IconClose } from '../Icons';
import palette from '../../../lib/styles/palette';
import { mq, rem } from '../../../lib/styles/variables';

const ModalLayoutBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${palette.gray[9] + '80'};
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${mq.tablet}px) {
    align-items: flex-end;
  }
`;
const Modal = styled.div`
  --padding: 20px;
  position: relative;
  width: 560px;
  height: 60vh;
  background-color: ${palette.gray[0]};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${mq.laptop}px) {
    height: 75vh;
  }
  @media screen and (max-width: ${mq.tablet}px) {
    --padding: 16px;
    width: 100%;
    border-radius: 20px 20px 0 0;
  }
`;
const ModalHeader = styled.h2`
  font-weight: 600;
  border-bottom: 1px solid ${palette.gray[3]};
  padding: var(--padding);
  font-size: ${rem(20)};
`;
const ModalContent = styled.div`
  padding: var(--padding);
  flex: 1;
`;
const ModalBtnClose = styled.button`
  position: absolute;
  top: var(--padding);
  right: var(--padding);
  scale: 1.3;
`;

const ModalLayout = ({ header, setShowModal, children }) => {
  return (
    <ModalLayoutBlock
      onClick={(e) => {
        if (e.currentTarget === e.target) setShowModal(false);
      }}
    >
      <Modal>
        <ModalHeader>{header}</ModalHeader>
        <ModalContent>{children}</ModalContent>
        <ModalBtnClose onClick={() => setShowModal(false)}>
          <IconClose />
        </ModalBtnClose>
      </Modal>
    </ModalLayoutBlock>
  );
};

export default ModalLayout;
