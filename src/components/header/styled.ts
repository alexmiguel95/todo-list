import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: ${RFValue(20)}px ${RFValue(30)}px;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};

    shadow-color: #000;
    shadow-opacity: 0.20;
    shadow-radius: 10px;
    elevation: 4;
`;

export const HeaderLogo = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderModalContainer = styled.View`
    width: ${RFValue(160)}px;
    margin-left: auto;
    margin-right: 30px;
    bottom: -115px;
    padding: 10px;

    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
    border-radius: 10px;

    shadow-color: #000;
    shadow-opacity: 0.20;
    shadow-radius: 10px;
    elevation: 4;
`;

export const HeaderModalBox = styled.View`
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.gray};
    border-top-color: ${({ theme }) => theme.colors.gray};
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
`;

export const ModalText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(15)}px;
    margin: 5px;
`;
