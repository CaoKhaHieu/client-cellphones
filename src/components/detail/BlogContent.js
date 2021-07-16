import React, { useState } from "react";

function BlogContent(props) {
  const [showMoreBlog, setShowMoreBlog] = useState(false)
  const [styleBlog, setStyleBlog] = useState({
      height: '500px'
  });
  
  return (
    <section id="blog">
      <div className="blog">
        <div className="blog-content" style={styleBlog}>
          <h2>
            <strong>
              Đánh giá iPhone 12 Mini - Kích thước nhỏ gọn, hiệu năng đỉnh cao
            </strong>
          </h2>
          <p>
            iPhone 12 series hiện nay đang là thế hệ smartphone hiện đại nhất
            của Apple, vẻ đẹp từ thiết kế, và sức hấp dẫn của các tính năng hiện
            đại mà dòng máy này sở hữu khiến người dùng công nghệ toàn cầu ‘đứng
            ngồi không yên”. tuy là phiên bản thấp nhất, nhưng chiếc smartphone
            này vẫn sở hữu những ưu điểm vượt trội về sự tiện lợi, linh động khi
            sử dụng và tính năng sạc nhanh cùng camera chất lượng cao.
          </p>
          <h3>
            <strong>Viền máy vát phẳng cùng màn hình tai thỏ 5.4 inch</strong>
          </h3>
          <p>
            phiên bản Mini là một trong những phiên bản điện thoại siêu phẩm của
            Apple, ở dòng máy này viền máy không còn được thiết kế bo cong các
            cạnh, mà thay vào đó là phần cạnh máy được vát phẳng vô cùng mạnh mẽ
            và cá tính.
          </p>
          <p>
            Màn hình kiểu dáng tai thỏ quen thuộc, với phần khuyết được tinh gọn
            hơn mang đến cảm giác màn hình lớn hơn dù iPhone 12 Mini có kích cỡ
            màn hình chỉ 5.4 inch.
          </p>
          <p>
            <img src="https://cdn.cellphones.com.vn/media/wysiwyg/mobile/apple/iPhone-12-mini-2.jpg"></img>
          </p>
          <p>
            Màn hình kích cỡ 5.4 inch là điểm thuận lợi bởi máy khá nhỏ gọn, có
            thể dễ dàng đặt trong túi áo, quần hơn so với 6.1 inch trên điện
            thoại iPhone 12 Pro hay 6.7 inch trên 12 Pro Max.
          </p>
          <p>
            Màn hình của iPhone 12 Mini có độ phân giải 2340x1080, từng chi
            tiết, chuyển động trên màn hình đều hiện lên rõ nét, tươi sáng và
            không gặp phải tình trạng nhòe, giật hình.
          </p>
          <h3>
            <strong>Cụm camera 12MP cho khả năng chụp hình sắc nét</strong>
          </h3>
          <p>
            <img src="https://cdn.cellphones.com.vn/media/wysiwyg/mobile/apple/iPhone-12-mini-3.jpg"></img>
          </p>
          <h3>
            <strong>
              Trang bị chip Apple A14 và RAM 4GB, bộ nhớ trong 64GB
            </strong>
          </h3>
          <p>
            iPhone 12 Mini cũng tương tự các phiên bản iPhone 12 khác khi máy
            được trang bị con chip Apple A14. Nhờ đó, điện thoại cho khả năng xử
            lý nhanh - mượt mà.
          </p>
          <p>
            <img src="https://cdn.cellphones.com.vn/media/wysiwyg/mobile/apple/iPhone-12-mini-1.jpg"></img>
          </p>
          <p>
            Màn hình của iPhone 12 Mini có độ phân giải 2340x1080, từng chi
            tiết, chuyển động trên màn hình đều hiện lên rõ nét, tươi sáng và
            không gặp phải tình trạng nhòe, giật hình.
          </p>
          <p>
            RAM của iPhone 12 Mini sẽ là 4GB và bộ nhớ trong 64GB. Với dung
            lượng bộ nhớ này, vẫn đủ khả năng để người dùng lưu trữ thả ga và
            tốc độ giải quyết thao tác nhanh chóng.
          </p>

          <h3>
            <strong>
              Pin lithium-ion hỗ trợ sạc nhanh 20W, kể cả sạc không dây
            </strong>
          </h3>
          <p>
            <img src="https://cdn.cellphones.com.vn/media/wysiwyg/mobile/apple/iPhone-12-mini-4.jpg"></img>
          </p>
          <p>
            Tuy dòng điện thoại lần này sẽ không được đi kèm với bộ sạc, nhưng
            bù lại, chiếc điện thoại iPhone 2020 Mini này có dung lượng pin
            tương đối lớn, dung lượng pin tuy không thuộc hàng “khủng” nhưng vẫn
            cho thời lượng sử dụng lên đên 17 giờ xem video, 50 giờ nghe nhạc.
          </p>
          <p>
            Ngoài ra, iP 12 Mini còn được trang bị tính năng sạc nhanh 20W, nhờ
            có điểm này, người dùng có thể nhanh chóng sạc đầy chiếc điện thoại
            của mình, để tiếp tục công việc mà không bị gián đoạn quá lâu.
          </p>
          <p>
            Không chỉ thế, tính năng sạc nhanh này không chỉ được áp dụng với bộ
            sạc có dây mà đối với cả sạc không dây với cường độ 12W.
          </p>
        {
          showMoreBlog === false ? (<div className="blog-showmore" onClick={() => {setStyleBlog({height: '100%'}); setShowMoreBlog(!showMoreBlog)}}>Xem Thêm đánh giá</div>) : ''
        }
        </div>
      </div>
      <div className="blog-info"></div>
    </section>
  );
}

export default BlogContent;
