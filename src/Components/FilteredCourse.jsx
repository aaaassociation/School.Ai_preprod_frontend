import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { c1, c2, c3, c4, c5, c6, clock, file, star } from '../constant/images';
import styles from '../style/PageBanner.module.css';
import CourseOutline from './CourseOutline';

const FilteredCourse = ({ classNameForTabOne, classNameForTabTwo }) => {
  const [userId, setUserId] = useState(null);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCourseGenerationVisible, setIsCourseGenerationVisible] = useState(true);

  const auth = getAuth();
  const navigate = useNavigate();
  const courseImages = [c1, c2, c3, c4, c5, c6];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        console.log("User not signed in");
        window.location.href = "/schoolai/login"; // Redirect to login if user is not authenticated
      }
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return;

      try {
        const querySnapshot = await getDocs(collection(db, 'course_data'));
        let fetchedCourses = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.user_id === userId) {
            fetchedCourses.push({ id: doc.id, ...data });
          }
        });

        fetchedCourses.sort((a, b) => {
          const timestampA = a.timestamp ? a.timestamp.seconds : 0;
          const timestampB = b.timestamp ? b.timestamp.seconds : 0;
          return timestampB - timestampA;
        });

        setCourses(fetchedCourses);
      } catch (error) {
        console.error('Error fetching documents:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const handleCourseClick = (inputData) => {
    navigate(`/schoolai/viewhistorycourse/${encodeURIComponent(inputData)}`);
  };

  const handleNewCourseClick = () => {
    setIsCourseGenerationVisible(false);
  };

  return (
    <>
      <div className="flex justify-center mt-10 space-x-4 mb-12">
        {isCourseGenerationVisible ? (
          <button onClick={handleNewCourseClick} className="btn btn-primary">
            New Course Generation
          </button>
        ) : (
          <>
            <Link to="/schoolai/new-course" className={styles['btn-outline-red']}>
              Normal Course Generation
            </Link>
            <Link to="/schoolai/generatevideo" className={styles['btn-outline-red']}>
              Video Course Generation
            </Link>
          </>
        )}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className={styles.spinner}></div>
        </div>
      ) : (
        courses.length > 0 ? (
          <div className="flex flex-wrap gap-5 justify-center items-center mb-14">
            <Tab.Group>
              <Tab.List as="ul" id="tabs-nav" className="flex space-x-4 cata-Tabs">
                {['clarity:grid-view-line', 'ant-design:unordered-list-outlined'].map((className, key) => (
                  <Tab as="li" className={({ selected }) => (selected ? "active" : "")} key={key}>
                    <a href="#" className="h-[60px] w-[60px] flex flex-col justify-center items-center">
                      <iconify-icon icon={className}></iconify-icon>
                    </a>
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels as="div" id="tabs-content">
                <Tab.Panel as="div" id="tab1" className="tab-content">
                  <div className={classNameForTabOne}>
                    {courses.map((course, index) => (
                      <div
                        className="bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm cursor-pointer"
                        onClick={() => handleCourseClick(course.input_data)}
                        key={course.id}
                      >
                        <div className="course-thumb h-[248px] rounded-t-[8px] relative">
                          <img src={courseImages[index % courseImages.length]} alt="" className="w-full h-full object-cover rounded-t-[8px]" />
                          <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
                            {course.input_data}
                          </span>
                        </div>
                        <div className="course-content p-8">
                          <div className="text-secondary font-bold text-2xl mb-3">Course Outline</div>
                          <h4 className="text-xl mb-3 font-bold">
                            <CourseOutline outline={course.course_outline} />
                          </h4>
                          <div className="flex justify-between flex-wrap space-y-1 xl:space-y-0">
                            <span className="flex items-center space-x-2 mr-3">
                              <img src={file} alt="" />
                              <span>{Object.keys(JSON.parse(course.course_outline)).length} Chapters</span>
                            </span>
                            <span className="flex items-center space-x-2 mr-3">
                              <img src={clock} alt="" />
                              <span>{course.timestamp && course.timestamp.seconds ? new Date(course.timestamp.seconds * 1000).toLocaleDateString() : 'No Date'}</span>
                            </span>
                            <span className="flex items-center space-x-2">
                              <img src={star} alt="" />
                              <span>5.0</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel id="tab2" className="tab-content">
                  <div className={classNameForTabTwo}>
                    {courses.map((course, index) => (
                      <div
                        className="bg-white rounded-[8px] transition shadow-box7 duration-150 border-b-4 hover:border-primary border-transparent hover:shadow-box6 flex p-8 space-x-6 cursor-pointer"
                        onClick={() => handleCourseClick(course.input_data)}
                        key={course.id}
                      >
                        <div className="flex-none">
                          <div className="w-[159px] h-[159px] rounded relative">
                            <img src={courseImages[index % courseImages.length]} alt="" className="w-full h-full object-cover rounded" />
                          </div>
                        </div>
                        <div className="course-content flex-1">
                          <div className="text-primary font-bold text-2xl mb-2 flex justify-between">
                            <span className="inline-block">{course.input_data}</span>
                            <span className="flex space-x-1">
                              {[...Array(4)].map((_, i) => (
                                <span className="w-4 h-4 inline-block" key={i}>
                                  <img src={star} alt="" className="w-full h-full block object-cover" />
                                </span>
                              ))}
                            </span>
                          </div>
                          <h4 className="text-2xl leading-[36px] mb-4 font-bold">
                            <CourseOutline outline={course.course_outline} />
                          </h4>
                          <div className="flex space-x-6">
                            <span className="flex items-center space-x-2">
                              <img src="assets/images/svg/file2.svg" alt="" />
                              <span>{Object.keys(JSON.parse(course.course_outline)).length} Chapters</span>
                            </span>
                            <span className="flex items-center space-x-2">
                              <img src="assets/images/svg/user2.svg" alt="" />
                              <span>4k Lesson</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        ) : (
          <p>No courses found.</p>
        )
      )}
    </>
  );
};

export default FilteredCourse;
