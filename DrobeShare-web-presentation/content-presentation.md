1. ## **Thông tin nhóm**    **Nhóm gồm 6 thành viên đến từ 3 nhóm chuyên ngành khác nhau:**    **Quản trị kinh doanh – Kinh doanh quốc tế, Công nghệ truyền thông – Truyền thông đa phương tiện, và Công nghệ thông tin – Kỹ thuật phần mềm.**

| STT | Họ và tên | MSSV | Ngành | Chuyên ngành | Vai trò |
| ----- | ----- | ----- | ----- | ----- | ----- |
| **1** | **Nguyễn Ngọc Đông Hy** | **SS196257** | **Quản trị kinh doanh** | **Kinh doanh quốc tế** | **CEO kiêm CFO – Điều hành chung & phụ trách tài chính** |
| **2** | **Nguyễn Thanh Tùng** | **SS193945** | **Quản trị kinh doanh** | **Kinh doanh quốc tế** | **COO – Phụ trách vận hành & nghiên cứu thị trường** |
| **3** | **Phan Ngân Hà** | **SS196281** | **Công nghệ truyền thông** | **Truyền thông đa phương tiện** | **CMO – Phụ trách marketing & xây dựng thương hiệu** |
| **4** | **Mai Văn Tiến Phát** | **SE190838** | **Công nghệ thông tin** | **Kỹ thuật phần mềm** | **CTO – Phụ trách công nghệ & backend** |
| **5** | **Bùi Ngọc Duy Khang** | **SE190710** | **Công nghệ thông tin** | **Kỹ thuật phần mềm** | **CPO – Phụ trách sản phẩm, UI/UX & frontend** |
| **6** | **Nguyễn Quang Nhật Nam** | **SE192962** | **Công nghệ thông tin** | **Kỹ thuật phần mềm** | **Tech Lead – Phụ trách hệ thống & cơ sở dữ liệu** |

##  **2\. Tổng quan & Mục đích của Dự án** 

## **Tên dự án: ShareDrobe**.

* **Mục đích:**  
  * **Giải quyết nỗi đau của người dùng:** Con gái thường chỉ mặc váy đi tiệc, đi đám cưới, hay đi biển đúng *một lần* để chụp ảnh rồi cất tủ vì "mặc lại sợ trùng ảnh". Chi phí mua mới quá cao, trong khi bỏ đi thì lãng phi.  
  * **Thúc đẩy thời trang bền vững:** Kéo dài vòng đời của trang phục, giảm thiểu rác thải vải vóc ra môi trường.  
  * **Tạo cộng đồng:** Kết nối những người có gu thời trang, giúp họ vừa kiếm được tiền từ tủ đồ cũ, vừa mua được đồ hiệu/đồ thiết kế với giá hời.

**Đối tượng khách hàng (Target Customer):**

* **Tập khách hàng chính:** Phái nữ thuộc thế hệ **Gen Z và Millennials** có gu thời trang.  
* **Phân nhóm theo hành vi:**  
  * *Người bán:* Những người có tâm lý "tủ đồ đầy nhưng không có gì để mặc", có nhu cầu xả tủ, thanh lý váy áo cao cấp (mới mặc 1-2 lần để chụp ảnh) để có ngân sách lên đời đồ mới.  
  * *Người mua:* Những người thích săn lùng váy độc bản, váy thiết kế (local brand) chất lượng cao với giá hời (chỉ bằng 30% \- 50% giá gốc), yêu thích sự ngăn nắp, rõ ràng và có ý thức về lối sống bền vững, bảo vệ môi trường.

## **2\. Tính năng lõi: Bộ lọc thông minh (Core Features)**

### **Bộ lọc theo nhu cầu (Dịp sử dụng)**

* **Đám cưới / Dạ hội:** Váy lộng lẫy, đính đá, đầm dài.  
* **Tiệc tùng / Clubbing:** Váy sexy, ôm body, lấp lánh.  
* **Đi biển / Nghỉ dưỡng:** Váy maxi, chất liệu voan, lụa, họa tiết nhiệt đới.  
* **Đi chơi / Hẹn hò (Casual):** Váy hoa nhí, váy trắng, phong cách nhẹ nhàng, dễ mặc hàng ngày.  
* **Công sở / Thanh lịch:** Váy blazer, váy midi kín đáo.

### **Bộ lọc theo độ mới & Tình trạng (Condition)**

Để tránh tranh chấp giữa người mua và người bán, độ mới cần được chuẩn hóa bằng hệ thống đánh giá trực quan:

* **New with tag (NWT):** Mới 100%, còn nguyên mác chưa mặc bao giờ.  
* **Like New (98-99%):** Chỉ mới mặc đúng 1 lần để chụp ảnh (Like new/1-time worn).  
* **Very Good (90-95%):** Đã mặc vài lần nhưng vải không sờn, không phai màu, không lỗi.  
* **Good (80-89%):** Có dấu hiệu đã qua sử dụng nhẹ nhưng form dáng vẫn đẹp.

### **Các bộ lọc bổ sung bắt buộc phải có:**

* **Số đo 3 vòng & Chiều cao/Cân nặng của chủ cũ:** Cái này cực kỳ quan trọng với váy áo, vì size S của hãng này chưa chắc bằng size S của hãng khác.  
* **Thương hiệu:** Zara, Mango, hay các local brand nổi tiếng (Dchic, Accent, Onon, v.v.).

