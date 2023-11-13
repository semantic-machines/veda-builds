"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var html;
  return {
    setters: [],
    execute: function () {
      _export("html", html = "\n  <div class=\"container sheet\">\n    <h3><span about=\"@\" property=\"rdfs:label\"></span></h3>\n    <span about=\"@\" data-template=\"v-ui:RabbitHole\" data-properties=\"v-s:parentUnit\"></span>\n    <hr />\n    <div>\n      <div class=\"-view edit search\">\n        <em about=\"rdfs:label\" property=\"rdfs:label\"></em>\n        <div property=\"rdfs:label\" class=\"view -edit -search\"></div>\n        <veda-control data-type=\"string\" property=\"rdfs:label\" class=\"-view edit search\"></veda-control>\n        <hr class=\"view -edit -search\" />\n      </div>\n      <em about=\"v-s:parentUnit\" property=\"rdfs:label\"></em>\n      <div rel=\"v-s:parentUnit\" class=\"view -edit -search\" data-template=\"v-ui:LabelLinkTemplate\"></div>\n      <veda-control data-type=\"link\" rel=\"v-s:parentUnit\" class=\"-view edit search fulltext\"></veda-control>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <em about=\"v-s:hasChief\" property=\"rdfs:label\"></em>\n          <div rel=\"v-s:hasChief\" class=\"view -edit search\" data-template=\"v-ui:LabelTemplate\"></div>\n          <veda-control data-type=\"link\" rel=\"v-s:hasChief\" class=\"-view edit search fulltext\"></veda-control>\n        </div>\n        <div class=\"col-sm-6\">\n          <em about=\"v-s:hasFunctionalChief\" property=\"rdfs:label\"></em>\n          <div rel=\"v-s:hasFunctionalChief\" class=\"view -edit search\" data-template=\"v-ui:LabelTemplate\"></div>\n          <veda-control data-type=\"link\" rel=\"v-s:hasFunctionalChief\" class=\"-view edit search fulltext\"></veda-control>\n        </div>\n      </div>\n    </div>\n    <br />\n    <!-- BUTTONS -->\n    <div class=\"actions\">\n      <span about=\"@\" data-template=\"v-ui:StandardButtonsTemplate\" data-embedded=\"true\" data-buttons=\"edit save cancel delete\"></span>\n    </div>\n  </div>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJodG1sIl0sInNvdXJjZXMiOlsiLi4vLi4vb250b2xvZ3kvZ2VuZXJpYy1mdW5jdGlvbi90ZW1wbGF0ZXMvdi1zX09yZ2FuaXphdGlvblVuaXRUZW1wbGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaHRtbCA9IGBcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBzaGVldFwiPlxuICAgIDxoMz48c3BhbiBhYm91dD1cIkBcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+PC9oMz5cbiAgICA8c3BhbiBhYm91dD1cIkBcIiBkYXRhLXRlbXBsYXRlPVwidi11aTpSYWJiaXRIb2xlXCIgZGF0YS1wcm9wZXJ0aWVzPVwidi1zOnBhcmVudFVuaXRcIj48L3NwYW4+XG4gICAgPGhyIC8+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCItdmlldyBlZGl0IHNlYXJjaFwiPlxuICAgICAgICA8ZW0gYWJvdXQ9XCJyZGZzOmxhYmVsXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9lbT5cbiAgICAgICAgPGRpdiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIiBjbGFzcz1cInZpZXcgLWVkaXQgLXNlYXJjaFwiPjwvZGl2PlxuICAgICAgICA8dmVkYS1jb250cm9sIGRhdGEtdHlwZT1cInN0cmluZ1wiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiIGNsYXNzPVwiLXZpZXcgZWRpdCBzZWFyY2hcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgICAgPGhyIGNsYXNzPVwidmlldyAtZWRpdCAtc2VhcmNoXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGVtIGFib3V0PVwidi1zOnBhcmVudFVuaXRcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L2VtPlxuICAgICAgPGRpdiByZWw9XCJ2LXM6cGFyZW50VW5pdFwiIGNsYXNzPVwidmlldyAtZWRpdCAtc2VhcmNoXCIgZGF0YS10ZW1wbGF0ZT1cInYtdWk6TGFiZWxMaW5rVGVtcGxhdGVcIj48L2Rpdj5cbiAgICAgIDx2ZWRhLWNvbnRyb2wgZGF0YS10eXBlPVwibGlua1wiIHJlbD1cInYtczpwYXJlbnRVbml0XCIgY2xhc3M9XCItdmlldyBlZGl0IHNlYXJjaCBmdWxsdGV4dFwiPjwvdmVkYS1jb250cm9sPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICA8ZW0gYWJvdXQ9XCJ2LXM6aGFzQ2hpZWZcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L2VtPlxuICAgICAgICAgIDxkaXYgcmVsPVwidi1zOmhhc0NoaWVmXCIgY2xhc3M9XCJ2aWV3IC1lZGl0IHNlYXJjaFwiIGRhdGEtdGVtcGxhdGU9XCJ2LXVpOkxhYmVsVGVtcGxhdGVcIj48L2Rpdj5cbiAgICAgICAgICA8dmVkYS1jb250cm9sIGRhdGEtdHlwZT1cImxpbmtcIiByZWw9XCJ2LXM6aGFzQ2hpZWZcIiBjbGFzcz1cIi12aWV3IGVkaXQgc2VhcmNoIGZ1bGx0ZXh0XCI+PC92ZWRhLWNvbnRyb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICA8ZW0gYWJvdXQ9XCJ2LXM6aGFzRnVuY3Rpb25hbENoaWVmXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9lbT5cbiAgICAgICAgICA8ZGl2IHJlbD1cInYtczpoYXNGdW5jdGlvbmFsQ2hpZWZcIiBjbGFzcz1cInZpZXcgLWVkaXQgc2VhcmNoXCIgZGF0YS10ZW1wbGF0ZT1cInYtdWk6TGFiZWxUZW1wbGF0ZVwiPjwvZGl2PlxuICAgICAgICAgIDx2ZWRhLWNvbnRyb2wgZGF0YS10eXBlPVwibGlua1wiIHJlbD1cInYtczpoYXNGdW5jdGlvbmFsQ2hpZWZcIiBjbGFzcz1cIi12aWV3IGVkaXQgc2VhcmNoIGZ1bGx0ZXh0XCI+PC92ZWRhLWNvbnRyb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGJyIC8+XG4gICAgPCEtLSBCVVRUT05TIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XG4gICAgICA8c3BhbiBhYm91dD1cIkBcIiBkYXRhLXRlbXBsYXRlPVwidi11aTpTdGFuZGFyZEJ1dHRvbnNUZW1wbGF0ZVwiIGRhdGEtZW1iZWRkZWQ9XCJ0cnVlXCIgZGF0YS1idXR0b25zPVwiZWRpdCBzYXZlIGNhbmNlbCBkZWxldGVcIj48L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3NCQUFhQSxJQUFJO0lBQUE7RUFBQTtBQUFBIn0=