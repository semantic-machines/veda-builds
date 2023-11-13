"use strict";

System.register(["jquery"], function (_export, _context) {
  "use strict";

  var $, pre, html;
  return {
    setters: [function (_jquery) {
      $ = _jquery.default;
    }],
    execute: function () {
      // import Backend from '/js/common/backend.js';
      // import veda from '/js/common/veda.js';
      _export("pre", pre = function pre(individual, template, container, mode, extra) {
        template = $(template);
        container = $(container);
        template.on('validate', function () {
          var result = {};
          if (!individual.hasValue('rdfs:label')) {
            result['rdfs:label'] = {
              state: false,
              cause: ['v-ui:minCardinality']
            };
          }
          if (!individual.hasValue('v-s:parentOrganization')) {
            result['v-s:parentOrganization'] = {
              state: false,
              cause: ['v-ui:minCardinality']
            };
          }
          if (!individual.hasValue('v-s:parentUnit')) {
            result['v-s:parentUnit'] = {
              state: false,
              cause: ['v-ui:minCardinality']
            };
          }
          /* if( individual.hasValue('rdfs:label') && individual.hasValue('v-s:parentOrganization') && individual.isNew())  {
            var queryString = "'rdf:type'==='v-s:Position' && 'v-s:parentUnit'=='" + individual['v-s:parentUnit'][0].id + "' && 'rdfs:label'=='" + individual['rdfs:label'][0] + "'";
            Backend.query(veda.ticket, queryString).then(function (queryResult) {
              var tmp = queryResult.result;
              if (tmp.length == 0) {
                $('#warningOccupationName').addClass('hide');
              } else {
                $('#warningOccupationName').removeClass('hide');
              }
            });
          }
          if( individual.hasValue('v-s:subjectCode') && individual.hasValue('v-s:parentOrganization') && individual.isNew())  {
            var queryString = "'rdf:type'==='v-s:Position' && 'v-s:parentOrganization'=='" + individual['v-s:parentOrganization'][0].id + "' && 'v-s:subjectCode'=='" + individual['v-s:subjectCode'][0] + "'";
            Backend.query(veda.ticket, queryString).then(function (queryResult) {
              var tmp = queryResult.result;
              if (tmp.length == 0) {
                $('#warningOccupationSubCode').addClass('hide');
              } else {
                $('#warningOccupationSubCode').removeClass('hide');
              }
            });
          }*/
          template[0].dispatchEvent(new CustomEvent('validated', {
            detail: result
          }));
        });
      });
      _export("html", html = "\n  <div>\n    <div class=\"container sheet\">\n      <h2>\n        <span about=\"v-s:Position\" property=\"rdfs:label\"></span>\n        <small about=\"@\" property=\"rdfs:label\"></small>\n      </h2>\n      <div class=\"alert alert-warning\">\n        <span>\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435! \u0415\u0441\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0442 \u0434\u0430\u043D\u043D\u0443\u044E \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C, \u0442\u043E \u043E\u043D\u0438 \u0432\u0441\u0435 \u0431\u0443\u0434\u0443\u0442 \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043D\u044B \u0432 \u0434\u0440\u0443\u0433\u043E\u0439 \u043E\u0442\u0434\u0435\u043B.</span>\n      </div>\n      <hr />\n      <div class=\"row row-attribute\">\n        <div class=\"col-sm-3 col-xs-5\">\n          <label about=\"v-s:Organization\" property=\"rdfs:label\"></label>\n        </div>\n        <div class=\"col-sm-9 col-xs-7\">\n          <div about=\"@\" rel=\"v-s:parentOrganization\" class=\"view edit search\" data-template=\"v-ui:LabelLinkTemplate\"></div>\n          <!--<veda-control rel=\"v-s:parentOrganization\" data-query-prefix=\"'rdf:type'=='v-s:Organization'\" data-type=\"link\" class=\"-view edit search fulltext dropdown notEditForUsers\"></veda-control>-->\n        </div>\n      </div>\n      <div class=\"row row-attribute\">\n        <div class=\"col-sm-3 col-xs-5\">\n          <label about=\"v-s:Department\" property=\"rdfs:label\"></label>\n        </div>\n        <div class=\"col-sm-9 col-xs-7\">\n          <div about=\"@\" rel=\"v-s:parentUnit\" class=\"view edit search\" data-template=\"v-ui:LabelLinkTemplate\"></div>\n          <veda-control\n            rel=\"v-s:parentUnit\"\n            data-query-prefix=\"('rdf:type'=='v-s:Department' && 'v-s:parentOrganization'=='{@.v-s:parentOrganization.id}') || '@'=='{@.v-s:parentOrganization.id}'\"\n            data-type=\"link\"\n            class=\"-view edit search fulltext dropdown notEditForUsers\"></veda-control>\n        </div>\n      </div>\n      <div class=\"row row-attribute\">\n        <div class=\"col-sm-3 col-xs-5\">\n          <label about=\"v-s:title\" property=\"rdfs:label\"></label>\n        </div>\n        <div class=\"col-sm-9 col-xs-7\">\n          <div property=\"rdfs:label\" class=\"view -edit -search\"></div>\n          <veda-control data-type=\"multilingualText\" property=\"rdfs:label\" class=\"-view edit search\"></veda-control>\n        </div>\n      </div>\n      <div class=\"row row-attribute\">\n        <div class=\"col-sm-3 col-xs-5\">\n          <label about=\"v-s:PositionCode\" property=\"rdfs:label\"></label>\n        </div>\n        <div class=\"col-sm-9 col-xs-7\">\n          <div property=\"v-s:subjectCode\" class=\"view -edit -search\"></div>\n          <!--<veda-control data-type=\"string\" property=\"v-s:subjectCode\" class=\"-view edit search\"></veda-control>-->\n        </div>\n      </div>\n      <hr />\n      <br />\n      <!--\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430-->\n      <div about=\"@\" data-template=\"v-ui:SystemPropertiesTemplate\" data-embedded=\"true\"></div>\n      <br />\n      <!-- BUTTONS -->\n      <div class=\"actions view edit -search\">\n        <span about=\"@\" data-template=\"v-ui:StandardButtonsTemplate\" data-embedded=\"true\" data-buttons=\"edit save cancel delete\"></span>\n      </div>\n    </div>\n  </div>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiX2pxdWVyeSIsImRlZmF1bHQiLCJleGVjdXRlIiwiX2V4cG9ydCIsInByZSIsImluZGl2aWR1YWwiLCJ0ZW1wbGF0ZSIsImNvbnRhaW5lciIsIm1vZGUiLCJleHRyYSIsIm9uIiwicmVzdWx0IiwiaGFzVmFsdWUiLCJzdGF0ZSIsImNhdXNlIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiaHRtbCJdLCJzb3VyY2VzIjpbIi4uLy4uL29udG9sb2d5L2Fic3RyYWN0LWRpY3Rpb25hcnkvb3JnYW5pemF0aW9uL3RlbXBsYXRlcy92LXNfUG9zaXRpb25NaW5pbWFsVGVtcGxhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcbi8vIGltcG9ydCBCYWNrZW5kIGZyb20gJy9qcy9jb21tb24vYmFja2VuZC5qcyc7XG4vLyBpbXBvcnQgdmVkYSBmcm9tICcvanMvY29tbW9uL3ZlZGEuanMnO1xuXG5leHBvcnQgY29uc3QgcHJlID0gZnVuY3Rpb24gKGluZGl2aWR1YWwsIHRlbXBsYXRlLCBjb250YWluZXIsIG1vZGUsIGV4dHJhKSB7XG4gIHRlbXBsYXRlID0gJCh0ZW1wbGF0ZSk7XG4gIGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcblxuICB0ZW1wbGF0ZS5vbigndmFsaWRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgaWYgKCFpbmRpdmlkdWFsLmhhc1ZhbHVlKCdyZGZzOmxhYmVsJykpIHtcbiAgICAgIHJlc3VsdFsncmRmczpsYWJlbCddID0ge1xuICAgICAgICBzdGF0ZTogZmFsc2UsXG4gICAgICAgIGNhdXNlOiBbJ3YtdWk6bWluQ2FyZGluYWxpdHknXSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICghaW5kaXZpZHVhbC5oYXNWYWx1ZSgndi1zOnBhcmVudE9yZ2FuaXphdGlvbicpKSB7XG4gICAgICByZXN1bHRbJ3YtczpwYXJlbnRPcmdhbml6YXRpb24nXSA9IHtcbiAgICAgICAgc3RhdGU6IGZhbHNlLFxuICAgICAgICBjYXVzZTogWyd2LXVpOm1pbkNhcmRpbmFsaXR5J10sXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoIWluZGl2aWR1YWwuaGFzVmFsdWUoJ3YtczpwYXJlbnRVbml0JykpIHtcbiAgICAgIHJlc3VsdFsndi1zOnBhcmVudFVuaXQnXSA9IHtcbiAgICAgICAgc3RhdGU6IGZhbHNlLFxuICAgICAgICBjYXVzZTogWyd2LXVpOm1pbkNhcmRpbmFsaXR5J10sXG4gICAgICB9O1xuICAgIH1cbiAgICAvKiBpZiggaW5kaXZpZHVhbC5oYXNWYWx1ZSgncmRmczpsYWJlbCcpICYmIGluZGl2aWR1YWwuaGFzVmFsdWUoJ3YtczpwYXJlbnRPcmdhbml6YXRpb24nKSAmJiBpbmRpdmlkdWFsLmlzTmV3KCkpICB7XG4gICAgICB2YXIgcXVlcnlTdHJpbmcgPSBcIidyZGY6dHlwZSc9PT0ndi1zOlBvc2l0aW9uJyAmJiAndi1zOnBhcmVudFVuaXQnPT0nXCIgKyBpbmRpdmlkdWFsWyd2LXM6cGFyZW50VW5pdCddWzBdLmlkICsgXCInICYmICdyZGZzOmxhYmVsJz09J1wiICsgaW5kaXZpZHVhbFsncmRmczpsYWJlbCddWzBdICsgXCInXCI7XG4gICAgICBCYWNrZW5kLnF1ZXJ5KHZlZGEudGlja2V0LCBxdWVyeVN0cmluZykudGhlbihmdW5jdGlvbiAocXVlcnlSZXN1bHQpIHtcbiAgICAgICAgdmFyIHRtcCA9IHF1ZXJ5UmVzdWx0LnJlc3VsdDtcbiAgICAgICAgaWYgKHRtcC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICQoJyN3YXJuaW5nT2NjdXBhdGlvbk5hbWUnKS5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoJyN3YXJuaW5nT2NjdXBhdGlvbk5hbWUnKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYoIGluZGl2aWR1YWwuaGFzVmFsdWUoJ3YtczpzdWJqZWN0Q29kZScpICYmIGluZGl2aWR1YWwuaGFzVmFsdWUoJ3YtczpwYXJlbnRPcmdhbml6YXRpb24nKSAmJiBpbmRpdmlkdWFsLmlzTmV3KCkpICB7XG4gICAgICB2YXIgcXVlcnlTdHJpbmcgPSBcIidyZGY6dHlwZSc9PT0ndi1zOlBvc2l0aW9uJyAmJiAndi1zOnBhcmVudE9yZ2FuaXphdGlvbic9PSdcIiArIGluZGl2aWR1YWxbJ3YtczpwYXJlbnRPcmdhbml6YXRpb24nXVswXS5pZCArIFwiJyAmJiAndi1zOnN1YmplY3RDb2RlJz09J1wiICsgaW5kaXZpZHVhbFsndi1zOnN1YmplY3RDb2RlJ11bMF0gKyBcIidcIjtcbiAgICAgIEJhY2tlbmQucXVlcnkodmVkYS50aWNrZXQsIHF1ZXJ5U3RyaW5nKS50aGVuKGZ1bmN0aW9uIChxdWVyeVJlc3VsdCkge1xuICAgICAgICB2YXIgdG1wID0gcXVlcnlSZXN1bHQucmVzdWx0O1xuICAgICAgICBpZiAodG1wLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgJCgnI3dhcm5pbmdPY2N1cGF0aW9uU3ViQ29kZScpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJCgnI3dhcm5pbmdPY2N1cGF0aW9uU3ViQ29kZScpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0qL1xuICAgIHRlbXBsYXRlWzBdLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd2YWxpZGF0ZWQnLCB7ZGV0YWlsOiByZXN1bHR9KSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGh0bWwgPSBgXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBzaGVldFwiPlxuICAgICAgPGgyPlxuICAgICAgICA8c3BhbiBhYm91dD1cInYtczpQb3NpdGlvblwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj5cbiAgICAgICAgPHNtYWxsIGFib3V0PVwiQFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc21hbGw+XG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5cbiAgICAgICAgPHNwYW4+0JLQvdC40LzQsNC90LjQtSEg0JXRgdC70Lgg0L3QtdGB0LrQvtC70YzQutC+INGB0L7RgtGA0YPQtNC90LjQutC+0LIg0LfQsNC90LjQvNCw0Y7RgiDQtNCw0L3QvdGD0Y4g0LTQvtC70LbQvdC+0YHRgtGMLCDRgtC+INC+0L3QuCDQstGB0LUg0LHRg9C00YPRgiDQv9C10YDQtdCy0LXQtNC10L3RiyDQsiDQtNGA0YPQs9C+0Lkg0L7RgtC00LXQuy48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxociAvPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyByb3ctYXR0cmlidXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMyBjb2wteHMtNVwiPlxuICAgICAgICAgIDxsYWJlbCBhYm91dD1cInYtczpPcmdhbml6YXRpb25cIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05IGNvbC14cy03XCI+XG4gICAgICAgICAgPGRpdiBhYm91dD1cIkBcIiByZWw9XCJ2LXM6cGFyZW50T3JnYW5pemF0aW9uXCIgY2xhc3M9XCJ2aWV3IGVkaXQgc2VhcmNoXCIgZGF0YS10ZW1wbGF0ZT1cInYtdWk6TGFiZWxMaW5rVGVtcGxhdGVcIj48L2Rpdj5cbiAgICAgICAgICA8IS0tPHZlZGEtY29udHJvbCByZWw9XCJ2LXM6cGFyZW50T3JnYW5pemF0aW9uXCIgZGF0YS1xdWVyeS1wcmVmaXg9XCIncmRmOnR5cGUnPT0ndi1zOk9yZ2FuaXphdGlvbidcIiBkYXRhLXR5cGU9XCJsaW5rXCIgY2xhc3M9XCItdmlldyBlZGl0IHNlYXJjaCBmdWxsdGV4dCBkcm9wZG93biBub3RFZGl0Rm9yVXNlcnNcIj48L3ZlZGEtY29udHJvbD4tLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWF0dHJpYnV0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLXhzLTVcIj5cbiAgICAgICAgICA8bGFiZWwgYWJvdXQ9XCJ2LXM6RGVwYXJ0bWVudFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTkgY29sLXhzLTdcIj5cbiAgICAgICAgICA8ZGl2IGFib3V0PVwiQFwiIHJlbD1cInYtczpwYXJlbnRVbml0XCIgY2xhc3M9XCJ2aWV3IGVkaXQgc2VhcmNoXCIgZGF0YS10ZW1wbGF0ZT1cInYtdWk6TGFiZWxMaW5rVGVtcGxhdGVcIj48L2Rpdj5cbiAgICAgICAgICA8dmVkYS1jb250cm9sXG4gICAgICAgICAgICByZWw9XCJ2LXM6cGFyZW50VW5pdFwiXG4gICAgICAgICAgICBkYXRhLXF1ZXJ5LXByZWZpeD1cIigncmRmOnR5cGUnPT0ndi1zOkRlcGFydG1lbnQnICYmICd2LXM6cGFyZW50T3JnYW5pemF0aW9uJz09J3tALnYtczpwYXJlbnRPcmdhbml6YXRpb24uaWR9JykgfHwgJ0AnPT0ne0Audi1zOnBhcmVudE9yZ2FuaXphdGlvbi5pZH0nXCJcbiAgICAgICAgICAgIGRhdGEtdHlwZT1cImxpbmtcIlxuICAgICAgICAgICAgY2xhc3M9XCItdmlldyBlZGl0IHNlYXJjaCBmdWxsdGV4dCBkcm9wZG93biBub3RFZGl0Rm9yVXNlcnNcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWF0dHJpYnV0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLXhzLTVcIj5cbiAgICAgICAgICA8bGFiZWwgYWJvdXQ9XCJ2LXM6dGl0bGVcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05IGNvbC14cy03XCI+XG4gICAgICAgICAgPGRpdiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIiBjbGFzcz1cInZpZXcgLWVkaXQgLXNlYXJjaFwiPjwvZGl2PlxuICAgICAgICAgIDx2ZWRhLWNvbnRyb2wgZGF0YS10eXBlPVwibXVsdGlsaW5ndWFsVGV4dFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiIGNsYXNzPVwiLXZpZXcgZWRpdCBzZWFyY2hcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWF0dHJpYnV0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLXhzLTVcIj5cbiAgICAgICAgICA8bGFiZWwgYWJvdXQ9XCJ2LXM6UG9zaXRpb25Db2RlXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOSBjb2wteHMtN1wiPlxuICAgICAgICAgIDxkaXYgcHJvcGVydHk9XCJ2LXM6c3ViamVjdENvZGVcIiBjbGFzcz1cInZpZXcgLWVkaXQgLXNlYXJjaFwiPjwvZGl2PlxuICAgICAgICAgIDwhLS08dmVkYS1jb250cm9sIGRhdGEtdHlwZT1cInN0cmluZ1wiIHByb3BlcnR5PVwidi1zOnN1YmplY3RDb2RlXCIgY2xhc3M9XCItdmlldyBlZGl0IHNlYXJjaFwiPjwvdmVkYS1jb250cm9sPi0tPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGhyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDwhLS3QodC40YHRgtC10LzQvdGL0LUg0YHQstC+0LnRgdGC0LLQsC0tPlxuICAgICAgPGRpdiBhYm91dD1cIkBcIiBkYXRhLXRlbXBsYXRlPVwidi11aTpTeXN0ZW1Qcm9wZXJ0aWVzVGVtcGxhdGVcIiBkYXRhLWVtYmVkZGVkPVwidHJ1ZVwiPjwvZGl2PlxuICAgICAgPGJyIC8+XG4gICAgICA8IS0tIEJVVFRPTlMgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9ucyB2aWV3IGVkaXQgLXNlYXJjaFwiPlxuICAgICAgICA8c3BhbiBhYm91dD1cIkBcIiBkYXRhLXRlbXBsYXRlPVwidi11aTpTdGFuZGFyZEJ1dHRvbnNUZW1wbGF0ZVwiIGRhdGEtZW1iZWRkZWQ9XCJ0cnVlXCIgZGF0YS1idXR0b25zPVwiZWRpdCBzYXZlIGNhbmNlbCBkZWxldGVcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztNQUFPQSxDQUFDLEdBQUFDLE9BQUEsQ0FBQUMsT0FBQTtJQUFBO0lBQUFDLE9BQUEsV0FBQUEsQ0FBQTtNQUNSO01BQ0E7TUFBQUMsT0FBQSxRQUVhQyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBYUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUU7UUFDekVILFFBQVEsR0FBR1AsQ0FBQyxDQUFDTyxRQUFRLENBQUM7UUFDdEJDLFNBQVMsR0FBR1IsQ0FBQyxDQUFDUSxTQUFTLENBQUM7UUFFeEJELFFBQVEsQ0FBQ0ksRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZO1VBQ2xDLElBQU1DLE1BQU0sR0FBRyxDQUFDLENBQUM7VUFDakIsSUFBSSxDQUFDTixVQUFVLENBQUNPLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN0Q0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHO2NBQ3JCRSxLQUFLLEVBQUUsS0FBSztjQUNaQyxLQUFLLEVBQUUsQ0FBQyxxQkFBcUI7WUFDL0IsQ0FBQztVQUNIO1VBQ0EsSUFBSSxDQUFDVCxVQUFVLENBQUNPLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO1lBQ2xERCxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBRztjQUNqQ0UsS0FBSyxFQUFFLEtBQUs7Y0FDWkMsS0FBSyxFQUFFLENBQUMscUJBQXFCO1lBQy9CLENBQUM7VUFDSDtVQUNBLElBQUksQ0FBQ1QsVUFBVSxDQUFDTyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUMxQ0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUc7Y0FDekJFLEtBQUssRUFBRSxLQUFLO2NBQ1pDLEtBQUssRUFBRSxDQUFDLHFCQUFxQjtZQUMvQixDQUFDO1VBQ0g7VUFDQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtVQUNJUixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNTLGFBQWEsQ0FBQyxJQUFJQyxXQUFXLENBQUMsV0FBVyxFQUFFO1lBQUNDLE1BQU0sRUFBRU47VUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzRSxDQUFDLENBQUM7TUFDSixDQUFDO01BQUFSLE9BQUEsU0FFWWUsSUFBSTtJQUFBO0VBQUE7QUFBQSJ9