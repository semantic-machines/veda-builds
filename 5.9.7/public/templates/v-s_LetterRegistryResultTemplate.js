"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var html;
  return {
    setters: [],
    execute: function () {
      _export("html", html = "\n  <table class=\"table table-bordered\">\n    <thead class=\"result-header\">\n      <tr>\n        <th colspan=\"3\" about=\"v-s:Letter\" property=\"rdfs:label\"></th>\n        <th colspan=\"3\" about=\"v-s:sender\" property=\"rdfs:label\"></th>\n        <th colspan=\"3\" about=\"v-s:recipient\" property=\"rdfs:label\"></th>\n        <th colspan=\"10\" about=\"v-s:Letter\" property=\"rdfs:label\"></th>\n      </tr>\n      <tr class=\"active\">\n        <th width=\"1%\"><span class=\"glyphicon glyphicon-search\"></span></th>\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"rdf:type\"><span about=\"rdf:type\" property=\"rdfs:label\"></span></th>\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:created\"><span about=\"v-s:created\" property=\"rdfs:label\"></span></th>\n        <!--\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C //v-s:sender -->\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:hasLetterRegistrationRecordSender.v-s:registrationNumber\">\n          <span about=\"v-s:hasLetterRegistrationRecordSender\" property=\"rdfs:label\"></span>\n        </th>\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:sender.v-s:correspondentOrganization\">\n          <span about=\"v-s:correspondentOrganization\" property=\"rdfs:label\"></span>\n        </th>\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:sender.v-s:correspondentPerson\">\n          <span about=\"v-s:correspondentPerson\" property=\"rdfs:label\"></span>\n        </th>\n        <!--\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C //v-s:recipient-->\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:hasLetterRegistrationRecordRecipient.v-s:registrationNumber\">\n          <span about=\"v-s:hasLetterRegistrationRecordRecipient\" property=\"rdfs:label\"></span>\n        </th>\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:recipient.v-s:correspondentOrganization\">\n          <span about=\"v-s:correspondentOrganization\" property=\"rdfs:label\"></span>\n        </th>\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:recipient.v-s:correspondentPerson\">\n          <span about=\"v-s:correspondentPerson\" property=\"rdfs:label\"></span>\n        </th>\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:hasDocumentKind\"><span about=\"v-s:hasDocumentKind\" property=\"rdfs:label\"></span></th>\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:deliverBy\"><span about=\"v-s:deliverBy\" property=\"rdfs:label\"></span></th>\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:dueDate\"><span about=\"v-s:dueDate\" property=\"rdfs:label\"></span></th>\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:sheetsCount\"><span about=\"v-s:sheetsCount\" property=\"rdfs:label\"></span></th>\n        <!--\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 //v-s:hasDelivery-->\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:hasDelivery\"><span about=\"v-s:hasDelivery\" property=\"rdfs:label\"></span></th>\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:description\"><span about=\"v-s:description\" property=\"rdfs:label\"></span></th>\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"rdfs:comment\"><span about=\"rdfs:comment\" property=\"rdfs:label\"></span></th>\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:attachment\"><span about=\"v-s:attachment\" property=\"rdfs:label\"></span></th>\n        <!--th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:hasRelatedLetter\"><span about=\"v-s:hasRelatedLetter\" property=\"rdfs:label\"></span></th-->\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:creator\"><span about=\"v-s:creator\" property=\"rdfs:label\"></span></th>\n        <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:hasLink\"><span about=\"v-s:hasLink\" property=\"rdfs:label\"></span></th>\n      </tr>\n    </thead>\n    <tbody class=\"result-container\">\n      <tr>\n        <td><a href=\"#/@\" class=\"glyphicon glyphicon-search\"></a></td>\n        <td rel=\"rdf:type\" data-template=\"v-ui:LabelTemplate\"></td>\n        <td property=\"v-s:created\"></td>\n        <!--\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C //v-s:sender -->\n        <td rel=\"v-s:hasLetterRegistrationRecordSender\">\n          <div>\n            <span property=\"v-s:registrationNumber\"></span>\n            <span property=\"v-s:registrationDate\"></span>\n          </div>\n        </td>\n        <td rel=\"v-s:sender\">\n          <span rel=\"v-s:correspondentOrganization\" data-template=\"v-ui:LabelTemplate\"></span>\n        </td>\n        <td rel=\"v-s:sender\">\n          <div>\n            <span rel=\"v-s:correspondentPerson\" data-template=\"v-ui:LabelTemplate\"></span>\n            <span property=\"v-s:correspondentPersonDescription\"></span>\n          </div>\n        </td>\n        <!--\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C //v-s:recipient-->\n        <td rel=\"v-s:hasLetterRegistrationRecordRecipient\">\n          <div>\n            <span property=\"v-s:registrationNumber\"></span>\n            <span property=\"v-s:registrationDate\"></span>\n          </div>\n        </td>\n        <td rel=\"v-s:recipient\">\n          <span rel=\"v-s:correspondentOrganization\" data-template=\"v-ui:LabelTemplate\"></span>\n        </td>\n        <td rel=\"v-s:recipient\">\n          <div>\n            <span rel=\"v-s:correspondentPerson\" data-template=\"v-ui:LabelTemplate\"></span>\n            <span property=\"v-s:correspondentPersonDescription\"></span>\n          </div>\n        </td>\n        <td rel=\"v-s:hasDocumentKind\" data-template=\"v-ui:LabelTemplate\"></td>\n        <td rel=\"v-s:deliverBy\" data-template=\"v-ui:LabelTemplate\"></td>\n        <td property=\"v-s:dueDate\"></td>\n        <td property=\"v-s:sheetsCount\"></td>\n        <td rel=\"v-s:hasDelivery\">\n          <div>\n            <span property=\"v-s:date\"></span>\n            <span rel=\"v-s:deliverBy\" data-template=\"v-ui:LabelTemplate\"></span>\n            <span property=\"rdfs:comment\"></span>\n          </div>\n        </td>\n        <td property=\"v-s:description\"></td>\n        <td property=\"rdfs:comment\"></td>\n        <td rel=\"v-s:attachment\" data-template=\"v-ui:FileMinTemplate\"></td>\n        <!--td rel=\"v-s:hasRelatedLetter\" data-template=\"v-ui:LabelTemplate\"></td-->\n        <td rel=\"v-s:creator\" data-template=\"v-ui:LabelTemplate\"></td>\n        <td rel=\"v-s:hasLink\">\n          <div>\n            <span property=\"v-s:from\"></span>\n            <span property=\"v-s:to\"></span>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJodG1sIl0sInNvdXJjZXMiOlsiLi4vLi4vb250b2xvZ3kvZ2VuZXJpYy1hcHBsaWNhdGlvbi9jb3JyZXNwb25kZW5jZS90ZW1wbGF0ZXMvdi1zX0xldHRlclJlZ2lzdHJ5UmVzdWx0VGVtcGxhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGh0bWwgPSBgXG4gIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmVkXCI+XG4gICAgPHRoZWFkIGNsYXNzPVwicmVzdWx0LWhlYWRlclwiPlxuICAgICAgPHRyPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjNcIiBhYm91dD1cInYtczpMZXR0ZXJcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3RoPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjNcIiBhYm91dD1cInYtczpzZW5kZXJcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3RoPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjNcIiBhYm91dD1cInYtczpyZWNpcGllbnRcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3RoPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjEwXCIgYWJvdXQ9XCJ2LXM6TGV0dGVyXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC90aD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHIgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgPHRoIHdpZHRoPVwiMSVcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPjwvdGg+XG4gICAgICAgIDx0aCB3aWR0aD1cIjEwJVwiIGNsYXNzPVwib3JkZXJieVwiIGRhdGEtb3JkZXJieT1cInJkZjp0eXBlXCI+PHNwYW4gYWJvdXQ9XCJyZGY6dHlwZVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICA8dGggd2lkdGg9XCIxMCVcIiBjbGFzcz1cIm9yZGVyYnlcIiBkYXRhLW9yZGVyYnk9XCJ2LXM6Y3JlYXRlZFwiPjxzcGFuIGFib3V0PVwidi1zOmNyZWF0ZWRcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+PC90aD5cbiAgICAgICAgPCEtLdCe0YLQv9GA0LDQstC40YLQtdC70YwgLy92LXM6c2VuZGVyIC0tPlxuICAgICAgICA8dGggd2lkdGg9XCIxMCVcIiBjbGFzcz1cIm9yZGVyYnlcIiBkYXRhLW9yZGVyYnk9XCJ2LXM6aGFzTGV0dGVyUmVnaXN0cmF0aW9uUmVjb3JkU2VuZGVyLnYtczpyZWdpc3RyYXRpb25OdW1iZXJcIj5cbiAgICAgICAgICA8c3BhbiBhYm91dD1cInYtczpoYXNMZXR0ZXJSZWdpc3RyYXRpb25SZWNvcmRTZW5kZXJcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+XG4gICAgICAgIDwvdGg+XG4gICAgICAgIDx0aCB3aWR0aD1cIjEwJVwiIGNsYXNzPVwib3JkZXJieVwiIGRhdGEtb3JkZXJieT1cInYtczpzZW5kZXIudi1zOmNvcnJlc3BvbmRlbnRPcmdhbml6YXRpb25cIj5cbiAgICAgICAgICA8c3BhbiBhYm91dD1cInYtczpjb3JyZXNwb25kZW50T3JnYW5pemF0aW9uXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9zcGFuPlxuICAgICAgICA8L3RoPlxuICAgICAgICA8dGggd2lkdGg9XCIxMCVcIiBjbGFzcz1cIm9yZGVyYnlcIiBkYXRhLW9yZGVyYnk9XCJ2LXM6c2VuZGVyLnYtczpjb3JyZXNwb25kZW50UGVyc29uXCI+XG4gICAgICAgICAgPHNwYW4gYWJvdXQ9XCJ2LXM6Y29ycmVzcG9uZGVudFBlcnNvblwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj5cbiAgICAgICAgPC90aD5cbiAgICAgICAgPCEtLdCf0L7Qu9GD0YfQsNGC0LXQu9GMIC8vdi1zOnJlY2lwaWVudC0tPlxuICAgICAgICA8dGggd2lkdGg9XCIxMCVcIiBjbGFzcz1cIm9yZGVyYnlcIiBkYXRhLW9yZGVyYnk9XCJ2LXM6aGFzTGV0dGVyUmVnaXN0cmF0aW9uUmVjb3JkUmVjaXBpZW50LnYtczpyZWdpc3RyYXRpb25OdW1iZXJcIj5cbiAgICAgICAgICA8c3BhbiBhYm91dD1cInYtczpoYXNMZXR0ZXJSZWdpc3RyYXRpb25SZWNvcmRSZWNpcGllbnRcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+XG4gICAgICAgIDwvdGg+XG4gICAgICAgIDx0aCB3aWR0aD1cIjEwJVwiIGNsYXNzPVwib3JkZXJieVwiIGRhdGEtb3JkZXJieT1cInYtczpyZWNpcGllbnQudi1zOmNvcnJlc3BvbmRlbnRPcmdhbml6YXRpb25cIj5cbiAgICAgICAgICA8c3BhbiBhYm91dD1cInYtczpjb3JyZXNwb25kZW50T3JnYW5pemF0aW9uXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9zcGFuPlxuICAgICAgICA8L3RoPlxuICAgICAgICA8dGggd2lkdGg9XCIxMCVcIiBjbGFzcz1cIm9yZGVyYnlcIiBkYXRhLW9yZGVyYnk9XCJ2LXM6cmVjaXBpZW50LnYtczpjb3JyZXNwb25kZW50UGVyc29uXCI+XG4gICAgICAgICAgPHNwYW4gYWJvdXQ9XCJ2LXM6Y29ycmVzcG9uZGVudFBlcnNvblwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj5cbiAgICAgICAgPC90aD5cbiAgICAgICAgPHRoIHdpZHRoPVwiMTAlXCIgY2xhc3M9XCJvcmRlcmJ5XCIgZGF0YS1vcmRlcmJ5PVwidi1zOmhhc0RvY3VtZW50S2luZFwiPjxzcGFuIGFib3V0PVwidi1zOmhhc0RvY3VtZW50S2luZFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICA8dGggd2lkdGg9XCIxMCVcIiBjbGFzcz1cIm9yZGVyYnlcIiBkYXRhLW9yZGVyYnk9XCJ2LXM6ZGVsaXZlckJ5XCI+PHNwYW4gYWJvdXQ9XCJ2LXM6ZGVsaXZlckJ5XCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9zcGFuPjwvdGg+XG4gICAgICAgIDx0aCB3aWR0aD1cIjEwJVwiIGNsYXNzPVwib3JkZXJieVwiIGRhdGEtb3JkZXJieT1cInYtczpkdWVEYXRlXCI+PHNwYW4gYWJvdXQ9XCJ2LXM6ZHVlRGF0ZVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICA8dGggd2lkdGg9XCIxMCVcIiBjbGFzcz1cIm9yZGVyYnlcIiBkYXRhLW9yZGVyYnk9XCJ2LXM6c2hlZXRzQ291bnRcIj48c3BhbiBhYm91dD1cInYtczpzaGVldHNDb3VudFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICA8IS0t0JTQvtGB0YLQsNCy0LrQsCAvL3YtczpoYXNEZWxpdmVyeS0tPlxuICAgICAgICA8dGggd2lkdGg9XCIxMCVcIiBjbGFzcz1cIm9yZGVyYnlcIiBkYXRhLW9yZGVyYnk9XCJ2LXM6aGFzRGVsaXZlcnlcIj48c3BhbiBhYm91dD1cInYtczpoYXNEZWxpdmVyeVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICA8dGggd2lkdGg9XCIxMCVcIiBjbGFzcz1cIm9yZGVyYnlcIiBkYXRhLW9yZGVyYnk9XCJ2LXM6ZGVzY3JpcHRpb25cIj48c3BhbiBhYm91dD1cInYtczpkZXNjcmlwdGlvblwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICA8dGggd2lkdGg9XCIxMCVcIiBjbGFzcz1cIm9yZGVyYnlcIiBkYXRhLW9yZGVyYnk9XCJyZGZzOmNvbW1lbnRcIj48c3BhbiBhYm91dD1cInJkZnM6Y29tbWVudFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICA8dGggd2lkdGg9XCIxMCVcIiBjbGFzcz1cIm9yZGVyYnlcIiBkYXRhLW9yZGVyYnk9XCJ2LXM6YXR0YWNobWVudFwiPjxzcGFuIGFib3V0PVwidi1zOmF0dGFjaG1lbnRcIiBwcm9wZXJ0eT1cInJkZnM6bGFiZWxcIj48L3NwYW4+PC90aD5cbiAgICAgICAgPCEtLXRoIHdpZHRoPVwiMTAlXCIgY2xhc3M9XCJvcmRlcmJ5XCIgZGF0YS1vcmRlcmJ5PVwidi1zOmhhc1JlbGF0ZWRMZXR0ZXJcIj48c3BhbiBhYm91dD1cInYtczpoYXNSZWxhdGVkTGV0dGVyXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9zcGFuPjwvdGgtLT5cbiAgICAgICAgPHRoIHdpZHRoPVwiMTAlXCIgY2xhc3M9XCJvcmRlcmJ5XCIgZGF0YS1vcmRlcmJ5PVwidi1zOmNyZWF0b3JcIj48c3BhbiBhYm91dD1cInYtczpjcmVhdG9yXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9zcGFuPjwvdGg+XG4gICAgICAgIDx0aCB3aWR0aD1cIjEwJVwiIGNsYXNzPVwib3JkZXJieVwiIGRhdGEtb3JkZXJieT1cInYtczpoYXNMaW5rXCI+PHNwYW4gYWJvdXQ9XCJ2LXM6aGFzTGlua1wiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICAgIDx0Ym9keSBjbGFzcz1cInJlc3VsdC1jb250YWluZXJcIj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPjxhIGhyZWY9XCIjL0BcIiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9hPjwvdGQ+XG4gICAgICAgIDx0ZCByZWw9XCJyZGY6dHlwZVwiIGRhdGEtdGVtcGxhdGU9XCJ2LXVpOkxhYmVsVGVtcGxhdGVcIj48L3RkPlxuICAgICAgICA8dGQgcHJvcGVydHk9XCJ2LXM6Y3JlYXRlZFwiPjwvdGQ+XG4gICAgICAgIDwhLS3QntGC0L/RgNCw0LLQuNGC0LXQu9GMIC8vdi1zOnNlbmRlciAtLT5cbiAgICAgICAgPHRkIHJlbD1cInYtczpoYXNMZXR0ZXJSZWdpc3RyYXRpb25SZWNvcmRTZW5kZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gcHJvcGVydHk9XCJ2LXM6cmVnaXN0cmF0aW9uTnVtYmVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gcHJvcGVydHk9XCJ2LXM6cmVnaXN0cmF0aW9uRGF0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIHJlbD1cInYtczpzZW5kZXJcIj5cbiAgICAgICAgICA8c3BhbiByZWw9XCJ2LXM6Y29ycmVzcG9uZGVudE9yZ2FuaXphdGlvblwiIGRhdGEtdGVtcGxhdGU9XCJ2LXVpOkxhYmVsVGVtcGxhdGVcIj48L3NwYW4+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCByZWw9XCJ2LXM6c2VuZGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuIHJlbD1cInYtczpjb3JyZXNwb25kZW50UGVyc29uXCIgZGF0YS10ZW1wbGF0ZT1cInYtdWk6TGFiZWxUZW1wbGF0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHByb3BlcnR5PVwidi1zOmNvcnJlc3BvbmRlbnRQZXJzb25EZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPCEtLdCf0L7Qu9GD0YfQsNGC0LXQu9GMIC8vdi1zOnJlY2lwaWVudC0tPlxuICAgICAgICA8dGQgcmVsPVwidi1zOmhhc0xldHRlclJlZ2lzdHJhdGlvblJlY29yZFJlY2lwaWVudFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBwcm9wZXJ0eT1cInYtczpyZWdpc3RyYXRpb25OdW1iZXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBwcm9wZXJ0eT1cInYtczpyZWdpc3RyYXRpb25EYXRlXCI+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgcmVsPVwidi1zOnJlY2lwaWVudFwiPlxuICAgICAgICAgIDxzcGFuIHJlbD1cInYtczpjb3JyZXNwb25kZW50T3JnYW5pemF0aW9uXCIgZGF0YS10ZW1wbGF0ZT1cInYtdWk6TGFiZWxUZW1wbGF0ZVwiPjwvc3Bhbj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIHJlbD1cInYtczpyZWNpcGllbnRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gcmVsPVwidi1zOmNvcnJlc3BvbmRlbnRQZXJzb25cIiBkYXRhLXRlbXBsYXRlPVwidi11aTpMYWJlbFRlbXBsYXRlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gcHJvcGVydHk9XCJ2LXM6Y29ycmVzcG9uZGVudFBlcnNvbkRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgcmVsPVwidi1zOmhhc0RvY3VtZW50S2luZFwiIGRhdGEtdGVtcGxhdGU9XCJ2LXVpOkxhYmVsVGVtcGxhdGVcIj48L3RkPlxuICAgICAgICA8dGQgcmVsPVwidi1zOmRlbGl2ZXJCeVwiIGRhdGEtdGVtcGxhdGU9XCJ2LXVpOkxhYmVsVGVtcGxhdGVcIj48L3RkPlxuICAgICAgICA8dGQgcHJvcGVydHk9XCJ2LXM6ZHVlRGF0ZVwiPjwvdGQ+XG4gICAgICAgIDx0ZCBwcm9wZXJ0eT1cInYtczpzaGVldHNDb3VudFwiPjwvdGQ+XG4gICAgICAgIDx0ZCByZWw9XCJ2LXM6aGFzRGVsaXZlcnlcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gcHJvcGVydHk9XCJ2LXM6ZGF0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHJlbD1cInYtczpkZWxpdmVyQnlcIiBkYXRhLXRlbXBsYXRlPVwidi11aTpMYWJlbFRlbXBsYXRlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gcHJvcGVydHk9XCJyZGZzOmNvbW1lbnRcIj48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBwcm9wZXJ0eT1cInYtczpkZXNjcmlwdGlvblwiPjwvdGQ+XG4gICAgICAgIDx0ZCBwcm9wZXJ0eT1cInJkZnM6Y29tbWVudFwiPjwvdGQ+XG4gICAgICAgIDx0ZCByZWw9XCJ2LXM6YXR0YWNobWVudFwiIGRhdGEtdGVtcGxhdGU9XCJ2LXVpOkZpbGVNaW5UZW1wbGF0ZVwiPjwvdGQ+XG4gICAgICAgIDwhLS10ZCByZWw9XCJ2LXM6aGFzUmVsYXRlZExldHRlclwiIGRhdGEtdGVtcGxhdGU9XCJ2LXVpOkxhYmVsVGVtcGxhdGVcIj48L3RkLS0+XG4gICAgICAgIDx0ZCByZWw9XCJ2LXM6Y3JlYXRvclwiIGRhdGEtdGVtcGxhdGU9XCJ2LXVpOkxhYmVsVGVtcGxhdGVcIj48L3RkPlxuICAgICAgICA8dGQgcmVsPVwidi1zOmhhc0xpbmtcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gcHJvcGVydHk9XCJ2LXM6ZnJvbVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHByb3BlcnR5PVwidi1zOnRvXCI+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuICA8L3RhYmxlPlxuYDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3NCQUFhQSxJQUFJO0lBQUE7RUFBQTtBQUFBIn0=