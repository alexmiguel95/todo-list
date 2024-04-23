import { WithTranslation, withTranslation } from 'react-i18next';
import * as S from './styled';

const Header = ({ t }: WithTranslation) => {
    return (
        <S.HeaderContainer>
            <S.HeaderLogo>{t('header.title')}</S.HeaderLogo>
        </S.HeaderContainer>
    );
};

export default withTranslation()(Header);
