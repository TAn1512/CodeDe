export async function* selectionSort(
    arr: number[],
    setArray: (a: number[]) => void,
    setStep: (s: { i: number; j: number; message?: string }) => void,
    labels: {
        comparing: string;
        and: string;
        done: string;
    }
) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            setStep({
                i,
                j,
                message: `${labels.comparing} ${arr[minIdx]} ${labels.and} ${arr[j]}`
            });
            yield;

            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }

        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            setArray([...arr]);
            setStep({
                i,
                j: minIdx,
                message: `${labels.comparing} ${arr[i]} ${labels.and} ${arr[minIdx]}`
            });
            yield;
        }
    }

    setStep({ i: -1, j: -1, message: labels.done });
    yield;
}
