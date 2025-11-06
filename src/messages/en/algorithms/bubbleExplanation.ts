export const bubbleExplanation = {
    heading: "Explanation of the Bubble Sort Algorithm",
    description: `
Bubble Sort is one of the simplest sorting algorithms. 
It repeatedly traverses the list, compares adjacent elements, 
and swaps them if they are in the wrong order. 
Each pass through the list moves the next largest element to its correct position, 
just like a bubble rising to the surface — hence the name "Bubble Sort".
    `,
    complexity: {
        best: "O(n)",
        average: "O(n²)",
        worst: "O(n²)",
        space: "O(1)",
        stable: "true",
    },
    advantages: [
        "Very easy to understand and implement.",
        "Requires no extra memory (in-place sorting).",
        "Great for teaching basic sorting concepts.",
    ],
    disadvantages: [
        "Extremely inefficient for large datasets.",
        "Performs many comparisons and swaps.",
        "Rarely used in practical applications.",
    ],
    pseudoCode: [
        "for i = 0 to n - 1:",
        "    for j = 0 to n - i - 2:",
        "        if arr[j] > arr[j + 1]:",
        "            swap(arr[j], arr[j + 1])",
    ],
    labels: {
        complexityTitle: "Complexity Analysis",
        best: "Best Case",
        average: "Average Case",
        worst: "Worst Case",
        space: "Space Complexity",
        stable: "Stable",
        yes: "Yes",
        no: "No",
        advantages: "Advantages",
        disadvantages: "Disadvantages",
        pseudoCode: "Pseudo Code:",
    },
} as const;
