# F8-JS-Basic
# ES 6 ++

## Var - Let - Const

### Var - let, const: Hosting
- Var hỗ trọ Hosting còn let, const thì không hỗ trợ.
- Var truy cập ngoài scpoe còn let, const thì không.
### const - let, var: Assignment
- Const không thế gán 2 lần.

## Template literals: ``, ${variable}

## Arrow function
- Không dùng được từ khóa this.
- Không làm function contructor được.

## classes
- Có contructor để định nghĩa này nọ

## Default parameter values
- function sum(a = 0, b = 0) {}

## Enhanced object literals
- Định nghĩa key / value obj
    var obj = {
        name,
        age
    }
- Định nghĩa method cho obj
    var obj = {
        name,
        age,
        getName: {}
    }
- Định nghĩa key dạng biến
    var fileName = 'name'
    const course = {
        [fileName]: 'JS'
    }

## Destructuring, Rest

# Destructuring: phân rã
var arr = [1,2,3];
var [a,b,c] = arr // a = 1, b = 2, c = 3

# Rest: phần còn lại (...)
var arr = [1,2,3];
var [a, ...rest] = arr // a = 1, b = 2, c = 3

obj = {
    name: 'dat',
    age: '20'
}

var { name, age } = obj

## Tagged template literals


## Modules: import / export

## Optional chaining (?.)
- ?. : Kiểm tra nó có tồn tại thuộc tính hay không á ?