"use strict";

let v=[0,31,-41,59,26,-53,58,97,-93,-23,84];
console.log(v);
heap(10);
console.log(v);
heapSort(10);
console.log(v);

function heapSort(n){
  for(let i=2;i<=n;i++)
		siftup(i);
	for(let i=n;i>=2;i--){
		swap(1,i);
    siftdown(i-1);
	}
}
function heap(n){
  for(let i=2;i<=n;i++){
    siftup(i);
	}
}
function siftup(n){
	let i = n;
  while(1){
    if(i==1)
			break;
		let p = Math.floor(i/2);
		if(v[p] <= v[i])
			break;
		swap(p,i);
		i = p;
	}
}
function siftdown(n){
  let i = 1;
	while(1){
    let c = 2*i;
		if (c > n)
			break;
		if (c+1 <= n){
      if( v[c+1] < v[c]) {
        c++;
			}
		}
		if(v[i] <= v[c])
			break;
		swap(c,i);
    i = c;
	}
}
function swap(i,j){
  let t;
	t = v[i];
	v[i] = v[j];
	v[j] = t;
}
