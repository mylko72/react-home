import useWindowDimensions from '../hook/useWindowDimensions';

const ScreenSize = () => {
    const { width, height } = useWindowDimensions();
    return { width, height } 
}

export default ScreenSize;