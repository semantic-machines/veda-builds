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
        $('#taskTemplateProperties [rel="v-wf:inputVariable"] [typeof="v-wf:VarDefine"]').draggable({
          revert: true
        });
      });
      _export("html", html = "\n<div>\n  <table id=\"taskTemplateProperties\" class=\"table table-condensed table-hover properties-editor\">\n    <thead>\n      <tr>\n      <td style=\"width:25%\"><span about=\"v-wf:Net\" property=\"rdfs:label\"></span></td>\n      <td><strong><span about=\"@\" property=\"@\"></span> <a href=\"#/@\"><i class='glyphicon glyphicon-share-alt'></i></a></strong></td>\n      </tr>\n    </thead>\n    <tr onclick=\"javascript: $('#VClabel').show(); $('#viewVClabel').hide();\">\n      <td><span about=\"rdfs:label\" property=\"rdfs:label\"></span></td>\n      <td>\n        <veda-control id=\"VClabel\" data-type=\"string\" property=\"rdfs:label\" class=\"properties-editor\" style=\"display:none;\"></veda-control>\n        <div id=\"viewVClabel\" about=\"@\" property=\"rdfs:label\"></div>\n      </td>\n    </tr>\n    <tr onclick=\"javascript: $('#VCcomment').show(); $('#viewVCcomment').hide();\">\n      <td><span about=\"rdfs:comment\" property=\"rdfs:label\"></span></td>\n      <td>\n        <veda-control id=\"VCcomment\" data-type=\"string\" property=\"rdfs:comment\" class=\"properties-editor\" style=\"display:none;\"></veda-control>\n        <div id=\"viewVCcomment\" about=\"@\" property=\"rdfs:comment\"></div>\n      </td>\n    </tr>\n    <tr onclick=\"javascript: $('.VCinputVariable').show(); $('.viewVCinputVariable').hide();\">\n      <td><span about=\"v-wf:inputVariable\" property=\"rdfs:label\"></span></td>\n      <td>\n        <veda-control about=\"@\" rel=\"v-wf:inputVariable\" data-type=\"link\" class=\"VCinputVariable fulltext dropdown create properties-editor\" style=\"display:none;\"></veda-control>\n        <div class=\"VCinputVariable\" rel=\"v-wf:inputVariable\" data-template=\"v-ui:LabelTemplateWithEditLink\" style=\"display:none;\"></div>\n        <div class=\"viewVCinputVariable\" about=\"@\" rel=\"v-wf:inputVariable\" data-template=\"v-ui:LabelTemplateWithEditLink\"></div>\n      </td>\n    </tr>\n    <tr onclick=\"javascript: $('.VCoutputVariable').show(); $('.viewVCoutputVariable').hide();\">\n      <td><span about=\"v-wf:outputVariable\" property=\"rdfs:label\"></span></td>\n      <td>\n        <veda-control about=\"@\" rel=\"v-wf:outputVariable\" data-type=\"link\" class=\"VCoutputVariable fulltext dropdown create properties-editor\" style=\"display:none;\"></veda-control>\n        <div class=\"VCoutputVariable\" rel=\"v-wf:outputVariable\" data-template=\"v-ui:LabelTemplateWithEditLink\" style=\"display:none;\"></div>\n        <div class=\"viewVCoutputVariable\" about=\"@\" rel=\"v-wf:outputVariable\" data-template=\"v-ui:LabelTemplateWithEditLink\"></div>\n      </td>\n    </tr>\n    <tr onclick=\"javascript: $('.VClocalVariable').show(); $('.viewVClocalVariable').hide();\">\n      <td><span about=\"v-wf:localVariable\" property=\"rdfs:label\"></span></td>\n      <td>\n        <veda-control about=\"@\" rel=\"v-wf:localVariable\" data-type=\"link\" class=\"VClocalVariable fulltext dropdown create properties-editor\" style=\"display:none;\"></veda-control>\n        <div class=\"VClocalVariable\" rel=\"v-wf:localVariable\" data-template=\"v-ui:LabelTemplateWithEditLink\" style=\"display:none;\"></div>\n        <div class=\"viewVClocalVariable\" about=\"@\" rel=\"v-wf:localVariable\" data-template=\"v-ui:LabelTemplateWithEditLink\"></div>\n      </td>\n    </tr>\n    <tr onclick=\"javascript: $('.VCinputOutputVariable').show(); $('.viewVCinputOutputVariable').hide();\">\n      <td><span about=\"v-wf:inputOutputVariable\" property=\"rdfs:label\"></span></td>\n      <td>\n        <veda-control about=\"@\" rel=\"v-wf:inputOutputVariable\" data-type=\"link\" class=\"VCinputOutputVariable fulltext dropdown create properties-editor\" style=\"display:none;\"></veda-control>\n        <div class=\"VCinputOutputVariable\" rel=\"v-wf:inputOutputVariable\" data-template=\"v-ui:LabelTemplateWithEditLink\" style=\"display:none;\"></div>\n        <div class=\"viewVCinputOutputVariable\" about=\"@\" rel=\"v-wf:inputOutputVariable\" data-template=\"v-ui:LabelTemplateWithEditLink\"></div>\n      </td>\n    </tr>\n    <tr onclick=\"javascript: $('.button-delete', $('.VCcompletedMapping').show()).show();\">\n      <td>\n        <span about=\"v-wf:completedMapping\" property=\"rdfs:label\"></span>\n      </td>\n      <td>\n        <veda-control rel=\"v-wf:completedMapping\" data-type=\"link\" class=\"VCcompletedMapping fulltext dropdown create properties-editor\" style=\"display:none;\"></veda-control>\n        <div about=\"@\" rel=\"v-wf:completedMapping\">\n          <div class=\"VCcompletedMapping\">\n            #<a href=\"#/@\">\n              <span about=\"@\" rel=\"v-wf:mapToVariable\">\n                <span>\n                  <span about=\"@\" property=\"v-wf:varDefineName\"></span>\n                </span>\n              </span> =\n              <span about=\"@\" property=\"v-wf:mappingExpression\"></span>\n              [<span about=\"@\" property=\"@\"></span>]\n            </a>\n          <div>\n        </div>\n      </td>\n    </tr>\n  </table>\n</div>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiX2pxdWVyeSIsImRlZmF1bHQiLCJleGVjdXRlIiwiX2V4cG9ydCIsInBvc3QiLCJpbmRpdmlkdWFsIiwidGVtcGxhdGUiLCJjb250YWluZXIiLCJtb2RlIiwiZXh0cmEiLCJkcmFnZ2FibGUiLCJyZXZlcnQiLCJodG1sIl0sInNvdXJjZXMiOlsiLi4vLi4vb250b2xvZ3kvZ2VuZXJpYy1mdW5jdGlvbi90ZW1wbGF0ZXMvdi13Zl9TaW1wbGVOZXRUZW1wbGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgY29uc3QgcG9zdCA9IGZ1bmN0aW9uIChpbmRpdmlkdWFsLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCBtb2RlLCBleHRyYSkge1xuICB0ZW1wbGF0ZSA9ICQodGVtcGxhdGUpO1xuICBjb250YWluZXIgPSAkKGNvbnRhaW5lcik7XG5cbiAgJCgnI3Rhc2tUZW1wbGF0ZVByb3BlcnRpZXMgW3JlbD1cInYtd2Y6aW5wdXRWYXJpYWJsZVwiXSBbdHlwZW9mPVwidi13ZjpWYXJEZWZpbmVcIl0nKS5kcmFnZ2FibGUoe1xuICAgIHJldmVydDogdHJ1ZSxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaHRtbCA9IGBcbjxkaXY+XG4gIDx0YWJsZSBpZD1cInRhc2tUZW1wbGF0ZVByb3BlcnRpZXNcIiBjbGFzcz1cInRhYmxlIHRhYmxlLWNvbmRlbnNlZCB0YWJsZS1ob3ZlciBwcm9wZXJ0aWVzLWVkaXRvclwiPlxuICAgIDx0aGVhZD5cbiAgICAgIDx0cj5cbiAgICAgIDx0ZCBzdHlsZT1cIndpZHRoOjI1JVwiPjxzcGFuIGFib3V0PVwidi13ZjpOZXRcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+PC90ZD5cbiAgICAgIDx0ZD48c3Ryb25nPjxzcGFuIGFib3V0PVwiQFwiIHByb3BlcnR5PVwiQFwiPjwvc3Bhbj4gPGEgaHJlZj1cIiMvQFwiPjxpIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXNoYXJlLWFsdCc+PC9pPjwvYT48L3N0cm9uZz48L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICAgIDx0ciBvbmNsaWNrPVwiamF2YXNjcmlwdDogJCgnI1ZDbGFiZWwnKS5zaG93KCk7ICQoJyN2aWV3VkNsYWJlbCcpLmhpZGUoKTtcIj5cbiAgICAgIDx0ZD48c3BhbiBhYm91dD1cInJkZnM6bGFiZWxcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+PC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPHZlZGEtY29udHJvbCBpZD1cIlZDbGFiZWxcIiBkYXRhLXR5cGU9XCJzdHJpbmdcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIiBjbGFzcz1cInByb3BlcnRpZXMtZWRpdG9yXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCI+PC92ZWRhLWNvbnRyb2w+XG4gICAgICAgIDxkaXYgaWQ9XCJ2aWV3VkNsYWJlbFwiIGFib3V0PVwiQFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvZGl2PlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICAgIDx0ciBvbmNsaWNrPVwiamF2YXNjcmlwdDogJCgnI1ZDY29tbWVudCcpLnNob3coKTsgJCgnI3ZpZXdWQ2NvbW1lbnQnKS5oaWRlKCk7XCI+XG4gICAgICA8dGQ+PHNwYW4gYWJvdXQ9XCJyZGZzOmNvbW1lbnRcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+PC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPHZlZGEtY29udHJvbCBpZD1cIlZDY29tbWVudFwiIGRhdGEtdHlwZT1cInN0cmluZ1wiIHByb3BlcnR5PVwicmRmczpjb21tZW50XCIgY2xhc3M9XCJwcm9wZXJ0aWVzLWVkaXRvclwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPjwvdmVkYS1jb250cm9sPlxuICAgICAgICA8ZGl2IGlkPVwidmlld1ZDY29tbWVudFwiIGFib3V0PVwiQFwiIHByb3BlcnR5PVwicmRmczpjb21tZW50XCI+PC9kaXY+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyIG9uY2xpY2s9XCJqYXZhc2NyaXB0OiAkKCcuVkNpbnB1dFZhcmlhYmxlJykuc2hvdygpOyAkKCcudmlld1ZDaW5wdXRWYXJpYWJsZScpLmhpZGUoKTtcIj5cbiAgICAgIDx0ZD48c3BhbiBhYm91dD1cInYtd2Y6aW5wdXRWYXJpYWJsZVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8dmVkYS1jb250cm9sIGFib3V0PVwiQFwiIHJlbD1cInYtd2Y6aW5wdXRWYXJpYWJsZVwiIGRhdGEtdHlwZT1cImxpbmtcIiBjbGFzcz1cIlZDaW5wdXRWYXJpYWJsZSBmdWxsdGV4dCBkcm9wZG93biBjcmVhdGUgcHJvcGVydGllcy1lZGl0b3JcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cIlZDaW5wdXRWYXJpYWJsZVwiIHJlbD1cInYtd2Y6aW5wdXRWYXJpYWJsZVwiIGRhdGEtdGVtcGxhdGU9XCJ2LXVpOkxhYmVsVGVtcGxhdGVXaXRoRWRpdExpbmtcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInZpZXdWQ2lucHV0VmFyaWFibGVcIiBhYm91dD1cIkBcIiByZWw9XCJ2LXdmOmlucHV0VmFyaWFibGVcIiBkYXRhLXRlbXBsYXRlPVwidi11aTpMYWJlbFRlbXBsYXRlV2l0aEVkaXRMaW5rXCI+PC9kaXY+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyIG9uY2xpY2s9XCJqYXZhc2NyaXB0OiAkKCcuVkNvdXRwdXRWYXJpYWJsZScpLnNob3coKTsgJCgnLnZpZXdWQ291dHB1dFZhcmlhYmxlJykuaGlkZSgpO1wiPlxuICAgICAgPHRkPjxzcGFuIGFib3V0PVwidi13ZjpvdXRwdXRWYXJpYWJsZVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8dmVkYS1jb250cm9sIGFib3V0PVwiQFwiIHJlbD1cInYtd2Y6b3V0cHV0VmFyaWFibGVcIiBkYXRhLXR5cGU9XCJsaW5rXCIgY2xhc3M9XCJWQ291dHB1dFZhcmlhYmxlIGZ1bGx0ZXh0IGRyb3Bkb3duIGNyZWF0ZSBwcm9wZXJ0aWVzLWVkaXRvclwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPjwvdmVkYS1jb250cm9sPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiVkNvdXRwdXRWYXJpYWJsZVwiIHJlbD1cInYtd2Y6b3V0cHV0VmFyaWFibGVcIiBkYXRhLXRlbXBsYXRlPVwidi11aTpMYWJlbFRlbXBsYXRlV2l0aEVkaXRMaW5rXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2aWV3VkNvdXRwdXRWYXJpYWJsZVwiIGFib3V0PVwiQFwiIHJlbD1cInYtd2Y6b3V0cHV0VmFyaWFibGVcIiBkYXRhLXRlbXBsYXRlPVwidi11aTpMYWJlbFRlbXBsYXRlV2l0aEVkaXRMaW5rXCI+PC9kaXY+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyIG9uY2xpY2s9XCJqYXZhc2NyaXB0OiAkKCcuVkNsb2NhbFZhcmlhYmxlJykuc2hvdygpOyAkKCcudmlld1ZDbG9jYWxWYXJpYWJsZScpLmhpZGUoKTtcIj5cbiAgICAgIDx0ZD48c3BhbiBhYm91dD1cInYtd2Y6bG9jYWxWYXJpYWJsZVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8dmVkYS1jb250cm9sIGFib3V0PVwiQFwiIHJlbD1cInYtd2Y6bG9jYWxWYXJpYWJsZVwiIGRhdGEtdHlwZT1cImxpbmtcIiBjbGFzcz1cIlZDbG9jYWxWYXJpYWJsZSBmdWxsdGV4dCBkcm9wZG93biBjcmVhdGUgcHJvcGVydGllcy1lZGl0b3JcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cIlZDbG9jYWxWYXJpYWJsZVwiIHJlbD1cInYtd2Y6bG9jYWxWYXJpYWJsZVwiIGRhdGEtdGVtcGxhdGU9XCJ2LXVpOkxhYmVsVGVtcGxhdGVXaXRoRWRpdExpbmtcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInZpZXdWQ2xvY2FsVmFyaWFibGVcIiBhYm91dD1cIkBcIiByZWw9XCJ2LXdmOmxvY2FsVmFyaWFibGVcIiBkYXRhLXRlbXBsYXRlPVwidi11aTpMYWJlbFRlbXBsYXRlV2l0aEVkaXRMaW5rXCI+PC9kaXY+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyIG9uY2xpY2s9XCJqYXZhc2NyaXB0OiAkKCcuVkNpbnB1dE91dHB1dFZhcmlhYmxlJykuc2hvdygpOyAkKCcudmlld1ZDaW5wdXRPdXRwdXRWYXJpYWJsZScpLmhpZGUoKTtcIj5cbiAgICAgIDx0ZD48c3BhbiBhYm91dD1cInYtd2Y6aW5wdXRPdXRwdXRWYXJpYWJsZVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8dmVkYS1jb250cm9sIGFib3V0PVwiQFwiIHJlbD1cInYtd2Y6aW5wdXRPdXRwdXRWYXJpYWJsZVwiIGRhdGEtdHlwZT1cImxpbmtcIiBjbGFzcz1cIlZDaW5wdXRPdXRwdXRWYXJpYWJsZSBmdWxsdGV4dCBkcm9wZG93biBjcmVhdGUgcHJvcGVydGllcy1lZGl0b3JcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cIlZDaW5wdXRPdXRwdXRWYXJpYWJsZVwiIHJlbD1cInYtd2Y6aW5wdXRPdXRwdXRWYXJpYWJsZVwiIGRhdGEtdGVtcGxhdGU9XCJ2LXVpOkxhYmVsVGVtcGxhdGVXaXRoRWRpdExpbmtcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInZpZXdWQ2lucHV0T3V0cHV0VmFyaWFibGVcIiBhYm91dD1cIkBcIiByZWw9XCJ2LXdmOmlucHV0T3V0cHV0VmFyaWFibGVcIiBkYXRhLXRlbXBsYXRlPVwidi11aTpMYWJlbFRlbXBsYXRlV2l0aEVkaXRMaW5rXCI+PC9kaXY+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyIG9uY2xpY2s9XCJqYXZhc2NyaXB0OiAkKCcuYnV0dG9uLWRlbGV0ZScsICQoJy5WQ2NvbXBsZXRlZE1hcHBpbmcnKS5zaG93KCkpLnNob3coKTtcIj5cbiAgICAgIDx0ZD5cbiAgICAgICAgPHNwYW4gYWJvdXQ9XCJ2LXdmOmNvbXBsZXRlZE1hcHBpbmdcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+XG4gICAgICA8L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8dmVkYS1jb250cm9sIHJlbD1cInYtd2Y6Y29tcGxldGVkTWFwcGluZ1wiIGRhdGEtdHlwZT1cImxpbmtcIiBjbGFzcz1cIlZDY29tcGxldGVkTWFwcGluZyBmdWxsdGV4dCBkcm9wZG93biBjcmVhdGUgcHJvcGVydGllcy1lZGl0b3JcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgICAgPGRpdiBhYm91dD1cIkBcIiByZWw9XCJ2LXdmOmNvbXBsZXRlZE1hcHBpbmdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiVkNjb21wbGV0ZWRNYXBwaW5nXCI+XG4gICAgICAgICAgICAjPGEgaHJlZj1cIiMvQFwiPlxuICAgICAgICAgICAgICA8c3BhbiBhYm91dD1cIkBcIiByZWw9XCJ2LXdmOm1hcFRvVmFyaWFibGVcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGFib3V0PVwiQFwiIHByb3BlcnR5PVwidi13Zjp2YXJEZWZpbmVOYW1lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPiA9XG4gICAgICAgICAgICAgIDxzcGFuIGFib3V0PVwiQFwiIHByb3BlcnR5PVwidi13ZjptYXBwaW5nRXhwcmVzc2lvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgWzxzcGFuIGFib3V0PVwiQFwiIHByb3BlcnR5PVwiQFwiPjwvc3Bhbj5dXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gIDwvdGFibGU+XG48L2Rpdj5cbmA7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O01BQU9BLENBQUMsR0FBQUMsT0FBQSxDQUFBQyxPQUFBO0lBQUE7SUFBQUMsT0FBQSxXQUFBQSxDQUFBO01BQUFDLE9BQUEsU0FFS0MsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQWFDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFO1FBQzFFSCxRQUFRLEdBQUdQLENBQUMsQ0FBQ08sUUFBUSxDQUFDO1FBQ3RCQyxTQUFTLEdBQUdSLENBQUMsQ0FBQ1EsU0FBUyxDQUFDO1FBRXhCUixDQUFDLENBQUMsOEVBQThFLENBQUMsQ0FBQ1csU0FBUyxDQUFDO1VBQzFGQyxNQUFNLEVBQUU7UUFDVixDQUFDLENBQUM7TUFDSixDQUFDO01BQUFSLE9BQUEsU0FFWVMsSUFBSTtJQUFBO0VBQUE7QUFBQSJ9