"use strict";

System.register(["/js/browser/util.js", "jquery"], function (_export, _context) {
  "use strict";

  var BrowserUtil, $, post, html;
  return {
    setters: [function (_jsBrowserUtilJs) {
      BrowserUtil = _jsBrowserUtilJs.default;
    }, function (_jquery) {
      $ = _jquery.default;
    }],
    execute: function () {
      _export("post", post = function post(individual, template, container, mode, extra) {
        template = $(template);
        container = $(container);
        $('#createReport', template).on('click', function () {
          BrowserUtil.createReport('v-s:CompletedTasksCount_Report', individual);
        });
      });
      _export("html", html = "\n  <div class=\"container sheet\">\n    <h3 about=\"v-s:CompletedTasksCount_Report_Parameters\" property=\"rdfs:label\"></h3>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <em about=\"v-s:dateFrom\" property=\"rdfs:label\"></em>\n        <div property=\"v-s:dateFrom\" class=\"view -edit -search\"></div>\n        <veda-control property=\"v-s:dateFrom\" data-type=\"dateTime\" class=\"-view edit search\"></veda-control>\n      </div>\n      <div class=\"col-md-3\">\n        <em about=\"v-s:dateTo\" property=\"rdfs:label\"></em>\n        <div property=\"v-s:dateTo\" class=\"view -edit -search\"></div>\n        <veda-control property=\"v-s:dateTo\" data-type=\"dateTime\" class=\"-view edit search\"></veda-control>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <em about=\"v-s:checkedDepartment\" property=\"rdfs:label\"></em>\n        <div rel=\"v-s:checkedDepartment\" data-template=\"v-ui:LabelTemplate\" class=\"view edit -search\"></div>\n        <veda-control rel=\"v-s:checkedDepartment\" data-type=\"link\" class=\"-view edit search fulltext\"></veda-control>\n      </div>\n    </div>\n    <br /><br />\n    <div class=\"actions\">\n      <button type=\"button\" class=\"action btn btn-success -view edit -search\" id=\"createReport\" about=\"v-s:CreateReport\" property=\"rdfs:label\"></button>\n    </div>\n  </div>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCcm93c2VyVXRpbCIsIl9qc0Jyb3dzZXJVdGlsSnMiLCJkZWZhdWx0IiwiX2pxdWVyeSIsIiQiLCJleGVjdXRlIiwiX2V4cG9ydCIsInBvc3QiLCJpbmRpdmlkdWFsIiwidGVtcGxhdGUiLCJjb250YWluZXIiLCJtb2RlIiwiZXh0cmEiLCJvbiIsImNyZWF0ZVJlcG9ydCIsImh0bWwiXSwic291cmNlcyI6WyIuLi8uLi9vbnRvbG9neS9nZW5lcmljLWFwcGxpY2F0aW9uL2NvcnJlc3BvbmRlbmNlL3RlbXBsYXRlcy92LXNfQ29tcGxldGVkVGFza3NDb3VudF9SZXBvcnRfUGFyYW1ldGVyc1RlbXBsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCcm93c2VyVXRpbCBmcm9tICcvanMvYnJvd3Nlci91dGlsLmpzJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBjb25zdCBwb3N0ID0gZnVuY3Rpb24gKGluZGl2aWR1YWwsIHRlbXBsYXRlLCBjb250YWluZXIsIG1vZGUsIGV4dHJhKSB7XG4gIHRlbXBsYXRlID0gJCh0ZW1wbGF0ZSk7XG4gIGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcblxuICAkKCcjY3JlYXRlUmVwb3J0JywgdGVtcGxhdGUpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBCcm93c2VyVXRpbC5jcmVhdGVSZXBvcnQoJ3YtczpDb21wbGV0ZWRUYXNrc0NvdW50X1JlcG9ydCcsIGluZGl2aWR1YWwpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBodG1sID0gYFxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHNoZWV0XCI+XG4gICAgPGgzIGFib3V0PVwidi1zOkNvbXBsZXRlZFRhc2tzQ291bnRfUmVwb3J0X1BhcmFtZXRlcnNcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L2gzPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxuICAgICAgICA8ZW0gYWJvdXQ9XCJ2LXM6ZGF0ZUZyb21cIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L2VtPlxuICAgICAgICA8ZGl2IHByb3BlcnR5PVwidi1zOmRhdGVGcm9tXCIgY2xhc3M9XCJ2aWV3IC1lZGl0IC1zZWFyY2hcIj48L2Rpdj5cbiAgICAgICAgPHZlZGEtY29udHJvbCBwcm9wZXJ0eT1cInYtczpkYXRlRnJvbVwiIGRhdGEtdHlwZT1cImRhdGVUaW1lXCIgY2xhc3M9XCItdmlldyBlZGl0IHNlYXJjaFwiPjwvdmVkYS1jb250cm9sPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cbiAgICAgICAgPGVtIGFib3V0PVwidi1zOmRhdGVUb1wiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvZW0+XG4gICAgICAgIDxkaXYgcHJvcGVydHk9XCJ2LXM6ZGF0ZVRvXCIgY2xhc3M9XCJ2aWV3IC1lZGl0IC1zZWFyY2hcIj48L2Rpdj5cbiAgICAgICAgPHZlZGEtY29udHJvbCBwcm9wZXJ0eT1cInYtczpkYXRlVG9cIiBkYXRhLXR5cGU9XCJkYXRlVGltZVwiIGNsYXNzPVwiLXZpZXcgZWRpdCBzZWFyY2hcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICA8ZW0gYWJvdXQ9XCJ2LXM6Y2hlY2tlZERlcGFydG1lbnRcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L2VtPlxuICAgICAgICA8ZGl2IHJlbD1cInYtczpjaGVja2VkRGVwYXJ0bWVudFwiIGRhdGEtdGVtcGxhdGU9XCJ2LXVpOkxhYmVsVGVtcGxhdGVcIiBjbGFzcz1cInZpZXcgZWRpdCAtc2VhcmNoXCI+PC9kaXY+XG4gICAgICAgIDx2ZWRhLWNvbnRyb2wgcmVsPVwidi1zOmNoZWNrZWREZXBhcnRtZW50XCIgZGF0YS10eXBlPVwibGlua1wiIGNsYXNzPVwiLXZpZXcgZWRpdCBzZWFyY2ggZnVsbHRleHRcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxiciAvPjxiciAvPlxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFjdGlvbiBidG4gYnRuLXN1Y2Nlc3MgLXZpZXcgZWRpdCAtc2VhcmNoXCIgaWQ9XCJjcmVhdGVSZXBvcnRcIiBhYm91dD1cInYtczpDcmVhdGVSZXBvcnRcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztNQUFPQSxXQUFXLEdBQUFDLGdCQUFBLENBQUFDLE9BQUE7SUFBQSxhQUFBQyxPQUFBO01BQ1hDLENBQUMsR0FBQUQsT0FBQSxDQUFBRCxPQUFBO0lBQUE7SUFBQUcsT0FBQSxXQUFBQSxDQUFBO01BQUFDLE9BQUEsU0FFS0MsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQWFDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFO1FBQzFFSCxRQUFRLEdBQUdMLENBQUMsQ0FBQ0ssUUFBUSxDQUFDO1FBQ3RCQyxTQUFTLEdBQUdOLENBQUMsQ0FBQ00sU0FBUyxDQUFDO1FBRXhCTixDQUFDLENBQUMsZUFBZSxFQUFFSyxRQUFRLENBQUMsQ0FBQ0ksRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO1VBQ25EYixXQUFXLENBQUNjLFlBQVksQ0FBQyxnQ0FBZ0MsRUFBRU4sVUFBVSxDQUFDO1FBQ3hFLENBQUMsQ0FBQztNQUNKLENBQUM7TUFBQUYsT0FBQSxTQUVZUyxJQUFJO0lBQUE7RUFBQTtBQUFBIn0=