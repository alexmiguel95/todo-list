import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
    padding: ${RFValue(20)}px ${RFValue(30)}px;

    border: 1px solid red;
`;

export const HeaderLogo = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(30)}px;
`;
