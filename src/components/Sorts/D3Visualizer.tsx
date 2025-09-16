"use client";
import * as d3 from "d3";
import { useEffect, useRef } from "react";
import type { SortingStep } from "@/hooks/useSorting";

interface D3VisualizerProps {
    array: number[];
    step?: SortingStep | null;
}

export default function D3Visualizer({ array, step }: D3VisualizerProps) {
    const ref = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const width = 500;
        const height = 300;
        const barWidth = width / (array.length || 1);

        const svg = d3.select(ref.current);
        svg.selectAll("*").remove();

        // scale chiều cao cột
        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(array) || 1])
            .range([0, height - 50]);

        // group cho các cột
        svg
            .selectAll<SVGRectElement, number>("rect")
            .data(array)
            .enter()
            .append("rect")
            .attr("x", (_, i) => i * barWidth + 20)
            .attr("y", (d) => height - yScale(d))
            .attr("width", barWidth - 10)
            .attr("height", (d) => yScale(d))
            .attr("fill", (_, i) => {
                if (i === step?.i || i === step?.j) return "orange";
                return "steelblue";
            });

        svg
            .selectAll<SVGRectElement, number>("rect")
            .data(array)
            .enter()
            .append("rect")
            .attr("x", (_, i) => i * barWidth + 20)
            .attr("y", (d) => d === -1 ? height : height - yScale(d))
            .attr("width", barWidth - 10)
            .attr("height", (d) => d === -1 ? 0 : yScale(d))
            .attr("fill", (_, i) => {
                if (i === step?.i || i === step?.j) return "orange";
                if (array[i] === -1) return "lightgray"; // cột trống màu nhạt
                return "steelblue";
            });


        // vẽ text trên cột
        svg
            .selectAll("text.bar-label")
            .data(array)
            .enter()
            .append("text")
            .attr("class", "bar-label")
            .attr("x", (_, i) => i * barWidth + barWidth / 2 + 15)
            .attr("y", (d) => height - yScale(d) - 5)
            .attr("text-anchor", "middle")
            .text((d) => (d === -1 ? "" : d));

        // vẽ phần tử đang được chèn (nổi lên trên)
        if (step?.keyValue !== undefined && step.keyIndex !== undefined) {
            svg
                .append("circle")
                .attr("cx", step.keyIndex * barWidth + barWidth / 2 + 15)
                .attr("cy", 330) // nổi lên trên
                .attr("r", 20)
                .attr("fill", "tomato");

            svg
                .append("text")
                .attr("x", step.keyIndex * barWidth + barWidth / 2 + 15)
                .attr("y", 335)
                .attr("text-anchor", "middle")
                .attr("fill", "white")
                .text(step.keyValue);
        }
    }, [array, step]);

    return <svg ref={ref} width={600} height={350}></svg>;
}
