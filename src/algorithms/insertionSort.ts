export type Step = {
    i: number;
    j: number;
    message?: string;
    keyIndex?: number;   // vị trí phần tử đang được chèn
    keyValue?: number;   // giá trị phần tử đang được chèn
};

export async function* insertionSort(
    arr: number[],
    setArray: (a: (number | -1)[]) => void,
    setStep: (s: Step) => void,
    labels: {
        comparing: string;
        and: string;
        done: string;
        pickKey: string;
        shifting: string;
        inserting: string;
    }
) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;

        // lấy key ra khỏi mảng (đánh dấu trống bằng -1)
        arr[i] = -1;
        setArray([...arr]);
        setStep({
            i,
            j,
            keyIndex: i,
            keyValue: key,
            message: `${labels.pickKey} = ${key}`,
        });
        yield;

        // so sánh và dịch phần tử sang phải
        while (j >= 0 && arr[j] !== -1 && arr[j] > key) {
            setStep({
                i: j,
                j,
                keyIndex: j,
                keyValue: key,
                message: `${labels.comparing} ${arr[j]} ${labels.and} ${key}`,
            });
            yield;

            arr[j + 1] = arr[j];
            arr[j] = -1;
            setArray([...arr]);

            setStep({
                i: j,
                j: j + 1,
                keyIndex: j,
                keyValue: key,
                message: labels.shifting.replace("{value}", arr[j + 1].toString()),
            });
            yield;

            j--;
        }

        // chèn key vào đúng vị trí
        arr[j + 1] = key;
        setArray([...arr]);
        setStep({
            i: j + 1,
            j,
            keyIndex: j + 1,
            keyValue: key,
            message: labels.inserting
                .replace("{value}", key.toString())
                .replace("{index}", (j + 1).toString()),
        });
        yield;
    }

    setStep({
        i: -1,
        j: -1,
        message: labels.done,
    });
    yield;
}
