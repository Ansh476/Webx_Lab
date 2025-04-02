class Student1 {
	name: string;
	marks: number[];
 
    constructor(name: string, marks: number[]) {
    	this.name = name;
    	this.marks = marks;
	}
 
	getTotalMarks(): number {
    	return this.marks.reduce((sum, mark) => sum + mark, 0);
	}
 
    getAverageMarks(): number {
    	return this.getTotalMarks() / this.marks.length;
	}
 
	getResult(): string {
    	return this.getAverageMarks() >= 40 ? "Passed" : "Failed";
	}
 
	displayResult(): void {
        console.log(`Student Name: ${this.name}`);
        console.log(`Average Marks: ${this.getAverageMarks().toFixed(2)}`);
        console.log(`Result: ${this.getResult()}`);
	}
}
 
const student2 = new Student1 ("AnshSarfare", [45, 40, 50]);
student2.displayResult();
