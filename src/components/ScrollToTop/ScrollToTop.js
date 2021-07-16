import React, { useEffect, useState } from 'react';
import './ScrollToTop.css'
import { UpOutlined } from '@ant-design/icons';
import * as Scroll from 'react-scroll'; 
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function ScrollToTop(props) {
    const [heightPage, setHeightPage] = useState(0)
    const handleScroll = () => {
        setHeightPage(window.pageYOffset)
    }
    
    const scrollToTop = () => {
        scroll.scrollToTop(500, 'duration');
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])
    
    return (
        <section className="scroll">
            
            {
                heightPage > 1000 ? (
                    <Link duration={200} onClick={() => scrollToTop()}>
                        <div className="scrolltotop">
                            <UpOutlined></UpOutlined>
                        </div>
                    </Link>
                    ) : ''
            }

        </section>
    );
}

export default ScrollToTop;