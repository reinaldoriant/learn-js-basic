/**
 * Represents employee attendance and salary calculation data.
 *
 * This class stores clock-in and clock-out times,
 * converts time to decimal format, and calculates salary
 * based on total working hours.
 */

class EmployeeData {
    private clockIn: number[] = []
    private clockOut: number[] = []

    constructor(
        public name: string,
        public jobRole: string,
        public department: string
    ) {}

    introduce(): string {
        return `The employee's name is ${this.name}, their job role is ${this.jobRole}, and they are from the ${this.department} department.`;
    }

    recordCheckIn(time: string){
         const newTime = this.timeToDecimal(time);
        this.clockIn.push(newTime);
    }

    recordCheckOut(time: string){
        const newTime = this.timeToDecimal(time);
        this.clockOut.push(newTime);
    }

    calculateSalary(rate: number): number{
        let tempTotal: number = 0
        if (this.clockIn.length !== this.clockOut.length) {
            console.error("difference time");
            return 0;
        }

        this.clockIn.forEach((time, index) => {
            let calculation = this.clockOut[index] - time;
            tempTotal += calculation
        })
        return tempTotal * rate;
    }

    private timeToDecimal(time: string): number {
        const [hours, minutes] = time.split(":").map( str => parseInt(str) )
        return hours + (minutes/60);
    }
}

const data = new EmployeeData("aldo", "software engineer", "marketplace")
const introduction = data.introduce();
console.log(`${introduction}`);
data.recordCheckIn("09:00");
data.recordCheckOut("17:00");
let calculateSalary = data.calculateSalary(10000);
console.log(`Salary : ${calculateSalary}`);