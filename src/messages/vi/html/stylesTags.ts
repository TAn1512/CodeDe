const styleTags = {
    title: "Kiểu Dáng Trong HTML",
    description:
        "Thuộc tính <b>style</b> cho phép bạn áp dụng CSS trực tiếp lên các phần tử HTML. Bạn có thể nhanh chóng thay đổi màu sắc, phông chữ và căn chỉnh cho mục đích minh họa hoặc tuỳ chỉnh nhỏ. Tuy nhiên, với các dự án lớn, hãy sử dụng CSS trong các tệp riêng biệt.",
    sub1: "1. Màu nền (Background Color)",
    sub1_desc: "Sử dụng thuộc tính <b>background-color</b> để đặt màu nền cho phần tử.",
    example1:
        "<h1 style='background-color: lightblue;'>Xin chào Thế Giới</h1><p style='background-color: yellow;'>Đoạn văn này có nền màu vàng.</p>",
    note1: "<strong>Ghi chú:</strong> Hãy luôn chọn màu nền và màu chữ có độ tương phản tốt để đảm bảo khả năng đọc.",
    sub2: "2. Màu chữ (Text Color)",
    sub2_desc: "Thuộc tính <b>color</b> xác định màu của văn bản.",
    example2: "<h1 style='color: blue;'>Tiêu đề màu xanh</h1>\n<p style='color: red;'>Đoạn văn màu đỏ</p>",
    tip1: "<strong>Mẹo:</strong> Bạn có thể sử dụng tên màu, mã HEX (<code>#ff0000</code>), RGB (<code>rgb(255,0,0)</code>) hoặc định dạng HSL.",
    sub3: "3. Phông chữ (Font Family)",
    sub3_desc: "Thuộc tính <b>font-family</b> chỉ định phông chữ được sử dụng cho văn bản.",
    example3: "<h1 style='font-family: Verdana;'>Đây là phông Verdana</h1>\n<p style='font-family: Courier;'>Đây là phông Courier</p>",
    note2: "<strong>Ghi chú:</strong> Hãy liệt kê nhiều phông chữ cách nhau bằng dấu phẩy để có lựa chọn dự phòng.",
    sub4: "4. Kích thước chữ (Font Size)",
    sub4_desc: "Thuộc tính <b>font-size</b> xác định kích thước của văn bản.",
    example4: "<h1 style='font-size: 40px;'>Tiêu đề 1</h1>\n<p style='font-size: 20px;'>Đoạn văn bản</p>",
    tip2: "<strong>Mẹo:</strong> Nên sử dụng đơn vị tương đối như <code>em</code> hoặc <code>rem</code> để giúp giao diện responsive hơn.",
    sub5: "5. Căn chỉnh văn bản (Text Alignment)",
    sub5_desc: "Sử dụng thuộc tính <b>text-align</b> để căn chỉnh ngang cho văn bản.",
    example5: "<h1 style='text-align: center;'>Tiêu đề căn giữa</h1>\n<p style='text-align: right;'>Đoạn văn căn phải</p>",
    note3: "<strong>Ghi chú:</strong> Các giá trị phổ biến gồm <code>left</code>, <code>right</code>, <code>center</code> và <code>justify</code>.",

    summaryTitle: "Tóm tắt",
    summary: `<ul>
<li>Sử dụng thuộc tính <code>style</code> để áp dụng các kiểu CSS nội tuyến cho phần tử HTML.</li>
<li>Sử dụng <code>background-color</code> để đặt màu nền.</li>
<li>Sử dụng <code>color</code> để xác định màu chữ.</li>
<li>Sử dụng <code>font-family</code> để thay đổi phông chữ.</li>
<li>Sử dụng <code>font-size</code> để điều chỉnh kích thước chữ.</li>
<li>Sử dụng <code>text-align</code> để căn chỉnh văn bản (trái, giữa hoặc phải).</li>
</ul>`,
};

export default styleTags;
