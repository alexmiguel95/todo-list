import * as S from './styled';

interface IProps {
    fontSize: number;
    children: string;
}

const Title = ({ children, fontSize }: IProps) => {
    return <S.TitleContainer fontSize={fontSize}>{children}</S.TitleContainer>;
};

export default Title;
