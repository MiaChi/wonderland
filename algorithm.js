var a = 8;
var b = [6,2,4,1,5,9];
//search(0,8);
//bubbleSort(b);
quickSort(0,5,b);
b.forEach(function(item,index){console.log(item)});

function bubbleSort(b){
  for(var i=0;i<b.length;i++){
    for(var j=0;j<b.length-i;j++){
      if(b[j]>b[j+1]){
        var t=b[j];
        b[j]=b[j+1];
        b[j+1]=t;
      }
    }
  }
  return b;
}
function insertSort(b){
  for(var i=0;i<b.length;i++){
    var t=b[i];
    for(var j=i;j>0 && b[j-1]>t;j--){
      b[j]=b[j-1];
    }
    b[j]=t;
  }
  return b;
}
function quickSort(l,r,b){
  if(l>r){return;}

  var pivot = b[r];
  var i=l;
  var j=r;

  for(i=l;i<r;i++){
      if(b[i]>b[r]){
        for(j=r;j>i;j--){
          if(b[j]<b[r]){
            var t=b[i];b[i]=b[j];b[j]=t;
            break;
          }
        }
      }
  }
  var m=b[j];b[j]=pivot;b[r]=m;
  quickSort(l,j-1,b);
  quickSort(j+1,r,b);
}
function binarySearch(l,r){
var m = Math.floor((l+r)/2);
console.log(m);
if(l>r){console.log("not found");return;};

if(b[m]==a){
console.log(b[m]+" is found!");
return m;
}else if(b[m]>a){
search(l,m-1);
}else if(b[m]<a){
search(m+1,r);
}else{
  console.log("ERROR!");
}
}
