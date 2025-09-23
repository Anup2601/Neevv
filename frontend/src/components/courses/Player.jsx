import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Pause, Play } from "lucide-react";
import humanizeDuration from "humanize-duration";
import Rating from "./Rating";
import coursesData from "../../data/coursesData";

const Player = () => {
  const { id } = useParams();

  const allCourses = Object.values(coursesData).flat();
  const course = allCourses.find((c) => String(c.id) === String(id));

  const [playerData, setPlayerData] = useState(null);
  const [openSection, setOpenSection] = useState({});

  if (!course)
    return (
      <h2 className="text-center mt-10 text-xl font-semibold text-red-500">
        Course not found
      </h2>
    );

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
    <div className="p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-3 gap-8 md:px-20">
      {/* Left: Course Content  */}
      <div className="md:col-span-1">
        <h2 className="text-2xl font-bold mb-6">{course.title} - Curriculum</h2>

        <div className="space-y-4">
          {course.courseContent.map((chapter, index) => (
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

              {openSection[index] && (
                <ul className="space-y-2">
                  {chapter.chapterContent.map((lecture, lecIndex) => {
                    const isPlaying =
                      playerData &&
                      playerData.chapter === index + 1 &&
                      playerData.lecture === lecIndex + 1;

                    return (
                      <li
                        key={lecture.lectureId}
                        className={`flex justify-between items-start p-2 rounded-md transition cursor-pointer ${
                          isPlaying ? "bg-primary/20" : "hover:bg-base-200"
                        }`}
                        onClick={() => {
                          if (isPlaying) setPlayerData(null);
                          else
                            setPlayerData({
                              ...lecture,
                              chapter: index + 1,
                              lecture: lecIndex + 1,
                            });
                        }}
                      >
                        <div className="flex items-center gap-3">
                          {isPlaying ? (
                            <Pause className="w-5 h-5 text-primary transform transition-transform duration-200 scale-110" />
                          ) : (
                            <Play className="w-5 h-5 text-primary transform transition-transform duration-200 hover:scale-125" />
                          )}

                          <div>
                            <p className="text-sm font-medium">
                              {lecture.lectureTitle}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {humanizeDuration(
                                lecture.lectureDuration * 60 * 1000,
                                {
                                  units: ["h", "m"],
                                  round: true,
                                  spacer: "",
                                }
                              )}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Rating Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Rate this Course:</h3>
          <Rating initialRating={0} />
        </div>
      </div>

      {/* Right: Player  */}
      <div className="md:col-span-2 sticky top-6 rounded-lg border border-base-300 shadow-lg bg-base-100 p-4 h-fit">
        <h2 className="text-lg font-bold mb-3">Now Playing</h2>
        {playerData ? (
          <iframe
            className="w-full aspect-video rounded"
            src={`https://www.youtube.com/embed/${
              playerData.lectureUrl?.split("youtu.be/")[1]
            }`}
            title={playerData.lectureTitle}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="relative flex justify-center items-center">
            <img
              src={course.image}
              alt={course.title}
              className="w-full rounded-lg shadow-md object-cover max-h-96"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Player;
