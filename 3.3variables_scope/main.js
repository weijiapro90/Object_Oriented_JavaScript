/**
 * Created by weijiaPro on 2017/12/3.
 */

//变量提升 hoisting
{
    let a = 123;

    function f() {
        console.log(a); // undefined
        let a = 1;
        console.log(a); // 1
    }
    f();
}

//匿名函数 没有函数名字
{
    let f = function (a) {
        return a;
    }
}

//回调函数
{
    function multiplyByTwo(a, b, c) {
        let i, ar = [];
        for(i = 0; i < 3; i++) {
            ar[i] = arguments[i] * 2;
        }
        return ar;
    }

    function addOne(a) {
        return a + 1;
    }

    //如果要先运行 multiplybytwo ,再运行addone, 那么就有两个循环
    function multiplyByTwoCallback(a, b, c, callback) {
        let i, ar = [];
        for(i = 0; i < 3; i++) {
            ar[i] = callback(arguments[i] * 2);
        }
        return ar;
    }
    //after that, only need to run one command: abc = multiplyByTwoCallback(1, 2, 3, addOne);


    //即时函数 包围function的括号()必须存在
    {
        (
            function() {
                alert('boo');
            }()
        )
    }


}

