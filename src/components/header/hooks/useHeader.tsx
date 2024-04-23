import { useState } from 'react';

const useHeader = () => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    const handleShowModal = (): void => {
        setIsShowModal(!isShowModal);
    };

    return { isShowModal, handleShowModal };
};
export default useHeader;
