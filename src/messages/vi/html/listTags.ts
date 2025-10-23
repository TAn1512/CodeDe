const listTags = {
  title: "Danh sách trong HTML",
  description:
    "HTML cung cấp nhiều cách để hiển thị danh sách các mục — danh sách không thứ tự, danh sách có thứ tự và danh sách định nghĩa.",

  sub1: "Danh sách không thứ tự",
  sub1_desc:
    "Danh sách không thứ tự bắt đầu với thẻ <code>&lt;ul&gt;</code>. Mỗi mục trong danh sách được bao trong thẻ <code>&lt;li&gt;</code>.",
  example1: `<ul>
  <li>Cà phê</li>
  <li>Trà</li>
  <li>Sữa</li>
</ul>`,
  note1: `<strong>Lưu ý:</strong> Bạn có thể kiểm soát kiểu dấu đầu dòng bằng CSS:
<ul style="list-style-type:disc; margin-left: 1rem;">
<li><code>disc</code> – dấu chấm đặc (mặc định)</li>
<li><code>circle</code> – dấu chấm rỗng</li>
<li><code>square</code> – dấu vuông</li>
<li><code>none</code> – loại bỏ dấu đầu dòng</li>
</ul>
Ví dụ: <code>&lt;ul style="list-style-type:square;"&gt;</code>`,
  sub2: "Danh sách có thứ tự",
  sub2_desc:
    "Danh sách có thứ tự bắt đầu với thẻ <code>&lt;ol&gt;</code>. Các mục trong danh sách được đánh số tự động.",
  example2: `<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>`,
  tip1: "<strong>Mẹo:</strong> Sử dụng thuộc tính <code>type</code> (như 'A', 'a', 'I', 'i') để thay đổi kiểu đánh số. Ví dụ: <code>&lt;ol type='A'&gt;</code>.",

  sub3: "Danh sách lồng nhau",
  sub3_desc:
    "Bạn có thể lồng danh sách bên trong các mục danh sách khác để tạo danh sách con.",
  example3: `<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>`,
  note2: "<strong>Lưu ý:</strong> Danh sách lồng nhau hữu ích để thể hiện cấu trúc phân cấp.",

  sub4: "Danh sách định nghĩa",
  sub4_desc:
    "Danh sách định nghĩa hiển thị thuật ngữ và mô tả của chúng. Nó sử dụng <code>&lt;dl&gt;</code> (definition list), <code>&lt;dt&gt;</code> (term), và <code>&lt;dd&gt;</code> (description).",
  example4: `<dl>
  <dt>HTML</dt>
  <dd>Ngôn ngữ Đánh dấu Siêu văn bản</dd>
  <dt>CSS</dt>
  <dd>Bảng kiểu xếp tầng</dd>
</dl>`,
  tip2: "<strong>Mẹo:</strong> Sử dụng danh sách định nghĩa cho từ điển hoặc nội dung mô tả theo cấu trúc thuật ngữ.",

  summaryTitle: "Tóm tắt",
  summary: `<ul>
<li>Dùng <code>&lt;ul&gt;</code> cho danh sách không thứ tự (dấu chấm tròn).</li>
<li>Dùng <code>&lt;ol&gt;</code> cho danh sách có thứ tự (đánh số).</li>
<li>Dùng <code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code>, và <code>&lt;dd&gt;</code> cho danh sách định nghĩa.</li>
<li>Danh sách lồng nhau giúp thể hiện dữ liệu có cấu trúc phân cấp.</li>
<li>Dùng thuộc tính <code>type</code> trong <code>&lt;ol&gt;</code> để thay đổi kiểu đánh số.</li>
</ul>`,
};

export default listTags;
