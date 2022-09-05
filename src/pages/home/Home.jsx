import ScrollHandle from './ScrollHandle';
import { useRef, useState } from 'react';


const Home = () => {
    const [selectedDot, setselectedDot] = useState(1)
    const dynamicBall = useRef(null)
    const scrollHandleContainer = useRef(null)
    const changeTop = (e) => {
        dynamicBall.current.style.top = `${Math.floor((e.target.scrollTop / 667) * 25) + 2}px`
    }
    const selectDot = (e) => {
        setselectedDot(Math.floor((e.target.scrollTop / 667)) + 1)
    }
    return (
        <div>
            <div className="container">
                <div onScroll={(e) => {
                    changeTop(e)
                    selectDot(e)
                }}
                    className="pages"
                >
                    <div className="full-page"></div>
                    <div className="full-page"></div>
                    <div className="full-page"></div>
                    <div className="full-page"></div>
                    <div className="full-page"></div>
                    <div className="full-page"></div>
                    <div className="full-page"></div>
                    <div className="full-page"></div>
                </div>
                <ScrollHandle
                    selectedDot={selectedDot}
                    scrollHandleContainer={scrollHandleContainer}
                    dynamicBall={dynamicBall}
                />
            </div>
        </div>
    );
}

export default Home;