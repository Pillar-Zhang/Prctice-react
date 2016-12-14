function Countdown(elem, startTime, endTime) {
    this.elem = elem;
    this.startTime = (new Date(startTime).getTime()) ? (new Date(startTime).getTime()) : (new Date().getTime());
    this.endTime = new Date(endTime).getTime();
}
Countdown.prototype = {
    SetTime: function() {},
    leftPad: function(n) {},
    DownTime: function() {}
}
var test = new Countdown("time", "2016/1/30,12:20:12", "2017/1/30,12:20:12");
test.SetTime();