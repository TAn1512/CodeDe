const formTags = {
    // --- PAGE 1: FORM INTRODUCTION ---
    formsIntro: {
        metaTitle: "HTML Forms – Learn Basic Structure & Elements",
        metaDescription:
            "Understand the structure of HTML forms, including the <form> tag, inputs, and labels. Learn how to collect user input and handle form submissions effectively.",
        title: "HTML Forms",
        description:
            "HTML forms are used to collect user input. They are essential for interactive websites where users can submit data such as text, passwords, and files.",

        sub1: "Basic Form Structure",
        sub1_desc:
            "A form starts with the <code>&lt;form&gt;</code> tag and ends with the <code>&lt;/form&gt;</code> tag. It contains input elements like text fields, checkboxes, or buttons.",
        example1: `<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>`,
        note1: "<strong>Note:</strong> The <code>action</code> attribute defines where to send the data, and <code>method</code> defines how to send it (GET or POST).",

        sub2: "Common Form Elements",
        sub2_desc:
            "Forms can include various input types such as text fields, radio buttons, checkboxes, and buttons.",
        example2: `<form>
  <input type="text" placeholder="Your Name"><br>
  <input type="email" placeholder="Your Email"><br>
  <input type="checkbox" id="subscribe">
  <label for="subscribe">Subscribe</label><br>
  <input type="submit" value="Send">
</form>`,
        note2: "<strong>Tip:</strong> Always use <code>&lt;label&gt;</code> elements to describe inputs for better accessibility.",

        summaryTitle: "Summary",
        summary: `<ul>
<li>Forms collect user input using the <code>&lt;form&gt;</code> element.</li>
<li>The <code>action</code> and <code>method</code> attributes control data submission.</li>
<li>Use <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, and <code>&lt;button&gt;</code> to create interactive fields.</li>
<li>Labels improve accessibility and usability.</li>
</ul>`,
    },

    // --- PAGE 2: FORM ATTRIBUTES ---
    formAttributes: {
        metaTitle: "HTML Form Attributes – action, method, and target Explained",
        metaDescription:
            "Learn about key HTML form attributes like action, method, and target. Understand how they affect form submission, data handling, and response behavior.",
        title: "HTML Form Attributes",
        description:
            "Form attributes define the behavior and submission details of an HTML form.",

        sub1: "action",
        sub1_desc:
            "Specifies the URL where form data will be sent.",
        example1: `<form action="/submit_form.php">
  <input type="text" name="user">
  <input type="submit" value="Send">
</form>`,

        sub2: "method",
        sub2_desc:
            "Defines how form data is sent — commonly 'GET' or 'POST'.",
        example2: `<form action="/data" method="get"> ... </form>
<form action="/data" method="post"> ... </form>`,
        note1: `<ul>
<li><code>GET</code>: Appends form data to the URL (useful for searches).</li>
<li><code>POST</code>: Sends data in the request body (for sensitive data).</li>
</ul>`,

        sub3: "target",
        sub3_desc:
            "Specifies where to open the response after submitting the form.",
        example3: `<form action="/action_page.php" target="_blank">
  <input type="submit" value="Open in new tab">
</form>`,
        note2: "<strong>Note:</strong> Common values: <code>_self</code> (default), <code>_blank</code>, <code>_parent</code>, <code>_top</code>.",

        summaryTitle: "Summary",
        summary: `<ul>
<li><code>action</code> → Defines the destination URL.</li>
<li><code>method</code> → 'GET' for visible queries, 'POST' for secure data.</li>
<li><code>target</code> → Controls where the result appears.</li>
<li>Other attributes include <code>autocomplete</code>, <code>novalidate</code>, and <code>enctype</code>.</li>
</ul>`,
    },

    // --- PAGE 3: INPUT TYPES ---
    inputTypes: {
        metaTitle: "HTML Input Types – Complete Guide with Examples",
        metaDescription:
            "Discover different HTML input types like text, password, email, number, and more. Learn how to create user-friendly and accessible forms with HTML5 input fields.",
        title: "HTML Input Types",
        description:
            "The <code>&lt;input&gt;</code> element supports many types for different kinds of user data.",

        sub1: "Common Input Types",
        sub1_desc:
            "Here are the most frequently used input types:",
        example1: `<form>
  <input type="text" placeholder="Text"><br>
  <input type="password" placeholder="Password"><br>
  <input type="email" placeholder="Email"><br>
  <input type="number" placeholder="Number"><br>
  <input type="date"><br>
  <input type="file"><br>
  <input type="submit" value="Submit">
</form>`,
        note1: "<strong>Note:</strong> The <code>type</code> attribute defines the kind of input field.",

        sub2: "Checkboxes and Radio Buttons",
        sub2_desc:
            "Use <code>checkbox</code> for multiple choices, <code>radio</code> for single-choice options.",
        example2: `<form>
  <input type="checkbox" id="html" name="skill" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label>
</form>`,
        note2: "<strong>Tip:</strong> Always provide <code>name</code> attributes so values can be grouped and submitted properly.",

        sub3: "Special Input Types",
        sub3_desc:
            "HTML5 introduced new input types for better user experience:",
        example3: `<form style="display: flex; flex-direction: column; gap: 8px; max-width: 250px;"></form>
  <label>Choose color: <input type="color" value="#ff6600"></label>
  <label>Select range: <input type="range" min="0" max="100" value="60"></label>
    <label>Phone number: <input type="tel" placeholder="0123-456-789"></label>
    <label>Website URL: <input type="url" placeholder="https://example.com"></label>
    <label>Search: <input type="search" placeholder="Keywords..."></label>
</form>`,
        note3:
            "<strong>Note:</strong> These input types help browsers provide appropriate input controls (e.g., numeric keypad for <code>tel</code> or color picker for <code>color</code>).",

        summaryTitle: "Summary",
        summary: `<ul>
<li>Use <code>type</code> to specify the kind of input.</li>
<li>Common types: text, password, email, number, date, file.</li>
<li>Checkboxes and radios help users select options.</li>
<li>HTML5 adds useful inputs like color, range, url, and search.</li>
</ul>`,
    },
};

export default formTags;
