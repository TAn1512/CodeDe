const introduction = {
    title: "Giới thiệu về HTML",
    description:
        "HTML (HyperText Markup Language) là ngôn ngữ đánh dấu được dùng để tạo cấu trúc nội dung cho trang web.",
    sections: [
        {
            heading: "HTML là gì?",
            content:
                "HTML là ngôn ngữ đánh dấu được sử dụng để mô tả cấu trúc của một trang web. Nó bao gồm các thẻ (tags) để xác định các phần tử như tiêu đề, đoạn văn, hình ảnh và liên kết.",
        },
        {
            heading: "Cấu trúc cơ bản của tài liệu HTML",
            content:
                "Một tài liệu HTML bắt đầu bằng khai báo <!DOCTYPE html>, tiếp theo là cặp thẻ <html>, trong đó có hai phần chính: <head> và <body>.",
        },
    ],
    elementExplanation: {
        title: "Giải thích về phần tử HTML",
        intro: "Một phần tử HTML bao gồm thẻ mở, nội dung và thẻ đóng.",
        openingTag: {
            title: "Thẻ mở",
            desc: "&lt;h1&gt; — bắt đầu phần tử",
        },
        content: {
            title: "Nội dung",
            desc: "Hello World! — nội dung hiển thị trên trang",
        },
        closingTag: {
            title: "Thẻ đóng",
            desc: "&lt;/h1&gt; — kết thúc phần tử",
        },
        fullElement: {
            title: "Phần tử đầy đủ",
            desc: "Bao gồm cả thẻ mở, nội dung và thẻ đóng.",
        },
    },
    exampleTitle: "Thực hành viết HTML",
    exampleCode:
        "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page title</title>\n  </head>\n  <body>\n    <h1>This is a heading</h1>\n    <p>This is a paragraph.</p>\n    <p>This is another paragraph.</p>\n  </body>\n</html>",
    simpleDoc: {
        explainedTitle: "Giải thích tài liệu ví dụ",
        explained: {
            doctype:
                "khai báo kiểu tài liệu, cho trình duyệt biết đây là HTML5.",
            html: "thẻ bao ngoài toàn bộ tài liệu HTML.",
            head: "chứa thông tin về trang như tiêu đề, meta, CSS, script, ...",
            title: "đặt tiêu đề hiển thị trên tab trình duyệt.",
            body: "chứa toàn bộ nội dung hiển thị cho người dùng.",
            h1: "thẻ tiêu đề chính (heading).",
            p: "thẻ đoạn văn bản (paragraph).",
        },
    },
    copy: "Sao chép",
    copied: "Đã sao chép!",
    run: "Chạy",
    nextLesson: "Bài tiếp theo",
    vscodeSetup: {
        title: "Cài đặt VS Code và chạy thử HTML trên máy tính",
        intro: "Ngoài việc học trực tuyến, bạn có thể thử viết HTML trực tiếp trên máy tính của mình bằng Visual Studio Code.",
        step1: "Truy cập <a href='https://code.visualstudio.com/' target='_blank' class='text-indigo-600 underline'>https://code.visualstudio.com/</a> để tải Visual Studio Code (VS Code) miễn phí.",
        step2: "Cài đặt VS Code như các phần mềm thông thường (bấm Next → Install).",
        step3: "Mở VS Code, chọn <strong>File → New File</strong> và lưu lại với tên <code>index.html</code>.",
        step4: "Nhập đoạn mã HTML ví dụ ở trên vào file của bạn.",
        step5: "Nhấn chuột phải lên file → chọn <strong>Open with Live Server</strong> hoặc mở trực tiếp trong trình duyệt để xem kết quả.",
        tip: "Bạn có thể cài tiện ích 'Live Server' trong VS Code để xem kết quả HTML thay đổi theo thời gian thực.",
    },
    attributes: {
        title: "Thuộc tính HTML (HTML Attributes)",
        intro: 'Thuộc tính cung cấp thêm thông tin cho các phần tử HTML. Chúng luôn được khai báo trong thẻ mở và thường có dạng cặp name="value".',
        exampleTitle: "Ví dụ về thuộc tính HTML",
        href: "Xác định địa chỉ URL mà liên kết sẽ dẫn đến.",
        src: "Chỉ đường dẫn tới tệp hình ảnh hoặc phương tiện.",
        alt: "Cung cấp văn bản thay thế nếu hình ảnh không hiển thị được.",
        type: "Xác định kiểu của thẻ input hoặc hành vi của nút bấm.",
        style: "Cho phép áp dụng trực tiếp các kiểu CSS cho phần tử.",
    },
};

export default introduction;
