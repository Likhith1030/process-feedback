import React from 'react'
import Tools from './Tools'

const ToolsCombined = () => {
  const teacherTools = [
  {
    title: "Editor for Your Students",
    points: ["Takes two minutes", "Use it for entire term"],
    button: "About Editors"
  },
  {
    title: "Create Assignments",
    points: ["Teacher dashboard", "Automatic process feedback"],
    button: "About Assignments"
  },
  {
    title: "Google Docs Extension",
    points: ["Easy to install", "No need to preinstall"],
    button: "About Extension"
  },
  {
    title: "Extension for LMS",
    points: ["Works in discussion boards", "Canvas, D2L, etc."],
    button: "About Extension"
  }
]
const studentTools = [
  {
    title: "Online Document Editor",
    points: ["No account needed", "No monitoring"],
    button: "Start Writing"
  },
  {
    title: "Online Compiler",
    points: ["AI explains errors", "Supports Python, Java, C++, and more"],
    button: "Start Coding"
  },
  {
    title: "Google Docs Extension",
    points: ["Easy to install", "No need to preinstall"],
    button: "Install"
  },
  {
    title: "Process Feedback Extension",
    points: ["Runs locally", "Student-centered"],
    button: "Install"
  }
]
  return (
    <>
    <Tools
  title="Our Tools for Teachers"
  description="Ask students to submit their writing process reports or complete a self-reflection assignment. For large classes, the teacher dashboard summarizes all student writing processes in one place."
  tools={teacherTools}
  theme="green"
    />

    <Tools
  title="Our Tools for Students"
  description="Process Feedback works for writing, coding, Google Docs, Canvas, and more. It shows typing time, breaks, and other writing-process data so students can reflect on how they worked."
  tools={studentTools}
  theme="blue"
    />
    </>
  )
}

export default ToolsCombined