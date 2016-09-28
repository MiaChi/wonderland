var a = 8;
var b = [6,2,4,1,5,9];
//search(0,8);
//bubbleSort(b);
//quickSort(0,5,b);
//b.forEach(function(item,index){console.log(item)});

//var vector=[31,-41,59,26,-53,58,97,-93,-23,84];
var v=[31,-41,59,26,-53,58,97,-93,-23,84];
//maxSum(vector);
var result=maxSumOpt(0,9);
console.log(result);

//连续子向量最大和 O(n3)
function maxSum(v){
	var sum = 0;
	var bigsum  = 0;
  for(var i=0;i<v.length;i++){
    for(var j=i;j<v.length;j++){
		  sum=0;
			for(var k=i;k<j;k++){
        sum += v[k]; 
			}
	bigsum = bigsum > sum ? bigsum:sum;
		}	
	}
	console.log('max sum is:'+bigsum);
}
//优化－分治算法,递归 O(nlogn)
function maxSumOpt(l,r){
	if(l>r) {return 0;};
	if(l==r) {return v[l]<0?0:v[l];}
	var m=Math.floor((l+r)/2);
  var lmax=0;
	var sum=0;
	for(var i=m;i>=l;i--){
    sum += v[i];
		lmax = lmax>sum?lmax:sum;
	}
	var rmax=0;
	sum=0;
	for(var j=m+1;j<=r;j++){
    sum+=v[j];
		rmax = rmax>sum?rmax:sum;
	}
	return max(lmax+rmax,maxSumOpt(l,m),maxSumOpt(m+1,r));
}
function max(a,b,c){
	if(c>=a && c>=b){return c;};
	if(b>=a && b>=c){return b;};
	if(a>=b && a>=c){return a;};
}
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
