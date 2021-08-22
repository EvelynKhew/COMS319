function validate2(){
  //checking through email
  valEmailCheck = true;
  var resultEmailCheck = emailCheck(document.forms["contact information"]["email"].value);
  var imageEmail = getImage(Boolean(resultEmailCheck), "email");
  var labelNotifyEmail1=getNotificationEmail(Boolean(resultEmailCheck), "email") ;
  document.getElementById("emailPar").appendChild(imageEmail);
  document.getElementById("emailPar").appendChild(labelNotifyEmail1);

  //checking through Phone
  valPhoneCheck = true;
  var resultPhoneCheck = phoneCheck(document.forms["contact information"]["phone"].value);
  var imagePhone = getImage(Boolean(resultPhoneCheck), "phone");
  var labelNotifyPhone=getNotificationPhone(Boolean(resultPhoneCheck), "phone") ;
  document.getElementById("phonePar").appendChild(imagePhone);
  document.getElementById("phonePar").appendChild(labelNotifyPhone);

  //checking through address
  valAddressCheck = true;
  var resultAddressCheck = addressCheck(document.forms["contact information"]["address"].value);
  var imageAddress = getImage(Boolean(resultAddressCheck), "address");
  var labelNotifyAddress=getNotificationAddress(Boolean(resultAddressCheck), "address") ;
  document.getElementById("addressPar").appendChild(imageAddress);
  document.getElementById("addressPar").appendChild(labelNotifyAddress);

}

function getNotificationAddress(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Must be in the form of city & state.";
    return label;
}
function getNotificationPhone(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Must be in the form xxx-xxx-xxxx or xxxxxxxxxx. x should be numeric.";
    return label;
}
function getNotificationEmail(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Email should be in form xxx@xxx.xxx, which x should be alphanumeric!";
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

function addressCheck(address){
  splitAdd = address.split(",");
  if(splitAdd.length == 2 && alphaNumCheck(splitAdd[0] + splitAdd[1])){
    if(splitAdd[1].length == 2){
      return true;
    }
  }
  valAddressCheck = false;
  return false;
}

function phoneCheck(phone){
  if(phone.length == 10){
    return !isNaN(phone);
  }
  else if (phone.length == 12){
    splitNum = phone.split("-");
    if(splitNum.length == 3 && !isNaN(splitNum[0]) && !isNaN(splitNum[1]) && !isNaN(splitNum[2])){
      return true;
    }
  }

  valPhoneCheck = false;
  return false;
}

function emailCheck(email) {
    atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
        periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    valEmailCheck = false;
    return false;
}


function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function deleteCookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
