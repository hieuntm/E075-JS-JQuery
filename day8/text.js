// 1. Tạo class Book gồm các thuộc tính (id, name, price, author, publiser)
// 2. Tạo 1 mảng đặt tên là books
// - Thêm vào mảng 2 đối tượng book, với thuộc tính tùy chỉnh
// 3. Hiển thị toàn bộ book tồn tại trong mảng, dưới dạng bảng <table>

// Xây dựng tính năng
// 1. Thêm mới đối tượng Book vào mảng (function addBook())
// 2. Tìm kiếm đối tượng Book theo tên nhập vào (function findByName(inputName)))
// 3. Tìm kiếm các đối tượng Book có giá trong khoảng min và max (min và max là 2 input do người dùng nhập vào) 
// và hiển thị chúng ra bảng (function findByPriceRange(inputPriceMin, inputPriceMax)))
// 4. Tìm kiếm đối tượng Book theo tên tác giả (function findByAuthor(inputAuthor)))
// 5. Xóa đối tượng book với id nhập vào từ input và hiển thị danh sách các đối tượng book
//  (function deleteBookById(inputId)))
// 6. Sắp xếp sách theo giá (function sortByPrice())

// Gợi ý
// 1. Tạo 1 button, khi click vào sẽ xuất hiện form để điền thông tin Book mới,
// yêu cầu gồm các trường thuộc tính: name, price, author và publiser
// * Biết id: tăng dần từ bởi 1
// * name không được phép trùng và rỗng
// * price phải lớn hơn 0

// 2. Tạo 1 button, khi click vào xuất hiện 1 field input, cho phép nhập tên sách
// Sử dụng vòng lặp để tìm sách, và hiển thị lại dưới bảng

// 3. và 4, tương tự như tính năng 2
// * Tính năng 3: Click vào button, sẽ xuất hiện 2 input field cho phép nhập min và max
// * Tính năng 4: Tương tự như tính năng 2

// 5. Tạo 1 button, xuất hiện 1 input field cho phép người dùng nhập id
// Kiểm tra id có tồn tại trong mảng hay ko
// Sử dụng vòng lặp, nếu tồn tại sử dụng function remove được tích hợp sẵn cho mảng
// nếu không tồn tại thông báo, ra 1 thẻ <p>: Sách không tồn tại với color red

// Gợi ý thêm
// Có thể cần tạo ra các hàm hỗ trợ
// displayBook(book): Hiển thị 1 sách ra table
// displayBooks(books): Hiển thị nhiều sách ra table
// findById(id): Tìm kiếm sách theo id, trả về đối tượng sách tương ứng theo id nhập vào

// Noted:
// Tất cả các button tính năng, khi click vào sẽ tồn tại song song 1 button cho phép đóng form hoặc xóa input
// Tất cả đều phải sử dụng Javscript để xử lý tính năng, và dùng HTML, DOM để hiển thị, tích hợp thêm bootstrap nếu cần thiết