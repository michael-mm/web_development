// var course = new Object()
  // course.title = "JavaScript Essential Training";
  // course.instructor = "Morten Rand";
  // course.level = 1;
  // course.published = true;
  // course.view = 0;

var course = {
  title: "JavaScript Essential Training",
  instructor: "Morten Rand",
  level: 1,
  published: true,
  views: 0,
  updateViews: function() {
    return course.views;
  }
}

console.log(course.level);
console.log(course.updateViews());
