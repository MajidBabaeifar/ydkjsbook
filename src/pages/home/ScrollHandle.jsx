const ScrollHandle = ({ dynamicBall, scrollHandleContainer, selectedDot, clickDot }) => {

    return (
        <div
            onClick={clickDot}
            ref={scrollHandleContainer}
            className="scroll-handle-container"
        >
            <div ref={dynamicBall} className="dynamic-ball"></div>
            <div className="glass-bg"></div>
            <div data-item="1" className={selectedDot === 1 ? "handle-circle active" : "handle-circle"}></div>
            <div data-item="2" className={selectedDot === 2 ? "handle-circle active" : "handle-circle"}></div>
            <div data-item="3" className={selectedDot === 3 ? "handle-circle active" : "handle-circle"}></div>
            <div data-item="4" className={selectedDot === 4 ? "handle-circle active" : "handle-circle"}></div>
            <div data-item="5" className={selectedDot === 5 ? "handle-circle active" : "handle-circle"}></div>
            <div data-item="6" className={selectedDot === 6 ? "handle-circle active" : "handle-circle"}></div>
            <div data-item="7" className={selectedDot === 7 ? "handle-circle active" : "handle-circle"}></div>
            <div data-item="8" className={selectedDot === 8 ? "handle-circle active" : "handle-circle"}></div>
        </div >
    );
}

export default ScrollHandle;