const imageTags = {
    title: "Hình ảnh trong HTML",
    description: "Thẻ <code>&lt;img&gt;</code> được dùng để chèn hình ảnh vào trang web.",

    sub1: "Ví dụ cơ bản về hình ảnh",
    sub1_desc: "Thẻ <code>&lt;img&gt;</code> sử dụng thuộc tính <code>src</code> để chỉ định nguồn hình ảnh.",
    example1: `<img src="https://firebasestorage.googleapis.com/v0/b/annt-project.appspot.com/o/images%2Flogo.png?alt=media&token=85c989e1-3d38-4738-b494-4bfa88b76592" alt="Logo trang web">`,
    note1: "<strong>Lưu ý:</strong> Thuộc tính <code>alt</code> cung cấp văn bản thay thế nếu hình ảnh không thể hiển thị.",

    sub2: "Kích thước hình ảnh",
    sub2_desc: "Bạn có thể đặt chiều rộng và chiều cao cho hình bằng thuộc tính <code>width</code> và <code>height</code>.",
    example2: `<img src="https://firebasestorage.googleapis.com/v0/b/annt-project.appspot.com/o/images%2Flogo.png?alt=media&token=85c989e1-3d38-4738-b494-4bfa88b76592" alt="Logo" width="200" height="200">`,
    tip1: "<strong>Mẹo:</strong> Nên dùng CSS để làm hình ảnh responsive thay vì đặt kích thước cố định.",

    sub3: "Hình ảnh từ thư mục khác hoặc URL",
    sub3_desc: "Hình ảnh có thể được tải từ thư mục cục bộ hoặc từ Internet bằng đường dẫn tuyệt đối (absolute URL).",
    example3: `<img src="/logo.png" alt="Logo cục bộ">
<img src="https://firebasestorage.googleapis.com/v0/b/annt-project.appspot.com/o/images%2Flogo.png?alt=media&token=85c989e1-3d38-4738-b494-4bfa88b76592" alt="Logo bên ngoài">`,
    note2: "<strong>Lưu ý:</strong> Hãy đảm bảo hình ảnh bên ngoài đến từ nguồn đáng tin cậy để tránh lỗi CORS hoặc nội dung hỗn hợp.",

    sub4: "Hình nền (Background Images)",
    sub4_desc: "Bạn có thể đặt hình ảnh làm nền bằng cách sử dụng CSS.",
    example4: `<div style='background-image: url("https://firebasestorage.googleapis.com/v0/b/annt-project.appspot.com/o/images%2Flogo.png?alt=media&token=85c989e1-3d38-4738-b494-4bfa88b76592"); height: 200px; background-size: contain; background-repeat: no-repeat;'></div>`,
    tip2: "<strong>Mẹo:</strong> Dùng <code>background-size: cover</code> để hình nền hiển thị đẹp và đầy đủ hơn.",

    sub5: "Hình ảnh làm liên kết",
    sub5_desc: "Bạn có thể sử dụng hình ảnh làm liên kết có thể nhấp bằng cách bao quanh nó trong thẻ <code>&lt;a&gt;</code>.",
    example5: `<a href="https://example.com">
    <img src="https://firebasestorage.googleapis.com/v0/b/annt-project.appspot.com/o/images%2Flogo.png?alt=media&token=85c989e1-3d38-4738-b494-4bfa88b76592" alt="Logo có thể nhấp" width="150">
</a>`,
    note3: "<strong>Lưu ý:</strong> Hãy luôn thêm văn bản thay thế (<code>alt</code>) mô tả hình ảnh để cải thiện khả năng truy cập và SEO.",

    summaryTitle: "Tóm tắt",
    summary: `
        <ul>
            <li>Thẻ <code>&lt;img&gt;</code> dùng để chèn hình ảnh vào trang web.</li>
            <li>Luôn sử dụng thuộc tính <code>alt</code> để cải thiện khả năng truy cập.</li>
            <li>Đặt kích thước hình bằng <code>width</code> và <code>height</code> hoặc CSS.</li>
            <li>Hình có thể đến từ thư mục cục bộ hoặc URL bên ngoài.</li>
            <li>Dùng hình nền bằng CSS cho mục đích trang trí.</li>
            <li>Có thể biến hình ảnh thành liên kết bằng thẻ <code>&lt;a&gt;</code>.</li>
        </ul>
    `,
};

export default imageTags;
