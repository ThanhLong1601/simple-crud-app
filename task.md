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
