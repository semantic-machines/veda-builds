"use strict";

System.register(["jquery", "/js/common/veda.js", "sha256", "/js/common/individual_model.js", "riot"], function (_export, _context) {
  "use strict";

  var $, veda, Sha256, IndividualModel, riot, pre, html;
  return {
    setters: [function (_jquery) {
      $ = _jquery.default;
    }, function (_jsCommonVedaJs) {
      veda = _jsCommonVedaJs.default;
    }, function (_sha) {
      Sha256 = _sha.default;
    }, function (_jsCommonIndividual_modelJs) {
      IndividualModel = _jsCommonIndividual_modelJs.default;
    }, function (_riot) {
      riot = _riot.default;
    }],
    execute: function () {
      _export("pre", pre = function pre(individual, template, container, mode, extra) {
        template = $(template);
        container = $(container);
        template.tooltip({
          container: template,
          placement: 'bottom',
          trigger: 'hover',
          title: function () {
            var titleStr;
            return function () {
              getCurrent().then(function (current) {
                var title = veda.user.aspect.hasValue('v-s:hasFavorite', current) ? new IndividualModel('v-s:RemoveFromFavorites') : new IndividualModel('v-s:AddToFavorites');
                title.load().then(function (title) {
                  titleStr = title.toString();
                  template.find('.tooltip-inner').text(titleStr);
                });
              });
              return titleStr ? titleStr : '...';
            };
          }()
        }).click(function (e) {
          e.preventDefault();
          getCurrent(location.hash).then(function (current) {
            if (!current) {
              return;
            }
            var subscriptionId = 'd:' + Sha256.hash(veda.user_uri + current.id).substr(0, 32);
            if (veda.user.aspect.hasValue('v-s:hasFavorite', subscriptionId)) {
              veda.user.aspect.removeValue('v-s:hasFavorite', new IndividualModel(subscriptionId));
              indicateFavorite(current);
              return new IndividualModel(subscriptionId).remove();
            } else {
              var subscription = new IndividualModel();
              subscription.id = subscriptionId;
              subscription['rdf:type'] = [new IndividualModel('v-s:Subscription')];
              subscription['v-s:onDocument'] = [current];
              subscription['v-s:creator'] = [veda.user];
              veda.user.aspect.addValue('v-s:hasFavorite', subscription);
              indicateFavorite(current);
              return subscription.save();
            }
          }).then(function () {
            veda.user.aspect.save();
          }).catch(function (e) {
            console.error('Update user aspect failed');
          });
        });
        riot.route(function (hash) {
          getCurrent(hash).then(indicateFavorite);
        });
        function indicateFavorite(current) {
          current && current.load().then(function (current) {
            return current.is('v-s:Journaling');
          }).then(function (isJournaling) {
            if (isJournaling) {
              var subscriptionId = 'd:' + Sha256.hash(veda.user_uri + current.id).substr(0, 32);
              template.show();
              if (veda.user.aspect.hasValue('v-s:hasFavorite', subscriptionId)) {
                template.addClass('fa-star').removeClass('fa-star-o');
              } else {
                template.removeClass('fa-star').addClass('fa-star-o');
              }
            } else {
              template.hide();
            }
          });
        }
        function getCurrent(hash) {
          return new Promise(function (resolve) {
            var current_uri = hash ? decodeURI(hash).slice(2).split('/')[0] : '';
            var re = /^(\w|-)+:.*?$/;
            if (re.test(current_uri)) {
              resolve(new IndividualModel(current_uri).load());
            } else {
              resolve();
            }
          }).then(function (current) {
            if (!current) {
              return;
            }
            var isTask = current.hasValue('rdf:type', 'v-wf:DecisionForm');
            if (isTask) {
              current = current['v-wf:onDocument'][0];
            }
            return current;
          });
        }
      });
      _export("html", html = "\n  <a href=\"#\" class=\"fa fa-lg\" style=\"display:none;\"></a>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiX2pxdWVyeSIsImRlZmF1bHQiLCJfanNDb21tb25WZWRhSnMiLCJ2ZWRhIiwiX3NoYSIsIlNoYTI1NiIsIl9qc0NvbW1vbkluZGl2aWR1YWxfbW9kZWxKcyIsIkluZGl2aWR1YWxNb2RlbCIsIl9yaW90IiwicmlvdCIsImV4ZWN1dGUiLCJfZXhwb3J0IiwicHJlIiwiaW5kaXZpZHVhbCIsInRlbXBsYXRlIiwiY29udGFpbmVyIiwibW9kZSIsImV4dHJhIiwidG9vbHRpcCIsInBsYWNlbWVudCIsInRyaWdnZXIiLCJ0aXRsZSIsInRpdGxlU3RyIiwiZ2V0Q3VycmVudCIsInRoZW4iLCJjdXJyZW50IiwidXNlciIsImFzcGVjdCIsImhhc1ZhbHVlIiwibG9hZCIsInRvU3RyaW5nIiwiZmluZCIsInRleHQiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnNjcmlwdGlvbklkIiwidXNlcl91cmkiLCJpZCIsInN1YnN0ciIsInJlbW92ZVZhbHVlIiwiaW5kaWNhdGVGYXZvcml0ZSIsInJlbW92ZSIsInN1YnNjcmlwdGlvbiIsImFkZFZhbHVlIiwic2F2ZSIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwicm91dGUiLCJpcyIsImlzSm91cm5hbGluZyIsInNob3ciLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGlkZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY3VycmVudF91cmkiLCJkZWNvZGVVUkkiLCJzbGljZSIsInNwbGl0IiwicmUiLCJ0ZXN0IiwiaXNUYXNrIiwiaHRtbCJdLCJzb3VyY2VzIjpbIi4uLy4uL29udG9sb2d5L2dlbmVyaWMtZnVuY3Rpb24vdGVtcGxhdGVzL3Ytc19GYXZvcml0ZXNJbmRpY2F0b3JUZW1wbGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHZlZGEgZnJvbSAnL2pzL2NvbW1vbi92ZWRhLmpzJztcbmltcG9ydCBTaGEyNTYgZnJvbSAnc2hhMjU2JztcbmltcG9ydCBJbmRpdmlkdWFsTW9kZWwgZnJvbSAnL2pzL2NvbW1vbi9pbmRpdmlkdWFsX21vZGVsLmpzJztcbmltcG9ydCByaW90IGZyb20gJ3Jpb3QnO1xuXG5leHBvcnQgY29uc3QgcHJlID0gZnVuY3Rpb24gKGluZGl2aWR1YWwsIHRlbXBsYXRlLCBjb250YWluZXIsIG1vZGUsIGV4dHJhKSB7XG4gIHRlbXBsYXRlID0gJCh0ZW1wbGF0ZSk7XG4gIGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcblxuICB0ZW1wbGF0ZVxuICAgIC50b29sdGlwKHtcbiAgICAgIGNvbnRhaW5lcjogdGVtcGxhdGUsXG4gICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgIHRpdGxlOiAoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdGl0bGVTdHI7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZ2V0Q3VycmVudCgpLnRoZW4oZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdmVkYS51c2VyLmFzcGVjdC5oYXNWYWx1ZSgndi1zOmhhc0Zhdm9yaXRlJywgY3VycmVudCkgP1xuICAgICAgICAgICAgICBuZXcgSW5kaXZpZHVhbE1vZGVsKCd2LXM6UmVtb3ZlRnJvbUZhdm9yaXRlcycpIDpcbiAgICAgICAgICAgICAgbmV3IEluZGl2aWR1YWxNb2RlbCgndi1zOkFkZFRvRmF2b3JpdGVzJyk7XG4gICAgICAgICAgICB0aXRsZS5sb2FkKCkudGhlbihmdW5jdGlvbiAodGl0bGUpIHtcbiAgICAgICAgICAgICAgdGl0bGVTdHIgPSB0aXRsZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICB0ZW1wbGF0ZS5maW5kKCcudG9vbHRpcC1pbm5lcicpLnRleHQodGl0bGVTdHIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHRpdGxlU3RyID8gdGl0bGVTdHIgOiAnLi4uJztcbiAgICAgICAgfTtcbiAgICAgIH0pKCksXG4gICAgfSlcbiAgICAuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGdldEN1cnJlbnQobG9jYXRpb24uaGFzaClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICAgICAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uSWQgPSAnZDonICsgU2hhMjU2Lmhhc2godmVkYS51c2VyX3VyaSArIGN1cnJlbnQuaWQpLnN1YnN0cigwLCAzMik7XG4gICAgICAgICAgaWYgKHZlZGEudXNlci5hc3BlY3QuaGFzVmFsdWUoJ3YtczpoYXNGYXZvcml0ZScsIHN1YnNjcmlwdGlvbklkKSkge1xuICAgICAgICAgICAgdmVkYS51c2VyLmFzcGVjdC5yZW1vdmVWYWx1ZSgndi1zOmhhc0Zhdm9yaXRlJywgbmV3IEluZGl2aWR1YWxNb2RlbChzdWJzY3JpcHRpb25JZCkpO1xuICAgICAgICAgICAgaW5kaWNhdGVGYXZvcml0ZShjdXJyZW50KTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW5kaXZpZHVhbE1vZGVsKHN1YnNjcmlwdGlvbklkKS5yZW1vdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gbmV3IEluZGl2aWR1YWxNb2RlbCgpO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmlkID0gc3Vic2NyaXB0aW9uSWQ7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb25bJ3JkZjp0eXBlJ10gPSBbbmV3IEluZGl2aWR1YWxNb2RlbCgndi1zOlN1YnNjcmlwdGlvbicpXTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblsndi1zOm9uRG9jdW1lbnQnXSA9IFtjdXJyZW50XTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblsndi1zOmNyZWF0b3InXSA9IFt2ZWRhLnVzZXJdO1xuICAgICAgICAgICAgdmVkYS51c2VyLmFzcGVjdC5hZGRWYWx1ZSgndi1zOmhhc0Zhdm9yaXRlJywgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGluZGljYXRlRmF2b3JpdGUoY3VycmVudCk7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnNhdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2ZWRhLnVzZXIuYXNwZWN0LnNhdmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVXBkYXRlIHVzZXIgYXNwZWN0IGZhaWxlZCcpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICByaW90LnJvdXRlKGZ1bmN0aW9uIChoYXNoKSB7XG4gICAgZ2V0Q3VycmVudChoYXNoKS50aGVuKGluZGljYXRlRmF2b3JpdGUpO1xuICB9KTtcblxuICBmdW5jdGlvbiBpbmRpY2F0ZUZhdm9yaXRlIChjdXJyZW50KSB7XG4gICAgY3VycmVudCAmJlxuICAgICAgY3VycmVudFxuICAgICAgICAubG9hZCgpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnQuaXMoJ3YtczpKb3VybmFsaW5nJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChpc0pvdXJuYWxpbmcpIHtcbiAgICAgICAgICBpZiAoaXNKb3VybmFsaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb25JZCA9ICdkOicgKyBTaGEyNTYuaGFzaCh2ZWRhLnVzZXJfdXJpICsgY3VycmVudC5pZCkuc3Vic3RyKDAsIDMyKTtcbiAgICAgICAgICAgIHRlbXBsYXRlLnNob3coKTtcbiAgICAgICAgICAgIGlmICh2ZWRhLnVzZXIuYXNwZWN0Lmhhc1ZhbHVlKCd2LXM6aGFzRmF2b3JpdGUnLCBzdWJzY3JpcHRpb25JZCkpIHtcbiAgICAgICAgICAgICAgdGVtcGxhdGUuYWRkQ2xhc3MoJ2ZhLXN0YXInKS5yZW1vdmVDbGFzcygnZmEtc3Rhci1vJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0ZW1wbGF0ZS5yZW1vdmVDbGFzcygnZmEtc3RhcicpLmFkZENsYXNzKCdmYS1zdGFyLW8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVtcGxhdGUuaGlkZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50IChoYXNoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBjb25zdCBjdXJyZW50X3VyaSA9IGhhc2ggPyBkZWNvZGVVUkkoaGFzaCkuc2xpY2UoMikuc3BsaXQoJy8nKVswXSA6ICcnO1xuICAgICAgY29uc3QgcmUgPSAvXihcXHd8LSkrOi4qPyQvO1xuICAgICAgaWYgKHJlLnRlc3QoY3VycmVudF91cmkpKSB7XG4gICAgICAgIHJlc29sdmUobmV3IEluZGl2aWR1YWxNb2RlbChjdXJyZW50X3VyaSkubG9hZCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNUYXNrID0gY3VycmVudC5oYXNWYWx1ZSgncmRmOnR5cGUnLCAndi13ZjpEZWNpc2lvbkZvcm0nKTtcbiAgICAgIGlmIChpc1Rhc2spIHtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbJ3Ytd2Y6b25Eb2N1bWVudCddWzBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBodG1sID0gYFxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZmEgZmEtbGdcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L2E+XG5gO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztNQUFPQSxDQUFDLEdBQUFDLE9BQUEsQ0FBQUMsT0FBQTtJQUFBLGFBQUFDLGVBQUE7TUFDREMsSUFBSSxHQUFBRCxlQUFBLENBQUFELE9BQUE7SUFBQSxhQUFBRyxJQUFBO01BQ0pDLE1BQU0sR0FBQUQsSUFBQSxDQUFBSCxPQUFBO0lBQUEsYUFBQUssMkJBQUE7TUFDTkMsZUFBZSxHQUFBRCwyQkFBQSxDQUFBTCxPQUFBO0lBQUEsYUFBQU8sS0FBQTtNQUNmQyxJQUFJLEdBQUFELEtBQUEsQ0FBQVAsT0FBQTtJQUFBO0lBQUFTLE9BQUEsV0FBQUEsQ0FBQTtNQUFBQyxPQUFBLFFBRUVDLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFhQyxVQUFVLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRTtRQUN6RUgsUUFBUSxHQUFHZixDQUFDLENBQUNlLFFBQVEsQ0FBQztRQUN0QkMsU0FBUyxHQUFHaEIsQ0FBQyxDQUFDZ0IsU0FBUyxDQUFDO1FBRXhCRCxRQUFRLENBQ0xJLE9BQU8sQ0FBQztVQUNQSCxTQUFTLEVBQUVELFFBQVE7VUFDbkJLLFNBQVMsRUFBRSxRQUFRO1VBQ25CQyxPQUFPLEVBQUUsT0FBTztVQUNoQkMsS0FBSyxFQUFHLFlBQVk7WUFDbEIsSUFBSUMsUUFBUTtZQUNaLE9BQU8sWUFBWTtjQUNqQkMsVUFBVSxFQUFFLENBQUNDLElBQUksQ0FBQyxVQUFVQyxPQUFPLEVBQUU7Z0JBQ25DLElBQU1KLEtBQUssR0FBR2xCLElBQUksQ0FBQ3VCLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUMsaUJBQWlCLEVBQUVILE9BQU8sQ0FBQyxHQUNqRSxJQUFJbEIsZUFBZSxDQUFDLHlC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