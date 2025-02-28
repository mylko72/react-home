import useWindowDimensions from '../hook/useWindowDimensions';

const ScreenSize = () => {
    const { width: screenWidth, height: screenHeight } = useWindowDimensions();
    return { screenWidth, screenHeight }
}

export default ScreenSize;