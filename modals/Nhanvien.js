function Nhanvien() {
  this.taiKhoan = "";
  this.hoTen = "";
  this.email = "";
  this.matKhau = "";
  this.luongCoBan = "";
  this.chucVu = "";
  this.gioLamTrongThang = "";
  this.TotalLuong = function () {
    var sum = 0;
    if (this.chucVu == "Sếp") {
      sum = this.luongCoBan * 3;
    } else if (this.chucVu == "Trưởng phòng") {
      sum = this.luongCoBan * 2;
    } else {
      sum = this.luongCoBan * 1;
    }
    return sum;
  };
  this.loaiNhanVien = function () {
    var xepLoai = "";
    if (this.chucVu == "Nhân viên" && this.gioLamTrongThang >= 196) {
      xepLoai = "Nhân viên xuất sắc";
    } else if (this.chucVu == "Nhân viên" && this.gioLamTrongThang >= 176) {
      xepLoai = "Nhân viên giỏi";
    } else if (this.chucVu == "Nhân viên" && this.gioLamTrongThang >= 160) {
      xepLoai = "Nhân viên khá";
    } else if (this.chucVu == "Nhân viên" && this.gioLamTrongThang < 160) {
      xepLoai = "Nhân viên trung bình";
    }
    return xepLoai;
  };
}
