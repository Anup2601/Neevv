import humanizeDuration from "humanize-duration";

export const calculateCourseTime = (course) => {
  if (!course?.courseContent) return "N/A";

  let time = 0;
  course.courseContent.forEach((ch) =>
    ch.chapterContent.forEach(
      (lecture) => (time += lecture.lectureDuration || 0)
    )
  );

  return humanizeDuration(time * 60 * 1000, {
    units: ["h", "m"],
    round: true,
    spacer: "",
  });
};
