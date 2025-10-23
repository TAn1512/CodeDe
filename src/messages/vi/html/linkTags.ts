const linkTags = {
    title: "Liên Kết Trong HTML (Hyperlinks)",
    description:
        "Liên kết là một trong những khối xây dựng cốt lõi của web. Chúng cho phép người dùng điều hướng giữa các trang, trang web hoặc thậm chí kích hoạt các hành động như gửi email.\n\nKhi bạn di chuột qua một liên kết, con trỏ chuột sẽ biến thành biểu tượng bàn tay — cho biết rằng nó có thể nhấp được.\n\n<b>Lưu ý:</b> Một liên kết có thể không chỉ là văn bản. Nó có thể là hình ảnh, nút hoặc thậm chí là một phần tử khối!",
    sub1: "Cú pháp cơ bản",
    sub1_desc:
        "Thẻ <code>&lt;a&gt;</code> định nghĩa một siêu liên kết và sử dụng thuộc tính <code>href</code> để chỉ định điểm đến:\n\n<code>&lt;a href=\"url\"&gt;văn bản liên kết&lt;/a&gt;</code>\n\nNhấp vào văn bản liên kết sẽ đưa người dùng đến URL được cung cấp.",
    example1: '<a href="https://example.com">Truy cập Example.com</a>',
    note1:
        "<strong>Lưu ý:</strong> Văn bản hiển thị (bên trong &lt;a&gt;) là phần người dùng sẽ nhấp vào.",
    sub2: "Kiểu liên kết mặc định",
    sub2_desc:
        "Theo mặc định, trình duyệt hiển thị các liên kết như sau:\n<ul><li>Liên kết chưa truy cập — màu xanh và gạch chân</li><li>Liên kết đã truy cập — màu tím và gạch chân</li><li>Liên kết đang hoạt động — màu đỏ và gạch chân</li></ul>\nBạn có thể tùy chỉnh giao diện của chúng bằng CSS.",
    example2:
        '<a href="https://example.com" style="color:blue;text-decoration:underline;">Ví dụ liên kết được định dạng</a>',
    sub3: "Thuộc tính target",
    sub3_desc:
        "Theo mặc định, một liên kết mở trong cùng tab trình duyệt. Bạn có thể thay đổi hành vi này bằng cách sử dụng thuộc tính <code>target</code>:\n<ul><li><code>_self</code> – mở trong cùng tab (mặc định)</li><li><code>_blank</code> – mở trong tab mới</li><li><code>_parent</code> – mở trong khung cha</li><li><code>_top</code> – mở trong toàn bộ cửa sổ</li></ul>",
    example3:
        '<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Mở Google trong tab mới</a>',
    tip1:
        '<strong>Mẹo:</strong> Khi sử dụng <code>target="_blank"</code>, luôn thêm <code>rel="noopener noreferrer"</code> để tăng tính bảo mật.',
    sub4: "URL tuyệt đối và tương đối",
    sub4_desc:
        "Có hai loại URL bạn có thể sử dụng trong liên kết:\n<ul><li><b>URL tuyệt đối:</b> địa chỉ web đầy đủ, bao gồm https://</li><li><b>URL tương đối:</b> đường dẫn tương đối so với trang hiện tại hoặc gốc trang web</li></ul>",
    example4:
        '<a href="https://developer.mozilla.org/">Truy cập MDN Web Docs</a>',
    note2: "<strong>Lưu ý:</strong> Sử dụng URL tuyệt đối cho các liên kết bên ngoài và URL tương đối cho điều hướng nội bộ trong trang web của bạn.",
    sub5: "Sử dụng hình ảnh làm liên kết",
    sub5_desc:
        "Bạn có thể biến hình ảnh thành liên kết có thể nhấp bằng cách đặt thẻ <code>&lt;img&gt;</code> bên trong <code>&lt;a&gt;</code>:",
    example5:
        '<a href="https://codede.vercel.app/">\n  <img src="https://firebasestorage.googleapis.com/v0/b/annt-project.appspot.com/o/images%2Flogo.png?alt=media&token=85c989e1-3d38-4738-b494-4bfa88b76592" alt="Đi đến YouTube" style="width:80px;height:80px;">\n</a>',
    sub6: "Liên kết email",
    sub6_desc:
        "Bạn có thể tạo một liên kết mở ứng dụng email mặc định của người dùng bằng cú pháp <code>mailto:</code>:",
    example6: '<a href="mailto:hello@example.com">Gửi cho chúng tôi email</a>',
    sub7: "Nút làm liên kết",
    sub7_desc:
        "Bạn có thể mô phỏng một liên kết bằng cách sử dụng nút với JavaScript. Điều này hữu ích khi bạn muốn một nút điều hướng đến trang khác:",
    example7:
        '<button onclick="document.location=\'https://www.example.com\'">Về trang chủ</button>',
    note3:
        "<strong>Lưu ý:</strong> Thông thường, nên sử dụng liên kết thực (&lt;a&gt;) cho điều hướng và dùng nút cho các hành động trong trang.",
    sub8: "Thuộc tính title của liên kết",
    sub8_desc:
        "Thuộc tính <code>title</code> hiển thị thêm thông tin khi người dùng di chuột qua liên kết — thường được hiển thị dưới dạng chú giải công cụ (tooltip):",
    example8:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" title="Tìm hiểu thêm về liên kết HTML">Hướng dẫn liên kết HTML</a>',
    summaryTitle: "Tóm tắt",
    summary:
        "<ul>\n<li>Sử dụng phần tử <code>&lt;a&gt;</code> để tạo siêu liên kết.</li>\n<li>Dùng thuộc tính <code>href</code> để xác định địa chỉ đích.</li>\n<li>Dùng <code>target=\"_blank\"</code> để mở liên kết trong tab mới (kèm <code>rel=\"noopener noreferrer\"</code>).</li>\n<li>Dùng <code>mailto:</code> để tạo liên kết email.</li>\n<li>Liên kết có thể là văn bản, hình ảnh hoặc nút được định dạng bằng CSS.</li>\n</ul>"
};

export default linkTags;
