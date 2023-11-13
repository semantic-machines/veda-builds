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
        if (individual.id.indexOf('cfg:') < 0) {
          $('.open-structure', template).click(function () {
            window.open('/#/v-s:Contacts////target=' + individual.id);
          });
        } else {
          $('.open-structure', template).remove();
        }
        if (individual.hasValue('v-s:employee')) {
          return individual['v-s:employee'][0].load().then(function (employee) {
            if (!employee.hasValue('v-s:hasImage')) {
              $('.media-left', template).remove();
            }
            if (!employee.hasValue('v-s:dateAbsenceTo')) {
              $('.absence-block', template).remove();
            }
            if (!employee.hasValue('v-s:delegate')) {
              $('.delegate-block', template).remove();
            }
          });
        }
      });
      _export("html", html = "\n  <div class=\"media\" style=\"margin-top:0px;\">\n    <span class=\"close\">&nbsp;&times;</span>\n    <div class=\"media-left\" about=\"@\" rel=\"v-s:employee\" style=\"width:96px\">\n        <a href=\"#/@\" about=\"@\" rel=\"v-s:hasImage\" data-template=\"v-ui:ImageTemplate\"></a>\n    </div>\n    <div class=\"media-body\" style=\"width:auto;\">\n      <strong class=\"media-heading\" about=\"@\" rel=\"v-s:employee\">\n        <span>\n          <span about=\"@\" property=\"v-s:lastName\"></span>\n          <span about=\"@\" property=\"v-s:firstName\"></span>\n          <span about=\"@\" property=\"v-s:middleName\"></span>\n        </span>\n      </strong>\n      <hr class=\"no-margin\" />\n      <div about=\"@\" rel=\"v-s:occupation\">\n        <div>\n          <small about=\"@\" property=\"rdfs:label\"></small>\n          <br />\n          <small about=\"@\" rel=\"v-s:parentUnit\" data-template=\"v-ui:LabelTemplate\"></small>\n        </div>\n      </div>\n      <div about=\"@\" rel=\"v-s:employee\">\n        <div>\n          <div about=\"@\" rel=\"v-s:hasCommunicationMean\">\n            <div>\n              <small about=\"@\" property=\"v-s:description\"></small>\n            </div>\n          </div>\n          <hr class=\"no-margin\" />\n          <div class=\"absence-block\">\n            <div>\n              <small>\n                <span about=\"v-s:AbsenceUntilBundle\" property=\"rdfs:label\"></span>\n                <span about=\"@\" property=\"v-s:dateAbsenceTo\"></span>\n              </small>\n            </div>\n          </div>\n          <div class=\"delegate-block\">\n            <div>\n              <small>\n                <span about=\"v-s:delegate\" property=\"rdfs:label\"></span>\n                <span about=\"@\" rel=\"v-s:delegate\" data-template=\"v-ui:LabelTemplate\"></span>\n              </small>\n            </div>\n          </div>\n        </div>\n      </div>\n      <small class=\"open-structure pointer\">\n        <a about=\"v-s:ShowInContactsBundle\" property=\"rdfs:label\"></a>\n      </small>\n    </div>\n  </div>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiX2pxdWVyeSIsImRlZmF1bHQiLCJleGVjdXRlIiwiX2V4cG9ydCIsInByZSIsImluZGl2aWR1YWwiLCJ0ZW1wbGF0ZSIsImNvbnRhaW5lciIsIm1vZGUiLCJleHRyYSIsImlkIiwiaW5kZXhPZiIsImNsaWNrIiwid2luZG93Iiwib3BlbiIsInJlbW92ZSIsImhhc1ZhbHVlIiwibG9hZCIsInRoZW4iLCJlbXBsb3llZSIsImh0bWwiXSwic291cmNlcyI6WyIuLi8uLi9vbnRvbG9neS9zeXN0ZW0tY29yZS90ZW1wbGF0ZXMvdi11aV9BcHBvaW50bWVudFBvcG92ZXJUZW1wbGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgY29uc3QgcHJlID0gZnVuY3Rpb24gKGluZGl2aWR1YWwsIHRlbXBsYXRlLCBjb250YWluZXIsIG1vZGUsIGV4dHJhKSB7XG4gIHRlbXBsYXRlID0gJCh0ZW1wbGF0ZSk7XG4gIGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcblxuICBpZiAoaW5kaXZpZHVhbC5pZC5pbmRleE9mKCdjZmc6JykgPCAwKSB7XG4gICAgJCgnLm9wZW4tc3RydWN0dXJlJywgdGVtcGxhdGUpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgd2luZG93Lm9wZW4oJy8jL3YtczpDb250YWN0cy8vLy90YXJnZXQ9JytpbmRpdmlkdWFsLmlkKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAkKCcub3Blbi1zdHJ1Y3R1cmUnLCB0ZW1wbGF0ZSkucmVtb3ZlKCk7XG4gIH1cblxuICBpZiAoaW5kaXZpZHVhbC5oYXNWYWx1ZSgndi1zOmVtcGxveWVlJykpIHtcbiAgICByZXR1cm4gaW5kaXZpZHVhbFsndi1zOmVtcGxveWVlJ11bMF0ubG9hZCgpLnRoZW4oZnVuY3Rpb24gKGVtcGxveWVlKSB7XG4gICAgICBpZiAoIWVtcGxveWVlLmhhc1ZhbHVlKCd2LXM6aGFzSW1hZ2UnKSkge1xuICAgICAgICAkKCcubWVkaWEtbGVmdCcsIHRlbXBsYXRlKS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIGlmICghZW1wbG95ZWUuaGFzVmFsdWUoJ3YtczpkYXRlQWJzZW5jZVRvJykpIHtcbiAgICAgICAgJCgnLmFic2VuY2UtYmxvY2snLCB0ZW1wbGF0ZSkucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBpZiAoIWVtcGxveWVlLmhhc1ZhbHVlKCd2LXM6ZGVsZWdhdGUnKSkge1xuICAgICAgICAkKCcuZGVsZWdhdGUtYmxvY2snLCB0ZW1wbGF0ZSkucmVtb3ZlKCk7IFxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaHRtbCA9IGBcbiAgPGRpdiBjbGFzcz1cIm1lZGlhXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjBweDtcIj5cbiAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCI+Jm5ic3A7JnRpbWVzOzwvc3Bhbj5cbiAgICA8ZGl2IGNsYXNzPVwibWVkaWEtbGVmdFwiIGFib3V0PVwiQFwiIHJlbD1cInYtczplbXBsb3llZVwiIHN0eWxlPVwid2lkdGg6OTZweFwiPlxuICAgICAgICA8YSBocmVmPVwiIy9AXCIgYWJvdXQ9XCJAXCIgcmVsPVwidi1zOmhhc0ltYWdlXCIgZGF0YS10ZW1wbGF0ZT1cInYtdWk6SW1hZ2VUZW1wbGF0ZVwiPjwvYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiIHN0eWxlPVwid2lkdGg6YXV0bztcIj5cbiAgICAgIDxzdHJvbmcgY2xhc3M9XCJtZWRpYS1oZWFkaW5nXCIgYWJvdXQ9XCJAXCIgcmVsPVwidi1zOmVtcGxveWVlXCI+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxzcGFuIGFib3V0PVwiQFwiIHByb3BlcnR5PVwidi1zOmxhc3ROYW1lXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGFib3V0PVwiQFwiIHByb3BlcnR5PVwidi1zOmZpcnN0TmFtZVwiPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBhYm91dD1cIkBcIiBwcm9wZXJ0eT1cInYtczptaWRkbGVOYW1lXCI+PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L3N0cm9uZz5cbiAgICAgIDxociBjbGFzcz1cIm5vLW1hcmdpblwiIC8+XG4gICAgICA8ZGl2IGFib3V0PVwiQFwiIHJlbD1cInYtczpvY2N1cGF0aW9uXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNtYWxsIGFib3V0PVwiQFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc21hbGw+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHNtYWxsIGFib3V0PVwiQFwiIHJlbD1cInYtczpwYXJlbnRVbml0XCIgZGF0YS10ZW1wbGF0ZT1cInYtdWk6TGFiZWxUZW1wbGF0ZVwiPjwvc21hbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGFib3V0PVwiQFwiIHJlbD1cInYtczplbXBsb3llZVwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgYWJvdXQ9XCJAXCIgcmVsPVwidi1zOmhhc0NvbW11bmljYXRpb25NZWFuXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c21hbGwgYWJvdXQ9XCJAXCIgcHJvcGVydHk9XCJ2LXM6ZGVzY3JpcHRpb25cIj48L3NtYWxsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGhyIGNsYXNzPVwibm8tbWFyZ2luXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzZW5jZS1ibG9ja1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgIDxzcGFuIGFib3V0PVwidi1zOkFic2VuY2VVbnRpbEJ1bmRsZVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBhYm91dD1cIkBcIiBwcm9wZXJ0eT1cInYtczpkYXRlQWJzZW5jZVRvXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGVnYXRlLWJsb2NrXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgPHNwYW4gYWJvdXQ9XCJ2LXM6ZGVsZWdhdGVcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gYWJvdXQ9XCJAXCIgcmVsPVwidi1zOmRlbGVnYXRlXCIgZGF0YS10ZW1wbGF0ZT1cInYtdWk6TGFiZWxUZW1wbGF0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNtYWxsIGNsYXNzPVwib3Blbi1zdHJ1Y3R1cmUgcG9pbnRlclwiPlxuICAgICAgICA8YSBhYm91dD1cInYtczpTaG93SW5Db250YWN0c0J1bmRsZVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvYT5cbiAgICAgIDwvc21hbGw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7TUFBT0EsQ0FBQyxHQUFBQyxPQUFBLENBQUFDLE9BQUE7SUFBQTtJQUFBQyxPQUFBLFdBQUFBLENBQUE7TUFBQUMsT0FBQSxRQUVLQyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBYUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUU7UUFDekVILFFBQVEsR0FBR1AsQ0FBQyxDQUFDTyxRQUFRLENBQUM7UUFDdEJDLFNBQVMsR0FBR1IsQ0FBQyxDQUFDUSxTQUFTLENBQUM7UUFFeEIsSUFBSUYsVUFBVSxDQUFDSyxFQUFFLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7VUFDckNaLENBQUMsQ0FBQyxpQkFBaUIsRUFBRU8sUUFBUSxDQUFDLENBQUNNLEtBQUssQ0FBQyxZQUFXO1lBQzlDQyxNQUFNLENBQUNDLElBQUksQ0FBQyw0QkFBNEIsR0FBQ1QsVUFBVSxDQUFDSyxFQUFFLENBQUM7VUFDekQsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxNQUFNO1VBQ0xYLENBQUMsQ0FBQyxpQkFBaUIsRUFBRU8sUUFBUSxDQUFDLENBQUNTLE1BQU0sRUFBRTtRQUN6QztRQUVBLElBQUlWLFVBQVUsQ0FBQ1csUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1VBQ3ZDLE9BQU9YLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1ksSUFBSSxFQUFFLENBQUNDLElBQUksQ0FBQyxVQUFVQyxRQUFRLEVBQUU7WUFDbkUsSUFBSSxDQUFDQSxRQUFRLENBQUNILFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtjQUN0Q2pCLENBQUMsQ0FBQyxhQUFhLEVBQUVPLFFBQVEsQ0FBQyxDQUFDUyxNQUFNLEVBQUU7WUFDckM7WUFDQSxJQUFJLENBQUNJLFFBQVEsQ0FBQ0gsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7Y0FDM0NqQixDQUFDLENBQUMsZ0JBQWdCLEVBQUVPLFFBQVEsQ0FBQyxDQUFDUyxNQUFNLEVBQUU7WUFDeEM7WUFDQSxJQUFJLENBQUNJLFFBQVEsQ0FBQ0gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2NBQ3RDakIsQ0FBQyxDQUFDLGlCQUFpQixFQUFFTyxRQUFRLENBQUMsQ0FBQ1MsTUFBTSxFQUFFO1lBQ3pDO1VBQ0YsQ0FBQyxDQUFDO1FBQ0o7TUFDRixDQUFDO01BQUFaLE9BQUEsU0FFWWlCLElBQUk7SUFBQTtFQUFBO0FBQUEifQ==