Plotly.d3.csv('data/presidents.csv', function(rows) {
  // Build list of unique presidents
  let presidents = [];
  let heights    = [];
  let weights    = [];
  rows.forEach(function(d) {
    if (!presidents.includes(d['Name'])) {
      presidents.push(d['Name']);
      heights.push(d['Height']);
      weights.push(d['Weight']);
    }
});

  // console.log(presidents, weights, heights);
  var values = [presidents, weights, heights]
  console.log(values)
  // Add unique presidents to selector
  Plotly.d3
    .select('#president-selector')
    .selectAll('option')
    .data(presidents)
    .enter()
    .append('option')
    .text(function(d) {
      return d;
    })
    .attr('value', function(d) {
      return d;
    });

    //Show Table
  function showTable(){
    var data = [{
      type: 'table',
      header: {
        values: [["Name"], ["Height"], ["Weight"]],
        align: "center",
        line: {width: 1, color: 'black'},
        fill: {color: "grey"},
        font: {family: "Arial", size: 12, color: "white"}
        },
      cells:{
        values: values,
        align: 'center',
        line: {color: 'black', width: 1},
        font: {family: "Courier", size: 11, color: ["black"]}
    }
    }]
    return data;
  }
  // Create a plotly graph given a president


  // Create Plotly object
  // Get graph div
  var data = showTable()
  myGraph = document.getElementById('graph');
  Plotly.plot('graph', data);
  // Plot initial graph
  // Plotly.newPlot(myGraph, createGraph('Washington'));

  // Update graph when dropdown is triggered
  // Plotly.d3.select('#president-selector').on('change', function() {
  //   let fig = createGraph(Plotly.d3.event.target.value);
  //   Plotly.react(myGraph, fig);
  // });
});

