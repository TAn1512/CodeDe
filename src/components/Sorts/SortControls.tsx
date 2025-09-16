"use client";
type Props = {
    generateArray: () => void;
    start: () => void;
    pause: () => void;
    reset: () => void;
    isRunning: boolean;
};

export default function SortControls({ generateArray, start, pause, reset, isRunning }: Props) {
    return (
        <div className="flex gap-2 justify-center mt-4">
            <button onClick={generateArray} className="px-3 py-1 bg-gray-200 rounded">Random</button>
            {!isRunning ? (
                <button onClick={start} className="px-3 py-1 bg-green-500 text-white rounded">Start</button>
            ) : (
                <button onClick={pause} className="px-3 py-1 bg-yellow-500 text-white rounded">Pause</button>
            )}
            <button onClick={reset} className="px-3 py-1 bg-red-500 text-white rounded">Reset</button>
        </div>
    );
}
