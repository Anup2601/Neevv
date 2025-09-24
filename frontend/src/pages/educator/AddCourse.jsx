import React, { useEffect, useRef, useState } from "react";
import uniqid from "uniqid";
import Quill from "quill";
import toast from "react-hot-toast";
import coursesData from "../../data/coursesData";
import { X, ChevronDown, ChevronUp, Plus } from "lucide-react";

const AddCourse = () => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [showCourseForm, setShowCourseForm] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [newChapter, setNewChapter] = useState("");

  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: "",
    lectureDuration: "",
    lectureUrl: "",
    isPreviewFree: false,
  });

  const [openChapters, setOpenChapters] = useState({}); // track chapter dropdown
  const [openLectureForm, setOpenLectureForm] = useState({}); // track lecture form per chapter

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  // Add Chapter
  const handleAddChapter = () => {
    if (!newChapter.trim()) return toast.error("Chapter title is required!");
    if (chapters.some((ch) => ch.chapterTitle === newChapter.trim())) {
      return toast.error("This chapter already exists!");
    }

    const newCh = {
      chapterId: uniqid(),
      chapterOrder: chapters.length + 1,
      chapterTitle: newChapter.trim(),
      chapterContent: [],
    };

    setChapters([...chapters, newCh]);
    setNewChapter("");
    toast.success("Chapter added!");
  };

  // Remove Chapter
  const handleRemoveChapter = (id) => {
    setChapters((prev) => prev.filter((ch) => ch.chapterId !== id));
    toast.success("Chapter removed!");
  };

  // Update Chapter Title
  const handleUpdateChapterTitle = (id, value) => {
    setChapters((prev) =>
      prev.map((ch) =>
        ch.chapterId === id ? { ...ch, chapterTitle: value } : ch
      )
    );
  };

  // Add Lecture
  const addLecture = (chapterId) => {
    if (!lectureDetails.lectureTitle.trim()) {
      return toast.error("Lecture title is required!");
    }
    if (!lectureDetails.lectureDuration) {
      return toast.error("Lecture duration is required!");
    }

    setChapters((prev) =>
      prev.map((ch) =>
        ch.chapterId === chapterId
          ? {
              ...ch,
              chapterContent: [
                ...ch.chapterContent,
                {
                  lectureId: uniqid(),
                  lectureTitle: lectureDetails.lectureTitle,
                  lectureDuration: Number(lectureDetails.lectureDuration),
                  lectureUrl: lectureDetails.lectureUrl,
                  isPreviewFree: lectureDetails.isPreviewFree,
                  lectureOrder: ch.chapterContent.length + 1,
                },
              ],
            }
          : ch
      )
    );

    setLectureDetails({
      lectureTitle: "",
      lectureDuration: "",
      lectureUrl: "",
      isPreviewFree: false,
    });
    toast.success("Lecture added!");
  };

  // Toggle Preview per Lecture
  const toggleLecturePreview = (chapterId, lectureId) => {
    setChapters((prev) =>
      prev.map((ch) =>
        ch.chapterId === chapterId
          ? {
              ...ch,
              chapterContent: ch.chapterContent.map((lec) =>
                lec.lectureId === lectureId
                  ? { ...lec, isPreviewFree: !lec.isPreviewFree }
                  : lec
              ),
            }
          : ch
      )
    );
  };

  // Remove Lecture
  const removeLecture = (chapterId, lectureId) => {
    setChapters((prev) =>
      prev.map((ch) =>
        ch.chapterId === chapterId
          ? {
              ...ch,
              chapterContent: ch.chapterContent.filter(
                (lec) => lec.lectureId !== lectureId
              ),
            }
          : ch
      )
    );
    toast.success("Lecture removed!");
  };

  // Save Course
  const saveCourse = () => {
    if (!title.trim()) return toast.error("Course title is required!");
    if (chapters.length === 0) return toast.error("Add at least one chapter!");

    const courseDescription = quillRef.current.root.innerHTML;
    const newCourse = {
      id: coursesData.trending.length + 1,
      title,
      category: "new",
      courseDescription,
      students: "0",
      image,
      instructor: "Admin",
      duration: `${chapters.length * 2} weeks`,
      level: "Beginner",
      price,
      discount,
      isPublished: false,
      courseContent: chapters,
      enrolledStudents: [],
      courseRatings: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    coursesData.trending.push(newCourse);
    toast.success("Course saved!");
    console.log("Updated coursesData:", coursesData);

    // Reset
    setTitle("");
    setPrice(0);
    setDiscount(0);
    setChapters([]);
    quillRef.current.root.innerHTML = "";
  };

  // Stats
  const totalChapters = chapters.length;
  const totalLectures = chapters.reduce(
    (acc, ch) => acc + ch.chapterContent.length,
    0
  );
  const freeLectures = chapters.reduce(
    (acc, ch) => acc + ch.chapterContent.filter((lec) => lec.isPreviewFree).length,
    0
  );
  const paidLectures = totalLectures - freeLectures;

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
        <>
          <h1 className="text-2xl font-bold">Course Builder</h1>

          {/* Title */}
          <div>
            <label className="font-medium">Course Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 w-full rounded"
              placeholder="Enter course title"
            />
          </div>

          {/* Description */}
          <div>
            <label className="font-medium">Course Description</label>
            <div ref={editorRef} className="border p-2 rounded h-40"></div>
          </div>

          {/* Price */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="font-medium">Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </div>
            <div className="flex-1">
              <label className="font-medium">Discount (%)</label>
              <input
                type="number"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </div>
          </div>

          {/* Add Chapter */}
          <div>
            <label className="font-medium">Chapters</label>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="text"
                placeholder="Enter chapter title"
                value={newChapter}
                onChange={(e) => setNewChapter(e.target.value)}
                className="border p-2 rounded flex-1"
              />
              <button
                type="button"
                onClick={handleAddChapter}
                className="bg-primary text-neutral px-4 py-2 rounded"
              >
                Add
              </button>
            </div>
          </div>

          {/* Chapter List */}
          {chapters.map((chapter) => (
            <div
              key={chapter.chapterId}
              className="border rounded mt-3 "
            >
              {/* Chapter Header */}
              <div
                className="flex justify-between items-center p-3 cursor-pointer"
                onClick={() =>
                  setOpenChapters((prev) => ({
                    ...prev,
                    [chapter.chapterId]: !prev[chapter.chapterId],
                  }))
                }
              >
                <input
                  type="text"
                  value={chapter.chapterTitle}
                  onChange={(e) =>
                    handleUpdateChapterTitle(chapter.chapterId, e.target.value)
                  }
                  className="border p-1 rounded flex-1 mr-2"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveChapter(chapter.chapterId);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={20} />
                </button>
                {openChapters[chapter.chapterId] ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>

              {/* Chapter Content */}
              {openChapters[chapter.chapterId] && (
                <div className="p-3 space-y-3">
                  {/* Toggle Add Lecture Form */}
                  <button
                    className="flex items-center gap-2 text-sm text-primary"
                    onClick={() =>
                      setOpenLectureForm((prev) => ({
                        ...prev,
                        [chapter.chapterId]: !prev[chapter.chapterId],
                      }))
                    }
                  >
                    <Plus size={16} />
                    {openLectureForm[chapter.chapterId]
                      ? "Hide Lecture Form"
                      : "Add Lecture"}
                  </button>

                  {/* Lecture Form */}
                  {openLectureForm[chapter.chapterId] && (
                    <div className="space-y-2 border p-3 rounded ">
                      <input
                        type="text"
                        placeholder="Lecture Title"
                        value={lectureDetails.lectureTitle}
                        onChange={(e) =>
                          setLectureDetails({
                            ...lectureDetails,
                            lectureTitle: e.target.value,
                          })
                        }
                        className="border p-2 w-full rounded"
                      />
                      <input
                        type="number"
                        placeholder="Lecture Duration (min)"
                        value={lectureDetails.lectureDuration}
                        onChange={(e) =>
                          setLectureDetails({
                            ...lectureDetails,
                            lectureDuration: e.target.value,
                          })
                        }
                        className="border p-2 w-full rounded"
                      />
                      <input
                        type="text"
                        placeholder="Lecture URL"
                        value={lectureDetails.lectureUrl}
                        onChange={(e) =>
                          setLectureDetails({
                            ...lectureDetails,
                            lectureUrl: e.target.value,
                          })
                        }
                        className="border p-2 w-full rounded"
                      />
                      <label className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={lectureDetails.isPreviewFree}
                          onChange={(e) =>
                            setLectureDetails({
                              ...lectureDetails,
                              isPreviewFree: e.target.checked,
                            })
                          }
                        />
                        Is Preview Free
                      </label>
                      <button
                        type="button"
                        onClick={() => addLecture(chapter.chapterId)}
                        className="bg-primary text-neutral px-4 py-1 rounded"
                      >
                        + Add Lecture
                      </button>
                    </div>
                  )}

                  {/* Lecture List */}
                  {chapter.chapterContent.length > 0 && (
                    <ul className="space-y-2">
                      {chapter.chapterContent.map((lec) => (
                        <li
                          key={lec.lectureId}
                          className="flex justify-between items-center border p-2 rounded "
                        >
                          <div>
                            <p className="font-medium">
                              {lec.lectureOrder}. {lec.lectureTitle} (
                              {lec.lectureDuration} min)
                            </p>
                            <a
                              href={lec.lectureUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary text-sm"
                            >
                              Watch Lecture
                            </a>
                          </div>

                          <div className="flex items-center gap-4">
                            <label className="flex items-center gap-1 text-sm">
                              <input
                                type="checkbox"
                                checked={lec.isPreviewFree}
                                onChange={() =>
                                  toggleLecturePreview(
                                    chapter.chapterId,
                                    lec.lectureId
                                  )
                                }
                              />
                              Free Preview
                            </label>
                            <button
                              className="text-red-500 hover:text-red-700"
                              onClick={() =>
                                removeLecture(chapter.chapterId, lec.lectureId)
                              }
                            >
                              <X size={18} />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Stats */}
          <div className="p-3 rounded text-sm">
            <p>Total Chapters: {totalChapters}</p>
            <p>Total Lectures: {totalLectures}</p>
            <p>
              Free Lectures: {freeLectures} | Paid Lectures: {paidLectures}
            </p>
          </div>

          {/* Save */}
          <div>
            <button
              type="button"
              onClick={saveCourse}
              className="bg-primary text-neutral px-6 py-2 rounded"
            >
              Save Course
            </button>
          </div>
        </>
    </div>
  );
};

export default AddCourse;
