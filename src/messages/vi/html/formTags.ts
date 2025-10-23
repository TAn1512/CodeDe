const formTags = {
    formsIntro: {
        title: "Biểu mẫu (Forms) trong HTML",
        description:
            "Biểu mẫu HTML được dùng để thu thập dữ liệu từ người dùng. Chúng là phần không thể thiếu của các trang web tương tác, ví dụ như đăng ký, đăng nhập hoặc gửi phản hồi.",

        sub1: "Cấu trúc cơ bản của biểu mẫu",
        sub1_desc:
            "Một biểu mẫu bắt đầu với thẻ <code>&lt;form&gt;</code> và kết thúc bằng <code>&lt;/form&gt;</code>. Bên trong chứa các phần tử nhập như ô văn bản, checkbox hoặc nút.",
        example1: `<form action="/submit" method="post">
  <label for="name">Họ tên:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Gửi">
</form>`,
        note1: "<strong>Lưu ý:</strong> Thuộc tính <code>action</code> chỉ định nơi gửi dữ liệu, còn <code>method</code> chỉ cách gửi (GET hoặc POST).",

        sub2: "Các phần tử phổ biến trong biểu mẫu",
        sub2_desc:
            "Biểu mẫu có thể bao gồm nhiều loại input khác nhau như ô văn bản, radio, checkbox và nút bấm.",
        example2: `<form>
  <input type="text" placeholder="Họ tên của bạn"><br>
  <input type="email" placeholder="Email của bạn"><br>
  <input type="checkbox" id="subscribe">
  <label for="subscribe">Đăng ký nhận tin</label><br>
  <input type="submit" value="Gửi">
</form>`,
        note2: "<strong>Mẹo:</strong> Nên luôn dùng thẻ <code>&lt;label&gt;</code> để mô tả input giúp tăng khả năng truy cập.",

        summaryTitle: "Tóm tắt",
        summary: `<ul>
<li>Dùng <code>&lt;form&gt;</code> để thu thập dữ liệu người dùng.</li>
<li>Thuộc tính <code>action</code> và <code>method</code> quyết định nơi và cách gửi dữ liệu.</li>
<li>Dùng <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, và <code>&lt;button&gt;</code> để tạo trường nhập liệu.</li>
<li>Thẻ <code>&lt;label&gt;</code> giúp biểu mẫu thân thiện hơn.</li>
</ul>`,
    },

    formAttributes: {
        title: "Thuộc tính của Form",
        description:
            "Các thuộc tính form giúp xác định hành vi và cách biểu mẫu gửi dữ liệu đi.",

        sub1: "action",
        sub1_desc: "Chỉ định URL nơi dữ liệu của form sẽ được gửi đến.",
        example1: `<form action="/submit_form.php">
  <input type="text" name="user">
  <input type="submit" value="Gửi">
</form>`,

        sub2: "method",
        sub2_desc: "Xác định cách gửi dữ liệu — thường là 'GET' hoặc 'POST'.",
        example2: `<form action="/data" method="get"> ... </form>
<form action="/data" method="post"> ... </form>`,
        note1: `<ul>
<li><code>GET</code>: Gửi dữ liệu qua URL (thường dùng cho tìm kiếm).</li>
<li><code>POST</code>: Gửi dữ liệu trong nội dung yêu cầu (bảo mật hơn).</li>
</ul>`,

        sub3: "target",
        sub3_desc: "Chỉ định nơi hiển thị kết quả sau khi gửi form.",
        example3: `<form action="/action_page.php" target="_blank">
  <input type="submit" value="Mở trong tab mới">
</form>`,
        note2: "<strong>Lưu ý:</strong> Một số giá trị phổ biến: <code>_self</code> (mặc định), <code>_blank</code>, <code>_parent</code>, <code>_top</code>.",

        summaryTitle: "Tóm tắt",
        summary: `<ul>
<li><code>action</code> → Xác định URL đích gửi dữ liệu.</li>
<li><code>method</code> → 'GET' dùng cho dữ liệu hiển thị, 'POST' cho dữ liệu nhạy cảm.</li>
<li><code>target</code> → Điều khiển nơi hiển thị kết quả.</li>
<li>Các thuộc tính khác: <code>autocomplete</code>, <code>novalidate</code>, <code>enctype</code>.</li>
</ul>`,
    },

    inputTypes: {
        title: "Các loại Input trong HTML",
        description:
            "Thẻ <code>&lt;input&gt;</code> hỗ trợ nhiều loại khác nhau để thu thập dữ liệu đa dạng từ người dùng.",

        sub1: "Các loại phổ biến",
        sub1_desc: "Một số loại input thường dùng:",
        example1: `<form>
  <input type="text" placeholder="Văn bản"><br>
  <input type="password" placeholder="Mật khẩu"><br>
  <input type="email" placeholder="Email"><br>
  <input type="number" placeholder="Số"><br>
  <input type="date"><br>
  <input type="file"><br>
  <input type="submit" value="Gửi">
</form>`,
        note1: "<strong>Lưu ý:</strong> Thuộc tính <code>type</code> quyết định kiểu ô nhập.",

        sub2: "Checkbox và Radio",
        sub2_desc:
            "Dùng <code>checkbox</code> để chọn nhiều mục, và <code>radio</code> khi chỉ chọn một.",
        example2: `<form>
  <input type="checkbox" id="html" name="skill" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Nam</label>
</form>`,
        note2: "<strong>Mẹo:</strong> Nên thêm thuộc tính <code>name</code> để nhóm các ô input có cùng mục đích.",

        sub3: "Các loại Input đặc biệt",
        sub3_desc: "HTML5 bổ sung nhiều loại input mới để cải thiện trải nghiệm người dùng:",
        example3: `<form style="display: flex; flex-direction: column; gap: 8px; max-width: 250px;">
  <label>Chọn màu: <input type="color" value="#ff6600"></label>
  <label>Chọn mức độ: <input type="range" min="0" max="100" value="60"></label>
  <label>Số điện thoại: <input type="tel" placeholder="0123-456-789"></label>
  <label>Địa chỉ web: <input type="url" placeholder="https://example.com"></label>
  <label>Tìm kiếm: <input type="search" placeholder="Từ khóa..."></label>
</form>`,
        note3:
            "<strong>Lưu ý:</strong> Các loại input này giúp trình duyệt hiển thị giao diện nhập liệu phù hợp (ví dụ: bàn phím số cho <code>tel</code> hoặc chọn màu cho <code>color</code>).",

        summaryTitle: "Tóm tắt",
        summary: `<ul>
<li>Dùng <code>type</code> để xác định loại ô nhập.</li>
<li>Các loại phổ biến: text, password, email, number, date, file.</li>
<li>Checkbox và radio giúp người dùng chọn lựa.</li>
<li>HTML5 thêm các loại mới như color, range, url, search.</li>
</ul>`,
    },
};

export default formTags;
