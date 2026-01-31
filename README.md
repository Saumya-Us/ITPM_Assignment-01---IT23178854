# SwiftTranslator - Automated Test Suite

## Project Overview
This repository contains an automated test suite for testing the SwiftTranslator web application (https://www.swifttranslator.com/), which converts Singlish text input into Sinhala output. The test suite is built using Playwright and TypeScript.

## Test Coverage
The test suite includes:
- **25 Positive Functional Tests** - Validating correct Singlish to Sinhala conversion
- **10 Negative Functional Tests** - Testing system robustness with invalid/malformed inputs
- **2 UI Tests** - Validating real-time output behavior and user interface functionality

### Test Categories Covered
✅ Sentence structures (Simple, Compound, Complex)  
✅ Interrogative and Imperative forms  
✅ Positive and Negative sentence forms  
✅ Daily language usage and conversational inputs  
✅ Greetings, requests, and responses  
✅ Polite vs informal phrasing  
✅ Tense variations (Past, Present, Future)  
✅ Negation patterns  
✅ Singular/plural usage and pronouns  
✅ Mixed Singlish + English content  
✅ Punctuation, numeric formats, and text formatting  
✅ Slang and colloquial phrasing  
✅ Input length variations (Short, Medium, Long)  
✅ UI real-time updates

## Prerequisites
Before running the tests, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for cloning the repository)

## Installation

### Step 1: Clone or Download the Repository
```bash
# If using Git
git clone <repository-url>
cd <repository-folder>

# OR download and extract the ZIP file
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- Playwright
- TypeScript
- All required test dependencies

### Step 3: Install Playwright Browsers
```bash
npx playwright install
```

This command downloads the necessary browser binaries (Chromium, Firefox, WebKit).

## Running the Tests

### Run All Tests
```bash
npx playwright test
```

### Run Tests in UI Mode (Recommended for Debugging)
```bash
npx playwright test --ui
```

### Run Tests in Headed Mode (See Browser)
```bash
npx playwright test --headed
```

### Run Specific Test Categories

**Run only Positive Tests:**
```bash
npx playwright test -g "Pos_Fun"
```

**Run only Negative Tests:**
```bash
npx playwright test -g "Neg_Fun"
```

**Run only UI Tests:**
```bash
npx playwright test -g "Pos_UI"
```

**Run a Specific Test:**
```bash
npx playwright test -g "Pos_Fun_01"
```

### Generate HTML Test Report
```bash
npx playwright test --reporter=html
npx playwright show-report
```

## Test Results

After running the tests, you can view the results in multiple ways:

1. **Terminal Output** - Displays pass/fail status immediately
2. **HTML Report** - Run `npx playwright show-report` after test execution
3. **Test Attachments** - Each test includes detailed attachments explaining pass/fail reasons

### Expected Test Results

**Positive Tests (Pos_Fun_01 to Pos_Fun_25):**
- Expected to PASS if the system correctly converts Singlish to Sinhala
- Any failure indicates a system accuracy issue

**Negative Tests (Neg_Fun_01, Neg_Fun_02 to Neg_Fun_10):**
- Expected to PASS or Fail (system handles invalid input gracefully)

**UI Tests (Pos_UI_01, Pos_UI_02):**
- Expected to PASS if real-time conversion works correctly

## Project Structure
```
.
├── IT23178854.spec.ts   # Main test file
├── package.json                     # Project dependencies
├── playwright.config.ts             # Playwright configuration
├── README.md                        # This file
└── test-results/                    # Test execution results (generated)
```

## Test File Structure

The main test file (`IT23178854.spec.ts`) contains:

1. **Scenario Type Definition** - Defines test case structure
2. **Positive Test Scenarios** - Array of 25 valid conversion tests
3. **Negative Test Scenarios** - Array of 10 robustness tests
4. **UI Test Scenarios** - Array of 2 UI behavior tests
5. **Test Suite Implementation** - Playwright test execution logic

## Configuration

The tests use the following default configuration:
- **Base URL**: https://www.swifttranslator.com/
- **Timeout**: 10 seconds for output validation
- **Browser**: Chromium (can be changed in playwright.config.ts)

To modify configuration, edit `playwright.config.ts`.

## Troubleshooting

### Issue: Tests are failing unexpectedly
**Solution:**
- Check internet connection (tests require access to swifttranslator.com)
- Verify the website is accessible in your browser
- Ensure Playwright browsers are installed: `npx playwright install`

### Issue: "Cannot find module" error
**Solution:**
```bash
npm install
```

### Issue: Tests timeout
**Solution:**
- Increase timeout in the test file or playwright.config.ts
- Check if the website is responding slowly

### Issue: Browser doesn't open in headed mode
**Solution:**
```bash
npx playwright install chromium
npx playwright test --headed --browser=chromium
```

## Important Notes

1. **Internet Connection Required** - Tests interact with the live SwiftTranslator website
2. **Website Availability** - Tests may fail if the website is down or slow
3. **Test Attachments** - Each test generates detailed attachments explaining the result

## Test Case Categories

### Input Type / Domain
- Daily language usage
- Greeting / request / response
- Mixed Singlish + English
- Names / places
- Numbers
- Formatting
- Slang
- Typo

### Quality Focus
- **Accuracy validation** - Clean input with expected correct output
- **Robustness validation** - Testing edge cases and invalid inputs
- **Formatting preservation** - Testing line breaks, spaces, paragraphs
- **Real-time output update behavior** - UI responsiveness

## Author
IT23178854  
BSc (Hons) in Information Technology - Year 3

## License
This project is created for educational purposes as part of IT3040 coursework.

---
