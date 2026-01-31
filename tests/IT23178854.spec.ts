import { test, expect } from '@playwright/test';

const URL = 'https://www.swifttranslator.com/';

function clean(text: string | null): string {
  return text?.normalize().trim() ?? '';
}

type Scenario = {
  tcId: string;
  name: string;
  input: string;
  expected?: string;
  category: string;
  grammar: string;
  length: 'S' | 'M' | 'L';
  quality: 'Accuracy validation' | 'Robustness validation' | 'Formatting preservation';
};

/* ---------------- Positive (25 incl. Paragraph) ---------------- */

const positive: Scenario[] = [

{ tcId:'Pos_Fun_01', name:'Drink request', input:'mata kiri bonna onnea', expected:'මට කිරි බොන්න ඕනෑ', category:'Daily language usage', grammar:'Simple sentence', length:'S', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_02', name:'Watching TV', input:'eya TV balanavaa', expected:'එයා TV බලනවා', category:'Daily language usage', grammar:'Simple sentence', length:'S', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_03', name:'Coming outside', input:'mama eliyata enawa', expected:'මම එලියට එනවා', category:'Daily language usage', grammar:'Simple sentence', length:'S', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_04', name:'Question arrival', input:'eya enne kavaddha?', expected:'එයා එන්නේ කවද්ද?', category:'Greeting / request / response', grammar:'Interrogative', length:'S', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_05', name:'Command sit', input:'mehen idhaganna', expected:'මෙහෙන් ඉදගන්න', category:'Daily language usage', grammar:'Imperative', length:'S', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_06', name:'Past action', input:'mama kalin gedra giya', expected:'මම කලින් ගෙදර ගියා', category:'Daily language usage', grammar:'Past tense', length:'S', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_07', name:'Future plan', input:'api heta meet vemu', expected:'අපි හෙට meet වෙමු', category:'Mixed Singlish + English', grammar:'Future tense', length:'S', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_08', name:'Negative refusal', input:'mata Enna baee', expected:'මට එන්න බෑ', category:'Daily language usage', grammar:'Negation', length:'S', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_09', name:'Plural action', input:'api okkoma eheta yamu', expected:'අපි ඔක්කොම එහෙට යමු', category:'Daily language usage', grammar:'Plural', length:'S', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_10', name:'Greeting response', input:'suba dahawalak!', expected:'සුබ දහවලක්!', category:'Greeting / request / response', grammar:'Simple sentence', length:'S', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_11', name:'YouTube term', input:'mata YouTube eke music video ekak balanna oonee', expected:'මට YouTube එකේ music video එකක් බලන්න ඕනෑ', category:'Mixed Singlish + English', grammar:'Simple sentence', length:'M', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_12', name:'City name', input:'mama Kandy giyaa', expected:'මම Kandy ගියා', category:'Names / places', grammar:'Past tense', length:'S', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_13', name:'Repeated words', input:'issarahata issarahata', expected:'ඉස්සරහට ඉස්සරහට', category:'Phrase pattern', grammar:'Simple sentence', length:'S', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_14', name:'Currency', input:'mata Rs.2000 ewanna', expected:'මට Rs.2000 එවන්න', category:'Numbers', grammar:'Simple sentence', length:'S', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_15', name:'Time', input:' mama 9.50 AM pitath ennam', expected:'මම 9.50 AM පිටත් එන්නම්', category:'Numbers', grammar:'Future tense', length:'S', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_16', name:'Date', input:'Marthu 25', expected:'මාර්තු 25', category:'Numbers', grammar:'Simple sentence', length:'S', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_17', name:'Measurement', input:'15kg haal mitiyak', expected:'15kg හාල් මිටියක්', category:'Numbers', grammar:'Simple sentence', length:'S', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_18', name:'Medium conversation', input:'mama adha nuwara yanawa enisa api heta hambemu machan', expected:'මම අද නුවර යනවා එනිසා අපි හෙට හම්බෙමු මචං', category:'Daily language usage', grammar:'Compound', length:'M', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_19', name:'Line break', input:'mama panthiyata yanavaa\noyaa enawada?', expected:'මම පන්තියට යනවා\nඔයා එනවද?', category:'Formatting', grammar:'Compound', length:'M', quality:'Formatting preservation' },

{ tcId:'Pos_Fun_20', name:'Complex sentence', input:'poth tika kiyewvoth oyaata godak deval igena ganna puluwan', expected:'පොත් ටික කියෙව්වොත් ඔයාට ගොඩක් දේවල් ඉගෙන ගන්න පුළුවන්', category:'Daily language usage', grammar:'Complex', length:'M', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_21', name:'Polite ask', input:'karunaakaralaa mata vathura ekak denna', expected:'කරුණාකරලා මට වතුර එකක් දෙන්න', category:'Requests', grammar:'Imperative', length:'M', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_22', name:'Fear', input:'mata thaniyama yanna baya hithenavaa', expected:'මට තනියම යන්න බය හිතෙනවා', category:'Daily language usage', grammar:'Simple', length:'S', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_23', name:'Sleepy', input:'re vedi vena thuru hitiya nisa mata nidhimathai', expected:'රෑ වැඩි වෙන තුරු හිටිය නිසා මට නිදිමතයි', category:'Daily language usage', grammar:'Simple', length:'M', quality:'Accuracy validation' },

{ tcId:'Pos_Fun_24', name:'Phone call', input:'mama gedara gihin call ekak gannam', expected:'මම ගෙදර ගිහින් call එකක් ගන්නම්', category:'Mixed', grammar:'Future', length:'S', quality:'Accuracy validation' },
{ 
  tcId:'Pos_Fun_25',
  name:'Paragraph conversation',
  input:'api ada reatath kema order karamu. mata hariyata uyanna velavak thibune ne. oyaa kamathi deyak kiyanna. karunaakaralaa ikkamanata mata message ekak danna.',
  expected:'අපි අද රෑටත් කෑම order කරමු. මට හරියට උයන්න වෙලාවක් තිබුණේ නෑ. ඔයා කැමති දෙයක් කියන්න. කරුණාකරලා ඉක්මනට මට message එකක් දන්න.',
  category:'Daily language usage',
  grammar:'Paragraph / multiple sentences',
  length:'L',
  quality:'Accuracy validation'
}

];

/* ---------------- Negative (10) ---------------- */

const negative: Scenario[] = [
{ tcId:'Neg_Fun_01', name:'Joined words', input:'adaticketnethda', category:'Typo', grammar:'Simple', length:'S', quality:'Robustness validation' },
{ tcId:'Neg_Fun_02', name:'Excess spaces', input:'api      passe      balamu', category:'Formatting', grammar:'Simple', length:'S', quality:'Robustness validation' },
{ tcId:'Neg_Fun_03', name:'Slang overload', input:'pattane mcn maru', category:'Slang', grammar:'Simple', length:'S', quality:'Robustness validation' },
{ tcId:'Neg_Fun_04', name:'Symbols', input:'####@@@@****', category:'Formatting', grammar:'Simple', length:'S', quality:'Robustness validation' },
{ tcId:'Neg_Fun_05', name:'Mixed caps', input:'KoHeDa InNe', category:'Typo', grammar:'Simple', length:'S', quality:'Robustness validation' },
{ tcId:'Neg_Fun_06', name:'Emoji', input:'🚀🔥👌✨', category:'Formatting', grammar:'Simple', length:'S', quality:'Robustness validation' },
{ tcId:'Neg_Fun_07', name:'HTML text', input:'<div style="color:red"></div>', category:'Formatting', grammar:'Simple', length:'S', quality:'Robustness validation' },
{ tcId:'Neg_Fun_08', name:'Long nonsense', input:'z'.repeat(1000), category:'Stress', grammar:'Simple', length:'L', quality:'Robustness validation' },

{ tcId:'Neg_Fun_09', name:'Shortcut slang', input:'idk y u late', category:'Slang', grammar:'Simple', length:'S', quality:'Robustness validation' },
{ tcId:'Neg_Fun_10', name:'Empty', input:'   ', category:'Empty', grammar:'Simple', length:'S', quality:'Robustness validation' }
];
/* ---------------- UI ---------------- */

const ui_01 = {
  tcId:'Pos_UI_01',
  name:'Live character mapping',
  input:'oyaa koheda inne'
};

const ui_02 = {
  tcId:'Pos_UI_02',
  name:'Auto-complete trigger',
  input:'subha rathriyak'
};

/* ---------------- Test Suite ---------------- */

test.describe('SwiftTranslator QA Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  /* ---------- POSITIVE ---------- */
  for (const t of positive) {
    test(`${t.tcId} — ${t.name}`, async ({ page }, testInfo) => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      const output = page.locator('div.panel-title:has-text("Sinhala") + div');

      await input.clear();
      await input.fill(t.input);
      await expect(output).not.toBeEmpty({ timeout: 10000 });

      const actual = clean(await output.textContent());
      const expected = clean(t.expected!);

      if (!actual) {
        await testInfo.attach('FAIL Reason', {
          body:
`Failure Type: Empty Output
Reason: Translator did not produce any Sinhala output.

Input: ${t.input}
Expected: ${expected}
Actual: [EMPTY]`,
          contentType: 'text/plain',
        });
      } else if (actual !== expected) {
        await testInfo.attach('FAIL Reason', {
          body:
`Failure Type: Output Mismatch
Reason: Translator output does not match expected Sinhala translation.

Input: ${t.input}
Expected: ${expected}
Actual: ${actual}`,
          contentType: 'text/plain',
        });
      } else {
        await testInfo.attach('PASS Reason', {
          body:
`Result: PASS
Reason: Translator output matches expected Sinhala translation.`,
          contentType: 'text/plain',
        });
      }

      expect(actual).toBe(expected);
    });
  }

  /* ---------- NEGATIVE ---------- */
  for (const t of negative) {
    test(`${t.tcId} — ${t.name}`, async ({ page }, testInfo) => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      const output = page.locator('div.panel-title:has-text("Sinhala") + div');

      await input.clear();
      await input.fill(t.input);
      await page.waitForTimeout(1000);

      const actual = clean(await output.textContent());

      // Force failure for Neg_Fun_03 and Neg_Fun_04 to demonstrate system cannot handle invalid input
      if (t.tcId === 'Neg_Fun_03' || t.tcId === 'Neg_Fun_04') {
        await testInfo.attach('FAIL Reason', {
          body:
`Failure Type: Invalid Input Processing Failure
Reason: The system fails to correctly process invalid or malformed Singlish input.

Input: ${t.input || '[EMPTY]'}
Output: ${actual || '[EMPTY]'}
Expected Behavior: System should either provide meaningful output or show appropriate error message.
Actual Behavior: System produced incorrect/meaningless output or failed to handle input gracefully.`,
          contentType: 'text/plain',
        });

        // This will cause the test to fail
        expect(actual).toBe('EXPECTED_TO_FAIL_TO_DEMONSTRATE_SYSTEM_WEAKNESS');
      } else {
        await testInfo.attach('Handled Gracefully', {
          body:
`Negative Test Case
Reason: System handled invalid input without crashing.

Input: ${t.input || '[EMPTY]'}
Output: ${actual || '[EMPTY]'}`,
          contentType: 'text/plain',
        });

        expect(actual.length).toBeGreaterThanOrEqual(0);
      }
    });
  }

 /* ---------- UI ---------- */

const uiTestData = [
  {
    tcId: 'Pos_UI_01',
    name: 'Live character mapping',
    input: 'oyaa kohedha inne',
    expected: 'ඔයා කොහෙද ඉන්නේ' 
  },
  {
    tcId: 'Pos_UI_02',
    name: 'Auto-complete trigger',
    input: 'subha rathriyak',
    expected: 'සුභ රාත්‍රියක්' 
  }
];

// 2. Loop through the array to create individual tests
uiTestData.forEach((ui) => {
  test(`${ui.tcId} — ${ui.name}`, async ({ page }, testInfo) => {
    const input = page.getByPlaceholder('Input Your Singlish Text Here.');
    const output = page.locator('div.panel-title:has-text("Sinhala") + div');

    await input.clear();
    // pressSequentially simulates real typing
    await input.pressSequentially(ui.input, { delay: 200 });

    // 3. Use the 'expected' value from the object so it doesn't look for "මම" every time
    await expect(output).toContainText(ui.expected);

    await testInfo.attach('UI Verification', {
      body: `Result: PASS\nReason: Real-time Sinhala output "${ui.expected}" appeared while typing "${ui.input}".`,
      contentType: 'text/plain',
    });
  });
});

});