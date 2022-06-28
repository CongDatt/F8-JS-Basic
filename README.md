# F8-JS-Basic

Array.forEach(function(item, index){}) => loop 
Array.everey(function(item){ return boolean }) =>  check all items with condition
Array.some(function(item){ return boolean }) =>  check a item with condition
Array.find(function(item){ return item }) =>  check a item with condition
Array.filter(function(item){ return items }) =>  check items with condition


Array.reduce( function(accumulator, currentValue, currentIndex, originArray) {
}, 0)

0: gia tri khoi tao - khong bat buoc 
accumulator: biến tích trữ (bằng 0 - giá trị khởi tạo ở lần đầu tiên), function return gì thì lưu trữ đó
currentValue: giá trị hiện tại 
currentIndex: index hiện tại
