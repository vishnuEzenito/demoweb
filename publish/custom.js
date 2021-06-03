const apiResult = [
{      
  title: "hospital 1",
  description: "doc2",
  output: "out2"
}, {
  title: "hospital 2",
  description: "Doc 1",
  output: "out3"
},
 {
  title: "hospital 2",
  description: "Doc 1",
  output: "out3"
},
{      
  title: "hospital 1",
  description: "doc2",
  output: "out2"
}, {
  title: "hospital 2",
  description: "Doc 1",
  output: "out3"
},
 {
  title: "hospital 2",
  description: "Doc 1",
  output: "out3"
}
];






const container = document.getElementById('accordion');

apiResult.forEach((result, idx) => {
  // Create card element
  const card = document.createElement('div');
  card.classList = 'card-body';

  // Construct card content
  const content = `
   <div class="column">
    <div class="card">
    <div class="card-header" id="heading-${idx}">
     <img src="https://dl.airtable.com/.attachmentThumbnails/de84a2dadb22644d8ba9002b491260f0/f6ab8d29
" alt="Avatar" style="width:75%">
    <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
      <h3>${result.title}</h3>
      <p>${result.description}</p>
      <p>${result.output}</p>
    </div>
  
   
      </div>
    </div>
  </div>
  `;

  // Append newyly created card element to the coiyntainer
  container.innerHTML += content;
})


