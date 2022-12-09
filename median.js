// anonymous function
function median(a, b) {
    var num = a.concat(b);
    if ((num.length) % 2 == 0) {
        var a1 = a.sort(((a, b) => (a - b)));
        var b1 = a.sort(((a, b) => (a - b)));
        var last = a1.pop();
        var first = b1.shift();
        var m = (+last + +first) / 2;
        return m;
    }

    else {
        var str = num.sort(((a, b) => (a - b)));
        var odd = Math.floor(num.length) / 2;
        return str[odd];
    }
}
    console.log(median([1,2,3,4],[6,5,7,8]))

    // output
    // 2.5

// arrow function
    var m= (a,b) =>{
        var num= a.concat(b);
        if((num.length)%2==0)
        {
            var a1=a.sort(((a,b)=>(a-b)))
            var b1=a.sort(((a,b)=>(a-b)))
            var last=a1.pop();
            var first=b1.shift();
            var m=(+last+ +first)/2
            return m 
        }
        else
        {
            var str=num.sort(((a,b)=>(a-b)))
            var odd=Math.floor(num.length)/2
            return str[odd]
        }
    }
        console.log(median([1,2,3,4],[6,5,7,8]))
// output
    // 2.5