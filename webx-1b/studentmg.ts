class Student {
    constructor(public name: string, public studentId: number, public grade: string) {}
 
	getDetails(): string {
    	return `Student Name: ${this.name}, ID: ${this.studentId}, Grade: ${this.grade}`;
	}
}
class GraduateStudent extends Student {
    constructor(name: string, studentId: number, grade: string, public thesisTopic: string) {
    	super(name, studentId, grade);
	}
    getThesisTopic(): string {
    	return `Thesis Topic: ${this.thesisTopic}`;
	}
	override getDetails(): string {
    	return `${super.getDetails()}, Thesis Topic: ${this.thesisTopic}`;
	}
}
class LibraryAccount {
    constructor(public accountId: number, public booksIssued: number) {}
 
    getLibraryInfo(): string {
    	return `Library Account ID: ${this.accountId}, Books Issued: ${this.booksIssued}`;
	}
}
class StudentWithLibrary {
    constructor(public student: Student, public libraryAccount: LibraryAccount) {}
 
	getFullInfo(): string {
    	return `${this.student.getDetails()}\n${this.libraryAccount.getLibraryInfo()}`;
	}
}
var student1 = new Student("Ansh", 149, "A");
var gradStudent1 = new GraduateStudent("John", 134, "A+", "AI & ML");
var libraryAcc1 = new LibraryAccount(4221, 4);

const studentWithLibrary = new StudentWithLibrary(student1, libraryAcc1);

console.log(student1.getDetails()); 
console.log(gradStudent1.getDetails()); 
console.log(gradStudent1.getThesisTopic()); 
console.log(libraryAcc1.getLibraryInfo()); 
console.log(studentWithLibrary.getFullInfo());
