const formattingTags = {
    title: "Định dạng văn bản trong HTML",
    description:
        "HTML cung cấp nhiều phần tử để xác định văn bản có ý nghĩa đặc biệt hoặc được nhấn mạnh về mặt kiểu dáng.",
    sub1: "Tổng quan về các phần tử định dạng",
    sub1_desc:
        "Các phần tử định dạng được sử dụng để tạo kiểu cho văn bản theo nhiều cách khác nhau — thể hiện tầm quan trọng, làm nổi bật sự thay đổi hoặc biểu thị ý nghĩa.",
    example1:
        "<p><b>Đây là văn bản in đậm</b></p>\n<p><strong>Đây là văn bản quan trọng!</strong></p>",
    note1:
        "<strong>Lưu ý:</strong> Thẻ <code>&lt;b&gt;</code> chỉ làm đậm văn bản mà không mang ý nghĩa đặc biệt, trong khi <code>&lt;strong&gt;</code> biểu thị nội dung quan trọng.",
    sub2: "Văn bản in nghiêng và nhấn mạnh",
    sub2_desc:
        "Thẻ <code>&lt;i&gt;</code> dùng để thể hiện văn bản ở giọng hoặc ngữ điệu khác (ví dụ: thuật ngữ kỹ thuật, từ nước ngoài), còn <code>&lt;em&gt;</code> được dùng để nhấn mạnh ý nghĩa và có thể được trình đọc màn hình nhận biết.",
    example2:
        "<p><i>Đây là văn bản in nghiêng</i></p>\n<p><em>Đây là văn bản được nhấn mạnh</em></p>",
    tip1:
        "<strong>Mẹo:</strong> Dùng <code>&lt;em&gt;</code> để nhấn mạnh ngữ nghĩa, còn <code>&lt;i&gt;</code> cho thay đổi về kiểu hiển thị.",
    sub3: "Văn bản được đánh dấu và văn bản nhỏ",
    sub3_desc:
        "Dùng <code>&lt;mark&gt;</code> để làm nổi bật các từ quan trọng hoặc liên quan, và <code>&lt;small&gt;</code> để hiển thị thông tin phụ hoặc ghi chú nhỏ.",
    example3:
        "<p>Đừng quên mua <mark>sữa</mark> hôm nay!</p>\n<p><small>Đây là văn bản nhỏ hơn.</small></p>",
    note2:
        "<strong>Lưu ý:</strong> Văn bản được đánh dấu thường có nền màu vàng để thu hút sự chú ý.",
    sub4: "Văn bản bị xóa và được chèn thêm",
    sub4_desc:
        "Thẻ <code>&lt;del&gt;</code> hiển thị văn bản bị xóa (gạch ngang), trong khi <code>&lt;ins&gt;</code> biểu thị văn bản mới được thêm vào (thường được gạch chân).",
    example4: "<p>Màu yêu thích của tôi là <del>xanh</del>\n<ins>đỏ</ins>.</p>",
    tip2:
        "<strong>Mẹo:</strong> Nên đặt <code>&lt;del&gt;</code> và <code>&lt;ins&gt;</code> trên các dòng riêng hoặc có khoảng cách để tránh chồng chéo kiểu hiển thị.",
    sub5: "Chỉ số dưới và chỉ số trên",
    sub5_desc:
        "<code>&lt;sub&gt;</code> hiển thị văn bản bên dưới dòng cơ sở (thường dùng trong công thức hóa học), còn <code>&lt;sup&gt;</code> nâng văn bản lên phía trên (dùng trong chú thích hoặc số mũ).",
    example5: "<p>Công thức nước: H<sub>2</sub>O</p>",
    tip3:
        "<strong>Mẹo:</strong> Hai thẻ này rất hữu ích cho các ký hiệu khoa học và toán học.",
    sub6: "Văn bản chỉ số trên",
    sub6_desc:
        "Thẻ <code>&lt;sup&gt;</code> định nghĩa văn bản chỉ số trên, thường được sử dụng cho số mũ hoặc chú thích.",
    example6: "<p>10<sup>2</sup> = 100</p>",
    note3:
        "<strong>Lưu ý:</strong> Văn bản chỉ số trên sẽ hiển thị cao hơn một chút so với dòng chữ thông thường.",
    summaryTitle: "Tóm tắt chương",
    summary:
        "<ul>\n<li>Dùng <code>&lt;b&gt;</code> hoặc <code>&lt;strong&gt;</code> cho văn bản in đậm.</li>\n<li>Dùng <code>&lt;i&gt;</code> hoặc <code>&lt;em&gt;</code> cho văn bản in nghiêng hoặc nhấn mạnh.</li>\n<li>Dùng <code>&lt;mark&gt;</code> để làm nổi bật văn bản.</li>\n<li>Dùng <code>&lt;small&gt;</code> cho văn bản nhỏ hoặc thông tin phụ.</li>\n<li>Dùng <code>&lt;del&gt;</code> và <code>&lt;ins&gt;</code> để thể hiện nội dung bị xóa hoặc được thêm mới.</li>\n<li>Dùng <code>&lt;sub&gt;</code> và <code>&lt;sup&gt;</code> cho chỉ số dưới và chỉ số trên.</li>\n</ul>"
};

export default formattingTags;
