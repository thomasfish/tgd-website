var locksunlocked = {lock1:false, lock2:false, lock3:false, lock4:false};

function changelockvalue(lockid, updatevalue) {
  var lock = document.getElementById(lockid);
  if (lock.dataset.canedit) {
    lock.dataset.canedit=false;
  
    var currentvalue = parseInt(lock.value);
    var orderofmagnitude = updatevalue.toString().length;
  
    var locklength = lock.max.toString().length;
    var wanteddigit = locklength - orderofmagnitude;
  
    if (currentvalue.toString().padStart(locklength, "0").split("")[wanteddigit] == 9) {
      currentvalue -= updatevalue * 9;
    } else {
      currentvalue += updatevalue;
    }
  
    lock.value = currentvalue;
  
    updatelockdisplay(lockid);
  
    if (currentvalue == lock.dataset.password) {
      lock.parentElement.className = "lockcontainer solved";
      locksunlocked[lockid] = true;
      
      var allunlocked = true;
      for (var i = 0; i < Object.entries(locksunlocked).length; i++) {
        if (Object.entries(locksunlocked)[i][1] === false) {
          allunlocked = false;
        }
      }
      if (allunlocked) {
        document.getElementById("finalsecrets").className = "finalsecrets unlocked";
      }
    }
    
    lock.dataset.canedit=true;
  }
}

function updatelockdisplay(lockid) {
  var lock = document.getElementById(lockid);
  
  var locklength = lock.max.toString().length;
  
  for (var i = 0; i < locklength; i++) {
    lock.parentElement.children[i + 1].innerHTML = lock.value.toString().padStart(locklength, "0").split("")[i];
  }
}

updatelockdisplay("lock1");
updatelockdisplay("lock2");