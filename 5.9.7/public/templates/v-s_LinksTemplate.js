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
        template.one('remove', function () {
          individual.activeTab = $('#links-tabs li.active a', template).attr('href');
        });
        individual.activeTab = individual.activeTab || '#links-list';
        $("#links-tabs a[href='" + individual.activeTab + "']", template).parent().addClass('active');
        $('#links-tabs-content ' + individual.activeTab, template).addClass('active');
      });
      _export("html", html = "\n  <div>\n    <br />\n    <ul class=\"nav nav-tabs nav-right\" role=\"tablist\" id=\"links-tabs\">\n      <li role=\"presentation\" class=\"pull-left\"><h3 class=\"no-margin\" about=\"v-s:hasLink\" property=\"rdfs:label\"></h3></li>\n      <!--li role=\"presentation\"><a href=\"#links-graph\" role=\"tab\" data-toggle=\"tab\" about=\"v-s:LinksGraphTemplate\" property=\"rdfs:comment\"></a></li-->\n      <li role=\"presentation\"><a href=\"#links-tree\" role=\"tab\" data-toggle=\"tab\" about=\"v-s:LinksTreeTemplate\" property=\"rdfs:comment\"></a></li>\n      <li role=\"presentation\"><a href=\"#links-list\" role=\"tab\" data-toggle=\"tab\" about=\"v-s:LinksListTemplate\" property=\"rdfs:comment\"></a></li>\n    </ul>\n    <br />\n    <div class=\"tab-content\" id=\"links-tabs-content\">\n      <div role=\"tabpanel\" class=\"tab-pane\" id=\"links-list\">\n        <div about=\"@\" data-template=\"v-s:LinksListTemplate\"></div>\n      </div>\n      <div role=\"tabpanel\" class=\"tab-pane\" id=\"links-tree\">\n        <div about=\"@\" data-template=\"v-s:LinksTreeTemplate\"></div>\n      </div>\n      <!--div role=\"tabpanel\" class=\"tab-pane\" id=\"links-graph\">\n      <div about=\"@\" data-template=\"v-s:LinksGraphTemplate\"></div>\n    </div-->\n    </div>\n  </div>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiX2pxdWVyeSIsImRlZmF1bHQiLCJleGVjdXRlIiwiX2V4cG9ydCIsInByZSIsImluZGl2aWR1YWwiLCJ0ZW1wbGF0ZSIsImNvbnRhaW5lciIsIm1vZGUiLCJleHRyYSIsIm9uZSIsImFjdGl2ZVRhYiIsImF0dHIiLCJwYXJlbnQiLCJhZGRDbGFzcyIsImh0bWwiXSwic291cmNlcyI6WyIuLi8uLi9vbnRvbG9neS9nZW5lcmljLWZ1bmN0aW9uL3RlbXBsYXRlcy92LXNfTGlua3NUZW1wbGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgY29uc3QgcHJlID0gZnVuY3Rpb24gKGluZGl2aWR1YWwsIHRlbXBsYXRlLCBjb250YWluZXIsIG1vZGUsIGV4dHJhKSB7XG4gIHRlbXBsYXRlID0gJCh0ZW1wbGF0ZSk7XG4gIGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcblxuICB0ZW1wbGF0ZS5vbmUoJ3JlbW92ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpbmRpdmlkdWFsLmFjdGl2ZVRhYiA9ICQoJyNsaW5rcy10YWJzIGxpLmFjdGl2ZSBhJywgdGVtcGxhdGUpLmF0dHIoJ2hyZWYnKTtcbiAgfSk7XG4gIGluZGl2aWR1YWwuYWN0aXZlVGFiID0gaW5kaXZpZHVhbC5hY3RpdmVUYWIgfHwgJyNsaW5rcy1saXN0JztcbiAgJChcIiNsaW5rcy10YWJzIGFbaHJlZj0nXCIgKyBpbmRpdmlkdWFsLmFjdGl2ZVRhYiArIFwiJ11cIiwgdGVtcGxhdGUpXG4gICAgLnBhcmVudCgpXG4gICAgLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgJCgnI2xpbmtzLXRhYnMtY29udGVudCAnICsgaW5kaXZpZHVhbC5hY3RpdmVUYWIsIHRlbXBsYXRlKS5hZGRDbGFzcygnYWN0aXZlJyk7XG59O1xuXG5leHBvcnQgY29uc3QgaHRtbCA9IGBcbiAgPGRpdj5cbiAgICA8YnIgLz5cbiAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnMgbmF2LXJpZ2h0XCIgcm9sZT1cInRhYmxpc3RcIiBpZD1cImxpbmtzLXRhYnNcIj5cbiAgICAgIDxsaSByb2xlPVwicHJlc2VudGF0aW9uXCIgY2xhc3M9XCJwdWxsLWxlZnRcIj48aDMgY2xhc3M9XCJuby1tYXJnaW5cIiBhYm91dD1cInYtczpoYXNMaW5rXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9oMz48L2xpPlxuICAgICAgPCEtLWxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI2xpbmtzLWdyYXBoXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgYWJvdXQ9XCJ2LXM6TGlua3NHcmFwaFRlbXBsYXRlXCIgcHJvcGVydHk9XCJyZGZzOmNvbW1lbnRcIj48L2E+PC9saS0tPlxuICAgICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI2xpbmtzLXRyZWVcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBhYm91dD1cInYtczpMaW5rc1RyZWVUZW1wbGF0ZVwiIHByb3BlcnR5PVwicmRmczpjb21tZW50XCI+PC9hPjwvbGk+XG4gICAgICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGhyZWY9XCIjbGlua3MtbGlzdFwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGFib3V0PVwidi1zOkxpbmtzTGlzdFRlbXBsYXRlXCIgcHJvcGVydHk9XCJyZGZzOmNvbW1lbnRcIj48L2E+PC9saT5cbiAgICA8L3VsPlxuICAgIDxiciAvPlxuICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiIGlkPVwibGlua3MtdGFicy1jb250ZW50XCI+XG4gICAgICA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmVcIiBpZD1cImxpbmtzLWxpc3RcIj5cbiAgICAgICAgPGRpdiBhYm91dD1cIkBcIiBkYXRhLXRlbXBsYXRlPVwidi1zOkxpbmtzTGlzdFRlbXBsYXRlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZVwiIGlkPVwibGlua3MtdHJlZVwiPlxuICAgICAgICA8ZGl2IGFib3V0PVwiQFwiIGRhdGEtdGVtcGxhdGU9XCJ2LXM6TGlua3NUcmVlVGVtcGxhdGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLWRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lXCIgaWQ9XCJsaW5rcy1ncmFwaFwiPlxuICAgICAgPGRpdiBhYm91dD1cIkBcIiBkYXRhLXRlbXBsYXRlPVwidi1zOkxpbmtzR3JhcGhUZW1wbGF0ZVwiPjwvZGl2PlxuICAgIDwvZGl2LS0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7TUFBT0EsQ0FBQyxHQUFBQyxPQUFBLENBQUFDLE9BQUE7SUFBQTtJQUFBQyxPQUFBLFdBQUFBLENBQUE7TUFBQUMsT0FBQSxRQUVLQyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBYUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUU7UUFDekVILFFBQVEsR0FBR1AsQ0FBQyxDQUFDTyxRQUFRLENBQUM7UUFDdEJDLFNBQVMsR0FBR1IsQ0FBQyxDQUFDUSxTQUFTLENBQUM7UUFFeEJELFFBQVEsQ0FBQ0ksR0FBRyxDQUFDLFFBQVEsRUFBRSxZQUFZO1VBQ2pDTCxVQUFVLENBQUNNLFNBQVMsR0FBR1osQ0FBQyxDQUFDLHlCQUF5QixFQUFFTyxRQUFRLENBQUMsQ0FBQ00sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1RSxDQUFDLENBQUM7UUFDRlAsVUFBVSxDQUFDTSxTQUFTLEdBQUdOLFVBQVUsQ0FBQ00sU0FBUyxJQUFJLGFBQWE7UUFDNURaLENBQUMsQ0FBQyxzQkFBc0IsR0FBR00sVUFBVSxDQUFDTSxTQUFTLEdBQUcsSUFBSSxFQUFFTCxRQUFRLENBQUMsQ0FDOURPLE1BQU0sRUFBRSxDQUNSQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3JCZixDQUFDLENBQUMsc0JBQXNCLEdBQUdNLFVBQVUsQ0FBQ00sU0FBUyxFQUFFTCxRQUFRLENBQUMsQ0FBQ1EsUUFBUSxDQUFDLFFBQVEsQ0FBQztNQUMvRSxDQUFDO01BQUFYLE9BQUEsU0FFWVksSUFBSTtJQUFBO0VBQUE7QUFBQSJ9