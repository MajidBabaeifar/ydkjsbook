const ScrollHandle = ({ dynamicBall, scrollHandleContainer, selectedDot }) => {

    return (
        <div
            ref={scrollHandleContainer}
            className="scroll-handle-container"
        >
            <div ref={dynamicBall} className="dynamic-ball"></div>
            <div className="glass-bg"></div>
            <div className={selectedDot === 1 ? "handle-circle active" : "handle-circle"}></div>
            <div className={selectedDot === 2 ? "handle-circle active" : "handle-circle"}></div>
            <div className={selectedDot === 3 ? "handle-circle active" : "handle-circle"}></div>
            <div className={selectedDot === 4 ? "handle-circle active" : "handle-circle"}></div>
            <div className={selectedDot === 5 ? "handle-circle active" : "handle-circle"}></div>
            <div className={selectedDot === 6 ? "handle-circle active" : "handle-circle"}></div>
            <div className={selectedDot === 7 ? "handle-circle active" : "handle-circle"}></div>
            <div className={selectedDot === 8 ? "handle-circle active" : "handle-circle"}></div>
        </div >
    );
}

export default ScrollHandle;