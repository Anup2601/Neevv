import AI_ML from "../assets/AI_ML.jpg";
import Cloud from "../assets/Cloud.jpg";
import Data_Science from "../assets/Data_Science.jpg";
import CyberSecurity from "../assets/CyberSecurity.jpg";
import React4 from "../assets/react.jpg";
import Node from "../assets/node.jpg";
// import UI_UX from "../assets/UI_UX.jpg";
import JavaScript from "../assets/JavaScript.webp";
// import Database from "../assets/Database.jpg";
const coursesData = {
  trending: [
    {
      id: 1,
      title: "AI & Machine Learning",
      category: "ai",
      courseDescription:
        "<h2>Learn the Basics of JavaScript</h2><p>JavaScript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JavaScript, including syntax, data types, and control structures.</p><p>This course is perfect for beginners who want to start their journey in web development. By the end of this course, you will be able to create interactive web pages and understand the core concepts of JavaScript.</p><ul><li>Understand the basics of programming</li><li>Learn how to manipulate the DOM</li><li>Create dynamic web applications</li></ul>",
      students: "45K+",
      image: AI_ML,
      instructor: "Dr. Sarah Chen",
      duration: "12 weeks",
      level: "Intermediate",
      price: 199.99,
      discount: 20,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 2,
      title: "Cloud Computing AWS",
      category: "cloud",
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      students: "38K+",
      rating: 4.7,
      image: Cloud,
      instructor: "Mike Johnson",
      duration: "8 weeks",
      level: "Beginner",
      price: 149.99,
      discount: 99,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Introduction to Cloud Computing",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is Cloud Computing?",
              lectureDuration: 15,
              lectureUrl: "https://youtu.be/t8L_9n3BfFw",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "AWS Overview",
              lectureDuration: 18,
              lectureUrl: "https://youtu.be/ubCNZRNjhyo",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "AWS Core Services",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "EC2 Basics",
              lectureDuration: 22,
              lectureUrl: "https://youtu.be/1r1yaqf0zF4",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "S3 Storage",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/JIbIYCM48to",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: ["user_2q1awsabcde123", "user_2q2cloudxyz789"],
      courseRatings: [
        {
          userId: "user_2q2cloudxyz789",
          rating: 4,
          _id: "6773e37360cb0ab974341111",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 3,
      title: "Data Science with Python",
      category: "data",
      students: "52K+",
      rating: 4.9,
      image: Data_Science,
      instructor: "Prof. Lisa Wang",
      duration: "16 weeks",
      level: "Advanced",
      price: 249.99,
      discount: 25,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 4,
      title: "Cybersecurity Fundamentals",
      category: "security",
      students: "29K+",
      rating: 4.6,
      image: CyberSecurity,
      instructor: "John Smith",
      duration: "10 weeks",
      level: "Beginner",
      price: 99.99,
      discount: 10,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
  ],
  recommended: [
    {
      id: 5,
      title: "React.js Complete Guide",
      category: "frontend",
      students: "34K+",
      rating: 4.8,
      image: React4,
      instructor: "Alex Rivera",
      duration: "14 weeks",
      level: "Intermediate",
      price: 199.99,
      discount: 20,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 6,
      title: "Node.js Backend Development",
      category: "backend",
      students: "28K+",
      rating: 4.7,
      image: Node,
      instructor: "Emma Brown",
      duration: "12 weeks",
      level: "Intermediate",
      price: 179.99,
      discount: 18,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 7,
      title: "UI/UX Design Mastery",
      category: "design",
      students: "41K+",
      rating: 4.9,
      image: "UI_UX",
      instructor: "David Lee",
      duration: "10 weeks",
      level: "Beginner",
      price: 149.99,
      discount: 15,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
  ],
  continue: [
    {
      id: 8,
      title: "JavaScript Advanced Concepts",
      progress: 65,
      category: "javascript",
      students: "23K+",
      rating: 4.7,
      image: "JavaScript",
      instructor: "Carlos Martinez",
      duration: "8 weeks",
      level: "Advanced",
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 9,
      title: "Database Design & SQL",
      progress: 40,
      category: "database",
      students: "31K+",
      rating: 4.6,
      image: "Database",
      instructor: "Rachel Green",
      duration: "6 weeks",
      level: "Intermediate",
      price: 129.99,
      discount: 12,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
  ],
  tools: [
    {
      id: 10,
      title: "Git & GitHub Mastery",
      category: "git",
      students: "67K+",
      rating: 4.8,
      image: "/api/placeholder/300/200",
      instructor: "Tom Wilson",
      duration: "4 weeks",
      level: "Beginner",
      price: 89.99,
      discount: 10,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 11,
      title: "Docker Containerization",
      category: "docker",
      students: "25K+",
      rating: 4.7,
      image: "/api/placeholder/300/200",
      instructor: "Anna Schmidt",
      duration: "6 weeks",
      level: "Intermediate",
      price: 119.99,
      discount: 15,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 12,
      title: "VS Code Power User",
      category: "vscode",
      students: "43K+",
      rating: 4.6,
      image: "/api/placeholder/300/200",
      instructor: "Mark Johnson",
      duration: "3 weeks",
      level: "Beginner",
      price: 69.99,
      discount: 5,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
  ],
  coding: [
    {
      id: 13,
      title: "C++ Programming Complete",
      category: "cpp",
      students: "54K+",
      rating: 4.8,
      image: "/api/placeholder/300/200",
      instructor: "Dr. Robert Kim",
      duration: "20 weeks",
      level: "Beginner",
      price: 199.99,
      discount: 20,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 14,
      title: "Java Enterprise Development",
      category: "java",
      students: "48K+",
      rating: 4.7,
      image: "/api/placeholder/300/200",
      instructor: "Jennifer Davis",
      duration: "18 weeks",
      level: "Intermediate",
      price: 179.99,
      discount: 18,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 15,
      title: "Python for Everyone",
      category: "python",
      students: "72K+",
      rating: 4.9,
      image: "/api/placeholder/300/200",
      instructor: "Michael Chen",
      duration: "16 weeks",
      level: "Beginner",
      price: 159.99,
      discount: 15,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 16,
      title: "C Programming Fundamentals",
      category: "c",
      students: "39K+",
      rating: 4.6,
      image: "/api/placeholder/300/200",
      instructor: "Sarah Johnson",
      duration: "14 weeks",
      level: "Beginner",
      price: 139.99,
      discount: 12,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
  ],
  aptitude: [
    {
      id: 17,
      title: "Quantitative Aptitude",
      category: "quant",
      students: "28K+",
      rating: 4.7,
      image: "/api/placeholder/300/200",
      instructor: "Dr. Priya Sharma",
      duration: "8 weeks",
      level: "Intermediate",
      price: 99.99,
      discount: 10,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 18,
      title: "Logical Reasoning",
      category: "reasoning",
      students: "35K+",
      rating: 4.8,
      image: "/api/placeholder/300/200",
      instructor: "Rahul Gupta",
      duration: "6 weeks",
      level: "Beginner",
      price: 79.99,
      discount: 5,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 19,
      title: "Verbal Ability",
      category: "verbal",
      students: "31K+",
      rating: 4.6,
      image: "/api/placeholder/300/200",
      instructor: "Meera Patel",
      duration: "10 weeks",
      level: "Intermediate",
      price: 89.99,
      discount: 12,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
  ],
  fullstack: [
    {
      id: 20,
      title: "MERN Stack Development",
      category: "mern",
      students: "43K+",
      rating: 4.9,
      image: "/api/placeholder/300/200",
      instructor: "Alex Thompson",
      duration: "24 weeks",
      level: "Advanced",
      price: 299.99,
      discount: 30,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 21,
      title: "MEAN Stack Complete",
      category: "mean",
      students: "26K+",
      rating: 4.7,
      image: "/api/placeholder/300/200",
      instructor: "Lisa Rodriguez",
      duration: "22 weeks",
      level: "Advanced",
      price: 279.99,
      discount: 25,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 22,
      title: "Django Full Stack",
      category: "django",
      students: "31K+",
      rating: 4.8,
      image: "/api/placeholder/300/200",
      instructor: "Chris Wilson",
      duration: "20 weeks",
      level: "Intermediate",
      price: 259.99,
      discount: 20,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
  ],
  subjects: [
    {
      id: 23,
      title: "Data Structures & Algorithms",
      category: "dsa",
      students: "58K+",
      rating: 4.9,
      image: "/api/placeholder/300/200",
      instructor: "Dr. Alan Turing",
      duration: "16 weeks",
      level: "Intermediate",
      price: 199.99,
      discount: 20,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 24,
      title: "Operating Systems",
      category: "os",
      students: "34K+",
      rating: 4.7,
      image: "/api/placeholder/300/200",
      instructor: "Prof. Ken Thompson",
      duration: "12 weeks",
      level: "Advanced",
      price: 179.99,
      discount: 18,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 25,
      title: "Computer Networks",
      category: "networks",
      students: "29K+",
      rating: 4.6,
      image: "/api/placeholder/300/200",
      instructor: "Vint Cerf",
      duration: "14 weeks",
      level: "Intermediate",
      price: 159.99,
      discount: 15,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
  ],
  interview: [
    {
      id: 26,
      title: "System Design Interview",
      category: "system",
      students: "37K+",
      rating: 4.8,
      image: "/api/placeholder/300/200",
      instructor: "Martin Fowler",
      duration: "10 weeks",
      level: "Advanced",
      price: 199.99,
      discount: 20,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 27,
      title: "Coding Interview Prep",
      category: "coding",
      students: "51K+",
      rating: 4.9,
      image: "/api/placeholder/300/200",
      instructor: "Gayle McDowell",
      duration: "12 weeks",
      level: "Intermediate",
      price: 179.99,
      discount: 18,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 28,
      title: "Behavioral Interviews",
      category: "behavioral",
      students: "23K+",
      rating: 4.7,
      image: "/api/placeholder/300/200",
      instructor: "Amy Cuddy",
      duration: "6 weeks",
      level: "Beginner",
      price: 159.99,
      discount: 15,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
  ],
  management: [
    {
      id: 29,
      title: "Product Management",
      category: "product",
      students: "32K+",
      rating: 4.8,
      image: "/api/placeholder/300/200",
      instructor: "Marty Cagan",
      duration: "14 weeks",
      level: "Intermediate",
      price: 199.99,
      discount: 20,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 30,
      title: "Agile & Scrum",
      category: "agile",
      students: "45K+",
      rating: 4.7,
      image: "/api/placeholder/300/200",
      instructor: "Jeff Sutherland",
      duration: "8 weeks",
      level: "Beginner",
      price: 179.99,
      discount: 18,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 5,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
    {
      id: 31,
      title: "Leadership Skills",
      category: "leadership",
      students: "38K+",
      rating: 4.9,
      image: "/api/placeholder/300/200",
      instructor: "Simon Sinek",
      duration: "10 weeks",
      level: "Intermediate",
      price: 159.99,
      discount: 15,
      courseDescription: `
      <h2>Master Cloud Computing with AWS</h2>
      <p>AWS (Amazon Web Services) is the leading cloud platform, powering businesses worldwide.
      This course covers the basics of cloud architecture, EC2, S3, Lambda, and networking.</p>
      <p>Perfect for beginners who want to build scalable applications and prepare for AWS certifications.</p>
      <ul>
      <li>Understand Cloud Fundamentals</li>
      <li>Deploy Applications on AWS</li>
      <li>Learn IAM, EC2, S3, and Lambda</li>
      </ul>
      `,
      isPublished: true,
      courseContent: [
        {
          chapterId: "chapter1",
          chapterOrder: 1,
          chapterTitle: "Getting Started with JavaScript",
          chapterContent: [
            {
              lectureId: "lecture1",
              lectureTitle: "What is JavaScript?",
              lectureDuration: 16,
              lectureUrl: "https://youtu.be/CBWnBi-awSA",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture2",
              lectureTitle: "Setting Up Your Environment",
              lectureDuration: 19,
              lectureUrl: "https://youtu.be/4l87c2aeB4I",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
        {
          chapterId: "chapter2",
          chapterOrder: 2,
          chapterTitle: "Variables and Data Types",
          chapterContent: [
            {
              lectureId: "lecture3",
              lectureTitle: "Understanding Variables",
              lectureDuration: 20,
              lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
              isPreviewFree: true,
              lectureOrder: 1,
            },
            {
              lectureId: "lecture4",
              lectureTitle: "Data Types in JavaScript",
              lectureDuration: 10,
              lectureUrl: "https://youtu.be/ufHT2WEkkC4",
              isPreviewFree: false,
              lectureOrder: 2,
            },
          ],
        },
      ],
      enrolledStudents: [
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      ],
      courseRatings: [
        {
          userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
          rating: 2,
          _id: "6773e37360cb0ab974342314",
        },
      ],
      createdAt: "2024-12-17T08:16:53.622Z",
      updatedAt: "2025-01-02T04:47:44.701Z",
      __v: 4,
    },
  ],
};
export default coursesData;
