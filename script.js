const changeText = () => {

    let inputText = document.getElementById("input").value;
    if(inputText === ""){
      return
    }
    inputText = inputText.replace(/^\s*\n/gm, "");
    inputText = inputText.replace(/, ?/g, '\n' ); 
    inputText = Array.from(new Set(inputText.split('\n')));


    // sort by name
    inputText.sort(function(a, b) {
      let nameA = a.toUpperCase(); // ignore upper and lowercase
      let nameB = b.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });

    // inputText.sort();
    // inputText = inputText.split('\n').sort().join(', ');
    inputText = inputText.join(', ');
    if(inputText.charAt(0) === ","){
      inputText = inputText.substring(1);
    }

    document.getElementById("output").innerHTML = inputText;
    window.scrollTo(0,document.body.scrollHeight);
    console.log(typeof(inputText));
    console.log(inputText);
}


const copyText = () => {
  /* Get the text field */
  let copyText = document.getElementById("output").innerHTML;

  /* Select the text field */
  // copyText.select();
  // copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText);
  // window.scrollTo(0,document.body.scrollHeight);
  /* Alert the copied text */
  if(copyText !== ''){
    document.getElementById("copied").innerHTML = "Copied!";
  }
}

const eraseText = () => {
  document.getElementById("input").value = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("copied").innerHTML = "";
}