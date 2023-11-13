"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var html;
  return {
    setters: [],
    execute: function () {
      _export("html", html = "\n  <table class=\"table table-bordered\">\n    <thead class=\"result-header\">\n      <tr>\n        <th colspan=\"11\" about=\"v-s:GroupGenerator\" property=\"rdfs:label\"></th>\n      </tr>\n      <tr class=\"active\">\n        <th width=\"1%\"><input type=\"checkbox\" class=\"toggle-select-all\" /></th>\n        <th width=\"1%\">#</th>\n        <th width=\"1%\"><span class=\"glyphicon glyphicon-search\"></span></th>\n        <th class=\"orderby\" data-orderby=\"v-s:authClass\"><span about=\"v-s:authClass\" property=\"rdfs:label\"></span></th>\n        <th class=\"orderby\" data-orderby=\"v-s:authProperty\"><span about=\"v-s:authProperty\" property=\"rdfs:label\"></span></th>\n        <th class=\"orderby\" data-orderby=\"v-s:authFunction\"><span about=\"v-s:authFunction\" property=\"rdfs:label\"></span></th>\n        <th class=\"orderby\" data-orderby=\"v-s:authValue\"><span about=\"v-s:authValue\" property=\"rdfs:label\"></span></th>\n        <th><span about=\"v-s:Rights\" property=\"rdfs:label\"></span></th>\n        <th class=\"orderby\" data-orderby=\"v-s:creator\"><span about=\"v-s:creator\" property=\"rdfs:label\"></span></th>\n        <th class=\"orderby\" data-orderby=\"v-s:created\"><span about=\"v-s:created\" property=\"rdfs:label\"></span></th>\n      </tr>\n    </thead>\n    <tbody class=\"result-container\">\n      <tr>\n        <td><input type=\"checkbox\" class=\"toggle-select\" /></td>\n        <td class=\"serial-number\"></td>\n        <td><a href=\"#/@\" class=\"glyphicon glyphicon-search\"></a></td>\n        <td about=\"@\" rel=\"v-s:authClass\" data-template=\"v-ui:LabelTemplate\"></td>\n        <td about=\"@\" rel=\"v-s:authProperty\" data-template=\"v-ui:LabelTemplate\"></td>\n        <td about=\"@\" property=\"v-s:authFunction\"></td>\n        <td about=\"@\" property=\"v-s:authValue\"></td>\n        <td about=\"@\" data-template=\"v-s:RightsTemplate_inline\"></td>\n        <td about=\"@\" rel=\"v-s:creator\" data-template=\"v-ui:LabelTemplate\"></td>\n        <td about=\"@\" property=\"v-s:created\"></td>\n      </tr>\n    </tbody>\n  </table>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJodG1sIl0sInNvdXJjZXMiOlsiLi4vLi4vb250b2xvZ3kvZ2VuZXJpYy1mdW5jdGlvbi90ZW1wbGF0ZXMvdi1zX0dyb3VwR2VuZXJhdG9yUmVnaXN0cnlSZXN1bHRUZW1wbGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaHRtbCA9IGBcbiAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVyZWRcIj5cbiAgICA8dGhlYWQgY2xhc3M9XCJyZXN1bHQtaGVhZGVyXCI+XG4gICAgICA8dHI+XG4gICAgICAgIDx0aCBjb2xzcGFuPVwiMTFcIiBhYm91dD1cInYtczpHcm91cEdlbmVyYXRvclwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvdGg+XG4gICAgICA8L3RyPlxuICAgICAgPHRyIGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgIDx0aCB3aWR0aD1cIjElXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidG9nZ2xlLXNlbGVjdC1hbGxcIiAvPjwvdGg+XG4gICAgICAgIDx0aCB3aWR0aD1cIjElXCI+IzwvdGg+XG4gICAgICAgIDx0aCB3aWR0aD1cIjElXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICA8dGggY2xhc3M9XCJvcmRlcmJ5XCIgZGF0YS1vcmRlcmJ5PVwidi1zOmF1dGhDbGFzc1wiPjxzcGFuIGFib3V0PVwidi1zOmF1dGhDbGFzc1wiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICA8dGggY2xhc3M9XCJvcmRlcmJ5XCIgZGF0YS1vcmRlcmJ5PVwidi1zOmF1dGhQcm9wZXJ0eVwiPjxzcGFuIGFib3V0PVwidi1zOmF1dGhQcm9wZXJ0eVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICA8dGggY2xhc3M9XCJvcmRlcmJ5XCIgZGF0YS1vcmRlcmJ5PVwidi1zOmF1dGhGdW5jdGlvblwiPjxzcGFuIGFib3V0PVwidi1zOmF1dGhGdW5jdGlvblwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICA8dGggY2xhc3M9XCJvcmRlcmJ5XCIgZGF0YS1vcmRlcmJ5PVwidi1zOmF1dGhWYWx1ZVwiPjxzcGFuIGFib3V0PVwidi1zOmF1dGhWYWx1ZVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICA8dGg+PHNwYW4gYWJvdXQ9XCJ2LXM6UmlnaHRzXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9zcGFuPjwvdGg+XG4gICAgICAgIDx0aCBjbGFzcz1cIm9yZGVyYnlcIiBkYXRhLW9yZGVyYnk9XCJ2LXM6Y3JlYXRvclwiPjxzcGFuIGFib3V0PVwidi1zOmNyZWF0b3JcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+PC90aD5cbiAgICAgICAgPHRoIGNsYXNzPVwib3JkZXJieVwiIGRhdGEtb3JkZXJieT1cInYtczpjcmVhdGVkXCI+PHNwYW4gYWJvdXQ9XCJ2LXM6Y3JlYXRlZFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICAgIDx0Ym9keSBjbGFzcz1cInJlc3VsdC1jb250YWluZXJcIj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRvZ2dsZS1zZWxlY3RcIiAvPjwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cInNlcmlhbC1udW1iZXJcIj48L3RkPlxuICAgICAgICA8dGQ+PGEgaHJlZj1cIiMvQFwiIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L2E+PC90ZD5cbiAgICAgICAgPHRkIGFib3V0PVwiQFwiIHJlbD1cInYtczphdXRoQ2xhc3NcIiBkYXRhLXRlbXBsYXRlPVwidi11aTpMYWJlbFRlbXBsYXRlXCI+PC90ZD5cbiAgICAgICAgPHRkIGFib3V0PVwiQFwiIHJlbD1cInYtczphdXRoUHJvcGVydHlcIiBkYXRhLXRlbXBsYXRlPVwidi11aTpMYWJlbFRlbXBsYXRlXCI+PC90ZD5cbiAgICAgICAgPHRkIGFib3V0PVwiQFwiIHByb3BlcnR5PVwidi1zOmF1dGhGdW5jdGlvblwiPjwvdGQ+XG4gICAgICAgIDx0ZCBhYm91dD1cIkBcIiBwcm9wZXJ0eT1cInYtczphdXRoVmFsdWVcIj48L3RkPlxuICAgICAgICA8dGQgYWJvdXQ9XCJAXCIgZGF0YS10ZW1wbGF0ZT1cInYtczpSaWdodHNUZW1wbGF0ZV9pbmxpbmVcIj48L3RkPlxuICAgICAgICA8dGQgYWJvdXQ9XCJAXCIgcmVsPVwidi1zOmNyZWF0b3JcIiBkYXRhLXRlbXBsYXRlPVwidi11aTpMYWJlbFRlbXBsYXRlXCI+PC90ZD5cbiAgICAgICAgPHRkIGFib3V0PVwiQFwiIHByb3BlcnR5PVwidi1zOmNyZWF0ZWRcIj48L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuICA8L3RhYmxlPlxuYDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3NCQUFhQSxJQUFJO0lBQUE7RUFBQTtBQUFBIn0=