import styled from '@emotion/styled';
import { ReactNode } from 'react';
import Button from '../Button';

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
        <ModalFooter>
          <Button onClick={onClose}>Submit</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
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
}));

const ModalBody = styled.div((props) => ({
  padding: '10px',
}));

const ModalFooter = styled.div((props) => ({
  display: 'flex',
  padding: '10px',
  gap: '5px',
  justifyContent: 'end',
}));

export default Modal;
