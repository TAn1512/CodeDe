export const insertionExplanation = {
    heading: "Explanation of the Insertion Sort Algorithm",
    description: `
Insertion Sort works similarly to how you organize cards in your hand.  
The array is divided into two parts: a sorted section on the left and an unsorted section on the right.  
At each step, the algorithm picks one element from the unsorted part (called the "key")  
and inserts it into its correct position in the sorted part by shifting larger elements to the right.
    `,
    complexity: {
        best: "O(n)",
        average: "O(n²)",
        worst: "O(n²)",
        space: "O(1)",
        stable: "true",
    },
    advantages: [
        "Simple and easy to understand.",
        "Performs efficiently on small or nearly sorted datasets.",
        "Stable and in-place — no extra memory required.",
    ],
    disadvantages: [
        "Inefficient for large or completely unsorted datasets.",
        "Requires many comparisons and shifts in the worst case.",
        "Not suitable for large-scale data processing.",
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
