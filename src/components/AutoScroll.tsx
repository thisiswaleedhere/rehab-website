import { useEffect, useRef } from "react";

const AutoScroll = ({ direction, list }: { direction: string, list: string[] }) => {

    const scrollRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            scrollRef.current?.classList.remove("scroller-paused");
        }
    }, []);

    return (
        <div className="content-grid">
            <div className="scroller" data-speed="fast" data-direction={direction}>
                <ul ref={scrollRef} className="tag-list scroller__inner scroller-paused">
                    {[...list, ...list, ...list].map((tag, index) => {
                        if (index >= list.length) {
                            return <li key={index} aria-hidden="true" >{tag}</li>
                        }
                        else return <li key={index} >{tag}</li>
                    }
                    )}

                </ul>
            </div>
        </div >
    )
}

export default AutoScroll