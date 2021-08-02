import React from 'react';


function AboutProduct(props) {
    return (
        <div className="detail-intro">
            <div className="detail-intro-title">
                <span>Thông số kỹ thuật</span>
            </div>
            <table className="detail-intro-tskt">
                <tbody>
                    <tr>
                        <td> Kích thước màn hình </td>
                        <td> 6.1 inches </td>
                    </tr>
                    <tr>
                        <td> Công nghệ màn hình </td>
                        <td> OLED </td>
                    </tr>
                    <tr>
                        <td> Camera sau </td>
                        <td> 12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS </td>
                    </tr>
                    <tr>
                        <td>Camera trước </td>
                        <td> 12 MP, f/2.2, 23mm (wide), 1/3.6" </td>
                    </tr>
                    <tr>
                        <td> Chipset </td>
                        <td> Apple A14 Bionic (5 nm) </td>
                    </tr>
                    <tr>
                        <td> Dung lượng RAM </td>
                        <td> 4 GB </td>
                    </tr>
                    <tr>
                        <td> Bộ nhớ trong </td>
                        <td> 64 GB </td>
                    </tr>
                    <tr>
                        <td> Pin </td>
                        <td> Li-Ion, sạc nhanh 20W, sạc không dây 15W, USB Power Delivery 2.0 </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AboutProduct;