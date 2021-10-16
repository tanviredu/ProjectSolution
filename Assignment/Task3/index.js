var arr = [1,3,4,15,19];
var item = 0;
var occarance = 0;
for(j=0;j<arr.length-1;j++){
    for(i=0;i<arr.Length-1;i++){
        if(arr[i]<arr[i+1]){
            temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
        }
    }
}

for(i=0;i<arr.length;i++){
    if (arr[i]+arr[i+1]==arr[i+2]){
        occarance++;
    }
}

console.log(occarance);