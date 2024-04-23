import { WithTranslation, withTranslation } from 'react-i18next';
import * as S from './styled';
import Logo from 'assets/images/logo.svg';

const Header = ({ t }: WithTranslation) => {
    return (
        <S.HeaderContainer>
            <S.HeaderLogo>{t('header.title')}</S.HeaderLogo>
            <Logo />
        </S.HeaderContainer>
    );
};

export default withTranslation()(Header);
