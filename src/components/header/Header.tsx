import { WithTranslation, withTranslation } from 'react-i18next';
import * as S from './styled';
import Logo from '../../assets/images/logo.svg';
import { Modal, Pressable } from 'react-native';
import Title from '../title/Title';
import useHeader from './hooks/useHeader';
import { useEffect } from 'react';

const Header = ({ t }: WithTranslation) => {
    const { handleShowModal, isShowModal } = useHeader();

    return (
        <S.HeaderContainer>
            <Title fontSize={30}>{t('header.title')}</Title>
            <Pressable onPress={() => handleShowModal()}>
                <Logo />
            </Pressable>
            <Modal visible={isShowModal} transparent={true}>
                <S.HeaderModalContainer>
                    <Title fontSize={15}>{t('header.modal.signed')}</Title>
                    <S.HeaderModalBox>
                        <S.ModalText>{t('header.modal.profile')}</S.ModalText>
                        <S.ModalText>{t('header.modal.settings')}</S.ModalText>
                    </S.HeaderModalBox>
                    <Pressable onPress={() => handleShowModal()}>
                        <S.ModalText>{t('header.modal.logout')}</S.ModalText>
                    </Pressable>
                </S.HeaderModalContainer>
            </Modal>
        </S.HeaderContainer>
    );
};

export default withTranslation()(Header);
