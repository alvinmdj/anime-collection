import { mq } from '@/utils/media-query';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

type TModalProps = {
  show: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const Modal = ({ show, onClose, title, children }: TModalProps) => {
  if (!show) return null;

  return (
    <ModalRoot onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalRoot>
  );
};

const ModalRoot = styled.div((props) => ({
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ModalContent = styled.div((props) => ({
  width: '500px',
  background: '#FFF',
  borderRadius: '8px',
}));

const ModalHeader = styled.div((props) => ({
  padding: '10px',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '16px',
  [mq[1]]: {
    fontSize: '20px',
  },
  [mq[2]]: {
    fontSize: '24px',
  },
  [mq[3]]: {
    fontSize: '28px',
  },
}));

const ModalBody = styled.div((props) => ({
  padding: '10px',
}));

export const ModalFooter = styled.div((props) => ({
  display: 'flex',
  padding: '10px',
  gap: '5px',
  justifyContent: 'end',
}));

export default Modal;
