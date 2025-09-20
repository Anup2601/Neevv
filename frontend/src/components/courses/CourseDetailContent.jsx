import React from "react";
import { Play } from "lucide-react";
import humanizeDuration from "humanize-duration";

const CourseDetailContent = ({
  course,
  openSection,
  toggleSection,
  setPlayerData,
  calculateChapterTime,
}) => (
  <div className="w-full lg:w-2/3 space-y-6 overflow-y-auto pr-4">
    <h2 className="text-xl font-bold mb-3 text-primary">Course Content</h2>
    <div className="divide-y divide-base-300 rounded-lg border border-base-300 shadow bg-base-100">
      {course.courseContent.map((chapters, index) => (
        <div key={index} className="collapse collapse-arrow">
          <input
            type="checkbox"
            checked={openSection[index]}
            onChange={() => toggleSection(index)}
          />
          <div className="collapse-title flex justify-between items-center text-base font-semibold">
            <span className="truncate">{chapters.chapterTitle}</span>
            <p className="text-xs text-gray-500">
              {chapters.chapterContent.length} lectures ·{" "}
              <span>{calculateChapterTime(chapters)}</span>
            </p>
          </div>
          <div className="collapse-content">
            <ul className="space-y-2">
              {chapters.chapterContent.map((lecture, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-start p-2 rounded-md hover:bg-base-200 transition"
                >
                  <div className="flex items-start gap-2">
                    <Play className="w-4 h-4 text-primary mt-1" />
                    <div>
                      <p className="text-sm font-medium leading-snug">
                        {lecture.lectureTitle}
                      </p>
                      {lecture.isPreviewFree && (
                        <span
                          onClick={() =>
                            setPlayerData({
                              videoId: lecture.lectureUrl.split("/").pop(),
                            })
                          }
                          className="badge badge-success badge-xs mt-1 cursor-pointer"
                        >
                          Free Preview
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
  </div>
);

export default CourseDetailContent;
