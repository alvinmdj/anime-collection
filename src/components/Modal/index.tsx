import { mq } from '@/utils/media-query';
import styled from '@emotion/styled';
import { ReactNode, useEffect } from 'react';

type TModalProps = {
  width?: string;
  height?: string;
  show: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const Modal = ({
  width,
  height,
  show,
  onClose,
  title,
  children,
}: TModalProps) => {
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : '';
  }, [show]);

  if (!show) return null;

  return (
    <ModalRoot onClick={onClose}>
      <ModalContent
        width={width}
        height={height}
        onClick={(e) => e.stopPropagation()}
      >
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

const ModalContent = styled.div(
  (props: { width?: string; height?: string }) => ({
    width: props.width || '500px',
    height: props.height,
    background: '#FFF',
    borderRadius: '8px',
  })
);

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
