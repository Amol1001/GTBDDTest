package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="F:/BDD_Project/GTPLBDD/src/main/java/Features/GTPLLogin_OutlineExample.feature" //the path of the feature files
		,glue={"StepDefination"}, //the path of the step definition files
		format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, ////to generate different types of reporting
		strict = false, //it will check if any step is not defined in step definition file
		dryRun= true, //to check the mapping is proper between feature file and step def file
		monochrome= true //display the console output in a proper readable format
		)
public class GTPLRunner {
	
}
