var Student = /** @class */ (function () {
    function Student(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    Student.prototype.getTotalMarks = function () {
        return this.marks.reduce(function (sum, mark) { return sum + mark; }, 0);
    };
    Student.prototype.getAverageMarks = function () {
        return this.getTotalMarks() / this.marks.length;
    };
    Student.prototype.getResult = function () {
        return this.getAverageMarks() >= 40 ? "Passed" : "Failed";
    };
    Student.prototype.displayResult = function () {
        console.log("Student Name: ".concat(this.name));
        console.log("Average Marks: ".concat(this.getAverageMarks().toFixed(2)));
        console.log("Result: ".concat(this.getResult()));
    };
    return Student;
}());
var student1 = new Student("Ansh Sarfare", [45, 40, 50]);
student1.displayResult();
