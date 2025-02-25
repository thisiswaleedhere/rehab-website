import AutoScroll from "../components/AutoScroll"

const MultiScroll = () => {

    const list1 = ['Child-friendly', 'Safe Environment', 'Experienced Therapists',
        'Highest Standards', 'Individualized Plans', 'Certified Professionals', 'Spacious Facility'];


    return (
        <div className="content-grid multiscroll sectionblock">
            <div>
                <h2>
                    Every child is unique, and so is our approach!
                </h2>
                <div className="scrollcontainer">
                    <AutoScroll list={list1} direction="left" />
                    <AutoScroll list={list1} direction="right" />
                    <AutoScroll list={list1} direction="left" />
                </div>
            </div>
        </div>
    )
}

export default MultiScroll