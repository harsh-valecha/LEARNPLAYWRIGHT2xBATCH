import { test, expect } from '@playwright/test';


test("Verify Title for TTA Cart", async ({ page }) => {
  // page is a inbuilt fixture given to be used at runtime
  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  await expect(page).toHaveTitle("TTACart - Login");
  await page.waitForTimeout(5000);

}); // tests are always run by default in headless mode

// headless - means tests will run withiut the UI
// headed - means the tests will run with UI

// same concept in selenium
// headless is timesaving , fast 
// in CICD the tests are executed in headless

/*
Running tests in headed mode - 
npx playwright test tests/example.spec.ts --headed

test executed 3 times for 3 browser

 to show the report - npx playwright show-report
*/