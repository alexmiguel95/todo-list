import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface IStyledProps {
    fontSize: number;
}

export const TitleContainer = styled.Text<IStyledProps>`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${({ fontSize }) => RFValue(fontSize)}px;
    color: ${({ theme }) => theme.colors.primary};
`;
