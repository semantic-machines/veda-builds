"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var html;
  return {
    setters: [],
    execute: function () {
      _export("html", html = "\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <em about=\"v-s:hasCertificationDocumentType\" property=\"rdfs:label\"></em>\n          <veda-control rel=\"v-s:hasCertificationDocumentType\" data-type=\"radio\" class=\"-view edit search\"></veda-control>\n          <div rel=\"v-s:hasCertificationDocumentType\" class=\"view -edit search\" data-template=\"v-ui:LabelTemplate\"></div>\n        </div>\n        <div class=\"col-md-3\">\n          <em about=\"v-s:hasDocumentKind\" property=\"rdfs:label\" class=\"view edit -search\"></em>\n          <veda-control rel=\"v-s:hasDocumentKind\" data-type=\"link\" class=\"-view edit search fulltext dropdown\"></veda-control>\n          <div rel=\"v-s:hasDocumentKind\" class=\"view -edit -search\" data-template=\"v-ui:LabelTemplate\"></div>\n        </div>\n        <div class=\"col-md-3\">\n          <em about=\"v-s:registrationNumber\" property=\"rdfs:label\" class=\"view edit -search\"></em>\n          <div property=\"v-s:registrationNumber\" class=\"view -edit -search\"></div>\n          <veda-control property=\"v-s:registrationNumber\" data-type=\"text\" class=\"-view edit -search\"></veda-control>\n        </div>\n        <div class=\"col-md-3\">\n          <em about=\"v-s:registrationDate\" property=\"rdfs:label\" class=\"view edit -search\"></em>\n          <div property=\"v-s:registrationDate\" class=\"view -edit -search\"></div>\n          <veda-control property=\"v-s:registrationDate\" data-type=\"date\" class=\"-view edit -search\"></veda-control>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <em about=\"v-s:dateFrom\" property=\"rdfs:label\" class=\"view edit -search\"></em>\n          <div property=\"v-s:dateFrom\" class=\"view -edit -search\"></div>\n          <veda-control property=\"v-s:dateFrom\" data-type=\"date\" class=\"-view edit -search\"></veda-control>\n        </div>\n        <div class=\"col-md-3\">\n          <em about=\"v-s:dateTo\" property=\"rdfs:label\" class=\"view edit -search\"></em>\n          <div property=\"v-s:dateTo\" class=\"view -edit -search\"></div>\n          <veda-control property=\"v-s:dateTo\" data-type=\"date\" class=\"-view edit -search\"></veda-control>\n        </div>\n        <div class=\"col-md-6\">\n          <em about=\"v-s:attachment\" property=\"rdfs:label\"></em>\n          <div rel=\"v-s:attachment\" data-template=\"v-ui:FileTemplateWithComment\" data-embedded=\"true\"></div>\n          <veda-control data-type=\"file\" rel=\"v-s:attachment\" class=\"-view edit -search\"></veda-control>\n        </div>\n      </div>\n    </div>\n  </div>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJodG1sIl0sInNvdXJjZXMiOlsiLi4vLi4vb250b2xvZ3kvZ2VuZXJpYy1hcHBsaWNhdGlvbi9jZXJ0aWZpY2F0aW9uRG9jdW1lbnQvdGVtcGxhdGVzL3Ytc19DZXJ0aWZpY2F0aW9uRG9jdW1lbnRUZW1wbGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaHRtbCA9IGBcbiAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cbiAgICAgICAgICA8ZW0gYWJvdXQ9XCJ2LXM6aGFzQ2VydGlmaWNhdGlvbkRvY3VtZW50VHlwZVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvZW0+XG4gICAgICAgICAgPHZlZGEtY29udHJvbCByZWw9XCJ2LXM6aGFzQ2VydGlmaWNhdGlvbkRvY3VtZW50VHlwZVwiIGRhdGEtdHlwZT1cInJhZGlvXCIgY2xhc3M9XCItdmlldyBlZGl0IHNlYXJjaFwiPjwvdmVkYS1jb250cm9sPlxuICAgICAgICAgIDxkaXYgcmVsPVwidi1zOmhhc0NlcnRpZmljYXRpb25Eb2N1bWVudFR5cGVcIiBjbGFzcz1cInZpZXcgLWVkaXQgc2VhcmNoXCIgZGF0YS10ZW1wbGF0ZT1cInYtdWk6TGFiZWxUZW1wbGF0ZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XG4gICAgICAgICAgPGVtIGFib3V0PVwidi1zOmhhc0RvY3VtZW50S2luZFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiIGNsYXNzPVwidmlldyBlZGl0IC1zZWFyY2hcIj48L2VtPlxuICAgICAgICAgIDx2ZWRhLWNvbnRyb2wgcmVsPVwidi1zOmhhc0RvY3VtZW50S2luZFwiIGRhdGEtdHlwZT1cImxpbmtcIiBjbGFzcz1cIi12aWV3IGVkaXQgc2VhcmNoIGZ1bGx0ZXh0IGRyb3Bkb3duXCI+PC92ZWRhLWNvbnRyb2w+XG4gICAgICAgICAgPGRpdiByZWw9XCJ2LXM6aGFzRG9jdW1lbnRLaW5kXCIgY2xhc3M9XCJ2aWV3IC1lZGl0IC1zZWFyY2hcIiBkYXRhLXRlbXBsYXRlPVwidi11aTpMYWJlbFRlbXBsYXRlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cbiAgICAgICAgICA8ZW0gYWJvdXQ9XCJ2LXM6cmVnaXN0cmF0aW9uTnVtYmVyXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCIgY2xhc3M9XCJ2aWV3IGVkaXQgLXNlYXJjaFwiPjwvZW0+XG4gICAgICAgICAgPGRpdiBwcm9wZXJ0eT1cInYtczpyZWdpc3RyYXRpb25OdW1iZXJcIiBjbGFzcz1cInZpZXcgLWVkaXQgLXNlYXJjaFwiPjwvZGl2PlxuICAgICAgICAgIDx2ZWRhLWNvbnRyb2wgcHJvcGVydHk9XCJ2LXM6cmVnaXN0cmF0aW9uTnVtYmVyXCIgZGF0YS10eXBlPVwidGV4dFwiIGNsYXNzPVwiLXZpZXcgZWRpdCAtc2VhcmNoXCI+PC92ZWRhLWNvbnRyb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cbiAgICAgICAgICA8ZW0gYWJvdXQ9XCJ2LXM6cmVnaXN0cmF0aW9uRGF0ZVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiIGNsYXNzPVwidmlldyBlZGl0IC1zZWFyY2hcIj48L2VtPlxuICAgICAgICAgIDxkaXYgcHJvcGVydHk9XCJ2LXM6cmVnaXN0cmF0aW9uRGF0ZVwiIGNsYXNzPVwidmlldyAtZWRpdCAtc2VhcmNoXCI+PC9kaXY+XG4gICAgICAgICAgPHZlZGEtY29udHJvbCBwcm9wZXJ0eT1cInYtczpyZWdpc3RyYXRpb25EYXRlXCIgZGF0YS10eXBlPVwiZGF0ZVwiIGNsYXNzPVwiLXZpZXcgZWRpdCAtc2VhcmNoXCI+PC92ZWRhLWNvbnRyb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxuICAgICAgICAgIDxlbSBhYm91dD1cInYtczpkYXRlRnJvbVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiIGNsYXNzPVwidmlldyBlZGl0IC1zZWFyY2hcIj48L2VtPlxuICAgICAgICAgIDxkaXYgcHJvcGVydHk9XCJ2LXM6ZGF0ZUZyb21cIiBjbGFzcz1cInZpZXcgLWVkaXQgLXNlYXJjaFwiPjwvZGl2PlxuICAgICAgICAgIDx2ZWRhLWNvbnRyb2wgcHJvcGVydHk9XCJ2LXM6ZGF0ZUZyb21cIiBkYXRhLXR5cGU9XCJkYXRlXCIgY2xhc3M9XCItdmlldyBlZGl0IC1zZWFyY2hcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxuICAgICAgICAgIDxlbSBhYm91dD1cInYtczpkYXRlVG9cIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIiBjbGFzcz1cInZpZXcgZWRpdCAtc2VhcmNoXCI+PC9lbT5cbiAgICAgICAgICA8ZGl2IHByb3BlcnR5PVwidi1zOmRhdGVUb1wiIGNsYXNzPVwidmlldyAtZWRpdCAtc2VhcmNoXCI+PC9kaXY+XG4gICAgICAgICAgPHZlZGEtY29udHJvbCBwcm9wZXJ0eT1cInYtczpkYXRlVG9cIiBkYXRhLXR5cGU9XCJkYXRlXCIgY2xhc3M9XCItdmlldyBlZGl0IC1zZWFyY2hcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgIDxlbSBhYm91dD1cInYtczphdHRhY2htZW50XCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9lbT5cbiAgICAgICAgICA8ZGl2IHJlbD1cInYtczphdHRhY2htZW50XCIgZGF0YS10ZW1wbGF0ZT1cInYtdWk6RmlsZVRlbXBsYXRlV2l0aENvbW1lbnRcIiBkYXRhLWVtYmVkZGVkPVwidHJ1ZVwiPjwvZGl2PlxuICAgICAgICAgIDx2ZWRhLWNvbnRyb2wgZGF0YS10eXBlPVwiZmlsZVwiIHJlbD1cInYtczphdHRhY2htZW50XCIgY2xhc3M9XCItdmlldyBlZGl0IC1zZWFyY2hcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7c0JBQWFBLElBQUk7SUFBQTtFQUFBO0FBQUEifQ==