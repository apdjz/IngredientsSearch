fetch('/api/recipes')//url--http://localhost:3000/recipes
  .then((response) => response.json()) // Transform the data into json
  .then(function(data) {

    // jquery
    $('#test').val();//div
    $('#test').append('<ul id="list"></ul>');
    
    data.forEach(function(entry) {
        console.log('data to append', entry)
        $('#list').append('<li>' + entry.name + '</li>');
    });
  })
  .catch((error) => {
    console.error(error);
  });


  // fetch('/api/recipes/:id')//url--http://localhost:3000/recipes
  // .then((response) => response.json()) // Transform the data into json
  // .then(function(data) {
  
  //   // jquery
  //   $('#test2').val();//div
  //   $('#test2').append('<ul id="list"></ul>');
    
  //   data.forEach(function(entry) {
  //       console.log('data to append', entry)
  //       $('#list').append('<li>' + entry.name + '</li>');
  //   });
  // })
  // .catch((error) => {
  //   console.error(error);
  // });
