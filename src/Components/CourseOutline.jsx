import React from 'react';

const CourseOutline = ({ outline }) => {
  const chapters = JSON.parse(outline);

  return (
    <div className="course-outline" style={{ marginBottom: '16px' }}>
      <style jsx>{`
        .course-outline .chapter-title {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 0.9rem; /* Equivalent to text-sm */
          font-weight: 900; /* Equivalent to font-semibold */
        }
      `}</style>
      {Object.keys(chapters).map((chapter, index) => (
        <div key={index} className="chapter">
          <h3 className="chapter-title">{chapter}</h3>
        </div>
      ))}
    </div>
  );
};

export default CourseOutline;
