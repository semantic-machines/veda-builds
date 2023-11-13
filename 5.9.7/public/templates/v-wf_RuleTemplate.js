"use strict";

System.register(["jquery"], function (_export, _context) {
  "use strict";

  var $, post, html;
  return {
    setters: [function (_jquery) {
      $ = _jquery.default;
    }],
    execute: function () {
      _export("post", post = function post(individual, template, container, mode, extra) {
        template = $(template);
        container = $(container);
        if ($(template).parent().attr('data-embedded')) {
          $('.actions', template).remove();
        }
      });
      _export("html", html = "\n  <div class=\"container sheet\">\n    <h2>\n      <span about=\"@\" rel=\"rdf:type\" data-template=\"v-ui:LabelTemplate\"></span>\n    </h2>\n    <div class=\"row\">\n      <div class=\"col-md-5 text-right\">\n        <strong about=\"rdfs:label\" property=\"rdfs:label\" class=\"text-muted\"></strong>\n      </div>\n      <div class=\"col-md-7\">\n        <div property=\"rdfs:label\" class=\"view search -create\"></div>\n        <veda-control property=\"rdfs:label\" data-type=\"multilingualString\" class=\"-view edit create\"></veda-control>\n      </div>\n    </div>\n    <hr style=\"margin: 10px 0px\" />\n    <div class=\"row\">\n      <div class=\"col-md-5 text-right name\">\n        <strong class=\"text-muted\" about=\"v-wf:segregateObject\" property=\"rdfs:label\"></strong>\n      </div>\n      <div class=\"col-md-7\">\n        <span class=\"view search -create\" property=\"v-wf:segregateObject\"></span>\n        <veda-control property=\"v-wf:segregateObject\" class=\"-view edit create\"></veda-control>\n      </div>\n    </div>\n    <hr style=\"margin: 10px 0px\" />\n    <div class=\"row\">\n      <div class=\"col-md-5 text-right name\">\n        <strong class=\"text-muted\" about=\"v-wf:segregateElement\" property=\"rdfs:label\"></strong>\n      </div>\n      <div class=\"col-md-7\">\n        <span class=\"view search -create\" property=\"v-wf:segregateElement\"></span>\n        <veda-control property=\"v-wf:segregateElement\" class=\"-view edit create\"></veda-control>\n      </div>\n    </div>\n    <hr style=\"margin: 10px 0px\" />\n    <div class=\"row\">\n      <div class=\"col-md-5 text-right name\">\n        <strong class=\"text-muted\" about=\"v-wf:conversion\" property=\"rdfs:label\"></strong>\n      </div>\n      <div class=\"col-md-7\">\n        <span class=\"view search -create\" property=\"v-wf:conversion\"></span>\n        <veda-control property=\"v-wf:conversion\" class=\"-view edit create\"></veda-control>\n      </div>\n    </div>\n    <hr style=\"margin: 10px 0px\" />\n    <div class=\"row\">\n      <div class=\"col-md-5 text-right name\">\n        <strong class=\"text-muted\" about=\"v-wf:grouping\" property=\"rdfs:label\"></strong>\n      </div>\n      <div class=\"col-md-7\">\n        <span class=\"view search -create\" property=\"v-wf:grouping\"></span>\n        <veda-control property=\"v-wf:grouping\" class=\"-view edit create\"></veda-control>\n      </div>\n    </div>\n    <hr style=\"margin: 10px 0px\" />\n    <div class=\"row\">\n      <div class=\"col-md-5 text-right name\">\n        <strong class=\"text-muted\" about=\"v-wf:aggregate\" property=\"rdfs:label\"></strong>\n      </div>\n      <div class=\"col-md-7\">\n        <span class=\"view search -create\" property=\"v-wf:aggregate\"></span>\n        <veda-control property=\"v-wf:aggregate\" class=\"-view edit create\"></veda-control>\n      </div>\n    </div>\n    <hr style=\"margin: 10px 0px\" />\n    <div class=\"actions view edit -search\">\n      <span about=\"@\" data-template=\"v-ui:StandardButtonsTemplate\" data-embedded=\"true\" data-buttons=\"edit save cancel delete\"></span>\n    </div>\n  </div>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiX2pxdWVyeSIsImRlZmF1bHQiLCJleGVjdXRlIiwiX2V4cG9ydCIsInBvc3QiLCJpbmRpdmlkdWFsIiwidGVtcGxhdGUiLCJjb250YWluZXIiLCJtb2RlIiwiZXh0cmEiLCJwYXJlbnQiLCJhdHRyIiwicmVtb3ZlIiwiaHRtbCJdLCJzb3VyY2VzIjpbIi4uLy4uL29udG9sb2d5L2dlbmVyaWMtZnVuY3Rpb24vdGVtcGxhdGVzL3Ytd2ZfUnVsZVRlbXBsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBjb25zdCBwb3N0ID0gZnVuY3Rpb24gKGluZGl2aWR1YWwsIHRlbXBsYXRlLCBjb250YWluZXIsIG1vZGUsIGV4dHJhKSB7XG4gIHRlbXBsYXRlID0gJCh0ZW1wbGF0ZSk7XG4gIGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcblxuICBpZiAoJCh0ZW1wbGF0ZSkucGFyZW50KCkuYXR0cignZGF0YS1lbWJlZGRlZCcpKSB7XG4gICAgJCgnLmFjdGlvbnMnLCB0ZW1wbGF0ZSkucmVtb3ZlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBodG1sID0gYFxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHNoZWV0XCI+XG4gICAgPGgyPlxuICAgICAgPHNwYW4gYWJvdXQ9XCJAXCIgcmVsPVwicmRmOnR5cGVcIiBkYXRhLXRlbXBsYXRlPVwidi11aTpMYWJlbFRlbXBsYXRlXCI+PC9zcGFuPlxuICAgIDwvaDI+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC01IHRleHQtcmlnaHRcIj5cbiAgICAgICAgPHN0cm9uZyBhYm91dD1cInJkZnM6bGFiZWxcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIiBjbGFzcz1cInRleHQtbXV0ZWRcIj48L3N0cm9uZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4gICAgICAgIDxkaXYgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCIgY2xhc3M9XCJ2aWV3IHNlYXJjaCAtY3JlYXRlXCI+PC9kaXY+XG4gICAgICAgIDx2ZWRhLWNvbnRyb2wgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCIgZGF0YS10eXBlPVwibXVsdGlsaW5ndWFsU3RyaW5nXCIgY2xhc3M9XCItdmlldyBlZGl0IGNyZWF0ZVwiPjwvdmVkYS1jb250cm9sPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGhyIHN0eWxlPVwibWFyZ2luOiAxMHB4IDBweFwiIC8+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC01IHRleHQtcmlnaHQgbmFtZVwiPlxuICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1tdXRlZFwiIGFib3V0PVwidi13ZjpzZWdyZWdhdGVPYmplY3RcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3N0cm9uZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidmlldyBzZWFyY2ggLWNyZWF0ZVwiIHByb3BlcnR5PVwidi13ZjpzZWdyZWdhdGVPYmplY3RcIj48L3NwYW4+XG4gICAgICAgIDx2ZWRhLWNvbnRyb2wgcHJvcGVydHk9XCJ2LXdmOnNlZ3JlZ2F0ZU9iamVjdFwiIGNsYXNzPVwiLXZpZXcgZWRpdCBjcmVhdGVcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxociBzdHlsZT1cIm1hcmdpbjogMTBweCAwcHhcIiAvPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNSB0ZXh0LXJpZ2h0IG5hbWVcIj5cbiAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtbXV0ZWRcIiBhYm91dD1cInYtd2Y6c2VncmVnYXRlRWxlbWVudFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Ryb25nPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aWV3IHNlYXJjaCAtY3JlYXRlXCIgcHJvcGVydHk9XCJ2LXdmOnNlZ3JlZ2F0ZUVsZW1lbnRcIj48L3NwYW4+XG4gICAgICAgIDx2ZWRhLWNvbnRyb2wgcHJvcGVydHk9XCJ2LXdmOnNlZ3JlZ2F0ZUVsZW1lbnRcIiBjbGFzcz1cIi12aWV3IGVkaXQgY3JlYXRlXCI+PC92ZWRhLWNvbnRyb2w+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8aHIgc3R5bGU9XCJtYXJnaW46IDEwcHggMHB4XCIgLz5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTUgdGV4dC1yaWdodCBuYW1lXCI+XG4gICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LW11dGVkXCIgYWJvdXQ9XCJ2LXdmOmNvbnZlcnNpb25cIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3N0cm9uZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidmlldyBzZWFyY2ggLWNyZWF0ZVwiIHByb3BlcnR5PVwidi13Zjpjb252ZXJzaW9uXCI+PC9zcGFuPlxuICAgICAgICA8dmVkYS1jb250cm9sIHByb3BlcnR5PVwidi13Zjpjb252ZXJzaW9uXCIgY2xhc3M9XCItdmlldyBlZGl0IGNyZWF0ZVwiPjwvdmVkYS1jb250cm9sPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGhyIHN0eWxlPVwibWFyZ2luOiAxMHB4IDBweFwiIC8+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC01IHRleHQtcmlnaHQgbmFtZVwiPlxuICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1tdXRlZFwiIGFib3V0PVwidi13Zjpncm91cGluZ1wiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Ryb25nPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aWV3IHNlYXJjaCAtY3JlYXRlXCIgcHJvcGVydHk9XCJ2LXdmOmdyb3VwaW5nXCI+PC9zcGFuPlxuICAgICAgICA8dmVkYS1jb250cm9sIHByb3BlcnR5PVwidi13Zjpncm91cGluZ1wiIGNsYXNzPVwiLXZpZXcgZWRpdCBjcmVhdGVcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxociBzdHlsZT1cIm1hcmdpbjogMTBweCAwcHhcIiAvPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNSB0ZXh0LXJpZ2h0IG5hbWVcIj5cbiAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtbXV0ZWRcIiBhYm91dD1cInYtd2Y6YWdncmVnYXRlXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9zdHJvbmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInZpZXcgc2VhcmNoIC1jcmVhdGVcIiBwcm9wZXJ0eT1cInYtd2Y6YWdncmVnYXRlXCI+PC9zcGFuPlxuICAgICAgICA8dmVkYS1jb250cm9sIHByb3BlcnR5PVwidi13ZjphZ2dyZWdhdGVcIiBjbGFzcz1cIi12aWV3IGVkaXQgY3JlYXRlXCI+PC92ZWRhLWNvbnRyb2w+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8aHIgc3R5bGU9XCJtYXJnaW46IDEwcHggMHB4XCIgLz5cbiAgICA8ZGl2IGNsYXNzPVwiYWN0aW9ucyB2aWV3IGVkaXQgLXNlYXJjaFwiPlxuICAgICAgPHNwYW4gYWJvdXQ9XCJAXCIgZGF0YS10ZW1wbGF0ZT1cInYtdWk6U3RhbmRhcmRCdXR0b25zVGVtcGxhdGVcIiBkYXRhLWVtYmVkZGVkPVwidHJ1ZVwiIGRhdGEtYnV0dG9ucz1cImVkaXQgc2F2ZSBjYW5jZWwgZGVsZXRlXCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O01BQU9BLENBQUMsR0FBQUMsT0FBQSxDQUFBQyxPQUFBO0lBQUE7SUFBQUMsT0FBQSxXQUFBQSxDQUFBO01BQUFDLE9BQUEsU0FFS0MsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQWFDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFO1FBQzFFSCxRQUFRLEdBQUdQLENBQUMsQ0FBQ08sUUFBUSxDQUFDO1FBQ3RCQyxTQUFTLEdBQUdSLENBQUMsQ0FBQ1EsU0FBUyxDQUFDO1FBRXhCLElBQUlSLENBQUMsQ0FBQ08sUUFBUSxDQUFDLENBQUNJLE1BQU0sRUFBRSxDQUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7VUFDOUNaLENBQUMsQ0FBQyxVQUFVLEVBQUVPLFFBQVEsQ0FBQyxDQUFDTSxNQUFNLEVBQUU7UUFDbEM7TUFDRixDQUFDO01BQUFULE9BQUEsU0FFWVUsSUFBSTtJQUFBO0VBQUE7QUFBQSJ9