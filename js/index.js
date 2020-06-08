const CurrentTime = document.querySelector("#CurrentTime");
CurrentTime.innerHTML = Date().slice(0, 21);

const TimeZone = document.querySelector("#TimeZone");
TimeZone.innerHTML = Date().slice(35, Date().length - 1)

const test = document.querySelector("#test");

var today = new Date();
Date.prototype.addTime = function(hours, minutes) {
    this.setTime(this.getTime() + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000));
  return this;
}
const def=document.querySelector("#default");
def.value=Date().slice(28,31)+":"+Date().slice(31,33);
const ans=document.querySelector("#answer");
setInterval(function(){
  h=Number(test.value.slice(0,3))-Number(Date().slice(29,31));
  m=Number(test.value.slice(4,6))-Number(Date().slice(31,33));
  var a = new Date();
  a.addTime(h,m);
  ans.innerHTML=String(a).slice(0,21);
},100);
