const introduction = {
    metaTitle: "Introduction to HTML – The Building Blocks of the Web",
    metaDescription:
        "Learn the basics of HTML — the foundation of every webpage. Understand elements, tags, and structure to start building your first website.",
    title: "Introduction to HTML",
    description: "HTML (HyperText Markup Language) is the markup language used to structure content on web pages.",
    sections: [
        {
            heading: "What is HTML?",
            content: "HTML is a markup language used to describe the structure of a web page. It consists of tags that define elements such as headings, paragraphs, images, and links."
        },
        {
            heading: "Basic structure of an HTML document",
            content: "An HTML document starts with a <!DOCTYPE html> declaration, followed by the <html> tag which contains two main parts: <head> and <body>."
        }
    ],
    elementExplanation: {
        title: "Understanding an HTML Element",
        intro: "An HTML element consists of an opening tag, content, and a closing tag.",
        openingTag: {
            title: "Opening tag",
            desc: "&lt;h1&gt; — begins the element"
        },
        content: {
            title: "Content",
            desc: "Hello World! — the visible text on the page"
        },
        closingTag: {
            title: "Closing tag",
            desc: "&lt;/h1&gt; — ends the element"
        },
        fullElement: {
            title: "Full element",
            desc: "Includes the opening tag, content, and closing tag."
        }
    },
    exampleTitle: "Try it Yourself",
    exampleCode: "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page title</title>\n  </head>\n  <body>\n    <h1>This is a heading</h1>\n    <p>This is a paragraph.</p>\n    <p>This is another paragraph.</p>\n  </body>\n</html>",
    simpleDoc: {
        explainedTitle: "Explanation of the Example Document",
        explained: {
            doctype: "declares the document type, telling the browser this is HTML5.",
            html: "wraps the entire HTML document.",
            head: "contains metadata, title, styles, and scripts.",
            title: "sets the title displayed on the browser tab.",
            body: "contains the visible page content.",
            h1: "defines the main heading.",
            p: "defines a paragraph of text."
        }
    },
    copy: "Copy",
    copied: "Copied!",
    run: "Run",
    nextLesson: "Next Lesson",
    vscodeSetup: {
        title: "Install VS Code and Run HTML Locally",
        intro: "Besides learning online, you can try writing HTML directly on your computer using Visual Studio Code.",
        step1: "Go to <a href='https://code.visualstudio.com/' target='_blank' class='text-indigo-600 underline'>https://code.visualstudio.com/</a> to download Visual Studio Code (VS Code) for free.",
        step2: "Install VS Code as usual (click Next → Install).",
        step3: "Open VS Code, choose <strong>File → New File</strong> and save it as <code>index.html</code>.",
        step4: "Type the example HTML code shown above into your file.",
        step5: "Right-click on the file → select <strong>Open with Live Server</strong> or open it directly in your browser to see the result.",
        tip: "You can install the 'Live Server' extension in VS Code to view your HTML changes live."
    },
    attributes: {
        title: "HTML Attributes",
        intro: "Attributes provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs like name=\"value\".",
        exampleTitle: "HTML Attributes Example",
        href: "Specifies the destination URL for a link.",
        src: "Specifies the path to an image file or media source.",
        alt: "Provides alternative text if the image cannot be displayed.",
        type: "Defines the input type or button behavior.",
        style: "Allows you to apply inline CSS styles directly to an element."
    }
};

export default introduction;
