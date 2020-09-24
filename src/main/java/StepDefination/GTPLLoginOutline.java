package StepDefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GTPLLoginOutline {

	WebDriver driver;
	
	@Given("^user already on login page$")
	public void user_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "D:/workspace_finsy/finsys/AllDrivers/chromedriver.exe.");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/V1/index.php");
	}

	@When("^title of login page is GTPL Bank Home Page$")
	public void title_of_login_page_is_GTPL_Bank_Home_Page() {
	    String title = driver.getTitle();
	    Assert.assertEquals("GTPL Bank Home Page", title);
	}
	
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_user_enters_password(String username, String password){
		driver.findElement(By.xpath("//input[@name='uid']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
	}
	@Then("^user click on login button$")
	public void user_click_on_login_button() {
		driver.findElement(By.xpath(".//input[@name='btnLogin']")).click();
	}
	@Then("^close the browser$")
	public void close_the_browser(){
		driver.quit();
	}

}
