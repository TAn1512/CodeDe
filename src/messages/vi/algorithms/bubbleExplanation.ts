export const bubbleExplanation = {
    heading: "Giải thích thuật toán Sắp xếp nổi bọt (Bubble Sort)",
    description: `
Bubble Sort là một trong những thuật toán sắp xếp đơn giản nhất. 
Thuật toán lặp đi lặp lại việc duyệt qua danh sách, so sánh hai phần tử liền kề 
và hoán đổi chúng nếu chúng sai thứ tự. 
Mỗi lượt duyệt sẽ đưa phần tử lớn nhất còn lại về đúng vị trí của nó, 
giống như một bong bóng nổi dần lên mặt nước — do đó có tên là "Bubble Sort".
    `,
    complexity: {
        best: "O(n)",
        average: "O(n²)",
        worst: "O(n²)",
        space: "O(1)",
        stable: "true",
    },
    advantages: [
        "Rất dễ hiểu và dễ triển khai.",
        "Không cần thêm bộ nhớ (sắp xếp tại chỗ).",
        "Phù hợp để giảng dạy khái niệm sắp xếp cơ bản.",
    ],
    disadvantages: [
        "Hiệu suất rất thấp với tập dữ liệu lớn.",
        "Cần nhiều phép so sánh và hoán đổi.",
        "Hầu như không được dùng trong thực tế.",
    ],
    pseudoCode: [
        "for i = 0 to n - 1:",
        "    for j = 0 to n - i - 2:",
        "        if arr[j] > arr[j + 1]:",
        "            swap(arr[j], arr[j + 1])",
    ],
    labels: {
        complexityTitle: "Phân tích độ phức tạp",
        best: "Trường hợp tốt nhất",
        average: "Trường hợp trung bình",
        worst: "Trường hợp xấu nhất",
        space: "Độ phức tạp bộ nhớ",
        stable: "Ổn định",
        yes: "Có",
        no: "Không",
        advantages: "Ưu điểm",
        disadvantages: "Nhược điểm",
        pseudoCode: "Mã ví dụ:",
    },
} as const;
