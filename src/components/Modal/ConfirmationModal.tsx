import Modal, { ModalFooter } from '.';
import Button from '../Button';

type TConfirmationModalProps = {
  title?: string;
  onConfirm: () => void;
  show: boolean;
  onClose: () => void;
};

const ConfirmationModal = ({
  title,
  onConfirm,
  show,
  onClose,
}: TConfirmationModalProps) => (
  <Modal show={show} onClose={onClose} title={title || 'Confirm Delete'}>
    <ModalFooter>
      <Button
        colorType="primary"
        width="100%"
        type="button"
        onClick={onConfirm}
      >
        Confirm
      </Button>
      <Button colorType="danger" width="100%" type="button" onClick={onClose}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
);

export default ConfirmationModal;
