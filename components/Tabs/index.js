// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topicsEntry = document.querySelector('.topics');

function topics (lambdatopics) {
    const topicTab = document.createElement('div');
    topicsEntry.appendChild(topicTab);
    topicTab.textContent = lambdatopics.topics;

    return topicTab;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    // console.log(response);
        const topicsData = topics(response.data);
        topicsEntry.appendChild(topicsData);
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });
