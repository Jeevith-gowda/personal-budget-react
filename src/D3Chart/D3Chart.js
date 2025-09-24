import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function D3Chart({ data }) {
    const svgRef = useRef();

    useEffect(() => {
        if (!data || data.length === 0) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove(); // Clear previous chart

        const margin = { top: 20, right: 30, bottom: 40, left: 80 };
        const width = 400 - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;

        const chart = svg
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Set up scales
        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.budget)])
            .range([0, width]);

        const yScale = d3.scaleBand()
            .domain(data.map(d => d.title))
            .range([0, height])
            .padding(0.1);

        // Add bars
        chart.selectAll(".bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", 0)
            .attr("y", d => yScale(d.title))
            .attr("width", d => xScale(d.budget))
            .attr("height", yScale.bandwidth())
            .attr("fill", (d, i) => {
                const colors = ['#ffcd56', '#ff6384', '#36a2eb', '#fd6b19', '#4bc0c0'];
                return colors[i % colors.length];
            });

        // Add x-axis
        chart.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScale));

        // Add y-axis
        chart.append("g")
            .call(d3.axisLeft(yScale));

        // Add value labels on bars
        chart.selectAll(".label")
            .data(data)
            .enter()
            .append("text")
            .attr("class", "label")
            .attr("x", d => xScale(d.budget) + 5)
            .attr("y", d => yScale(d.title) + yScale.bandwidth() / 2)
            .attr("dy", "0.35em")
            .style("font-size", "12px")
            .text(d => `$${d.budget}`);

    }, [data]);

    return <svg ref={svgRef}></svg>;
}

export default D3Chart;