function ready(callback){
    if (document.readyState!='loading') callback();
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}

function getWidth() {
    return `${window.innerWidth} x ${window.innerHeight}`;
};

function getTotalWidth() {
    return `${screen.availWidth} x ${screen.availHeight}`;
};

var options = {
enableHighAccuracy: true,
timeout: 15000,
maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  document.getElementById("latitude").textContent = crd.latitude;
  document.getElementById("longitude").textContent = crd.longitude;
  document.getElementById("accuracy").textContent = crd.accuracy;
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}


ready(function(){
  document.getElementById('screen').textContent = getWidth()
  document.getElementById('totalscreen').textContent = getTotalWidth()
  document.getElementById('language').textContent = window.navigator.language
  document.getElementById('oscpu').textContent = window.navigator.oscpu
  document.getElementById('userAgent').textContent = window.navigator.userAgent
  document.getElementById('platform').textContent = window.navigator.platform

  document.getElementById('appCodeName').textContent = window.navigator.appCodeName
  document.getElementById('appVersion').textContent = window.navigator.appVersion
  document.getElementById('cookieEnabled').textContent = window.navigator.cookieEnabled
  document.getElementById('doNotTrack').textContent = window.navigator.doNotTrack

  navigator.geolocation.getCurrentPosition(success, error, options);
  document.getElementById('referrer').textContent = document.referrer
});