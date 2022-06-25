# F8-JS-Basic


Với &&:
- Khi so sánh thì chỉ cần một trong những biến trong chứa falsy thì điều kiện sẽ trả về chính giá trị falsy đó.
- Ngược lại, trả về giá trị sau cùng của biển thức so sánh đó

'A' && 'B' && 'c'   => trả về 'c'
null && 'a' && 'b'  => trả về null

Với ||:
- Trả về giá trị đầu tiên nếu tất cả đều không chứ falsy
- Cố gắng tìm giá trị khác falsy để trả về
