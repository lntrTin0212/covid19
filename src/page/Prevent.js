import React, {useEffect} from 'react'

function Prevent() {
    useEffect(() => {
        const click = document.querySelectorAll('.vaccine-type-item')
        for (let i of click) {
            i.addEventListener('click', () => {
                i.lastElementChild.classList.toggle('show')
                // console.log(i)
            })
        }   
    },[])
  return (
    <div className="vaccine-type-container">
    <p className="title-alert">
        Covid-19 Vaccine
    </p>
    <div className="vaccine-type-title">
        <h1>COVID-19 vaccination in Vietnam <br/> (Ấn vào từng loại để xem chi tiết)</h1>
    </div>
    <div className="vaccine-type-list">
        <div className="vaccine-type-item">
            <div className="vaccine-heading">
                <i className="fa-solid fa-syringe"></i>
                <h1>Astra Zeneca</h1> 
            </div>
            <div className="vaccine-info">
                <p><strong>Xuất Xứ:</strong> Anh</p>
                <p><strong>Thông tin: </strong>Việt Nam đã tiếp nhận tổng cộng 8.716.290 liều sau 15 đợt giao Vaccine . Vaccine AstraZeneca được triển khai tiêm chủng tại Việt Nam từ tháng 3/2021, hiện đang có số lượng sử dụng nhiều nhất tại Việt Nam</p>
            </div>
        </div>
        <div className="vaccine-type-item">
            <div className="vaccine-heading">
                <i className="fa-solid fa-syringe"></i>
                <h1>SPUTNIK V</h1> 
            </div>
            <div className="vaccine-info">
                <p><strong>Xuất xứ: Nga</strong></p>
                <p><strong>Thông tin:</strong>
                    Giữa tháng 3/2021, Việt Nam tiếp nhận 2.000 liều vaccine Sputnik V do Chính phủ Liên bang Nga viện trợ và sử dụng cho gần 900 người. Ngày 1/8, Việt Nam nhận thêm 10 nghìn liều vaccine Sputnik V do Chính phủ Liên bang Nga tặng.
                </p>
            </div>
        </div>
        <div className="vaccine-type-item">
            <div className="vaccine-heading">
                <i className="fa-solid fa-syringe"></i>
                <h1>Vero Cell</h1> 
            </div>
            <div className="vaccine-info">
                <p><strong>Xuất Xứ:</strong> Trung Quốc</p>
                <p><strong>Thông tin: </strong>
                    Việt Nam đã tiếp nhận 500.000 liều  vaccine Sinopharm do Chính phủ Trung Quốc viện trợ và đang triển khai tiêm chủng từ tháng 7/2021. Quảng Ninh là địa phương đầu tiên triển khai tiêm xong 88.100 liều mũi 1 và sẽ tiến hành tiêm mũi 2 từ ngày 4/8. Riêng Bình Liêu Quảng Ninh đã đạt độ bao phủ tiêm  vaccine đối với 50% dân số toàn huyện.
                </p>
            </div>
        </div>
        <div className="vaccine-type-item">
            <div className="vaccine-heading">
                <i className="fa-solid fa-syringe"></i>
                <h1>Pfizer</h1> 
            </div>
            <div className="vaccine-info">
                <p><strong>Xuất xứ:</strong>Mỹ</p>
                <p>
                    <strong>Thông tin:</strong>
                    Vaccine Comirnaty đã được Bộ Y tế phê duyệt có điều kiện cho nhu cầu cấp bách trong phòng, chống dịch COVID-19. Việt Nam đã tiếp nhận tổng cộng 746.460 liều vaccine Pfizer và đang triển khai tiêm chủng.
                </p>
            </div>
        </div>
        <div className="vaccine-type-item">
            <div className="vaccine-heading">
                <i className="fa-solid fa-syringe"></i>
                <h1> Moderna</h1> 
            </div>
            <div className="vaccine-info">
                <p><strong>Xuất xứ:</strong>Mỹ</p>
                <p>
                    <strong>Thông tin:</strong>
                    Vaccine Spikevax do Moderna sản xuất đã được cấp phép sử dụng tại 64 quốc gia, vùng lãnh thổ và được Tổ chức Y tế thế giới đưa vào danh sách sử dụng khẩn cấp. Đến nay, vaccine này đã được sử dụng tại 63 quốc gia với khoảng 340 triệu liều.
                </p>
            </div>
        </div>
        <div className="vaccine-type-item">
            <div className="vaccine-heading">
                <i className="fa-solid fa-syringe"></i>
                <h1>Vaccine Janssen</h1> 
            </div>
            <div className="vaccine-info">
                <p>
                    <strong>Xuất xứ:</strong>Bỉ &and; Hà Lan
                </p>
                <p>
                    <strong>Thông tin:</strong>
                    Vaccine Janssen do Janssen Pharmaceutica NV (Bỉ) và Janssen Biologics B.V (Hà Lan) sản xuất được cấp phép sử dụng tại 56 quốc gia, vùng lãnh thổ và được Tổ chức Y tế thế giới đưa vào danh sách sử dụng khẩn cấp. Đến nay, vaccine này đã được sử dụng tại 34 quốc gia với khoảng 60 triệu liều đã sử dụng.
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Prevent