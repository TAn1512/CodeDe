export const insertionExplanation = {
    heading: "Giải thích thuật toán Sắp xếp chèn (Insertion Sort)",
    description: `
Insertion Sort hoạt động giống như cách bạn sắp xếp bài trên tay. 
Bạn chia mảng thành hai phần: phần đã sắp xếp (bên trái) và phần chưa sắp xếp (bên phải). 
Ở mỗi bước, thuật toán chọn một phần tử từ phần chưa sắp xếp (gọi là "key") 
và chèn nó vào đúng vị trí trong phần đã sắp xếp bằng cách dịch các phần tử lớn hơn sang phải.
    `,
    complexity: {
        best: "O(n)",
        average: "O(n²)",
        worst: "O(n²)",
        space: "O(1)",
        stable: "true",
    },
    advantages: [
        "Dễ hiểu và triển khai.",
        "Hiệu quả với mảng nhỏ hoặc gần như đã sắp xếp.",
        "Sắp xếp tại chỗ, không cần bộ nhớ bổ sung.",
    ],
    disadvantages: [
        "Hiệu suất kém với mảng lớn.",
        "Cần nhiều phép so sánh và dịch chuyển phần tử.",
        "Không phù hợp cho dữ liệu ngẫu nhiên lớn.",
    ],
    pseudoCode: [
        "for i = 1 to n - 1:",
        "    key = arr[i]",
        "    j = i - 1",
        "    while j >= 0 and arr[j] > key:",
        "        arr[j + 1] = arr[j]",
        "        j = j - 1",
        "    arr[j + 1] = key",
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
