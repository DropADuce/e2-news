import React, { FC } from 'react';

import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface ILoginModalProps {
    isOpen: boolean;
    mix?: string,
    onClose: () => void,
}

export const LoginModal: FC<ILoginModalProps> = (props) => {
    return (
        <Modal
            lazy
            {...props}
        >
            <LoginForm />
        </Modal>
    );
};
