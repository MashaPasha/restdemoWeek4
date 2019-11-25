module.exports = class Course {
    constructor(body) {
        this.courseNo = body.courseNo;
        this.title = body.title;
        this.description = body.description;
    }
}
