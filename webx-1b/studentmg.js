var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name, studentId, grade) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
    }
    Student.prototype.getDetails = function () {
        return "Student Name: ".concat(this.name, ", ID: ").concat(this.studentId, ", Grade: ").concat(this.grade);
    };
    return Student;
}());
var GraduateStudent = /** @class */ (function (_super) {
    __extends(GraduateStudent, _super);
    function GraduateStudent(name, studentId, grade, thesisTopic) {
        var _this = _super.call(this, name, studentId, grade) || this;
        _this.thesisTopic = thesisTopic;
        return _this;
    }
    GraduateStudent.prototype.getThesisTopic = function () {
        return "Thesis Topic: ".concat(this.thesisTopic);
    };
    GraduateStudent.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), ", Thesis Topic: ").concat(this.thesisTopic);
    };
    return GraduateStudent;
}(Student));
var LibraryAccount = /** @class */ (function () {
    function LibraryAccount(accountId, booksIssued) {
        this.accountId = accountId;
        this.booksIssued = booksIssued;
    }
    LibraryAccount.prototype.getLibraryInfo = function () {
        return "Library Account ID: ".concat(this.accountId, ", Books Issued: ").concat(this.booksIssued);
    };
    return LibraryAccount;
}());
var StudentWithLibrary = /** @class */ (function () {
    function StudentWithLibrary(student, libraryAccount) {
        this.student = student;
        this.libraryAccount = libraryAccount;
    }
    StudentWithLibrary.prototype.getFullInfo = function () {
        return "".concat(this.student.getDetails(), "\n").concat(this.libraryAccount.getLibraryInfo());
    };
    return StudentWithLibrary;
}());
var student1 = new Student("Ansh", 149, "A");
var gradStudent1 = new GraduateStudent("John", 134, "A+", "AI & ML");
var libraryAcc1 = new LibraryAccount(4221, 4);
var studentWithLibrary = new StudentWithLibrary(student1, libraryAcc1);
console.log(student1.getDetails());
console.log(gradStudent1.getDetails());
console.log(gradStudent1.getThesisTopic());
console.log(libraryAcc1.getLibraryInfo());
console.log(studentWithLibrary.getFullInfo());
