const margin = ({top: 20, right: 20, bottom: 60, left: 50})

const width = 850 - margin.left - margin.right,
height = 600 - margin.top - margin.bottom;

const sizeScale = d3
.scaleLinear()
.range([5,40])

const svg = d3.select(".chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json('airports.json', d3.autoType).then(data=>{
    console.log('airports', data.nodes)
    
})