const listTags = {
    title: "HTML Lists",
    description:
        "HTML provides several ways to display lists of items — unordered, ordered, and definition lists.",

    sub1: "Unordered Lists",
    sub1_desc:
        "An unordered list starts with the <code>&lt;ul&gt;</code> tag. Each list item is wrapped in an <code>&lt;li&gt;</code> tag.",
    example1: `<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`,
    note1: `<strong>Note:</strong> You can control bullet styles using CSS:
<ul style="list-style-type:disc; margin-left: 1rem;">
<li><code>disc</code> – solid bullet (default)</li>
<li><code>circle</code> – hollow circle</li>
<li><code>square</code> – square bullet</li>
<li><code>none</code> – removes bullet points</li>
</ul>
Example: <code>&lt;ul style="list-style-type:square;"&gt;</code>`,
    sub2: "Ordered Lists",
    sub2_desc:
        "An ordered list starts with the <code>&lt;ol&gt;</code> tag. The list items are automatically numbered.",
    example2: `<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>`,
    tip1: "<strong>Tip:</strong> Use the <code>type</code> attribute (like 'A', 'a', 'I', 'i') to change the numbering style. For example: <code>&lt;ol type='A'&gt;</code>.",

    sub3: "Nested Lists",
    sub3_desc:
        "You can nest lists inside list items to create sub-lists.",
    example3: `<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>`,
    note2: "<strong>Note:</strong> Nested lists are useful for representing hierarchical structures.",

    sub4: "Definition Lists",
    sub4_desc:
        "A definition list displays terms and their descriptions. It uses <code>&lt;dl&gt;</code> (definition list), <code>&lt;dt&gt;</code> (term), and <code>&lt;dd&gt;</code> (description).",
    example4: `<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`,
    tip2: "<strong>Tip:</strong> Use definition lists for glossary-style or structured term-description content.",

    summaryTitle: "Summary",
    summary: `<ul>
<li>Use <code>&lt;ul&gt;</code> for unordered (bulleted) lists.</li>
<li>Use <code>&lt;ol&gt;</code> for ordered (numbered) lists.</li>
<li>Use <code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code>, and <code>&lt;dd&gt;</code> for definition lists.</li>
<li>Nested lists allow hierarchical data representation.</li>
<li>Use the <code>type</code> attribute in <code>&lt;ol&gt;</code> to change numbering style.</li>
</ul>`,
};

export default listTags;
