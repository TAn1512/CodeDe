const imageTags = {
    title: "HTML Images",
    description: "The <code>&lt;img&gt;</code> tag is used to embed images in a webpage.",

    sub1: "Basic Image Example",
    sub1_desc: "The <code>&lt;img&gt;</code> tag uses the <code>src</code> attribute to specify the image source.",
    example1: `<img src="https://firebasestorage.googleapis.com/v0/b/annt-project.appspot.com/o/images%2Flogo.png?alt=media&token=85c989e1-3d38-4738-b494-4bfa88b76592" alt="Website Logo">`,
    note1: "<strong>Note:</strong> The <code>alt</code> attribute provides alternative text if the image cannot be displayed.",

    sub2: "Image Size",
    sub2_desc: "You can set the width and height of an image using the <code>width</code> and <code>height</code> attributes.",
    example2: `<img src="https://firebasestorage.googleapis.com/v0/b/annt-project.appspot.com/o/images%2Flogo.png?alt=media&token=85c989e1-3d38-4738-b494-4bfa88b76592" alt="Logo" width="200" height="200">`,
    tip1: "<strong>Tip:</strong> Use CSS for responsive images instead of fixed width and height.",

    sub3: "Image from a Different Folder or URL",
    sub3_desc: "Images can be loaded from local folders or from the internet using absolute URLs.",
    example3: `<img src="/logo.png" alt="Local Logo">
<img src="https://firebasestorage.googleapis.com/v0/b/annt-project.appspot.com/o/images%2Flogo.png?alt=media&token=85c989e1-3d38-4738-b494-4bfa88b76592" alt="External Logo"`,
    note2: "<strong>Note:</strong> Ensure external images are from trusted sources to avoid CORS or mixed content issues.",

    sub4: "Background Images",
    sub4_desc: "You can set images as background using CSS.",
    example4: `<div style='background-image: url("https://firebasestorage.googleapis.com/v0/b/annt-project.appspot.com/o/images%2Flogo.png?alt=media&token=85c989e1-3d38-4738-b494-4bfa88b76592"); height: 200px; background-size: contain; background-repeat: no-repeat;'></div>`,
    tip2: "<strong>Tip:</strong> Use <code>background-size: cover</code> to make background images look better.",

    sub5: "Image as a Link",
    sub5_desc: "You can use an image as a clickable link by wrapping it in an <code>&lt;a&gt;</code> tag.",
    example5: `<a href="https://example.com">
    <img src="https://firebasestorage.googleapis.com/v0/b/annt-project.appspot.com/o/images%2Flogo.png?alt=media&token=85c989e1-3d38-4738-b494-4bfa88b76592" alt="Clickable Logo" width="150">
</a>`,
    note3: "<strong>Note:</strong> Always add descriptive <code>alt</code> text for accessibility and SEO.",

    summaryTitle: "Summary",
    summary: `
        <ul>
            <li>The <code>&lt;img&gt;</code> tag embeds images in a webpage.</li>
            <li>Use the <code>alt</code> attribute for accessibility.</li>
            <li>Set image size using <code>width</code> and <code>height</code> or CSS.</li>
            <li>Images can come from local folders or external URLs.</li>
            <li>Use background images with CSS for decoration.</li>
            <li>Images can be clickable links using the <code>&lt;a&gt;</code> tag.</li>
        </ul>
    `,
};

export default imageTags;
