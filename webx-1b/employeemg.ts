interface Employee {
    name: string;
    id: number;
    role: string;
    getDetails(): string;
}

class Manager implements Employee {
    constructor(public name: string, public id: number, public role: string, public department: string) {}
    getDetails(): string {
        return `Manager Name: ${this.name}, ID: ${this.id}, Role: ${this.role}, Department: ${this.department}`;
    }
}

class Developer implements Employee {
    constructor(public name: string, public id: number, public role: string, public programmingLanguages: string[]) {}
    getDetails(): string {
        return `Developer Name: ${this.name}, ID: ${this.id}, Role: ${this.role}, Programming Languages: ${this.programmingLanguages.join(", ")}`;
    }
}

const manager1 = new Manager("Dinesh", 203, "Manager", "HR");
const developer1 = new Developer("Ansh", 304, "Developer", ["TypeScript", "JavaScript", "Java","Python","C"]);

console.log(manager1.getDetails());
console.log(developer1.getDetails());
