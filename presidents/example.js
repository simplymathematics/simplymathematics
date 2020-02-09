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

  // Create Plotly object
  // Get graph div
  var data = showTable()
  myGraph = document.getElementById('table');
  Plotly.plot('table', data);
return data;
});

