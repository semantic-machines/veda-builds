"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var html;
  return {
    setters: [],
    execute: function () {
      _export("html", html = "\n  <div>\n    <hr class=\"no-margin\" />\n    <table class=\"table table-striped table-condensed\">\n      <thead>\n        <tr>\n          <th width=\"20px\">#</th>\n          <th width=\"10px\"><span class=\"glyphicon glyphicon-search\"></span></th>\n          <th width=\"15%\" data-orderby=\"v-wf:from.rdfs:label\"><span about=\"v-wf:from\" property=\"rdfs:label\"></span></th>\n          <th width=\"15%\" data-orderby=\"v-wf:to.rdfs:label\"><span about=\"v-wf:to\" property=\"rdfs:label\"></span></th>\n          <th width=\"30px\" class=\"orderby\" data-orderby=\"v-wf:read\"></th>\n          <th data-orderby=\"rdfs:label\"><span about=\"v-s:description\" property=\"rdfs:label\"></span></th>\n          <th data-orderby=\"v-wf:onDocument.rdfs:label\"><span about=\"v-ft:DocumentBundle\" property=\"rdfs:label\"></span></th>\n          <th width=\"20px\"></th>\n          <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:created\"><span about=\"v-s:created\" property=\"rdfs:label\"></span></th>\n          <th width=\"10%\" class=\"orderby\" data-orderby=\"v-wf:dateGiven\"><span about=\"v-wf:dateGiven\" property=\"rdfs:label\"></span></th>\n        </tr>\n      </thead>\n      <tbody class=\"result-container\" data-template=\"v-ft:TaskResultTemplate_task\"></tbody>\n    </table>\n  </div>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJodG1sIl0sInNvdXJjZXMiOlsiLi4vLi4vb250b2xvZ3kvZ2VuZXJpYy1mdW5jdGlvbi90ZW1wbGF0ZXMvdi1mdF9UYXNrUmVzdWx0VGVtcGxhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGh0bWwgPSBgXG4gIDxkaXY+XG4gICAgPGhyIGNsYXNzPVwibm8tbWFyZ2luXCIgLz5cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWNvbmRlbnNlZFwiPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIHdpZHRoPVwiMjBweFwiPiM8L3RoPlxuICAgICAgICAgIDx0aCB3aWR0aD1cIjEwcHhcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPjwvdGg+XG4gICAgICAgICAgPHRoIHdpZHRoPVwiMTUlXCIgZGF0YS1vcmRlcmJ5PVwidi13Zjpmcm9tLnJkZnM6bGFiZWxcIj48c3BhbiBhYm91dD1cInYtd2Y6ZnJvbVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICAgIDx0aCB3aWR0aD1cIjE1JVwiIGRhdGEtb3JkZXJieT1cInYtd2Y6dG8ucmRmczpsYWJlbFwiPjxzcGFuIGFib3V0PVwidi13Zjp0b1wiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICAgIDx0aCB3aWR0aD1cIjMwcHhcIiBjbGFzcz1cIm9yZGVyYnlcIiBkYXRhLW9yZGVyYnk9XCJ2LXdmOnJlYWRcIj48L3RoPlxuICAgICAgICAgIDx0aCBkYXRhLW9yZGVyYnk9XCJyZGZzOmxhYmVsXCI+PHNwYW4gYWJvdXQ9XCJ2LXM6ZGVzY3JpcHRpb25cIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+PC90aD5cbiAgICAgICAgICA8dGggZGF0YS1vcmRlcmJ5PVwidi13ZjpvbkRvY3VtZW50LnJkZnM6bGFiZWxcIj48c3BhbiBhYm91dD1cInYtZnQ6RG9jdW1lbnRCdW5kbGVcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+PC90aD5cbiAgICAgICAgICA8dGggd2lkdGg9XCIyMHB4XCI+PC90aD5cbiAgICAgICAgICA8dGggd2lkdGg9XCIxMCVcIiBjbGFzcz1cIm9yZGVyYnlcIiBkYXRhLW9yZGVyYnk9XCJ2LXM6Y3JlYXRlZFwiPjxzcGFuIGFib3V0PVwidi1zOmNyZWF0ZWRcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+PC90aD5cbiAgICAgICAgICA8dGggd2lkdGg9XCIxMCVcIiBjbGFzcz1cIm9yZGVyYnlcIiBkYXRhLW9yZGVyYnk9XCJ2LXdmOmRhdGVHaXZlblwiPjxzcGFuIGFib3V0PVwidi13ZjpkYXRlR2l2ZW5cIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+PC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHkgY2xhc3M9XCJyZXN1bHQtY29udGFpbmVyXCIgZGF0YS10ZW1wbGF0ZT1cInYtZnQ6VGFza1Jlc3VsdFRlbXBsYXRlX3Rhc2tcIj48L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gIDwvZGl2PlxuYDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3NCQUFhQSxJQUFJO0lBQUE7RUFBQTtBQUFBIn0=