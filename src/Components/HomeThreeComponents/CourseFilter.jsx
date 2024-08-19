import React, { Fragment, useEffect } from 'react'

const CourseFilter = ({ activeData, mainData, setFilterData, setActiveData }) => {
    useEffect(() => {
        if (activeData === 0) {
            setFilterData(mainData);
        }
        const filteredData = mainData.filter((e) => e.id.includes(activeData));
        setFilterData(filteredData);
    }, [activeData, setFilterData, mainData]);
    return (
        <ul className="filter-list flex xl:space-x-[39px] space-x-4 " style={{ textTransform: 'capitalize' }}>
            {['see all', 'marketing', 'design', 'finance'].map((item, index) => (
                <Fragment key={index}>
                    {item === "see all" ? (
                        <li
                            className={activeData === 0 ? "active filter" : "filter"}
                            onClick={() => setActiveData(0)}
                        >
                            {item}
                        </li>
                    ) : (
                        <li
                            className={activeData === item ? "filter active" : "filter"}

                            onClick={() => setActiveData(item)}
                        >
                            {item}
                        </li>
                    )}
                </Fragment>
            ))}

        </ul>
    )
}

export default CourseFilter