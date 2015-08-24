// The Submit Event & Getting Form Values
(function() {
  var form = document.getElementById('donation');
  var elements = form.elements;
  
  //when they submit the form
  form.addEventListener('submit', function(e) {
    // stop the default behavior of the Event which would reload the page
    e.preventDefault();

    // get an array of all the inputs in the form, create a var isValid starting out as true
    var isValid = true;
    var allInputs = document.querySelectorAll('#donation input');
    
    // loop through the array, for each input check if its value is empty
    for(i = 0; i < allInputs.length; i++) {
      var input = allInputs[i];

      // if its value is empty, set isValid to false and add has-error class to the parent form-group
      if (input.value === '') {
        isValid = false;
        input.parentNode.classList.add('has-error')
      }
    }
    
    // if there are any errors, stop here.  
    if (isValid === false) {
      return;
    }

    // update the message based on what they entered into the form
    var name = elements.name.value;
    document.getElementById('message').innerHTML = name;

    // hide the form
    document.getElementById('land').classList.add('hidden');
    document.getElementById('about').classList.add('hidden');
    document.getElementById('donating').classList.add('hidden');
    document.getElementById('sign-up').classList.add('hidden');
    form.classList.add('hidden');

    // show the thanks section 
    document.getElementById('firstPage').classList.remove('hidden');
    document.getElementById('thanksSection').classList.remove('hidden');
  });
}());
