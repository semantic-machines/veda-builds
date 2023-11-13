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
        var subscriptions = individual['v-s:hasFavorite'];
        var subscribeDiff = [];
        function favoriteHandler() {
          if (individual['v-s:hasFavorite'].length < subscriptions.length) {
            subscriptions.forEach(function (subscribe) {
              var isExist = individual['v-s:hasFavorite'].some(function (f) {
                return f.id == subscribe.id;
              });
              if (!isExist) subscribeDiff.push(subscribe);
            });
          }
          subscriptions = individual['v-s:hasFavorite'];
        }
        function saveHandler() {
          if (subscribeDiff.length > 0) {
            subscribeDiff.forEach(function (subscribe) {
              subscribe.remove();
            });
          }
        }
        individual.on('beforeSave', saveHandler);
        individual.on('v-s:hasFavorite', favoriteHandler);
        template.one('remove', function () {
          individual.off('v-s:hasFavorite', favoriteHandler);
          individual.off('beforeSave', saveHandler);
        });
      });
      _export("html", html = "\n  <div class=\"container\">\n    <ul class=\"nav nav-right\" role=\"tablist\">\n      <li class=\"pull-left\"><h2 class=\"no-margin\" about=\"v-s:PersonalAspectTemplate\" property=\"rdfs:comment\" style=\"color:#555;\"></h2></li>\n      <li class=\"pull-right\"><span about=\"@\" data-template=\"v-ui:StandardButtonsTemplate\" data-embedded=\"true\" data-buttons=\"edit save cancel\"></span></li>\n    </ul>\n    <br />\n    <div class=\"row\" style=\"display: flex; flex-flow: row wrap;\">\n      <div\n        class=\"col-md-4 col-sm-6 col-xs-12\"\n        style=\"display: flex;\"\n        about=\"@\"\n        rel=\"v-s:owner\"\n        data-template=\"v-s:PersonalImageTemplate\"\n        data-embedded=\"true\"></div>\n      <div class=\"col-md-4 col-sm-6 col-xs-12\" style=\"display: flex;\" about=\"@\" rel=\"v-s:owner\" data-template=\"v-s:PersonalInfoTemplate\"></div>\n      <div class=\"col-md-4 col-sm-6 col-xs-12\" style=\"display: flex;\" about=\"@\" rel=\"v-s:owner\" data-embedded=\"true\">\n        <div about=\"@\" style=\"display: flex; width: 100%\" rel=\"v-ui:hasPreferences\" data-template=\"v-s:PersonalPreferencesTemplate\" data-embedded=\"true\"></div>\n      </div>\n    </div>\n    <div class=\"row\" style=\"display: flex; flex-flow: row wrap;\">\n      <div class=\"blanks col-md-4 col-sm-6 col-xs-12\" style=\"display: flex;\">\n        <div class=\"sheet\" style=\"width:100%;\">\n          <h4 class=\"text-center\" style=\"text-transform: uppercase\">\n            <i class=\"fa fa-file-text-o text-muted margin-md-h\"></i><span about=\"v-s:CreateBundle\" property=\"rdfs:label\"></span>\n          </h4>\n          <div rel=\"v-s:hasBlank\">\n            <a href=\"#/@\" class=\"btn btn-success btn-lg btn-block margin-lg\" about=\"@\" property=\"rdfs:label\" style=\"white-space: normal;\"></a>\n          </div>\n          <div rel=\"v-s:hasCreate\">\n            <a href=\"#/@\" class=\"btn btn-success btn-lg btn-block margin-lg\" about=\"@\" property=\"rdfs:label\" style=\"white-space: normal;\"></a>\n          </div>\n        </div>\n      </div>\n      <div class=\"registries col-md-4 col-sm-6 col-xs-12\" style=\"display: flex;\">\n        <div class=\"sheet\" style=\"width:100%;\">\n          <h4 class=\"text-center\" style=\"text-transform: uppercase\">\n            <i class=\"fa fa-table text-muted margin-md-h\"></i><span about=\"v-s:FindBundle\" property=\"rdfs:label\"></span>\n          </h4>\n          <div rel=\"v-s:hasRegistry\">\n            <a href=\"#/@\" class=\"btn btn-info btn-lg btn-block margin-lg\" about=\"@\" property=\"rdfs:label\" style=\"white-space: normal;\"></a>\n          </div>\n        </div>\n      </div>\n      <div class=\"reports col-md-4 col-sm-6 col-xs-12\" style=\"display: flex;\">\n        <div class=\"sheet\" style=\"width:100%;\">\n          <h4 class=\"text-center\" style=\"text-transform: uppercase\">\n            <i class=\"fa fa-bar-chart text-muted margin-md-h\"></i><span about=\"v-s:Report\" property=\"rdfs:label\"></span>\n          </h4>\n          <div rel=\"v-s:hasReport\">\n            <a href=\"#/@\" class=\"btn btn-warning btn-lg btn-block margin-lg\" about=\"@\" property=\"rdfs:label\" style=\"white-space: normal;\"></a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"sheet\">\n      <h4 class=\"text-center\" style=\"text-transform: uppercase\">\n        <i class=\"fa fa-star text-muted margin-md-h\"></i><span about=\"v-s:Favorites\" property=\"rdfs:label\"></span>\n      </h4>\n      <hr class=\"margin-lg\" />\n      <ol rel=\"v-s:hasFavorite\" class=\"columns-3\">\n        <li rel=\"v-s:onDocument\" data-template=\"v-ui:ClassNameLabelLinkTemplate\"></li>\n      </ol>\n    </div>\n  </div>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiX2pxdWVyeSIsImRlZmF1bHQiLCJleGVjdXRlIiwiX2V4cG9ydCIsInBvc3QiLCJpbmRpdmlkdWFsIiwidGVtcGxhdGUiLCJjb250YWluZXIiLCJtb2RlIiwiZXh0cmEiLCJzdWJzY3JpcHRpb25zIiwic3Vic2NyaWJlRGlmZiIsImZhdm9yaXRlSGFuZGxlciIsImxlbmd0aCIsImZvckVhY2giLCJzdWJzY3JpYmUiLCJpc0V4aXN0Iiwic29tZSIsImYiLCJpZCIsInB1c2giLCJzYXZlSGFuZGxlciIsInJlbW92ZSIsIm9uIiwib25lIiwib2ZmIiwiaHRtbCJdLCJzb3VyY2VzIjpbIi4uLy4uL29udG9sb2d5L2dlbmVyaWMtYXBwbGljYXRpb24vdGVtcGxhdGVzL3Ytc19QZXJzb25hbEFzcGVjdFRlbXBsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBjb25zdCBwb3N0ID0gZnVuY3Rpb24gKGluZGl2aWR1YWwsIHRlbXBsYXRlLCBjb250YWluZXIsIG1vZGUsIGV4dHJhKSB7XG4gIHRlbXBsYXRlID0gJCh0ZW1wbGF0ZSk7XG4gIGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcblxuICBsZXQgc3Vic2NyaXB0aW9ucyA9IGluZGl2aWR1YWxbJ3YtczpoYXNGYXZvcml0ZSddO1xuICBjb25zdCBzdWJzY3JpYmVEaWZmID0gW107XG4gIGZ1bmN0aW9uIGZhdm9yaXRlSGFuZGxlciAoKSB7XG4gICAgaWYgKGluZGl2aWR1YWxbJ3YtczpoYXNGYXZvcml0ZSddLmxlbmd0aCA8IHN1YnNjcmlwdGlvbnMubGVuZ3RoKSB7XG4gICAgICBzdWJzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZSkge1xuICAgICAgICBjb25zdCBpc0V4aXN0ID0gaW5kaXZpZHVhbFsndi1zOmhhc0Zhdm9yaXRlJ10uc29tZShmdW5jdGlvbiAoZikge1xuICAgICAgICAgIHJldHVybiBmLmlkID09IHN1YnNjcmliZS5pZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNFeGlzdCkgc3Vic2NyaWJlRGlmZi5wdXNoKHN1YnNjcmliZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgc3Vic2NyaXB0aW9ucyA9IGluZGl2aWR1YWxbJ3YtczpoYXNGYXZvcml0ZSddO1xuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZUhhbmRsZXIgKCkge1xuICAgIGlmIChzdWJzY3JpYmVEaWZmLmxlbmd0aCA+IDApIHtcbiAgICAgIHN1YnNjcmliZURpZmYuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlKSB7XG4gICAgICAgIHN1YnNjcmliZS5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGluZGl2aWR1YWwub24oJ2JlZm9yZVNhdmUnLCBzYXZlSGFuZGxlcik7XG4gIGluZGl2aWR1YWwub24oJ3YtczpoYXNGYXZvcml0ZScsIGZhdm9yaXRlSGFuZGxlcik7XG4gIHRlbXBsYXRlLm9uZSgncmVtb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgIGluZGl2aWR1YWwub2ZmKCd2LXM6aGFzRmF2b3JpdGUnLCBmYXZvcml0ZUhhbmRsZXIpO1xuICAgIGluZGl2aWR1YWwub2ZmKCdiZWZvcmVTYXZlJywgc2F2ZUhhbmRsZXIpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBodG1sID0gYFxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPHVsIGNsYXNzPVwibmF2IG5hdi1yaWdodFwiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICA8bGkgY2xhc3M9XCJwdWxsLWxlZnRcIj48aDIgY2xhc3M9XCJuby1tYXJnaW5cIiBhYm91dD1cInYtczpQZXJzb25hbEFzcGVjdFRlbXBsYXRlXCIgcHJvcGVydHk9XCJyZGZzOmNvbW1lbnRcIiBzdHlsZT1cImNvbG9yOiM1NTU7XCI+PC9oMj48L2xpPlxuICAgICAgPGxpIGNsYXNzPVwicHVsbC1yaWdodFwiPjxzcGFuIGFib3V0PVwiQFwiIGRhdGEtdGVtcGxhdGU9XCJ2LXVpOlN0YW5kYXJkQnV0dG9uc1RlbXBsYXRlXCIgZGF0YS1lbWJlZGRlZD1cInRydWVcIiBkYXRhLWJ1dHRvbnM9XCJlZGl0IHNhdmUgY2FuY2VsXCI+PC9zcGFuPjwvbGk+XG4gICAgPC91bD5cbiAgICA8YnIgLz5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWZsb3c6IHJvdyB3cmFwO1wiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNvbC1tZC00IGNvbC1zbS02IGNvbC14cy0xMlwiXG4gICAgICAgIHN0eWxlPVwiZGlzcGxheTogZmxleDtcIlxuICAgICAgICBhYm91dD1cIkBcIlxuICAgICAgICByZWw9XCJ2LXM6b3duZXJcIlxuICAgICAgICBkYXRhLXRlbXBsYXRlPVwidi1zOlBlcnNvbmFsSW1hZ2VUZW1wbGF0ZVwiXG4gICAgICAgIGRhdGEtZW1iZWRkZWQ9XCJ0cnVlXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLXNtLTYgY29sLXhzLTEyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O1wiIGFib3V0PVwiQFwiIHJlbD1cInYtczpvd25lclwiIGRhdGEtdGVtcGxhdGU9XCJ2LXM6UGVyc29uYWxJbmZvVGVtcGxhdGVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtc20tNiBjb2wteHMtMTJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XCIgYWJvdXQ9XCJAXCIgcmVsPVwidi1zOm93bmVyXCIgZGF0YS1lbWJlZGRlZD1cInRydWVcIj5cbiAgICAgICAgPGRpdiBhYm91dD1cIkBcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxMDAlXCIgcmVsPVwidi11aTpoYXNQcmVmZXJlbmNlc1wiIGRhdGEtdGVtcGxhdGU9XCJ2LXM6UGVyc29uYWxQcmVmZXJlbmNlc1RlbXBsYXRlXCIgZGF0YS1lbWJlZGRlZD1cInRydWVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogcm93IHdyYXA7XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmxhbmtzIGNvbC1tZC00IGNvbC1zbS02IGNvbC14cy0xMlwiIHN0eWxlPVwiZGlzcGxheTogZmxleDtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNoZWV0XCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPlxuICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtY2VudGVyXCIgc3R5bGU9XCJ0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWZpbGUtdGV4dC1vIHRleHQtbXV0ZWQgbWFyZ2luLW1kLWhcIj48L2k+PHNwYW4gYWJvdXQ9XCJ2LXM6Q3JlYXRlQnVuZGxlXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9zcGFuPlxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPGRpdiByZWw9XCJ2LXM6aGFzQmxhbmtcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL0BcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tbGcgYnRuLWJsb2NrIG1hcmdpbi1sZ1wiIGFib3V0PVwiQFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiIHN0eWxlPVwid2hpdGUtc3BhY2U6IG5vcm1hbDtcIj48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiByZWw9XCJ2LXM6aGFzQ3JlYXRlXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiIy9AXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWxnIGJ0bi1ibG9jayBtYXJnaW4tbGdcIiBhYm91dD1cIkBcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIiBzdHlsZT1cIndoaXRlLXNwYWNlOiBub3JtYWw7XCI+PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJlZ2lzdHJpZXMgY29sLW1kLTQgY29sLXNtLTYgY29sLXhzLTEyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hlZXRcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+XG4gICAgICAgICAgPGg0IGNsYXNzPVwidGV4dC1jZW50ZXJcIiBzdHlsZT1cInRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGFibGUgdGV4dC1tdXRlZCBtYXJnaW4tbWQtaFwiPjwvaT48c3BhbiBhYm91dD1cInYtczpGaW5kQnVuZGxlXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9zcGFuPlxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPGRpdiByZWw9XCJ2LXM6aGFzUmVnaXN0cnlcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL0BcIiBjbGFzcz1cImJ0biBidG4taW5mbyBidG4tbGcgYnRuLWJsb2NrIG1hcmdpbi1sZ1wiIGFib3V0PVwiQFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiIHN0eWxlPVwid2hpdGUtc3BhY2U6IG5vcm1hbDtcIj48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVwb3J0cyBjb2wtbWQtNCBjb2wtc20tNiBjb2wteHMtMTJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGVldFwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cbiAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPVwidGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1iYXItY2hhcnQgdGV4dC1tdXRlZCBtYXJnaW4tbWQtaFwiPjwvaT48c3BhbiBhYm91dD1cInYtczpSZXBvcnRcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICA8ZGl2IHJlbD1cInYtczpoYXNSZXBvcnRcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjL0BcIiBjbGFzcz1cImJ0biBidG4td2FybmluZyBidG4tbGcgYnRuLWJsb2NrIG1hcmdpbi1sZ1wiIGFib3V0PVwiQFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiIHN0eWxlPVwid2hpdGUtc3BhY2U6IG5vcm1hbDtcIj48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNoZWV0XCI+XG4gICAgICA8aDQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPVwidGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXN0YXIgdGV4dC1tdXRlZCBtYXJnaW4tbWQtaFwiPjwvaT48c3BhbiBhYm91dD1cInYtczpGYXZvcml0ZXNcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+XG4gICAgICA8L2g0PlxuICAgICAgPGhyIGNsYXNzPVwibWFyZ2luLWxnXCIgLz5cbiAgICAgIDxvbCByZWw9XCJ2LXM6aGFzRmF2b3JpdGVcIiBjbGFzcz1cImNvbHVtbnMtM1wiPlxuICAgICAgICA8bGkgcmVsPVwidi1zOm9uRG9jdW1lbnRcIiBkYXRhLXRlbXBsYXRlPVwidi11aTpDbGFzc05hbWVMYWJlbExpbmtUZW1wbGF0ZVwiPjwvbGk+XG4gICAgICA8L29sPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O01BQU9BLENBQUMsR0FBQUMsT0FBQSxDQUFBQyxPQUFBO0lBQUE7SUFBQUMsT0FBQSxXQUFBQSxDQUFBO01BQUFDLE9BQUEsU0FFS0MsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQWFDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFO1FBQzFFSCxRQUFRLEdBQUdQLENBQUMsQ0FBQ08sUUFBUSxDQUFDO1FBQ3RCQyxTQUFTLEdBQUdSLENBQUMsQ0FBQ1EsU0FBUyxDQUFDO1FBRXhCLElBQUlHLGFBQWEsR0FBR0wsVUFBVSxDQUFDLGlCQUFpQixDQUFDO1FBQ2pELElBQU1NLGFBQWEsR0FBRyxFQUFFO1FBQ3hCLFNBQVNDLGVBQWVBLENBQUEsRUFBSTtVQUMxQixJQUFJUCxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQ1EsTUFBTSxHQUFHSCxhQUFhLENBQUNHLE1BQU0sRUFBRTtZQUMvREgsYUFBYSxDQUFDSSxPQUFPLENBQUMsVUFBVUMsU0FBUyxFQUFFO2NBQ3pDLElBQU1DLE9BQU8sR0FBR1gsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUNZLElBQUksQ0FBQyxVQUFVQyxDQUFDLEVBQUU7Z0JBQzlELE9BQU9BLENBQUMsQ0FBQ0MsRUFBRSxJQUFJSixTQUFTLENBQUNJLEVBQUU7Y0FDN0IsQ0FBQyxDQUFDO2NBQ0YsSUFBSSxDQUFDSCxPQUFPLEVBQUVMLGFBQWEsQ0FBQ1MsSUFBSSxDQUFDTCxTQUFTLENBQUM7WUFDN0MsQ0FBQyxDQUFDO1VBQ0o7VUFDQUwsYUFBYSxHQUFHTCxVQUFVLENBQUMsaUJBQWlCLENBQUM7UUFDL0M7UUFFQSxTQUFTZ0IsV0FBV0EsQ0FBQSxFQUFJO1VBQ3RCLElBQUlWLGFBQWEsQ0FBQ0UsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QkYsYUFBYSxDQUFDRyxPQUFPLENBQUMsVUFBVUMsU0FBUyxFQUFFO2NBQ3pDQSxTQUFTLENBQUNPLE1BQU0sRUFBRTtZQUNwQixDQUFDLENBQUM7VUFDSjtRQUNGO1FBRUFqQixVQUFVLENBQUNrQixFQUFFLENBQUMsWUFBWSxFQUFFRixXQUFXLENBQUM7UUFDeENoQixVQUFVLENBQUNrQixFQUFFLENBQUMsaUJBQWlCLEVBQUVYLGVBQWUsQ0FBQztRQUNqRE4sUUFBUSxDQUFDa0IsR0FBRyxDQUFDLFFBQVEsRUFBRSxZQUFZO1VBQ2pDbkIsVUFBVSxDQUFDb0IsR0FBRyxDQUFDLGlCQUFpQixFQUFFYixlQUFlLENBQUM7VUFDbERQLFVBQVUsQ0FBQ29CLEdBQUcsQ0FBQyxZQUFZLEVBQUVKLFdBQVcsQ0FBQztRQUMzQyxDQUFDLENBQUM7TUFDSixDQUFDO01BQUFsQixPQUFBLFNBRVl1QixJQUFJO0lBQUE7RUFBQTtBQUFBIn0=