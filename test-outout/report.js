$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/BDD_Project/GTPLBDD/src/main/java/Features/GTPLLogin_OutlineExample.feature");
formatter.feature({
  "line": 1,
  "name": "GTPL_Login_Test_Feature",
  "description": "",
  "id": "gtpl-login-test-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "GTPL Login Test Scenario",
  "description": "",
  "id": "gtpl-login-test-feature;gtpl-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is GTPL Bank Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "gtpl-login-test-feature;gtpl-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "gtpl-login-test-feature;gtpl-login-test-scenario;;1"
    },
    {
      "cells": [
        "mngr285631",
        "UrYgAjy"
      ],
      "line": 12,
      "id": "gtpl-login-test-feature;gtpl-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "GTPL Login Test Scenario",
  "description": "",
  "id": "gtpl-login-test-feature;gtpl-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is GTPL Bank Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"mngr285631\" and \"UrYgAjy\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "GTPLLoginOutline.user_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GTPLLoginOutline.title_of_login_page_is_GTPL_Bank_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr285631",
      "offset": 13
    },
    {
      "val": "UrYgAjy",
      "offset": 30
    }
  ],
  "location": "GTPLLoginOutline.user_enters_username_and_user_enters_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GTPLLoginOutline.user_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GTPLLoginOutline.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});