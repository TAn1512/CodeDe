export async function* bubbleSort(
    arr: number[],
    setArray: (a: number[]) => void,
    setStep: (s: { i: number; j: number; message?: string }) => void,
    labels: {
        comparing: string;
        and: string;
        done: string;
    }
) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            setStep({
                i: j,
                j: j + 1,
                message: `${labels.comparing} ${arr[j]} ${labels.and} ${arr[j + 1]}`
            });
            yield;

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                setArray([...arr]);
                yield;
            }
        }
    }
    setStep({ i: -1, j: -1, message: labels.done });
}
