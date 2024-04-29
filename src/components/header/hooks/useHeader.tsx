import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import taskApi from '../../../api/task-api';

const useHeader = () => {
    const { data: tasks } = useQuery({ queryKey: ['tasks'], queryFn: taskApi.getTasks });
    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    const handleShowModal = (): void => {
        setIsShowModal(!isShowModal);
    };

    return { isShowModal, tasks, handleShowModal };
};
export default useHeader;
