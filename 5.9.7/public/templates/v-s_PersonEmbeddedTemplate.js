"use strict";

System.register(["jquery", "/js/common/backend.js", "/js/common/individual_model.js", "/js/common/veda.js"], function (_export, _context) {
  "use strict";

  var $, Backend, IndividualModel, veda, pre, post, html;
  return {
    setters: [function (_jquery) {
      $ = _jquery.default;
    }, function (_jsCommonBackendJs) {
      Backend = _jsCommonBackendJs.default;
    }, function (_jsCommonIndividual_modelJs) {
      IndividualModel = _jsCommonIndividual_modelJs.default;
    }, function (_jsCommonVedaJs) {
      veda = _jsCommonVedaJs.default;
    }],
    execute: function () {
      _export("pre", pre = function pre(individual, template, container, mode, extra) {
        template = $(template);
        container = $(container);
        template.on('validate', function () {
          var result = {};
          if (!individual.hasValue('v-s:lastName')) {
            result['v-s:lastName'] = {
              state: false,
              cause: ['v-ui:minCardinality']
            };
          }
          if (!individual.hasValue('v-s:firstName')) {
            result['v-s:firstName'] = {
              state: false,
              cause: ['v-ui:minCardinality']
            };
          }
          if (!individual.hasValue('v-s:tabNumber')) {
            result['v-s:tabNumber'] = {
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
          if (individual.hasValue('v-s:lastName') && individual.hasValue('v-s:firstName') && individual.hasValue('v-s:parentOrganization') && individual.isNew()) {
            var _queryString = "'rdf:type'==='v-s:Person' && 'v-s:parentOrganization'=='" + individual['v-s:parentOrganization'][0].id + "' && 'v-s:lastName'=='" + individual['v-s:lastName'][0] + "' && 'v-s:firstName'=='" + individual['v-s:firstName'][0] + "'";
            Backend.query(veda.ticket, _queryString).then(function (queryResult) {
              var tmp = queryResult.result;
              if (tmp.length == 0) {
                $('#warningPersonFIO').addClass('hidden');
              } else {
                $('#warningPersonFIO').removeClass('hidden');
              }
            });
          }
          if (individual.hasValue('v-s:tabNumber') && individual.isNew()) {
            var _queryString2 = "'v-s:parentOrganization'=='" + individual['v-s:parentOrganization'][0].id + "' && 'v-s:tabNumber'=='" + individual['v-s:tabNumber'][0] + "'";
            Backend.query(veda.ticket, _queryString2).then(function (queryResult) {
              var tmp = queryResult.result;
              if (tmp.length == 0) {
                $('#warningTN').addClass('hidden');
              } else {
                $('#warningTN').removeClass('hidden');
              }
            });
          }
          template[0].dispatchEvent(new CustomEvent('validated', {
            detail: result
          }));
        });
        var canCreateSubsidiary = new IndividualModel('v-s:Subsidiary').canCreate();
        Promise.all([canCreateSubsidiary]).then(function (results) {
          if (!results[0] || !results[1]) {
            $('#add-subsidiary', template).remove();
          }
        });
        var queryString = "'rdf:type'==='v-s:Appointment' && 'v-s:employee'==='" + individual.id + "'";
        $("veda-control[rel='v-s:defaultAppointment']", template).attr('data-query-prefix', queryString);
        // $('veda-control[rel="v-s:parentUnit"]', template).attr('data-query-prefix', departmentQueryPrefix);
      });
      _export("post", post = function post(individual, template, container, mode, extra) {
        template = $(template);
        container = $(container);
        if (individual.hasValue('rdfs:isDefinedBy')) {
          $('.actions #edit', template).attr('disabled', 'disabled');
        }
        if (!individual.hasValue('v-s:birthday')) {
          $('span[property="v-s:birthday"]').text('Не указано');
        }
      });
      _export("html", html = "\n<div class=\"container sheet\">\n\n    <div id=\"warningPersonFIO\" class=\"alert alert-warning hidden\">\n      <span>\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441 \u0442\u0430\u043A\u0438\u043C\u0438 \u0424\u0418\u041E \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0434\u0430\u043D\u043D\u043E\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0412\u0430\u043C \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0435\u0433\u043E.</span>\n    </div>\n    <div id=\"warningTN\" class=\"alert alert-warning hidden\">\n      <span>\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435. \u0422\u0430\u043A\u043E\u0439 \u0442\u0430\u0431\u0435\u043B\u044C\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0443 \u0434\u0430\u043D\u043D\u043E\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.</span>\n    </div>\n    <div class=\"row row-attribute\">\n      <div class=\"col-sm-3 col-xs-5\">\n        <label about=\"v-s:lastName\" property=\"rdfs:label\"></label>\n      </div>\n      <div class=\"col-sm-9 col-xs-7\">\n        <veda-control property=\"v-s:lastName\" data-type=\"multilingualString\" class=\"-view edit search\"></veda-control>\n      </div>\n    </div>\n    <div class=\"row row-attribute\">\n      <div class=\"col-sm-3 col-xs-5\">\n        <label about=\"v-s:firstName\" property=\"rdfs:label\"></label>\n      </div>\n      <div class=\"col-sm-9 col-xs-7\">\n        <veda-control property=\"v-s:firstName\" data-type=\"multilingualString\" class=\"-view edit search\"></veda-control>\n      </div>\n    </div>\n    <div class=\"row row-attribute\">\n      <div class=\"col-sm-3 col-xs-5\">\n        <label about=\"v-s:middleName\" property=\"rdfs:label\"></label>\n      </div>\n      <div class=\"col-sm-9 col-xs-7\">\n        <veda-control property=\"v-s:middleName\" data-type=\"multilingualString\" class=\"-view edit search\"></veda-control>\n      </div>\n    </div>\n    <div class=\"row row-attribute\">\n      <div class=\"col-sm-3 col-xs-5\">\n        <label about=\"v-s:birthday\" property=\"rdfs:label\"></label>\n      </div>\n      <div class=\"col-sm-3 col-xs-3\">\n        <span class=\"view -edit -search\" about=\"@\" property=\"v-s:birthday\"></span>\n        <veda-control property=\"v-s:birthday\" data-type=\"date\" class=\"-view edit search\"></veda-control>\n      </div>\n    </div>\n    <div class=\"row row-attribute\">\n      <div class=\"col-sm-3 col-xs-5\">\n        <label about=\"v-s:tabNumber\" property=\"rdfs:label\"></label>\n      </div>\n      <div class=\"col-sm-3 col-xs-3\">\n        <span class=\"view -edit -search\" about=\"@\" property=\"v-s:tabNumber\"></span>\n            <veda-control property=\"v-s:tabNumber\" data-type=\"string\" class=\"-view edit search\"></veda-control>\n      </div>\n    </div>\n    <div class=\"row row-attribute\">\n      <div class=\"col-sm-3 col-xs-5 view edit -search\">\n        <label about=\"v-s:hasCommunicationMean\" property=\"rdfs:label\"></label>\n      </div>\n      <div class=\"col-sm-9 col-xs-7\">\n        <span class=\"view -edit -search\" about=\"@\" property=\"v-s:tabNumber\"></span>\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr class=\"view edit -search\">\n                <th width=\"1%\"><span class=\"glyphicon glyphicon-search\"></th>\n                <th about=\"v-s:hasCommunicationMeanChannel\" property=\"rdfs:label\"></th>\n                <th about=\"v-s:hasCommunicationMeanTarget\" property=\"rdfs:label\"></th>\n                <th about=\"v-s:description\" property=\"rdfs:label\"></th>\n                <th about=\"rdfs:comment\" property=\"rdfs:label\"></th>\n              </tr>\n            </thead>\n            <tbody rel=\"v-s:hasCommunicationMean\" data-embedded=\"true\" data-template=\"v-s:CommunicationMeanTemplateEmbedded\"></tbody>\n          </table>\n          <veda-control data-type=\"link\" rel=\"v-s:hasCommunicationMean\" class=\"-view edit -search create\"></veda-control>\n      </div>\n    </div>\n    <section id=\"Account\">\n      <h4 class=\"section-header -view edit -search\">\n        <span about=\"v-s:Account\" property=\"rdfs:label\"></span>\n        <div class=\"btn-group -view edit -search\"></div>\n        <veda-control data-type=\"link\" rel=\"v-s:hasAccount\" class=\"-view edit -search create pull-right\"></veda-control>\n      </h4>\n      <div rel=\"v-s:hasAccount\" data-embedded=\"true\" data-template=\"v-s:AccountEmbeddedTemplate\"></div>\n    </section>\n\n</div>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiX2pxdWVyeSIsImRlZmF1bHQiLCJfanNDb21tb25CYWNrZW5kSnMiLCJCYWNrZW5kIiwiX2pzQ29tbW9uSW5kaXZpZHVhbF9tb2RlbEpzIiwiSW5kaXZpZHVhbE1vZGVsIiwiX2pzQ29tbW9uVmVkYUpzIiwidmVkYSIsImV4ZWN1dGUiLCJfZXhwb3J0IiwicHJlIiwiaW5kaXZpZHVhbCIsInRlbXBsYXRlIiwiY29udGFpbmVyIiwibW9kZSIsImV4dHJhIiwib24iLCJyZXN1bHQiLCJoYXNWYWx1ZSIsInN0YXRlIiwiY2F1c2UiLCJpc05ldyIsInF1ZXJ5U3RyaW5nIiwiaWQiLCJxdWVyeSIsInRpY2tldCIsInRoZW4iLCJxdWVyeVJlc3VsdCIsInRtcCIsImxlbmd0aCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJjYW5DcmVhdGVTdWJzaWRpYXJ5IiwiY2FuQ3JlYXRlIiwiUHJvbWlzZSIsImFsbCIsInJlc3VsdHMiLCJyZW1vdmUiLCJhdHRyIiwicG9zdCIsInRleHQiLCJodG1sIl0sInNvdXJjZXMiOlsiLi4vLi4vb250b2xvZ3kvYWJzdHJhY3QtZGljdGlvbmFyeS9vcmdhbml6YXRpb24vdGVtcGxhdGVzL3Ytc19QZXJzb25FbWJlZGRlZFRlbXBsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQmFja2VuZCBmcm9tICcvanMvY29tbW9uL2JhY2tlbmQuanMnO1xuaW1wb3J0IEluZGl2aWR1YWxNb2RlbCBmcm9tICcvanMvY29tbW9uL2luZGl2aWR1YWxfbW9kZWwuanMnO1xuaW1wb3J0IHZlZGEgZnJvbSAnL2pzL2NvbW1vbi92ZWRhLmpzJztcblxuZXhwb3J0IGNvbnN0IHByZSA9IGZ1bmN0aW9uIChpbmRpdmlkdWFsLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCBtb2RlLCBleHRyYSkge1xuICB0ZW1wbGF0ZSA9ICQodGVtcGxhdGUpO1xuICBjb250YWluZXIgPSAkKGNvbnRhaW5lcik7XG5cbiAgdGVtcGxhdGUub24oJ3ZhbGlkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGlmICghaW5kaXZpZHVhbC5oYXNWYWx1ZSgndi1zOmxhc3ROYW1lJykpIHtcbiAgICAgIHJlc3VsdFsndi1zOmxhc3ROYW1lJ10gPSB7XG4gICAgICAgIHN0YXRlOiBmYWxzZSxcbiAgICAgICAgY2F1c2U6IFsndi11aTptaW5DYXJkaW5hbGl0eSddLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCFpbmRpdmlkdWFsLmhhc1ZhbHVlKCd2LXM6Zmlyc3ROYW1lJykpIHtcbiAgICAgIHJlc3VsdFsndi1zOmZpcnN0TmFtZSddID0ge1xuICAgICAgICBzdGF0ZTogZmFsc2UsXG4gICAgICAgIGNhdXNlOiBbJ3YtdWk6bWluQ2FyZGluYWxpdHknXSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICghaW5kaXZpZHVhbC5oYXNWYWx1ZSgndi1zOnRhYk51bWJlcicpKSB7XG4gICAgICByZXN1bHRbJ3Ytczp0YWJOdW1iZXInXSA9IHtcbiAgICAgICAgc3RhdGU6IGZhbHNlLFxuICAgICAgICBjYXVzZTogWyd2LXVpOm1pbkNhcmRpbmFsaXR5J10sXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoIWluZGl2aWR1YWwuaGFzVmFsdWUoJ3YtczpwYXJlbnRPcmdhbml6YXRpb24nKSkge1xuICAgICAgcmVzdWx0Wyd2LXM6cGFyZW50T3JnYW5pemF0aW9uJ10gPSB7XG4gICAgICAgIHN0YXRlOiBmYWxzZSxcbiAgICAgICAgY2F1c2U6IFsndi11aTptaW5DYXJkaW5hbGl0eSddLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGluZGl2aWR1YWwuaGFzVmFsdWUoJ3YtczpsYXN0TmFtZScpICYmIGluZGl2aWR1YWwuaGFzVmFsdWUoJ3YtczpmaXJzdE5hbWUnKSAmJiBpbmRpdmlkdWFsLmhhc1ZhbHVlKCd2LXM6cGFyZW50T3JnYW5pemF0aW9uJykgJiYgaW5kaXZpZHVhbC5pc05ldygpKSB7XG4gICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgIFwiJ3JkZjp0eXBlJz09PSd2LXM6UGVyc29uJyAmJiAndi1zOnBhcmVudE9yZ2FuaXphdGlvbic9PSdcIiArXG4gICAgICAgIGluZGl2aWR1YWxbJ3YtczpwYXJlbnRPcmdhbml6YXRpb24nXVswXS5pZCArXG4gICAgICAgIFwiJyAmJiAndi1zOmxhc3ROYW1lJz09J1wiICtcbiAgICAgICAgaW5kaXZpZHVhbFsndi1zOmxhc3ROYW1lJ11bMF0gK1xuICAgICAgICBcIicgJiYgJ3YtczpmaXJzdE5hbWUnPT0nXCIgK1xuICAgICAgICBpbmRpdmlkdWFsWyd2LXM6Zmlyc3ROYW1lJ11bMF0gK1xuICAgICAgICBcIidcIjtcbiAgICAgIEJhY2tlbmQucXVlcnkodmVkYS50aWNrZXQsIHF1ZXJ5U3RyaW5nKS50aGVuKGZ1bmN0aW9uIChxdWVyeVJlc3VsdCkge1xuICAgICAgICBjb25zdCB0bXAgPSBxdWVyeVJlc3VsdC5yZXN1bHQ7XG4gICAgICAgIGlmICh0bXAubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAkKCcjd2FybmluZ1BlcnNvbkZJTycpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKCcjd2FybmluZ1BlcnNvbkZJTycpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpbmRpdmlkdWFsLmhhc1ZhbHVlKCd2LXM6dGFiTnVtYmVyJykgJiYgaW5kaXZpZHVhbC5pc05ldygpKSB7XG4gICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgIFwiJ3YtczpwYXJlbnRPcmdhbml6YXRpb24nPT0nXCIgKyBpbmRpdmlkdWFsWyd2LXM6cGFyZW50T3JnYW5pemF0aW9uJ11bMF0uaWQgKyBcIicgJiYgJ3Ytczp0YWJOdW1iZXInPT0nXCIgKyBpbmRpdmlkdWFsWyd2LXM6dGFiTnVtYmVyJ11bMF0gKyBcIidcIjtcbiAgICAgIEJhY2tlbmQucXVlcnkodmVkYS50aWNrZXQsIHF1ZXJ5U3RyaW5nKS50aGVuKGZ1bmN0aW9uIChxdWVyeVJlc3VsdCkge1xuICAgICAgICBjb25zdCB0bXAgPSBxdWVyeVJlc3VsdC5yZXN1bHQ7XG4gICAgICAgIGlmICh0bXAubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAkKCcjd2FybmluZ1ROJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoJyN3YXJuaW5nVE4nKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0ZW1wbGF0ZVswXS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndmFsaWRhdGVkJywge2RldGFpbDogcmVzdWx0fSkpO1xuICB9KTtcblxuICBjb25zdCBjYW5DcmVhdGVTdWJzaWRpYXJ5ID0gbmV3IEluZGl2aWR1YWxNb2RlbCgndi1zOlN1YnNpZGlhcnknKS5jYW5DcmVhdGUoKTtcbiAgUHJvbWlzZS5hbGwoW2NhbkNyZWF0ZVN1YnNpZGlhcnldKS50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgaWYgKCFyZXN1bHRzWzBdIHx8ICFyZXN1bHRzWzFdKSB7XG4gICAgICAkKCcjYWRkLXN1YnNpZGlhcnknLCB0ZW1wbGF0ZSkucmVtb3ZlKCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBxdWVyeVN0cmluZyA9IFwiJ3JkZjp0eXBlJz09PSd2LXM6QXBwb2ludG1lbnQnICYmICd2LXM6ZW1wbG95ZWUnPT09J1wiICsgaW5kaXZpZHVhbC5pZCArIFwiJ1wiO1xuICAkKFwidmVkYS1jb250cm9sW3JlbD0ndi1zOmRlZmF1bHRBcHBvaW50bWVudCddXCIsIHRlbXBsYXRlKS5hdHRyKCdkYXRhLXF1ZXJ5LXByZWZpeCcsIHF1ZXJ5U3RyaW5nKTtcbiAgLy8gJCgndmVkYS1jb250cm9sW3JlbD1cInYtczpwYXJlbnRVbml0XCJdJywgdGVtcGxhdGUpLmF0dHIoJ2RhdGEtcXVlcnktcHJlZml4JywgZGVwYXJ0bWVudFF1ZXJ5UHJlZml4KTtcbn07XG5cbmV4cG9ydCBjb25zdCBwb3N0ID0gZnVuY3Rpb24gKGluZGl2aWR1YWwsIHRlbXBsYXRlLCBjb250YWluZXIsIG1vZGUsIGV4dHJhKSB7XG4gIHRlbXBsYXRlID0gJCh0ZW1wbGF0ZSk7XG4gIGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcblxuICBpZiAoaW5kaXZpZHVhbC5oYXNWYWx1ZSgncmRmczppc0RlZmluZWRCeScpKSB7XG4gICAgJCgnLmFjdGlvbnMgI2VkaXQnLCB0ZW1wbGF0ZSkuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgfVxuICBpZiAoIWluZGl2aWR1YWwuaGFzVmFsdWUoJ3YtczpiaXJ0aGRheScpKSB7XG4gICAgJCgnc3Bhbltwcm9wZXJ0eT1cInYtczpiaXJ0aGRheVwiXScpLnRleHQoJ9Cd0LUg0YPQutCw0LfQsNC90L4nKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGh0bWwgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyIHNoZWV0XCI+XG5cbiAgICA8ZGl2IGlkPVwid2FybmluZ1BlcnNvbkZJT1wiIGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZyBoaWRkZW5cIj5cbiAgICAgIDxzcGFuPtCS0L3QuNC80LDQvdC40LUuINCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRgSDRgtCw0LrQuNC80Lgg0KTQmNCeINGD0LbQtSDRgdGD0YnQtdGB0YLQstGD0LXRgiDQsiDQtNCw0L3QvdC+0Lkg0L7RgNCz0LDQvdC40LfQsNGG0LjQuC4g0JLQvtC30LzQvtC20L3QviDQktCw0Lwg0YHQu9C10LTRg9C10YIg0LLRi9Cx0YDQsNGC0Ywg0LXQs9C+Ljwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwid2FybmluZ1ROXCIgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nIGhpZGRlblwiPlxuICAgICAgPHNwYW4+0JLQvdC40LzQsNC90LjQtS4g0KLQsNC60L7QuSDRgtCw0LHQtdC70YzQvdGL0Lkg0L3QvtC80LXRgCDRg9C20LUg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0YMg0LTQsNC90L3QvtC5INC+0YDQs9Cw0L3QuNC30LDRhtC40LguPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWF0dHJpYnV0ZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC14cy01XCI+XG4gICAgICAgIDxsYWJlbCBhYm91dD1cInYtczpsYXN0TmFtZVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOSBjb2wteHMtN1wiPlxuICAgICAgICA8dmVkYS1jb250cm9sIHByb3BlcnR5PVwidi1zOmxhc3ROYW1lXCIgZGF0YS10eXBlPVwibXVsdGlsaW5ndWFsU3RyaW5nXCIgY2xhc3M9XCItdmlldyBlZGl0IHNlYXJjaFwiPjwvdmVkYS1jb250cm9sPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvdyByb3ctYXR0cmlidXRlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLXhzLTVcIj5cbiAgICAgICAgPGxhYmVsIGFib3V0PVwidi1zOmZpcnN0TmFtZVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOSBjb2wteHMtN1wiPlxuICAgICAgICA8dmVkYS1jb250cm9sIHByb3BlcnR5PVwidi1zOmZpcnN0TmFtZVwiIGRhdGEtdHlwZT1cIm11bHRpbGluZ3VhbFN0cmluZ1wiIGNsYXNzPVwiLXZpZXcgZWRpdCBzZWFyY2hcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWF0dHJpYnV0ZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC14cy01XCI+XG4gICAgICAgIDxsYWJlbCBhYm91dD1cInYtczptaWRkbGVOYW1lXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05IGNvbC14cy03XCI+XG4gICAgICAgIDx2ZWRhLWNvbnRyb2wgcHJvcGVydHk9XCJ2LXM6bWlkZGxlTmFtZVwiIGRhdGEtdHlwZT1cIm11bHRpbGluZ3VhbFN0cmluZ1wiIGNsYXNzPVwiLXZpZXcgZWRpdCBzZWFyY2hcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWF0dHJpYnV0ZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC14cy01XCI+XG4gICAgICAgIDxsYWJlbCBhYm91dD1cInYtczpiaXJ0aGRheVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMyBjb2wteHMtM1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInZpZXcgLWVkaXQgLXNlYXJjaFwiIGFib3V0PVwiQFwiIHByb3BlcnR5PVwidi1zOmJpcnRoZGF5XCI+PC9zcGFuPlxuICAgICAgICA8dmVkYS1jb250cm9sIHByb3BlcnR5PVwidi1zOmJpcnRoZGF5XCIgZGF0YS10eXBlPVwiZGF0ZVwiIGNsYXNzPVwiLXZpZXcgZWRpdCBzZWFyY2hcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWF0dHJpYnV0ZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC14cy01XCI+XG4gICAgICAgIDxsYWJlbCBhYm91dD1cInYtczp0YWJOdW1iZXJcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLXhzLTNcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aWV3IC1lZGl0IC1zZWFyY2hcIiBhYm91dD1cIkBcIiBwcm9wZXJ0eT1cInYtczp0YWJOdW1iZXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8dmVkYS1jb250cm9sIHByb3BlcnR5PVwidi1zOnRhYk51bWJlclwiIGRhdGEtdHlwZT1cInN0cmluZ1wiIGNsYXNzPVwiLXZpZXcgZWRpdCBzZWFyY2hcIj48L3ZlZGEtY29udHJvbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWF0dHJpYnV0ZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC14cy01IHZpZXcgZWRpdCAtc2VhcmNoXCI+XG4gICAgICAgIDxsYWJlbCBhYm91dD1cInYtczpoYXNDb21tdW5pY2F0aW9uTWVhblwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOSBjb2wteHMtN1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInZpZXcgLWVkaXQgLXNlYXJjaFwiIGFib3V0PVwiQFwiIHByb3BlcnR5PVwidi1zOnRhYk51bWJlclwiPjwvc3Bhbj5cbiAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZFwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ2aWV3IGVkaXQgLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDx0aCB3aWR0aD1cIjElXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGFib3V0PVwidi1zOmhhc0NvbW11bmljYXRpb25NZWFuQ2hhbm5lbFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGFib3V0PVwidi1zOmhhc0NvbW11bmljYXRpb25NZWFuVGFyZ2V0XCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggYWJvdXQ9XCJ2LXM6ZGVzY3JpcHRpb25cIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBhYm91dD1cInJkZnM6Y29tbWVudFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5IHJlbD1cInYtczpoYXNDb21tdW5pY2F0aW9uTWVhblwiIGRhdGEtZW1iZWRkZWQ9XCJ0cnVlXCIgZGF0YS10ZW1wbGF0ZT1cInYtczpDb21tdW5pY2F0aW9uTWVhblRlbXBsYXRlRW1iZWRkZWRcIj48L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPHZlZGEtY29udHJvbCBkYXRhLXR5cGU9XCJsaW5rXCIgcmVsPVwidi1zOmhhc0NvbW11bmljYXRpb25NZWFuXCIgY2xhc3M9XCItdmlldyBlZGl0IC1zZWFyY2ggY3JlYXRlXCI+PC92ZWRhLWNvbnRyb2w+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c2VjdGlvbiBpZD1cIkFjY291bnRcIj5cbiAgICAgIDxoNCBjbGFzcz1cInNlY3Rpb24taGVhZGVyIC12aWV3IGVkaXQgLXNlYXJjaFwiPlxuICAgICAgICA8c3BhbiBhYm91dD1cInYtczpBY2NvdW50XCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIC12aWV3IGVkaXQgLXNlYXJjaFwiPjwvZGl2PlxuICAgICAgICA8dmVkYS1jb250cm9sIGRhdGEtdHlwZT1cImxpbmtcIiByZWw9XCJ2LXM6aGFzQWNjb3VudFwiIGNsYXNzPVwiLXZpZXcgZWRpdCAtc2VhcmNoIGNyZWF0ZSBwdWxsLXJpZ2h0XCI+PC92ZWRhLWNvbnRyb2w+XG4gICAgICA8L2g0PlxuICAgICAgPGRpdiByZWw9XCJ2LXM6aGFzQWNjb3VudFwiIGRhdGEtZW1iZWRkZWQ9XCJ0cnVlXCIgZGF0YS10ZW1wbGF0ZT1cInYtczpBY2NvdW50RW1iZWRkZWRUZW1wbGF0ZVwiPjwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuPC9kaXY+XG5gO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztNQUFPQSxDQUFDLEdBQUFDLE9BQUEsQ0FBQUMsT0FBQTtJQUFBLGFBQUFDLGtCQUFBO01BQ0RDLE9BQU8sR0FBQUQsa0JBQUEsQ0FBQUQsT0FBQTtJQUFBLGFBQUFHLDJCQUFBO01BQ1BDLGVBQWUsR0FBQUQsMkJBQUEsQ0FBQUgsT0FBQTtJQUFBLGFBQUFLLGVBQUE7TUFDZkMsSUFBSSxHQUFBRCxlQUFBLENBQUFMLE9BQUE7SUFBQTtJQUFBTyxPQUFBLFdBQUFBLENBQUE7TUFBQUMsT0FBQSxRQUVFQyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBYUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUU7UUFDekVILFFBQVEsR0FBR2IsQ0FBQyxDQUFDYSxRQUFRLENBQUM7UUFDdEJDLFNBQVMsR0FBR2QsQ0FBQyxDQUFDYyxTQUFTLENBQUM7UUFFeEJELFFBQVEsQ0FBQ0ksRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZO1VBQ2xDLElBQU1DLE1BQU0sR0FBRyxDQUFDLENBQUM7VUFDakIsSUFBSSxDQUFDTixVQUFVLENBQUNPLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN4Q0QsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHO2NBQ3ZCRSxLQUFLLEVBQUUsS0FBSztjQUNaQyxLQUFLLEVBQUUsQ0FBQyxxQkFBcUI7WUFDL0IsQ0FBQztVQUNIO1VBQ0EsSUFBSSxDQUFDVCxV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