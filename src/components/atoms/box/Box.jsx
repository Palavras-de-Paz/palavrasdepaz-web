import * as S from "./styled";

const Box = ({
    bg,  
    width,
    justify,
    align,
    height,
    direction,
    shadow,
    color,
    margin,
    padding,
    children,
    position,
    radius,
    gap,
    textAlign,
    flexWrap
}) => {
    return (
        <S.Box
            padding={padding}
            margin={margin}
            color={color}
            bg={bg}
            width={width}
            height={height}
            justify={justify}
            align={align}
            direction={direction}
            shadow={shadow}
            position={position}
            gap={gap}
            radius={radius}
            textAlign={textAlign}
            flexWrap={flexWrap}
        >
            {children}
        </S.Box>
    );
};

export default Box;