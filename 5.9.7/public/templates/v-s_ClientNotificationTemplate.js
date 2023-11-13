"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var html;
  return {
    setters: [],
    execute: function () {
      _export("html", html = "\n  <div class=\"container sheet\">\n    <style scoped>\n      tbody {\n        counter-reset: rowNumber;\n      }\n      tbody tr {\n        counter-increment: rowNumber;\n      }\n      tbody tr td:first-child::before {\n        content: counter(rowNumber);\n      }\n    </style>\n    <div class=\"clearfix\">\n      <h2 class=\"pull-left\">\n        <span about=\"@\" rel=\"rdf:type\" data-template=\"v-ui:LabelTemplate\"></span>\n        <small about=\"@\" property=\"rdfs:label\"></small>\n      </h2>\n      <span class=\"pull-right text-muted\" property=\"@\"></span>\n    </div>\n    <table class=\"table\">\n      <thead class=\"result-header\">\n        <tr>\n          <th width=\"1%\">#</th>\n          <th width=\"85%\" class=\"orderby\" data-orderby=\"v-s:title\"><span about=\"v-s:title\" property=\"rdfs:label\"></span></th>\n          <th width=\"13%\" class=\"orderby\" data-orderby=\"v-s:created\"><span about=\"v-s:created\" property=\"rdfs:label\"></span></th>\n        </tr>\n      </thead>\n      <tbody class=\"result-container\" rel=\"rdf:value\">\n        <tr>\n          <td class=\"serial-number\"></td>\n          <td>\n            <div about=\"@\" property=\"v-s:title\"></div>\n            <small about=\"@\" property=\"v-s:description\"></small>\n            <a href=\"#/@\"><small about=\"v-s:More\" property=\"rdfs:label\"></small></a>\n          </td>\n          <td about=\"@\" property=\"v-s:created\"></td>\n        </tr>\n      </tbody>\n    </table>\n    <br />\n    <div class=\"actions\">\n      <span about=\"@\" data-template=\"v-ui:StandardButtonsTemplate\" data-embedded=\"true\" data-buttons=\"edit save cancel\"></span>\n    </div>\n  </div>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJodG1sIl0sInNvdXJjZXMiOlsiLi4vLi4vb250b2xvZ3kvZ2VuZXJpYy1mdW5jdGlvbi90ZW1wbGF0ZXMvdi1zX0NsaWVudE5vdGlmaWNhdGlvblRlbXBsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBodG1sID0gYFxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHNoZWV0XCI+XG4gICAgPHN0eWxlIHNjb3BlZD5cbiAgICAgIHRib2R5IHtcbiAgICAgICAgY291bnRlci1yZXNldDogcm93TnVtYmVyO1xuICAgICAgfVxuICAgICAgdGJvZHkgdHIge1xuICAgICAgICBjb3VudGVyLWluY3JlbWVudDogcm93TnVtYmVyO1xuICAgICAgfVxuICAgICAgdGJvZHkgdHIgdGQ6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IGNvdW50ZXIocm93TnVtYmVyKTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgPGgyIGNsYXNzPVwicHVsbC1sZWZ0XCI+XG4gICAgICAgIDxzcGFuIGFib3V0PVwiQFwiIHJlbD1cInJkZjp0eXBlXCIgZGF0YS10ZW1wbGF0ZT1cInYtdWk6TGFiZWxUZW1wbGF0ZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNtYWxsIGFib3V0PVwiQFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc21hbGw+XG4gICAgICA8L2gyPlxuICAgICAgPHNwYW4gY2xhc3M9XCJwdWxsLXJpZ2h0IHRleHQtbXV0ZWRcIiBwcm9wZXJ0eT1cIkBcIj48L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICAgIDx0aGVhZCBjbGFzcz1cInJlc3VsdC1oZWFkZXJcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aCB3aWR0aD1cIjElXCI+IzwvdGg+XG4gICAgICAgICAgPHRoIHdpZHRoPVwiODUlXCIgY2xhc3M9XCJvcmRlcmJ5XCIgZGF0YS1vcmRlcmJ5PVwidi1zOnRpdGxlXCI+PHNwYW4gYWJvdXQ9XCJ2LXM6dGl0bGVcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+PC90aD5cbiAgICAgICAgICA8dGggd2lkdGg9XCIxMyVcIiBjbGFzcz1cIm9yZGVyYnlcIiBkYXRhLW9yZGVyYnk9XCJ2LXM6Y3JlYXRlZFwiPjxzcGFuIGFib3V0PVwidi1zOmNyZWF0ZWRcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+PC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHkgY2xhc3M9XCJyZXN1bHQtY29udGFpbmVyXCIgcmVsPVwicmRmOnZhbHVlXCI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJzZXJpYWwtbnVtYmVyXCI+PC90ZD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8ZGl2IGFib3V0PVwiQFwiIHByb3BlcnR5PVwidi1zOnRpdGxlXCI+PC9kaXY+XG4gICAgICAgICAgICA8c21hbGwgYWJvdXQ9XCJAXCIgcHJvcGVydHk9XCJ2LXM6ZGVzY3JpcHRpb25cIj48L3NtYWxsPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiMvQFwiPjxzbWFsbCBhYm91dD1cInYtczpNb3JlXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9zbWFsbD48L2E+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgYWJvdXQ9XCJAXCIgcHJvcGVydHk9XCJ2LXM6Y3JlYXRlZFwiPjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICAgPGJyIC8+XG4gICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cbiAgICAgIDxzcGFuIGFib3V0PVwiQFwiIGRhdGEtdGVtcGxhdGU9XCJ2LXVpOlN0YW5kYXJkQnV0dG9uc1RlbXBsYXRlXCIgZGF0YS1lbWJlZGRlZD1cInRydWVcIiBkYXRhLWJ1dHRvbnM9XCJlZGl0IHNhdmUgY2FuY2VsXCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztzQkFBYUEsSUFBSTtJQUFBO0VBQUE7QUFBQSJ9