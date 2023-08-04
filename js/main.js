var arrnhanVien = [];

document.querySelector("#btnThemNV").onclick = function () {
  var nhanVienMoi = new Nhanvien();
  nhanVienMoi.taiKhoan = document.querySelector("#tknv").value;
  nhanVienMoi.hoTen = document.querySelector("#name").value;
  nhanVienMoi.email = document.querySelector("#email").value;
  nhanVienMoi.matKhau = document.querySelector("#password").value;
  nhanVienMoi.datepicker = document.querySelector("#datepicker").value;
  nhanVienMoi.luongCoBan = document.querySelector("#luongCB").value;
  nhanVienMoi.chucVu = document.querySelector("#chucvu").value;
  nhanVienMoi.gioLamTrongThang = document.querySelector("#gioLam").value;
  arrnhanVien.push(nhanVienMoi);
  renderTableNhanVien(arrnhanVien);
  LuuvaoStorage();
};
// In ra màn hình danh sách nhân viên
function renderTableNhanVien(danhSachNhanVien) {
  var outputHTML = "";
  for (var index = 0; index < danhSachNhanVien.length; index++) {
    var nhanVien = danhSachNhanVien[index];
    outputHTML += `
    <tr>
    <td>${nhanVien.taiKhoan}</td>
    <td>${nhanVien.hoTen}</td>
    <td>${nhanVien.email}</td>
    <td>${nhanVien.datepicker}</td>
    <td>${nhanVien.chucVu}</td>
    <td>${nhanVien.TotalLuong()}</td>
    <td>${nhanVien.loaiNhanVien()}</td>
    <td class = "d-flex">
    <button class= "btn btn-danger" onclick = xoaNhanVien('${index}')>Xóa</button>
    <button class = "btn btn-primary mx-2" data-toggle="modal"
    data-target="#myModal" onclick ="suaNhanVien('${index}')">Sửa</button>
    </td>
    </tr>
    `;
  }
  document.querySelector("#tableDanhSach").innerHTML = outputHTML;
}
// Lưu vào Storage
function LuuvaoStorage() {
  var chuoiNhanVien = JSON.stringify(arrnhanVien);
  localStorage.setItem("NhanVien", chuoiNhanVien);
}
// Lấy dữ liệu từ Storage ra
function layDataTuStorage(data) {
  var layDuLieu = localStorage.getItem(data);
  if (!layDuLieu) {
    return [];
  }
  var danhSach = JSON.parse(layDuLieu);
  for (var index = 0; index < layDuLieu.length; index++) {
    var dataNhanVien = new NhanVien();
    (danhSach[index].taiKhoan = dataNhanVien.tknv),
      (danhSach[index].hoTen = dataNhanVien.hoTen),
      (danhSach[index].email = dataNhanVien.email),
      (danhSach[index].matKhau = dataNhanVien.matKhau),
      (danhSach[index].luongCoBan = dataNhanVien.luongCoBan),
      (danhSach[index].chucVu = dataNhanVien.chucVu),
      (danhSach[index].gioLamTrongThang = dataNhanVien.gioLamTrongThang),
      (danhSach[index].datepicker = dataNhanVien.datepicker);
  }
  return dataNhanVien;
}
// Xóa nhân viên
function xoaNhanVien(indexDelete) {
  arrnhanVien.splice(indexDelete, 1);
  renderTableNhanVien(arrnhanVien);
}
// Sửa nhân viên
function suaNhanVien(indexFix) {
  var NhanVienFix = arrnhanVien[indexFix];
  document.querySelector("#tknv").value = NhanVienFix.taiKhoan;
  document.querySelector("#name").value = NhanVienFix.hoTen;
  document.querySelector("#email").value = NhanVienFix.email;
  document.querySelector("#password").value = NhanVienFix.matKhau;
  document.querySelector("#datepicker").value = NhanVienFix.datepicker;
  document.querySelector("#luongCB").value = NhanVienFix.luongCoBan;
  document.querySelector("#chucvu").value = NhanVienFix.chucVu;
  document.querySelector("#gioLam").value = NhanVienFix.gioLamTrongThang;
}
// Cập nhật nhân viên
document.querySelector("#btnCapNhat").onclick = function () {
  var Update = new Nhanvien();
  Update.taiKhoan = document.querySelector("#tknv").value;
  Update.hoTen = document.querySelector("#name").value;
  Update.email = document.querySelector("#email").value;
  Update.matKhau = document.querySelector("#password").value;
  Update.datepicker = document.querySelector("#datepicker").value;
  Update.luongCoBan = document.querySelector("#luongCB").value;
  Update.chucVu = document.querySelector("#chucvu").value;
  Update.gioLamTrongThang = document.querySelector("#gioLam").value * 1;
  var indexUpdate = -1;
  for (var index = 0; index < arrnhanVien.length; index++) {
    if (arrnhanVien[index].taiKhoan === Update.taiKhoan) {
      indexUpdate = index;
      break;
    }
  }
  if (indexUpdate !== -1) {
    arrnhanVien[indexUpdate].hoTen = Update.hoTen;
    arrnhanVien[indexUpdate].email = Update.email;
    arrnhanVien[indexUpdate].datepicker = Update.datepicker;
    arrnhanVien[indexUpdate].chucVu = Update.chucVu;
    arrnhanVien[indexUpdate].gioLamTrongThang = Update.gioLamTrongThang;
    arrnhanVien[indexUpdate].luongCoBan = Update.luongCoBan;
    renderTableNhanVien(arrnhanVien);
  }
};
