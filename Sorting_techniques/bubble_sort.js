function bubble_sort(arr){
    let count
    do
{
    count=0
    for(let i=0;i<arr.length-1;i++)
    {
        if(arr[i]>arr[i+1])
        {
            temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
            count++

        }
    }
}while(count>=1)
    

}

let arr=[92,1,2,60,110,1,5,23]
bubble_sort(arr)
console.log(arr);
