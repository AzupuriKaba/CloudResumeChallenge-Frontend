//This piece of code is used to make AWS API calls. This triggers a lambda function in the backend.
//The lambda function reads and updates AWS DynamoDB Table

const getHttpRequest = new XMLHttpRequest();
const getData = function() {
  getHttpRequest.onreadystatechange = function() {
    if (getHttpRequest.status == 200) {
       document.getElementById('Website_Views').innerHTML = getHttpRequest.responseText;
    }
  
    else {
      console.log('Something went wrong')
    }
};

  getHttpRequest.open('GET', 'https://7u04hfdb9e.execute-api.us-east-2.amazonaws.com/prod/num');
  getHttpRequest.send();
