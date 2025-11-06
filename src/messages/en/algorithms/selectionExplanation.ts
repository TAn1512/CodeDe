export const selectionExplanation = {
    heading: "Explanation of the Selection Sort Algorithm",
    description: `
Selection Sort divides the array into two parts: a sorted section (on the left) and an unsorted section (on the right).  
At each step, it searches for the smallest element in the unsorted part and swaps it with the first unsorted element.  
After every pass, the boundary of the sorted section expands by one.
    `,
    complexity: {
        best: "O(n²)",
        average: "O(n²)",
        worst: "O(n²)",
        space: "O(1)",
        stable: "false",
    },
    advantages: [
        "Very simple and easy to understand.",
        "Performs well on small datasets.",
        "Makes the minimum possible number of swaps compared to other quadratic algorithms.",
    ],
    disadvantages: [
        "Inefficient for large datasets.",
        "Still requires O(n²) comparisons even in the best case.",
        "Not stable — equal elements may change their relative order.",
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
