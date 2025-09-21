import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pause, Play } from "lucide-react";
import humanizeDuration from "humanize-duration"; 
import Rating from "./Rating";

const Player = ({courses}) => {
   const { id } = useParams();

   const course = Object.values(courses ?? {})
    .flat()
    .find((c) => c.id === Number(id));

   


  const [playerData, setPlayerData] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const [courseData,setCourseData]=useState(null);

  // const getCourseData=()=>{
  //   enrolledCourses.map((course)=>{
  //     if(course.id===id){
  //       setCourseData(course)
  //     }
  //   })
  // }
  // useEffect(()=>{
  //   getCourseData()
  // },[enrolledCourse])

  if (!course) return <h2 className="text-center mt-10">Course not found</h2>;

  const toggleSection = (index) => {
    setOpenSection((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.forEach((lec) => (time += lec.lectureDuration));
    return humanizeDuration(time * 60 * 1000, {
      units: ["h", "m"],
      round: true,
      spacer: "",
    });
  };

  return (
    <div className="p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36">
      {/* Left: Course Content */}
      <div>
        <h2 className="text-xl font-bold mb-4">{course.title} - Structure</h2>
        <div className="divide-y divide-base-300 rounded-lg border border-base-300 shadow bg-base-100">
          {courseData && course.courseContent.map((chapter, index) => (
            <div key={chapter.chapterId} className="collapse collapse-arrow">
              <input
                type="checkbox"
                checked={openSection[index] || false}
                onChange={() => toggleSection(index)}
              />
              <div className="collapse-title flex justify-between items-center text-base font-semibold">
                <span className="truncate">{chapter.chapterTitle}</span>
                <p className="text-xs text-gray-500">
                  {chapter.chapterContent.length} lectures ·{" "}
                  {calculateChapterTime(chapter)}
                </p>
              </div>
              <div className="collapse-content">
                <ul className="space-y-2">
                  {chapter.chapterContent.map((lecture) => (
                    <li
                      key={lecture.lectureId}
                      className="flex justify-between items-start p-2 rounded-md hover:bg-base-200 transition"
                    >
                      <div className="flex items-start gap-2">
                      <img src={false?<Play className="w-4 h-4 text-primary mt-1" />:<Pause/>}/>
                        <Play className="w-4 h-4 text-primary mt-1" />
                        <div>
                          <p className="text-sm font-medium leading-snug">
                            {lecture.lectureTitle}
                          </p>
                          {lecture.lectureUrl && (
                            <span
                              onClick={() =>
                                setPlayerData({
                                 ...lecture, chapter:index+1,lecture:i+1
                                })
                              }
                              className=""
                            >
                             Watch
                            </span>
                          )}
                          <p className="text-xs text-gray-500 mt-1">
                            {humanizeDuration(
                              lecture.lectureDuration * 60 * 1000,
                              { units: ["h", "m"], round: true, spacer: "" }
                            )}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1>Rate this Course:</h1>
          <Rating initialRating={0}/>
        </div>
      </div>

      {/* Right: Player */}
      <div className="rounded-lg border border-base-300 shadow bg-base-100 p-4">
        <h2 className="text-lg font-bold mb-2">Now Playing</h2>
        {playerData ? (
          <iframe
            className="w-full aspect-video rounded"
            src={`https://www.youtube.com/embed/${playerData.videoId}`}
            title="Course Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-gray-500">Select a lecture to start playing</p>
        )}
      </div>
    </div>
  );
};

export default Player;
