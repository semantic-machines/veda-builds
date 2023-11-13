"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var html;
  return {
    setters: [],
    execute: function () {
      _export("html", html = "\n  <div>\n    <hr class=\"no-margin\" />\n    <table class=\"table table-striped table-condensed\">\n      <thead>\n        <tr>\n          <th width=\"20px\">#</th>\n          <th width=\"10px\"><span class=\"glyphicon glyphicon-search\"></span></th>\n          <th width=\"12%\" data-orderby=\"v-wf:from.rdfs:label\"><span about=\"v-wf:from\" property=\"rdfs:label\"></span></th>\n          <th width=\"12%\" data-orderby=\"v-wf:to.rdfs:label\"><span about=\"v-wf:to\" property=\"rdfs:label\"></span></th>\n          <th width=\"30px\"></th>\n          <th data-orderby=\"rdfs:label\"><span about=\"v-s:description\" property=\"rdfs:label\"></span></th>\n          <th data-orderby=\"v-wf:onDocument.rdfs:label\"><span about=\"v-ft:DocumentBundle\" property=\"rdfs:label\"></span></th>\n          <th><span about=\"v-wf:takenDecision\" property=\"rdfs:label\"></span></th>\n          <th width=\"20px\"></th>\n          <th width=\"10%\" class=\"orderby\" data-orderby=\"v-s:created\" about=\"v-s:created\" property=\"rdfs:label\"></th>\n          <th width=\"10%\" data-orderby=\"v-wf:takenDecision.v-s:created\">\n            <span about=\"v-ft:DecisionDateBundle\" property=\"rdfs:label\"></span>\n          </th>\n          <th width=\"10%\"><span about=\"v-ft:DecisionCreatorBundle\" property=\"rdfs:label\"></span></th>\n        </tr>\n      </thead>\n      <tbody class=\"result-container\" data-template=\"v-ft:CompletedResultTemplate_task\"></tbody>\n    </table>\n  </div>\n");
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJodG1sIl0sInNvdXJjZXMiOlsiLi4vLi4vb250b2xvZ3kvZ2VuZXJpYy1mdW5jdGlvbi90ZW1wbGF0ZXMvdi1mdF9Db21wbGV0ZWRSZXN1bHRUZW1wbGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaHRtbCA9IGBcbiAgPGRpdj5cbiAgICA8aHIgY2xhc3M9XCJuby1tYXJnaW5cIiAvPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtY29uZGVuc2VkXCI+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGggd2lkdGg9XCIyMHB4XCI+IzwvdGg+XG4gICAgICAgICAgPHRoIHdpZHRoPVwiMTBweFwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+PC90aD5cbiAgICAgICAgICA8dGggd2lkdGg9XCIxMiVcIiBkYXRhLW9yZGVyYnk9XCJ2LXdmOmZyb20ucmRmczpsYWJlbFwiPjxzcGFuIGFib3V0PVwidi13Zjpmcm9tXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9zcGFuPjwvdGg+XG4gICAgICAgICAgPHRoIHdpZHRoPVwiMTIlXCIgZGF0YS1vcmRlcmJ5PVwidi13Zjp0by5yZGZzOmxhYmVsXCI+PHNwYW4gYWJvdXQ9XCJ2LXdmOnRvXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9zcGFuPjwvdGg+XG4gICAgICAgICAgPHRoIHdpZHRoPVwiMzBweFwiPjwvdGg+XG4gICAgICAgICAgPHRoIGRhdGEtb3JkZXJieT1cInJkZnM6bGFiZWxcIj48c3BhbiBhYm91dD1cInYtczpkZXNjcmlwdGlvblwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICAgIDx0aCBkYXRhLW9yZGVyYnk9XCJ2LXdmOm9uRG9jdW1lbnQucmRmczpsYWJlbFwiPjxzcGFuIGFib3V0PVwidi1mdDpEb2N1bWVudEJ1bmRsZVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICAgIDx0aD48c3BhbiBhYm91dD1cInYtd2Y6dGFrZW5EZWNpc2lvblwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICAgIDx0aCB3aWR0aD1cIjIwcHhcIj48L3RoPlxuICAgICAgICAgIDx0aCB3aWR0aD1cIjEwJVwiIGNsYXNzPVwib3JkZXJieVwiIGRhdGEtb3JkZXJieT1cInYtczpjcmVhdGVkXCIgYWJvdXQ9XCJ2LXM6Y3JlYXRlZFwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvdGg+XG4gICAgICAgICAgPHRoIHdpZHRoPVwiMTAlXCIgZGF0YS1vcmRlcmJ5PVwidi13Zjp0YWtlbkRlY2lzaW9uLnYtczpjcmVhdGVkXCI+XG4gICAgICAgICAgICA8c3BhbiBhYm91dD1cInYtZnQ6RGVjaXNpb25EYXRlQnVuZGxlXCIgcHJvcGVydHk9XCJyZGZzOmxhYmVsXCI+PC9zcGFuPlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPHRoIHdpZHRoPVwiMTAlXCI+PHNwYW4gYWJvdXQ9XCJ2LWZ0OkRlY2lzaW9uQ3JlYXRvckJ1bmRsZVwiIHByb3BlcnR5PVwicmRmczpsYWJlbFwiPjwvc3Bhbj48L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSBjbGFzcz1cInJlc3VsdC1jb250YWluZXJcIiBkYXRhLXRlbXBsYXRlPVwidi1mdDpDb21wbGV0ZWRSZXN1bHRUZW1wbGF0ZV90YXNrXCI+PC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cbmA7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztzQkFBYUEsSUFBSTtJQUFBO0VBQUE7QUFBQSJ9