// ========== BÀI 1 ==========
const khuVucA = "khuVucA";
const khuVucB = "khuVucB";
const khuVucC = "khuVucC";
const khuVucX = "khuVucX";
const doiTuong1 = "doiTuong1";
const doiTuong2 = "doiTuong2";
const doiTuong3 = "doiTuong3";
const doiTuong0 = "doiTuong0";
document.getElementById("btn1").onclick = function () {
  var diemChuan = document.getElementById("diemChuanHoiDong").value * 1;
  //   console.log(diemChuan);
  var diemMon1 = document.getElementById("diemThiMonThuNhat").value * 1;
  //   console.log(diemMon1);
  var diemMon2 = document.getElementById("diemThiMonThuHai").value * 1;
  //   console.log(diemMon2);
  var diemMon3 = document.getElementById("diemThiMonThuBa").value * 1;
  //   console.log(diemMon3);
  var khuVuc = document.querySelector(
    ".form-check input[name='diemKhuVuc']:checked"
  ).value;
  //   console.log(khuVuc);
  var doiTuong = document.querySelector(
    ".form-check input[name='diemDoiTuong']:checked"
  ).value;
  //   console.log(doiTuong);
  var diemKhuVuc = tinhDiemKhuVuc(khuVuc);
  //   console.log(diemKhuVuc);
  var diemDoiTuong = tinhDiemDoiTuong(doiTuong);
  //   console.log(diemDoiTuong);
  var tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;
  //   console.log(tongDiem);
  var ketQua1 = "";
  if (diemMon1 != 0 && diemMon2 != 0 && diemMon3 != 0) {
    if (diemChuan >= tongDiem) {
      ketQua1 = `Bạn đã rớt. Điểm của bạn là: ${tongDiem}`;
    } else {
      ketQua1 = `Bạn đã đậu. Điểm của bạn là: ${tongDiem}`;
    }
  } else {
    ketQua1 = `Bạn đã rớt. Điểm của bạn là: ${tongDiem}`;
  }
  document.getElementById("kq1").innerHTML = ketQua1;
};
function tinhDiemKhuVuc(khuVuc) {
  switch (khuVuc) {
    case khuVucA: {
      return 2;
    }
    case khuVucB: {
      return 1;
    }
    case khuVucC: {
      return 0.5;
    }
    case khuVucX: {
      return 0;
    }
  }
}
function tinhDiemDoiTuong(doiTuong) {
  switch (doiTuong) {
    case doiTuong1: {
      return 2.5;
    }
    case doiTuong2: {
      return 1.5;
    }
    case doiTuong3: {
      return 1;
    }
    case doiTuong0: {
      return 0;
    }
  }
}

// ========== BÀI 2 ==========
document.getElementById("btn2").onclick = function () {
  var hoTen = document.getElementById("hoTen").value;
  //   console.log(hoTen);
  var soDien = document.getElementById("soDien").value * 1;
  //   console.log(soDien);
  var tongTien = 0;
  if (soDien <= 50) {
    tongTien = soDien * 500;
  } else if (soDien > 50 && soDien <= 100) {
    tongTien = 50 * 500 + (soDien - 50) * 650;
  } else if (soDien > 100 && soDien <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
  } else if (soDien > 200 && soDien <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
  } else {
    tongTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300;
  }
  //   console.log(tongTien);
  var tinhTongTien = tongTien.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
  ketQua2 = `Anh/Chị đã tiêu thụ ${soDien}kW. Số tiền anh/chị ${hoTen} phải trả là ${tinhTongTien}`;
  document.getElementById("kq2").innerHTML = ketQua2;
};

// ========== BÀI 3 ==========
document.getElementById("btn3").onclick = function () {
  var hoTenCaNhan = document.getElementById("hoTenCaNhan").value;
  //   console.log(hoTenCaNhan);
  var thuNhapNam = document.getElementById("thuNhapNam").value * 1;
  //   console.log(thuNhapNam);
  var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  //   console.log(soNguoiPhuThuoc);
  var thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
  //   console.log(thuNhapChiuThue);
  var tienThue = 0;
  if (thuNhapChiuThue <= 60000000) {
    tienThue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    tienThue = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    tienThue = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    tienThue = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    tienThue = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960) {
    tienThue = thuNhapChiuThue * 0.3;
  } else {
    tienThue = thuNhapChiuThue * 0.35;
  }
  //   console.log(tienThue);
  var tinhTienThue = tienThue.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
  var ketQua3 = "";
  ketQua3 = `Anh/Chị ${hoTenCaNhan} phải trả số tiền thuế thu nhập cá nhân là: ${tinhTienThue}`;
  document.getElementById("kq3").innerHTML = ketQua3;
};

// ========== BÀI 4 ==========
const nhaDan = "nhaDan";
const doanhNghiep = "doanhNghiep";
document.getElementById("btn4").onclick = function () {
  var maKhachHang = document.getElementById("maKhachHang").value;
  // console.log(maKhachHang);
  var soKetNoi = document.getElementById("soKetNoi").value * 1;
  // console.log(soKetNoi);
  var kenhCaoCap = document.getElementById("kenhCaoCap").value * 1;
  // console.log(kenhCaoCap);
  var khachHang = document.querySelector(
    ".form-check input[name='khachHang']:checked"
  ).value;
  // console.log(khachHang);
  var phiXuLyHoaDon = tinhPhiXuLyHoaDon(khachHang);
  // console.log(phiXuLyHoaDon);
  var tienThueKenhCaoCap = tinhThueKenhCaoCap(khachHang);
  // console.log(tienThueKenhCaoCap);
  var tongTien = 0;
  if (khachHang == nhaDan) {
    tongTien = phiXuLyHoaDon + 20.5 + kenhCaoCap * tienThueKenhCaoCap;
  } else {
    if (soKetNoi <= 10) {
      tongTien = phiXuLyHoaDon + 75 + kenhCaoCap * tienThueKenhCaoCap;
    } else {
      tongTien =
        phiXuLyHoaDon +
        75 +
        (soKetNoi - 10) * 5 +
        kenhCaoCap * tienThueKenhCaoCap;
    }
  }
  var tinhTongTien4 = tongTien.toLocaleString("it-IT", {
    style: "currency",
    currency: "USD",
  });
  var ketQua4 = `Mã khách hàng: ${maKhachHang}; Số tiền cáp cần phải trả là: ${tinhTongTien4} `;
  document.getElementById("kq4").innerText = ketQua4;
};
function tinhPhiXuLyHoaDon(khachHang) {
  switch (khachHang) {
    case nhaDan: {
      return 4.5;
    }
    case doanhNghiep: {
      return 15;
    }
  }
}
function tinhThueKenhCaoCap(khachHang) {
  switch (khachHang) {
    case nhaDan: {
      return 7.5;
    }
    case doanhNghiep: {
      return 50;
    }
  }
}
