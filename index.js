let a=[1,2,3,4,5,9,8,7,5]
let newArr=[]
let arrLength=Math.floor(a.length/2)
for(let i=arrLength-1;i>=0;i--){
    newArr.push(a[i])
}
let restEl=a.slice(arrLength).reverse()
console.log([...newArr,...restEl])


//

