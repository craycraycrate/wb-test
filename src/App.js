import React from 'react';
import './App.css';
import axios from 'axios';

  axios.get('./film.json')
    .then(function (response) {
      // handle success
      console.log(response.data);

      let data = response.data;
      var list = document.createElement('ul');

      data.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item.Title;
        list.append(li);

        var img = document.createElement('img');
        img.src = item.Images[1];
        li.prepend(img);
      });

      var dataDv = document.querySelector('#searchData');
      dataDv.appendChild(list);

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });


function App() {
  return (
    <div className="App">
      <header className="App-header">
            <h1>Search Results</h1>
      </header>
      
      <div id="searchData"></div>
    </div>
  );
}

export default App;
