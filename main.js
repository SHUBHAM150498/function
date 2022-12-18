       function sum()
        {
            console.log("js");
        }
        sum();

        function add(a,b)
        {
            let sum;
            sum=a+b;
            console.log(sum); 
        }
        add(3,4);

        const addition = (a,b) =>{
            let result = a+b;
            console.log(result);
        }
        addition(6,8);

        var x =21;
        var girl = function()
        {
            console.log(x);
            var x = 20;
        }
        girl();
        //OUTPUT - undefined

        var x = 21;
        girl ();
        console.log(x)
        function girl() {
            console.log(x);
            var x = 20;
        };
        //OUTPUT - 21

        var x = 21;
        a();
        b();
        console.log(a);
        a = function(){
            x = 20;
            console.log(x);
        };
        b = function(){
            x = 40;
            console.log(x);
        };
        //OUTPUT - index.js:87
        //Uncaught ReferenceError: a is not defined at index.js:87:1

        function fact(n){
            if (n===0)
            {
                return 1;
            }
                return (n * fact (n - 1));
        }
        console.log(fact(5));
        //120