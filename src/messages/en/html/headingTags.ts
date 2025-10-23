const headingTags = {
    title: "HTML Headings",
    description:
        "HTML headings are defined with &lt;h1&gt; to &lt;h6&gt; tags. They represent different levels of importance.",
    point1:
        "&lt;h1&gt; defines the most important heading, while &lt;h6&gt; defines the least important.",
    point2:
        "Browsers automatically display headings in larger, bolder font sizes.",
    point3: "Each page should have only one &lt;h1&gt; tag.",
    exampleTitle: "Basic Example",
    note1:
        "<strong>Note: </strong>Browsers automatically add some white space (a margin) before and after a heading.",
    importanceTitle: "Headings Are Important",
    importanceText:
        "Search engines use the headings to index the structure and content of your web pages. Users often skim a page by its headings. It is important to use headings to show the document structure.<br /><br />&lt;h1&gt; headings should be used for main headings, followed by &lt;h2&gt; headings, then the less important &lt;h3&gt;, and so on.",
    note2: "<strong>Note: </strong>Use headings only for headings. Don't use them to make text big or bold.",
    biggerTitle: "Bigger Headings",
    biggerText:
        "Each HTML heading has a default size. However, you can specify the size for any heading with the style attribute, using the CSS font-size property.",
    biggerExample: "Example: Custom Font Size",
    summaryTitle: "Chapter Summary",
    summary: `<ul>
<li>HTML provides six levels of headings: <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>.</li>
<li><code>&lt;h1&gt;</code> is the most important heading; <code>&lt;h6&gt;</code> is the least important.</li>
<li>Browsers automatically add spacing and make headings bold.</li>
<li>Use only one <code>&lt;h1&gt;</code> per page to represent the main title.</li>
<li>Headings help search engines understand page structure and improve accessibility.</li>
<li>You can adjust heading sizes with CSS using the <code>font-size</code> property.</li>
<li>Avoid using heading tags just to make text bold or large — use them semantically.</li>
</ul>`,
};

export default headingTags;
