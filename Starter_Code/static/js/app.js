// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field

    let metadata = data.metadata


    // Filter the metadata for the object with the desired sample number

    let samplearray = metadata.filter(sample => sample.id == sample)
    let samplenumber = samplenumberarray[0]


    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");


    // Use `.html("") to clear any existing metadata

    panel.html("");


    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = samplenumber[key];

      // Append new h6 element for each key-value pair
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field


    // Filter the samples for the object with the desired sample number


    // Get the otu_ids, otu_labels, and sample_values


    // Build a Bubble Chart


    // Render the Bubble Chart


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field

    let samplenames = data.names;


    // Use d3 to select the dropdown with id of `#selDataset`

    let selectanator = d3.select("#selDataset");


    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.

    for (let i = 0, i < samplenames.length; i++)
      let sample = samplenames[i]

      
    selectanator.append("option").text(sample).property("value", sample);

    // Get the first sample from the list

    const firstSample = samplenames[0]

    // Build charts and metadata panel with the first sample

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected

}

// Initialize the dashboard
init();
