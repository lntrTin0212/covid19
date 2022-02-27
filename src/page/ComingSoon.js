import React from 'react'

function ComingSoon() {
  return (
    <div className='coming-container'>
        <div className="coming-list">
            <div className="coming-item">
                <div className="coming-stt">
                    <h1>#1: Tài khoản</h1>
                </div>
                <div className="coming-content">
                    <p>
                        Cho phép đăng kí, đăng nhập và lưu lại máy học theo
                        từng tài khoản đăng nhập
                    </p>
                </div>
            </div>
            <div className="coming-item">
                <div className="coming-stt">
                    <h1>#2: Update API</h1>
                </div>
                <div className="coming-content">
                    <p>
                        Lấy ca nhiễm theo từng tỉnh, thành phố đối với từng nước được chọn
                    </p>
                </div>
            </div>
            <div className="coming-item">
                <div className="coming-stt">
                    <h1>#3: Thông tin</h1>
                </div>
                <div className="coming-content">
                    <p>
                        Cho phép khai báo y tế và lưu trữ lịch trình mỗi ngày để theo dõi sức khỏe tốt hơn
                    </p>
                </div>
            </div>
            <div className="coming-item">
                <div className="coming-stt">
                    <h1>#4: Tracking</h1>
                </div>
                <div className="coming-content">
                    <p>
                  Hiện toast message để dù đang ở tab khác thì vẫn hiện thông báo kịp thời
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ComingSoon