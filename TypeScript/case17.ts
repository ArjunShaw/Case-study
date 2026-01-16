// Base abstract class
abstract class Content {
  public readonly title: string;
  public readonly author: string;
  private published: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  protected isPublished(): boolean {
    return this.published;
  }

  public publishIt(): void {
    this.published = true;
  }

  public getContent(): string {
    return `${this.title} by ${this.author}`;
  }

  public abstract getType(): string;
}


class Assignment extends Content {
  private dueDate: Date | string = "No due date";

  protected setDueDate(dueDate: Date): void {
    this.dueDate = dueDate;
  }

  protected getDueDate(): Date | string {
    return this.dueDate;
  }

  public getType(): string {
    return "Assignment";
  }
}

class Instructor extends Assignment {

  constructor(title: string, author: string) {
    super(title, author); 
  }

  public setDate(dt: Date | null): void {
    if (!this.isPublished() && dt !== null) {
      super.setDueDate(dt);
    }
  }

  public publish(): void {
    super.publishIt();
  }

  public getCont(): string {
    return `${super.getContent()} and the assignment due date is ${super.getDueDate()}`;
  }

  public getType(): string {
    return super.getType();
  }
}

let instructor = new Instructor("1984", "George");

instructor.setDate(new Date("2026-01-30"));
instructor.publish();

console.log(instructor.getCont());
console.log(instructor.getType());
