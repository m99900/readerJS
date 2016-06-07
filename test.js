//word readerJs
// by m99900
var readerJS = {
W:[
],
read:function(r, id) {
function red(rr, t) {
var i = 0;
var l = [];
var L = [];
while(i < rr.length - 1){
if(rr.charAt(i)==t||t===undefined) {
if(t===undefined) {
L.push(rr.charAt(i));
}
L.join("");
l.push(L);
L = [];
} else {
L.push(rr.charAt(i));
}
i++;    
}
return l;
}
function getmix(e) {
var i = 0;
var max = 0;
var min = Number.MAX_VALUE;
while(i < e.length - 1) {
if(e[i].length - 1 <= max) {
max = e[i].length - 1;
} else if(min < e[i].length - 1) {
min = e[i].length - 1;
} else {
}
i++;
}
return [min,max];
}
//this skims through every thing eat = array of letters, it == min and max, test == word list
function rad(eat, it, step, test) {
var min = it[0];
var max = it[1];
var i = step;
var tryal = i + max;
var trust = [];
var res = eat;
while(i < tryal || test.indexOf(trust.join("")) == -1) {
if(test.indexOf(trust.join(""))<-1) {
    
    i -= trust.length - 1;
    var L = i;
    i += trust.length - 1;
while(L < i) {
res[L] = "";
  L++;
}
break;
} else {
trust.push(eat[i]);
}
i++;
}
return [i, res];
}
if(typeof r == typeof "string") {
var think = id === undefined ? " " : id;
var list=[];
var words = readerJS.W;
list = red(r, think);
var i = 0;
if(list[1]!==undefined) {
while(list.length - 1 > i) {
if(words.indexOf(list[i])== -1) {
list.splice(i, 1);
}
i++;
}
list.join(" ");
} else {
list = red(r);
var mix = getmix(words);
var why = [];
while(i < list.length - 1) {
why = rad(list, mix, i, words);
i = why[0] + 1;
list = why[1];
}
}
return list;
}
return null;
},
addstuff:function(e) {
if(typeof e == "string") {
readerJS.W.push(e);
} else if(typeof e == typeof ["e", "r", "a"]) {
var i = 0;
var res = [];
while(i < e.length - 1) {
res.push(e[i]);
i++;
}

} else {

}
},
clear:function() {
readerJS.W = [];
}
};
readerJS.addstuff("hello");
alert(readerJS.read("hello world", " "));



