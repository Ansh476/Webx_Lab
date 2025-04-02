const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/IT_Dept_Students", {
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Define Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    roll_no: Number,
    class_name: String
});

const Student = mongoose.model("Student", studentSchema);

app.get("/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

app.get("/students/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ error: "Student not found" });
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: "Invalid ID format" });
    }
});

app.get("/students/class/:className", async (req, res) => {
    const students = await Student.find({ class_name: req.params.className });
    res.json(students);
});

app.get("/students/roll/:rollNo", async (req, res) => {
    const student = await Student.findOne({ roll_no: req.params.rollNo });
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json(student);
});

app.post("/students", async (req, res) => {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.json({ message: "Student Added", student: newStudent });
});

app.put("/students/:id", async (req, res) => {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, { roll_no: req.body.roll_no }, { new: true });
    if (!updatedStudent) return res.status(404).json({ error: "Student not found" });
    res.json({ message: "Roll No Updated", student: updatedStudent });
});

app.delete("/students/:id", async (req, res) => {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) return res.status(404).json({ error: "Student not found" });
    res.json({ message: "Student Deleted" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
