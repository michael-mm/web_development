function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function() {
      return ++this.views;
    };
}

var courses = [
  new Course("JavaScript Essential", "Morten Rand", 1, true, 0),
  new Course("Up and Running with EcmapScript 6", "Eve Porcello", 1, true, 45)
];

console.log(courses);
console.log(courses[1].instructor); // Eve Porcello
console.log(courses[1].updateViews()); // 46
