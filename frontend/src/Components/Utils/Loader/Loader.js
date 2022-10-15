import React from 'react';
import './Loader.css'

const Loader = () => {
    return (
        <>
            {/* Preloader */}
            <div className="preloader">
                <div className="preloader-inner">
                    <div className="preloader-icon">
                        <span />
                        <span />
                    </div>
                </div>
            </div>
            {/* /End Preloader */}
        </>
    )
}

export default Loader
