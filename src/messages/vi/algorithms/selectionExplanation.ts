export const selectionExplanation = {
    heading: "Giải thích thuật toán Sắp xếp chọn (Selection Sort)",
    description: `
Selection Sort chia mảng thành hai phần: phần đã sắp xếp (bên trái) và phần chưa sắp xếp (bên phải).  
Ở mỗi bước, thuật toán tìm phần tử nhỏ nhất trong phần chưa sắp xếp và hoán đổi nó với phần tử đầu tiên của phần đó.  
Sau mỗi vòng lặp, ranh giới của phần đã sắp xếp sẽ mở rộng thêm một phần tử.
    `,
    complexity: {
        best: "O(n²)",
        average: "O(n²)",
        worst: "O(n²)",
        space: "O(1)",
        stable: "false",
    },
    advantages: [
        "Rất đơn giản và dễ hiểu.",
        "Hoạt động tốt với các mảng nhỏ.",
        "Thực hiện số lần hoán đổi tối thiểu so với các thuật toán bậc hai khác.",
    ],
    disadvantages: [
        "Hiệu suất kém với dữ liệu lớn.",
        "Vẫn cần O(n²) phép so sánh ngay cả trong trường hợp tốt nhất.",
        "Không ổn định — các phần tử bằng nhau có thể thay đổi vị trí tương đối.",
    ],
    pseudoCode: [
        "for i = 0 to n - 2:",
        "    minIndex = i",
        "    for j = i + 1 to n - 1:",
        "        if arr[j] < arr[minIndex]:",
        "            minIndex = j",
        "    swap(arr[i], arr[minIndex])",
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
