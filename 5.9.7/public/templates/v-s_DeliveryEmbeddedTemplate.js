"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var html;
  return {
    setters: [],
    execute: function () {
      _export("html", html = "\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">\n        <span about=\"@\" data-template=\"v-ui:IconModalTemplate\"></span>\n        <span about=\"v-s:Delivery\" property=\"rdfs:label\"></span>\n      </h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <em about=\"v-s:date\" property=\"rdfs:label\"></em>\n          <div property=\"v-s:date\" class=\"view -edit search\"></div>\n          <veda-control property=\"v-s:date\" data-type=\"date\" class=\"-view edit search\"></veda-control>\n        </div>\n        <div class=\"col-md-3\">\n          <em about=\"v-s:deliverBy\" property=\"rdfs:label\"></em>\n          <div rel=\"v-s:deliverBy\" class=\"view -edit search\" data-template=\"v-ui:LabelTemplate\"></div>\n          <veda-control data-type=\"link\" rel=\"v-s:deliverBy\" class=\"-view edit search fulltext dropdown\"></veda-control>\n        </div>\n        <div class=\"col-md-6\">\n          <em about=\"rdfs:comment\" property=\"rdfs:label\"></em>\n          <div property=\"rdfs:comment\" class=\"view -edit -search\"></div>\n          <veda-control property=\"rdfs:comment\" data-type=\"text\" class=\"-view edit search\"></veda-control>\n        </div>\n      </div>\n    </div>\n  </div>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJodG1sIl0sInNvdXJjZXMiOlsiLi4vLi4vb250b2xvZ3kvZ2VuZXJpYy1hcHBsaWNhdGlvbi9jb3JyZXNwb25kZW5jZS90ZW1wbGF0ZXMvdi1zX0RlbGl2ZXJ5RW1iZWRkZWRUZW1wbGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaHRtbCA9IGBcbiAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxuICAgICAgPGgzIGNsYXNzPVwicGFuZWwtdGl0bGVcIj5cbiAgICAgICAgPHNwYW4gYWJvdXQ9XCJAXCIgZGF0YS10ZW1wbGF0ZT1cInYtdWk6SWNvbk1vZGFsVGVtcGxhdGVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGFib3V0PVwidi1zOkRlbGl2ZXJ5XCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9zcGFuPlxuICAgICAgPC9oMz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cbiAgICAgICAgICA8ZW0gYWJvdXQ9XCJ2LXM6ZGF0ZVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvZW0+XG4gICAgICAgICAgPGRpdiBwcm9wZXJ0eT1cInYtczpkYXRlXCIgY2xhc3M9XCJ2aWV3IC1lZGl0IHNlYXJjaFwiPjwvZGl2PlxuICAgICAgICAgIDx2ZWRhLWNvbnRyb2wgcHJvcGVydHk9XCJ2LXM6ZGF0ZVwiIGRhdGEtdHlwZT1cImRhdGVcIiBjbGFzcz1cIi12aWV3IGVkaXQgc2VhcmNoXCI+PC92ZWRhLWNvbnRyb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cbiAgICAgICAgICA8ZW0gYWJvdXQ9XCJ2LXM6ZGVsaXZlckJ5XCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9lbT5cbiAgICAgICAgICA8ZGl2IHJlbD1cInYtczpkZWxpdmVyQnlcIiBjbGFzcz1cInZpZXcgLWVkaXQgc2VhcmNoXCIgZGF0YS10ZW1wbGF0ZT1cInYtdWk6TGFiZWxUZW1wbGF0ZVwiPjwvZGl2PlxuICAgICAgICAgIDx2ZWRhLWNvbnRyb2wgZGF0YS10eXBlPVwibGlua1wiIHJlbD1cInYtczpkZWxpdmVyQnlcIiBjbGFzcz1cIi12aWV3IGVkaXQgc2VhcmNoIGZ1bGx0ZXh0IGRyb3Bkb3duXCI+PC92ZWRhLWNvbnRyb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICA8ZW0gYWJvdXQ9XCJyZGZzOmNvbW1lbnRcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L2VtPlxuICAgICAgICAgIDxkaXYgcHJvcGVydHk9XCJyZGZzOmNvbW1lbnRcIiBjbGFzcz1cInZpZXcgLWVkaXQgLXNlYXJjaFwiPjwvZGl2PlxuICAgICAgICAgIDx2ZWRhLWNvbnRyb2wgcHJvcGVydHk9XCJyZGZzOmNvbW1lbnRcIiBkYXRhLXR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCItdmlldyBlZGl0IHNlYXJjaFwiPjwvdmVkYS1jb250cm9sPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztzQkFBYUEsSUFBSTtJQUFBO0VBQUE7QUFBQSJ9