# Tasks

## 6 Sep 2024

1. **Mong muốn**: Thêm một model `User` có các thông tin cơ bản như:

   - `id`
   - `name`
   - `email`
   - `password`
   - `gender`
   - `birthday`
   - `createdAt`
   - `updatedAt`

2. **Từ model `User` hãy viết các API**:

   - **Sign Up**: Cho phép user tạo 1 user mới
   - **Login**: User login bằng `email` và `password`
   - **User detail**: Từ `id` trả về cho user thông tin chi tiết (không có password)
   - **Change password**: User phải nhập lại password hiện tại sau đó nhập password mới và confirm password mới.
   - **Update User Info**: User dc phép update thông tin: `name`, `gender`, `birthday`

   **Note**: để đảm bảo bảo mật thì khi lưu `password` vào db thì phải làm như thế nào hãy tìm hiểu thử.

3. **Tạo postman collection**:

   Để giúp dễ test hơn thì anh cần em tạo 1 collection trên postman và khi xong task có thể gởi cho.

## 9 Sep 2024

1.  Sau khi đã làm chức năng login thì hãy thử suy nghĩ xem những hành động nào nào là bắt buộc user chỉ có thể thực hiện sau khi đã login. Nghĩa là phải có xác thực (auth)

2.  Từ các actions đã tìm dc từ (1) hãy update lại code để mỗi khi user gọi các api liên quan tới các action đó thì phải dc xác thực rằng user đó đã login và phiên làm việc đó vẫn còn hiệu lực.

3.  Update lại việc tạo product: mỗi khi 1 product dc tạo ra phải có thông tin người tạo.

4.  Update lai việc lấy thông tin product ở list và detail product phải có thêm tên người tạo (author)