## **3\. Mô hình doanh thu (Kiếm tiền từ đâu?)**

1. **Phí hoa hồng trên mỗi giao dịch (Transaction Fee):** Thu từ 5% \- 10% giá trị váy khi giao dịch thành công qua app (tương tự Shopee, Mercari).  
2. **Dịch vụ ký gửi trọn gói (Consignment / Premium Service):**  
   * Người bán chỉ cần gửi váy đến kho của app. App sẽ lo từ khứ giặt là, chụp ảnh studio, đăng bài, đến ship cho khách.  
   * Với dịch vụ này, bạn có thể thu hoa hồng cao hơn (20% \- 30%).  
3. **Phí đẩy bài / Quảng cáo (Featured Listings):** Người bán muốn váy của mình hiện lên đầu kết quả tìm kiếm hoặc trang chủ để thanh lý nhanh thì phải trả một khoản phí nhỏ (ví dụ: 20k/3 ngày).  
4. **Hợp tác với các tiệm giặt ủi, sửa đồ:** Tích hợp dịch vụ giặt hấp hoặc sửa size váy ngay trên app để ăn chia phần trăm với các đối tác này.

**4\. Quá trình mở rộng quy mô (Scale-up)** 

biến ứng dụng này từ một nền tảng thanh lý ngách thành một hệ sinh thái thời trang tuần hoàn toàn diện.

Dưới đây là bức tranh tổng quát về tương lai phát triển rộng rãi của dự án:

## **1\. Sự bùng nổ của Hiệu ứng Mạng lưới (Network Effects)**

Giai đoạn này chứng kiến sự dịch chuyển từ việc chủ động tìm kiếm người dùng sang mô hình **"Cộng đồng tự vận hành"**.

* **Vòng lặp tiêu dùng khép kín:** Khi đạt tới ngưỡng tăng trưởng, vòng lặp "Người mua hôm nay là Người bán ngày mai" sẽ hoạt động liên tục. Khách hàng mua váy đi biển, chụp ảnh check-in xong có thể đăng bán lại ngay lập tức trên app bằng tính năng *"Pass lại nhanh"*.  
* **Tối ưu hóa chi phí:** Khi cộng đồng tự trao đổi và giữ chân nhau bằng niềm tin và thói quen, chi phí giữ chân khách hàng (Retention Cost) cũng như chi phí marketing của nền tảng sẽ giảm xuống mức cực kỳ thấp.  
* **Dữ liệu người dùng khổng lồ:** Kho thông tin về số đo, cân nặng, chiều cao và gu thời trang của hàng trăm nghìn phụ nữ sẽ trở thành tài sản vô giá , giúp AI tối ưu hóa bộ lọc và gợi ý sản phẩm chính xác đến từng cá nhân.

## **2\. Đa dạng hóa dòng tiền & Doanh thu quy mô lớn**

Khi dòng tiền giao dịch tăng lên theo cấp số nhân, ShareDrobe không còn phụ thuộc duy nhất vào phí hoa hồng P2P cơ bản (5% \- 10%). Doanh thu sẽ đến từ các mũi nhọn cao cấp hơn:

### **Dịch vụ ký gửi trọn gói (Premium Consignment) trở thành nguồn thu chính**

Nền tảng sẽ xây dựng hệ thống kho bãi thông minh để xử lý dịch vụ ký gửi. Người bán chỉ cần gửi đồ, ShareDrobe sẽ lo toàn bộ khâu giặt là, chụp ảnh studio chuyên nghiệp, đăng bài và vận hành logistics để thu mức hoa hồng lớn (20% \- 30%).

### **Trung tâm Kiểm định Trung gian (Authentication Hub)**

Với các dòng váy thiết kế cao cấp và đồ hiệu, dịch vụ "Đảm bảo chính hãng" sẽ được tự động hóa tại các văn phòng kiểm định lớn. Quy trình ship qua bên thứ ba được chuẩn hóa: 

**Seller → Văn phòng ShareDrobe (Kiểm định & Dán tem niêm phong)--\> Buyer** 

tạo ra nguồn thu dịch vụ gia tăng cực kỳ ổn định.

### **Kinh tế chia sẻ và Quảng cáo**

* Phí đẩy bài và quảng cáo nổi bật (Featured Listings) từ các cá nhân hoặc các local brand muốn xả kho bộ sưu tập cũ sẽ tăng mạnh.  
* Ăn chia phần trăm sâu với hệ thống đối tác giặt ủi, sửa chữa trang phục tích hợp trực tiếp trên ứng dụng.


## **4\. Trở thành Biểu tượng của Phong cách sống Bền vững (Lifestyle Brand)**

Khi lan tỏa rộng rãi, ShareDrobe không chỉ là một ứng dụng "chợ thanh lý" mà sẽ trở thành một định nghĩa về phong cách sống của Gen Z và Millennials:

* **Định hình lại tư duy mua sắm:** Việc diện đồ second-hand chất lượng cao, đồ hiệu độc bản với giá bằng 30% \- 50% giá gốc trở thành biểu tượng của sự thông minh, cá tính và có ý thức bảo vệ môi trường.  
* **Tác động xã hội:** Góp phần kéo dài đáng kể vòng đời của trang phục, giảm thiểu hàng tấn rác thải vải vóc ra môi trường mỗi năm , hiện thực hóa tầm nhìn cốt lõi về một nền thời trang tuần hoàn (Sustainable Fashion) thực thụ.