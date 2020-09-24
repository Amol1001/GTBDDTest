Feature: GTPL_Login_Test_Feature

Scenario Outline: GTPL Login Test Scenario
Given user already on login page
When title of login page is GTPL Bank Home Page
Then user enters "<username>" and "<password>"
Then user click on login button
Then close the browser

Examples:
	| username | password |
	| mngr285631 | UrYgAjy |