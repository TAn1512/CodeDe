const stylesTags = {
    title: "HTML Styles",
    description:
        "The <b>style</b> attribute allows you to apply CSS directly to HTML elements. You can quickly change colors, fonts, and alignment for demonstration or small customizations. However, for larger projects, use CSS in separate files.",
    sub1: "1. Background Color",
    sub1_desc: "Use the <b>background-color</b> property to set an element’s background color.",
    example1:
        "<h1 style='background-color: lightblue;'>Hello World</h1>\n<p style='background-color: yellow;'>This paragraph has a yellow background.</p>",
    note1:
        "<strong>Note:</strong> Always choose background and text colors with good contrast for readability.",
    sub2: "2. Text Color",
    sub2_desc: "The <b>color</b> property defines the color of the text.",
    example2:
        "<h1 style='color: blue;'>Blue heading</h1>\n<p style='color: red;'>Red paragraph text</p>",
    tip1:
        "<strong>Tip:</strong> You can use color names, HEX values (<code>#ff0000</code>), RGB (<code>rgb(255,0,0)</code>), or HSL formats.",
    sub3: "3. Font Family",
    sub3_desc: "The <b>font-family</b> property specifies the font used for the text.",
    example3:
        "<h1 style='font-family: Verdana;'>This is Verdana font</h1>\n<p style='font-family: Courier;'>This is Courier font</p>",
    note2:
        "<strong>Note:</strong> List multiple fonts separated by commas to provide fallbacks.",
    sub4: "4. Font Size",
    sub4_desc: "The <b>font-size</b> property defines the size of the text.",
    example4:
        "<h1 style='font-size: 40px;'>Heading 1</h1>\n<p style='font-size: 20px;'>Paragraph text</p>",
    tip2:
        "<strong>Tip:</strong> Use relative units like <code>em</code> or <code>rem</code> for better responsiveness.",
    sub5: "5. Text Alignment",
    sub5_desc:
        "Use the <b>text-align</b> property to set the horizontal alignment of text.",
    example5:
        "<h1 style='text-align: center;'>Centered heading</h1>\n<p style='text-align: right;'>Right-aligned paragraph</p>",
    note3:
        "<strong>Note:</strong> Common values include <code>left</code>, <code>right</code>, <code>center</code>, and <code>justify</code>.",
    summaryTitle: "Chapter Summary",
    summary: `<ul>
<li>Use the <code>style</code> attribute to apply inline CSS styles to HTML elements.</li>
<li>Use <code>background-color</code> to set the background color.</li>
<li>Use <code>color</code> to define the text color.</li>
<li>Use <code>font-family</code> to change the text font.</li>
<li>Use <code>font-size</code> to adjust text size.</li>
<li>Use <code>text-align</code> to align text (left, center, or right).</li>
</ul>`,
};

export default stylesTags;
