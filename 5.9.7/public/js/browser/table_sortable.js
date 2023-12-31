"use strict";

System.register(["jquery", "moment"], function (_export, _context) {
  "use strict";

  var $, moment;
  return {
    setters: [function (_jquery) {
      $ = _jquery.default;
    }, function (_moment) {
      moment = _moment.default;
    }],
    execute: function () {
      // Sortable table plugin

      $.fn.tableSortable = function (clicked) {
        return this.each(function (i, el) {
          var table = $(el);
          if (table.hasClass('table-sortable-done')) {
            return;
          }
          var tbody = table.children('tbody');
          var thead = table.children('thead');
          var ths = thead.find('tr:last-child > th');
          table.addClass('table-sortable-done');
          ths.each(function (j, th) {
            var $th = $(th);
            var index = $th.index();
            $th.on('click', function (e) {
              var rows = tbody.children();
              e.preventDefault();
              e.stopPropagation();
              var $this = $(e.target);
              $this.siblings().removeClass('asc desc');
              if ($this.hasClass('asc')) {
                $this.removeClass('asc').addClass('desc');
                rows.sort(orderDesc);
              } else if ($this.hasClass('desc')) {
                $this.addClass('asc').removeClass('desc');
                rows.sort(orderAsc);
              } else {
                $this.addClass('asc');
                rows.sort(orderAsc);
              }
              rows.detach().appendTo(tbody);
            });
            var order = function order(compare) {
              return function (a, b) {
                var valueA = $(a).children(':nth-child(' + (index + 1) + ')').text().toLowerCase().trim();
                var valueB = $(b).children(':nth-child(' + (index + 1) + ')').text().toLowerCase().trim();
                if (!isNaN(valueA)) {
                  valueA = parseFloat(valueA);
                  valueB = parseFloat(valueB);
                } else if (moment(valueA, ['DD.MM.YYYY HH:mm:ss', 'DD.MM.YYYY', 'YYYY-MM-DDTHH:mm:ss.SSSZ', 'YYYY-MM-DD']).isValid()) {
                  valueA = moment(valueA, ['DD.MM.YYYY HH:mm:ss', 'DD.MM.YYYY', 'YYYY-MM-DDTHH:mm:ss.SSSZ', 'YYYY-MM-DD']).valueOf();
                  valueB = moment(valueB, ['DD.MM.YYYY HH:mm:ss', 'DD.MM.YYYY', 'YYYY-MM-DDTHH:mm:ss.SSSZ', 'YYYY-MM-DD']).valueOf();
                }
                if (compare(valueA, valueB)) {
                  return -1;
                } else if (valueA == valueB) {
                  return 0;
                } else {
                  return 1;
                }
              };
            };
            var orderAsc = order(function (a, b) {
              return a < b;
            });
            var orderDesc = order(function (a, b) {
              return a > b;
            });
          });
          clicked.click();
        });
      };
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiX2pxdWVyeSIsImRlZmF1bHQiLCJfbW9tZW50IiwibW9tZW50IiwiZXhlY3V0ZSIsImZuIiwidGFibGVTb3J0YWJsZSIsImNsaWNrZWQiLCJlYWNoIiwiaSIsImVsIiwidGFibGUiLCJoYXNDbGFzcyIsInRib2R5IiwiY2hpbGRyZW4iLCJ0aGVhZCIsInRocyIsImZpbmQiLCJhZGRDbGFzcyIsImoiLCJ0aCIsIiR0aCIsImluZGV4Iiwib24iLCJlIiwicm93cyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiJHRoaXMiLCJ0YXJnZXQiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwic29ydCIsIm9yZGVyRGVzYyIsIm9yZGVyQXNjIiwiZGV0YWNoIiwiYXBwZW5kVG8iLCJvcmRlciIsImNvbXBhcmUiLCJhIiwiYiIsInZhbHVlQSIsInRleHQiLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJ2YWx1ZUIiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJpc1ZhbGlkIiwidmFsdWVPZiIsImNsaWNrIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc291cmNlLXdlYi9qcy9icm93c2VyL3RhYmxlX3NvcnRhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNvcnRhYmxlIHRhYmxlIHBsdWdpblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG4kLmZuLnRhYmxlU29ydGFibGUgPSBmdW5jdGlvbiAoY2xpY2tlZCkge1xuICByZXR1cm4gdGhpcy5lYWNoKChpLCBlbCkgPT4ge1xuICAgIGNvbnN0IHRhYmxlID0gJChlbCk7XG4gICAgaWYgKCB0YWJsZS5oYXNDbGFzcygndGFibGUtc29ydGFibGUtZG9uZScpICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0Ym9keSA9IHRhYmxlLmNoaWxkcmVuKCd0Ym9keScpO1xuICAgIGNvbnN0IHRoZWFkID0gdGFibGUuY2hpbGRyZW4oJ3RoZWFkJyk7XG4gICAgY29uc3QgdGhzID0gdGhlYWQuZmluZCgndHI6bGFzdC1jaGlsZCA+IHRoJyk7XG4gICAgdGFibGUuYWRkQ2xhc3MoJ3RhYmxlLXNvcnRhYmxlLWRvbmUnKTtcblxuICAgIHRocy5lYWNoKChqLCB0aCkgPT4ge1xuICAgICAgY29uc3QgJHRoID0gJCh0aCk7XG4gICAgICBjb25zdCBpbmRleCA9ICR0aC5pbmRleCgpO1xuXG4gICAgICAkdGgub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3Qgcm93cyA9IHRib2R5LmNoaWxkcmVuKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgJHRoaXMuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYXNjIGRlc2MnKTtcbiAgICAgICAgaWYgKCAkdGhpcy5oYXNDbGFzcygnYXNjJykgKSB7XG4gICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2FzYycpLmFkZENsYXNzKCdkZXNjJyk7XG4gICAgICAgICAgcm93cy5zb3J0KG9yZGVyRGVzYyk7XG4gICAgICAgIH0gZWxzZSBpZiAoICR0aGlzLmhhc0NsYXNzKCdkZXNjJykgKSB7XG4gICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2FzYycpLnJlbW92ZUNsYXNzKCdkZXNjJyk7XG4gICAgICAgICAgcm93cy5zb3J0KG9yZGVyQXNjKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnYXNjJyk7XG4gICAgICAgICAgcm93cy5zb3J0KG9yZGVyQXNjKTtcbiAgICAgICAgfVxuICAgICAgICByb3dzLmRldGFjaCgpLmFwcGVuZFRvKHRib2R5KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvcmRlciA9IGZ1bmN0aW9uIChjb21wYXJlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIGxldCB2YWx1ZUEgPSAkKGEpLmNoaWxkcmVuKCc6bnRoLWNoaWxkKCcgKyAoaW5kZXggKyAxKSArICcpJykudGV4dCgpLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgICAgICAgIGxldCB2YWx1ZUIgPSAkKGIpLmNoaWxkcmVuKCc6bnRoLWNoaWxkKCcgKyAoaW5kZXggKyAxKSArICcpJykudGV4dCgpLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgICAgICAgIGlmICggIWlzTmFOKHZhbHVlQSkgKSB7XG4gICAgICAgICAgICB2YWx1ZUEgPSBwYXJzZUZsb2F0KHZhbHVlQSk7XG4gICAgICAgICAgICB2YWx1ZUIgPSBwYXJzZUZsb2F0KHZhbHVlQik7XG4gICAgICAgICAgfSBlbHNlIGlmICggbW9tZW50KHZhbHVlQSwgWydERC5NTS5ZWVlZIEhIOm1tOnNzJywgJ0RELk1NLllZWVknLCAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1NaJywgJ1lZWVktTU0tREQnXSkuaXNWYWxpZCgpICkge1xuICAgICAgICAgICAgdmFsdWVBID0gbW9tZW50KHZhbHVlQSwgWydERC5NTS5ZWVlZIEhIOm1tOnNzJywgJ0RELk1NLllZWVknLCAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1NaJywgJ1lZWVktTU0tREQnXSkudmFsdWVPZigpO1xuICAgICAgICAgICAgdmFsdWVCID0gbW9tZW50KHZhbHVlQiwgWydERC5NTS5ZWVlZIEhIOm1tOnNzJywgJ0RELk1NLllZWVknLCAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1NaJywgJ1lZWVktTU0tREQnXSkudmFsdWVPZigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIGNvbXBhcmUodmFsdWVBLCB2YWx1ZUIpICkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIHZhbHVlQSA9PSB2YWx1ZUIgKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgb3JkZXJBc2MgPSBvcmRlcigoYSwgYikgPT4gYSA8IGIpO1xuICAgICAgY29uc3Qgb3JkZXJEZXNjID0gb3JkZXIoKGEsIGIpID0+IGEgPiBiKTtcbiAgICB9KTtcblxuICAgIGNsaWNrZWQuY2xpY2soKTtcbiAgfSk7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztNQUVPQSxDQUFDLEdBQUFDLE9BQUEsQ0FBQUMsT0FBQTtJQUFBLGFBQUFDLE9BQUE7TUFDREMsTUFBTSxHQUFBRCxPQUFBLENBQUFELE9BQUE7SUFBQTtJQUFBRyxPQUFBLFdBQUFBLENBQUE7TUFIYjs7TUFLQUwsQ0FBQyxDQUFDTSxFQUFFLENBQUNDLGFBQWEsR0FBRyxVQUFVQyxPQUFPLEVBQUU7UUFDdEMsT0FBTyxJQUFJLENBQUNDLElBQUksQ0FBQyxVQUFDQyxDQUFDLEVBQUVDLEVBQUUsRUFBSztVQUMxQixJQUFNQyxLQUFLLEdBQUdaLENBQUMsQ0FBQ1csRUFBRSxDQUFDO1VBQ25CLElBQUtDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLHFCQUFxQixDQUFDLEVBQUc7WUFDM0M7VUFDRjtVQUNBLElBQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxRQUFRLENBQUMsT0FBTyxDQUFDO1VBQ3JDLElBQU1DLEtBQUssR0FBR0osS0FBSyxDQUFDRyxRQUFRLENBQUMsT0FBTyxDQUFDO1VBQ3JDLElBQU1FLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUM7VUFDNUNOLEtBQUssQ0FBQ08sUUFBUSxDQUFDLHFCQUFxQixDQUFDO1VBRXJDRixHQUFHLENBQUNSLElBQUksQ0FBQyxVQUFDVyxDQUFDLEVBQUVDLEVBQUUsRUFBSztZQUNsQixJQUFNQyxHQUFHLEdBQUd0QixDQUFDLENBQUNxQixFQUFFLENBQUM7WUFDakIsSUFBTUUsS0FBSyxHQUFHRCxHQUFHLENBQUNDLEtBQUssRUFBRTtZQUV6QkQsR0FBRyxD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