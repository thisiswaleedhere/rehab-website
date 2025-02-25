import { useRef, useEffect, CSSProperties } from "react";
import { techniqueList } from '../utils/techniqueList';

const AutoScrollBig = () => {
    const bigScrollRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            bigScrollRef.current?.classList.remove("scroller-paused");
            // bigScrollRef.current?.classList.add("scroller-paused");
        }
    }, []);

    return (
        <div>
            <div className="scroller big-scroller" data-speed="fast" data-direction="left">
                <ul ref={bigScrollRef} className="scroller-paused">
                    {techniqueList.map((tag) => {
                        return (
                            <li key={tag.id}
                                style={{
                                    "--position": `${tag.id}`,
                                    "--image-url": `url(${tag.image})`
                                } as CSSProperties}>
                                {tag.name}
                            </li>
                        )
                    }
                    )}

                </ul>
            </div>
        </div>
    )
}

export default AutoScrollBig