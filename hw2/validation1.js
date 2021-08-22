function validate1() {
  //check fName
  varFirstName = document.forms["validation form"]["fName"].value;
  if((alphaNumCheck(varFirstName) && !(isBlank(varFirstName)))){
    var isValidFName = true;
  }
  var imageFName = getImage(Boolean(isValidFName), "fName");
  var labelNotifyFName = getNotificationName(Boolean(isValidFName), "fName") ;
  document.getElementById("fNamePar").appendChild(imageFName);
  document.getElementById("fNamePar").appendChild(labelNotifyFName);

  //check lName
  varLastName = document.forms["validation form"]["lName"].value;
  if((alphaNumCheck(varLastName) && !(isBlank(varLastName)))){
    var isValidLName = true;
  }
  var imageLName = getImage(Boolean(isValidLName), "lName");
  var labelNotifyLName = getNotificationName(Boolean(isValidLName), "lName") ;
  document.getElementById("lNamePar").appendChild(imageLName);
  document.getElementById("lNamePar").appendChild(labelNotifyLName);

  //check Gender
  genderCheck = true;
  var userSelGen = document.forms["validation form"]["gender"].value;
  if(userSelGen == null){genderCheck = false;}
  var imageGen = getImage(Boolean(genderCheck), "gender");
  var labelNotifyGender = getNotificationGender(Boolean(genderCheck), "gender");
  document.getElementById("genderPar").appendChild(imageGen);
  document.getElementById("genderPar").appendChild(labelNotifyGender);

  //check State
  stateCheck = true;
  var userSelState = document.forms["validation form"]["state"].value;
  if(userSelState == null){stateCheck = false;}
  var imageState = getImage(Boolean(stateCheck), "state");
  var labelNotifyState = getNotificationState(Boolean(stateCheck), "state");
  document.getElementById("statePar").appendChild(imageState);
  document.getElementById("statePar").appendChild(labelNotifyState);

  if(isValidFName && isValidLName && genderCheck && stateCheck){window.location.href = "./validation2.html";}
  else{alert("One or more required fields does not meet the requirements!");}

}

function isBlank(str){
  return (!str || /^\s*$/.test(str));
}

function getNotificationState(bool, ID){
  var label = document.getElementById("labelNotify" + ID);
  if (label == null) {
      label = document.createElement("LABEL");
      label.id = "labelNotify" + ID;
      // label.className = "errorMessage";
      label.setAttribute( 'class', 'errorMessage' );
    }

  label.innerHTML = bool ? "" : "State field is required!";
  return label;
}

function getNotificationGender(bool, ID){
  var label = document.getElementById("labelNotify" + ID);
  if (label == null) {
      label = document.createElement("LABEL");
      label.id = "labelNotify" + ID;
      // label.className = "errorMessage";
      label.setAttribute( 'class', 'errorMessage' );
    }

  label.innerHTML = bool ? "" : "Gender field is required!";
  return label;
}

function getNotificationName(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Name field is required and should be alphanumeric!";
    return label;
}

function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}

function alphaNumCheck(entry) {
    let regex = /^[a-z\d]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function deleteCookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
