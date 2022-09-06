import ScrollHandle from './ScrollHandle';
import { useRef, useState } from 'react';


const Home = () => {
    const [selectedDot, setselectedDot] = useState(1)
    const dynamicBall = useRef(null)
    const scrollHandleContainer = useRef(null)
    const changeTop = (e) => {
        dynamicBall.current.style.top = `${Math.floor((e.target.scrollTop / 667) * 39)}px`
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
                    <div className="full-page">
                        <div className="page-container">
                            <h1>YOU DONT KNOW JS, YET</h1>
                            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quibusdam expedita optio, nihil in sint.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, ipsa!</p>
                            <small>Lorem ipsum dolor sit amet.</small>
                        </div>
                    </div>
                    <div className="full-page">
                        <div className="page-container">
                            <h1>YOU DONT KNOW JS, YET</h1>
                            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quibusdam expedita optio, nihil in sint.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, ipsa!</p>
                            <small>Lorem ipsum dolor sit amet.</small>
                        </div>
                    </div>
                    <div className="full-page">
                        <div className="page-container">
                            <h1>YOU DONT KNOW JS, YET</h1>
                            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quibusdam expedita optio, nihil in sint.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, ipsa!</p>
                            <small>Lorem ipsum dolor sit amet.</small>
                        </div>
                    </div>
                    <div className="full-page">
                        <div className="page-container">
                            <h1>YOU DONT KNOW JS, YET</h1>
                            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quibusdam expedita optio, nihil in sint.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, ipsa!</p>
                            <small>Lorem ipsum dolor sit amet.</small>
                        </div>
                    </div>
                    <div className="full-page">
                        <div className="page-container">
                            <h1>YOU DONT KNOW JS, YET</h1>
                            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quibusdam expedita optio, nihil in sint.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, ipsa!</p>
                            <small>Lorem ipsum dolor sit amet.</small>
                        </div>
                    </div>
                    <div className="full-page">
                        <div className="page-container">
                            <h1>YOU DONT KNOW JS, YET</h1>
                            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quibusdam expedita optio, nihil in sint.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, ipsa!</p>
                            <small>Lorem ipsum dolor sit amet.</small>
                        </div>
                    </div>
                    <div className="full-page">
                        <div className="page-container">
                            <h1>YOU DONT KNOW JS, YET</h1>
                            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quibusdam expedita optio, nihil in sint.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, ipsa!</p>
                            <small>Lorem ipsum dolor sit amet.</small>
                        </div>
                    </div>
                    <div className="full-page">
                        <div className="page-container">
                            <h1>YOU DONT KNOW JS, YET</h1>
                            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quibusdam expedita optio, nihil in sint.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, ipsa!</p>
                            <small>Lorem ipsum dolor sit amet.</small>
                        </div>
                    </div>

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