/**
 * Created by weijiaPro on 2017/12/3.
 */

/**
 * 作用域链： 在函数内定义的变量，函数外不可见； 在代码块内定义的函数，代码块外可见
 */
{
    var a = 1;
    function f() {
        var b = 1;
        return a;
    }
    f(); // b is not defined
}

// 作用域链： 内函数可以访问父级作用域
{
    var global = 1;
    function outer() {
        var outer_local = 2;
        function inner() {
            var inner_local = 3;
            return inner_local + outer_local + global;
        }
        return inner();
    }
    outer(); // 6
}


// 闭包：方法1， 函数返回内部函数
{
    var a = 'global';
    var F = function () {
        var b = 'local';
        var Inner = function () {
            var c = 'inner';
            return b;
        };
        return Inner;
    };

    F(); // 'local'
}

// 闭包： 方法2， 在函数内直接创建一个新的全局函数
{
    var inner; // placeholder
    var F = function () {
        var b = 'local';
        var Inner = function () {
            return b;
        };
        inner = Inner;
    };

    F();
}

// 循环中的闭包
{
    function F() {
        var arr = [], i;
        for(i = 0; i < 3; i++) {
            arr[i] = function () {
                return i;
            };
        }
        return arr;
    }
    //3 ,3 ,3

    //解决办法： 在中间函数内将i的值本地化
    function F() {
        function binder(x) {
            return function () {
                return x;
            }
        }
        var arr=[], i;
        for (i = 0; i < 3; i++) {
            arr[i] = binder(i);
        }
        return arr;
    }
}
