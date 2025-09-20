import React from "react";
import Youtube from "react-youtube";

const CourseDetailPlayer = ({ playerData, course }) => (
  <div>
    {playerData ? (
      <Youtube
        videoId={playerData.videoId}
        opts={{ playerVars: { autoplay: 1 } }}
        iframeClassName="w-full aspect-video rounded-lg shadow"
      />
    ) : (
      <img
        src={course.image}
        alt={course.title}
        className="w-full rounded-lg shadow"
      />
    )}
  </div>
);

export default CourseDetailPlayer;
