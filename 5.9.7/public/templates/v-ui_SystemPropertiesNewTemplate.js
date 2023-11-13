"use strict";

System.register(["jquery"], function (_export, _context) {
  "use strict";

  var $, pre, html;
  return {
    setters: [function (_jquery) {
      $ = _jquery.default;
    }],
    execute: function () {
      _export("pre", pre = function pre(individual, template, container, mode, extra) {
        template = $(template);
        container = $(container);
        individual.on('v-s:archived', archivedHandler);
        template.one('remove', function () {
          individual.off('v-s:archived', archivedHandler);
        });
        function archivedHandler() {
          this['v-s:deleted'] = this['v-s:archived'];
        }
      });
      _export("html", html = "\n  <div>\n    <section id=\"SystemProperties\">\n      <h4 class=\"section-header\" about=\"v-ui:SystemPropertiesTemplate\" property=\"rdfs:comment\"></h4>\n      <div class=\"row row-attribute\">\n        <div class=\"col-sm-3 col-xs-5\">\n          <label about=\"v-s:CreatedBundle\" property=\"rdfs:label\"></label>\n        </div>\n        <div class=\"col-sm-9 col-xs-7\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 col-xs-6\">\n              <veda-control data-type=\"link\" rel=\"v-s:creator\" class=\"-view -edit search fulltext\"></veda-control>\n              <div about=\"@\" rel=\"v-s:creator\" data-template=\"v-ui:LabelTemplate\" class=\"view edit -search\"></div>\n              <div rel=\"v-s:creator\" data-template=\"v-ui:LabelTemplate\" class=\"-view -edit search\"></div>\n            </div>\n            <div class=\"col-sm-6 col-xs-6\">\n              <veda-control property=\"v-s:created\" data-type=\"date\" class=\"-view -edit search\"></veda-control>\n              <div about=\"@\" property=\"v-s:created\" class=\"view edit -search\"></div>\n              <div property=\"v-s:created\" class=\"-view -edit search\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row row-attribute\">\n        <div class=\"col-sm-3 col-xs-5\">\n          <label about=\"v-s:EditedBundle\" property=\"rdfs:label\"></label>\n        </div>\n        <div class=\"col-sm-9 col-xs-7\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 col-xs-6\">\n              <veda-control data-type=\"link\" rel=\"v-s:lastEditor\" class=\"-view -edit search fulltext\"></veda-control>\n              <div about=\"@\" rel=\"v-s:lastEditor\" data-template=\"v-ui:LabelTemplate\" class=\"view edit -search\"></div>\n              <div rel=\"v-s:lastEditor\" data-template=\"v-ui:LabelTemplate\" class=\"-view -edit search\"></div>\n            </div>\n            <div class=\"col-sm-6 col-xs-6\">\n              <veda-control data-type=\"date\" property=\"v-s:edited\" class=\"-view -edit search\"></veda-control>\n              <div about=\"@\" property=\"v-s:edited\" class=\"view edit -search\"></div>\n              <div property=\"v-s:edited\" class=\"-view -edit search\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row row-attribute -view -edit search\">\n        <div class=\"col-sm-3 col-xs-5\"></div>\n        <div class=\"col-sm-9 col-xs-7\">\n          <label class=\"checkbox-inline\">\n            <veda-control property=\"v-s:archived\" data-type=\"boolean\"></veda-control>\n            <strong about=\"v-s:archived\" property=\"rdfs:label\"></strong>\n          </label>\n          <label class=\"checkbox-inline\">\n            <veda-control property=\"v-s:deleted\" data-type=\"boolean\"></veda-control>\n            <strong about=\"v-s:deleted\" property=\"rdfs:label\"></strong>\n          </label>\n        </div>\n      </div>\n    </section>\n  </div>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiX2pxdWVyeSIsImRlZmF1bHQiLCJleGVjdXRlIiwiX2V4cG9ydCIsInByZSIsImluZGl2aWR1YWwiLCJ0ZW1wbGF0ZSIsImNvbnRhaW5lciIsIm1vZGUiLCJleHRyYSIsIm9uIiwiYXJjaGl2ZWRIYW5kbGVyIiwib25lIiwib2ZmIiwiaHRtbCJdLCJzb3VyY2VzIjpbIi4uLy4uL29udG9sb2d5L3N5c3RlbS1jb3JlL3RlbXBsYXRlcy92LXVpX1N5c3RlbVByb3BlcnRpZXNOZXdUZW1wbGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgY29uc3QgcHJlID0gZnVuY3Rpb24gKGluZGl2aWR1YWwsIHRlbXBsYXRlLCBjb250YWluZXIsIG1vZGUsIGV4dHJhKSB7XG4gIHRlbXBsYXRlID0gJCh0ZW1wbGF0ZSk7XG4gIGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcblxuICBpbmRpdmlkdWFsLm9uKCd2LXM6YXJjaGl2ZWQnLCBhcmNoaXZlZEhhbmRsZXIpO1xuICB0ZW1wbGF0ZS5vbmUoJ3JlbW92ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpbmRpdmlkdWFsLm9mZigndi1zOmFyY2hpdmVkJywgYXJjaGl2ZWRIYW5kbGVyKTtcbiAgfSk7XG4gIGZ1bmN0aW9uIGFyY2hpdmVkSGFuZGxlciAoKSB7XG4gICAgdGhpc1sndi1zOmRlbGV0ZWQnXSA9IHRoaXNbJ3YtczphcmNoaXZlZCddO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaHRtbCA9IGBcbiAgPGRpdj5cbiAgICA8c2VjdGlvbiBpZD1cIlN5c3RlbVByb3BlcnRpZXNcIj5cbiAgICAgIDxoNCBjbGFzcz1cInNlY3Rpb24taGVhZGVyXCIgYWJvdXQ9XCJ2LXVpOlN5c3RlbVByb3BlcnRpZXNUZW1wbGF0ZVwiIHByb3BlcnR5PVwicmRmczpjb21tZW50XCI+PC9oND5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWF0dHJpYnV0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLXhzLTVcIj5cbiAgICAgICAgICA8bGFiZWwgYWJvdXQ9XCJ2LXM6Q3JlYXRlZEJ1bmRsZVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTkgY29sLXhzLTdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgPHZlZGEtY29udHJvbCBkYXRhLXR5cGU9XCJsaW5rXCIgcmVsPVwidi1zOmNyZWF0b3JcIiBjbGFzcz1cIi12aWV3IC1lZGl0IHNlYXJjaCBmdWxsdGV4dFwiPjwvdmVkYS1jb250cm9sPlxuICAgICAgICAgICAgICA8ZGl2IGFib3V0PVwiQFwiIHJlbD1cInYtczpjcmVhdG9yXCIgZGF0YS10ZW1wbGF0ZT1cInYtdWk6TGFiZWxUZW1wbGF0ZVwiIGNsYXNzPVwidmlldyBlZGl0IC1zZWFyY2hcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiByZWw9XCJ2LXM6Y3JlYXRvclwiIGRhdGEtdGVtcGxhdGU9XCJ2LXVpOkxhYmVsVGVtcGxhdGVcIiBjbGFzcz1cIi12aWV3IC1lZGl0IHNlYXJjaFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgPHZlZGEtY29udHJvbCBwcm9wZXJ0eT1cInYtczpjcmVhdGVkXCIgZGF0YS10eXBlPVwiZGF0ZVwiIGNsYXNzPVwiLXZpZXcgLWVkaXQgc2VhcmNoXCI+PC92ZWRhLWNvbnRyb2w+XG4gICAgICAgICAgICAgIDxkaXYgYWJvdXQ9XCJAXCIgcHJvcGVydHk9XCJ2LXM6Y3JlYXRlZFwiIGNsYXNzPVwidmlldyBlZGl0IC1zZWFyY2hcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBwcm9wZXJ0eT1cInYtczpjcmVhdGVkXCIgY2xhc3M9XCItdmlldyAtZWRpdCBzZWFyY2hcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyByb3ctYXR0cmlidXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMyBjb2wteHMtNVwiPlxuICAgICAgICAgIDxsYWJlbCBhYm91dD1cInYtczpFZGl0ZWRCdW5kbGVcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05IGNvbC14cy03XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGNvbC14cy02XCI+XG4gICAgICAgICAgICAgIDx2ZWRhLWNvbnRyb2wgZGF0YS10eXBlPVwibGlua1wiIHJlbD1cInYtczpsYXN0RWRpdG9yXCIgY2xhc3M9XCItdmlldyAtZWRpdCBzZWFyY2ggZnVsbHRleHRcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgICAgICAgICAgPGRpdiBhYm91dD1cIkBcIiByZWw9XCJ2LXM6bGFzdEVkaXRvclwiIGRhdGEtdGVtcGxhdGU9XCJ2LXVpOkxhYmVsVGVtcGxhdGVcIiBjbGFzcz1cInZpZXcgZWRpdCAtc2VhcmNoXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgcmVsPVwidi1zOmxhc3RFZGl0b3JcIiBkYXRhLXRlbXBsYXRlPVwidi11aTpMYWJlbFRlbXBsYXRlXCIgY2xhc3M9XCItdmlldyAtZWRpdCBzZWFyY2hcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGNvbC14cy02XCI+XG4gICAgICAgICAgICAgIDx2ZWRhLWNvbnRyb2wgZGF0YS10eXBlPVwiZGF0ZVwiIHByb3BlcnR5PVwidi1zOmVkaXRlZFwiIGNsYXNzPVwiLXZpZXcgLWVkaXQgc2VhcmNoXCI+PC92ZWRhLWNvbnRyb2w+XG4gICAgICAgICAgICAgIDxkaXYgYWJvdXQ9XCJAXCIgcHJvcGVydHk9XCJ2LXM6ZWRpdGVkXCIgY2xhc3M9XCJ2aWV3IGVkaXQgLXNlYXJjaFwiPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHByb3BlcnR5PVwidi1zOmVkaXRlZFwiIGNsYXNzPVwiLXZpZXcgLWVkaXQgc2VhcmNoXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWF0dHJpYnV0ZSAtdmlldyAtZWRpdCBzZWFyY2hcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC14cy01XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOSBjb2wteHMtN1wiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWlubGluZVwiPlxuICAgICAgICAgICAgPHZlZGEtY29udHJvbCBwcm9wZXJ0eT1cInYtczphcmNoaXZlZFwiIGRhdGEtdHlwZT1cImJvb2xlYW5cIj48L3ZlZGEtY29udHJvbD5cbiAgICAgICAgICAgIDxzdHJvbmcgYWJvdXQ9XCJ2LXM6YXJjaGl2ZWRcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3N0cm9uZz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWlubGluZVwiPlxuICAgICAgICAgICAgPHZlZGEtY29udHJvbCBwcm9wZXJ0eT1cInYtczpkZWxldGVkXCIgZGF0YS10eXBlPVwiYm9vbGVhblwiPjwvdmVkYS1jb250cm9sPlxuICAgICAgICAgICAgPHN0cm9uZyBhYm91dD1cInYtczpkZWxldGVkXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9zdHJvbmc+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIDwvZGl2PlxuYDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7TUFBT0EsQ0FBQyxHQUFBQyxPQUFBLENBQUFDLE9BQUE7SUFBQTtJQUFBQyxPQUFBLFdBQUFBLENBQUE7TUFBQUMsT0FBQSxRQUVLQyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBYUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUU7UUFDekVILFFBQVEsR0FBR1AsQ0FBQyxDQUFDTyxRQUFRLENBQUM7UUFDdEJDLFNBQVMsR0FBR1IsQ0FBQyxDQUFDUSxTQUFTLENBQUM7UUFFeEJGLFVBQVUsQ0FBQ0ssRUFBRSxDQUFDLGNBQWMsRUFBRUMsZUFBZSxDQUFDO1FBQzlDTCxRQUFRLENBQUNNLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWTtVQUNqQ1AsVUFBVSxDQUFDUSxHQUFHLENBQUMsY0FBYyxFQUFFRixlQUFlLENBQUM7UUFDakQsQ0FBQyxDQUFDO1FBQ0YsU0FBU0EsZUFBZUEsQ0FBQSxFQUFJO1VBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzVDO01BQ0YsQ0FBQztNQUFBUixPQUFBLFNBRVlXLElBQUk7SUFBQTtFQUFBO0FBQUEifQ==