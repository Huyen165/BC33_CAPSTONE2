document.querySelector('#btnSubmit').onclick = function() {
    //Lấy thông tin input từ người dùng: tạo ra format backend yêu cầu
    var CRregister = new register();
    CRregister.name = document.querySelector('#txtname').value;
    CRregister.email = document.querySelector('#txtemail').value;
    CRregister.password = document.querySelector('#txtpassword').value;
    CRregister.phone = document.querySelector('#txtphone').value;
    CRregister.gender = document.querySelector('#gender').value;


    console.log('register', CRregister);

    //Gọi api đưa dữ liệu về server
    var input = axios({
        url: 'https://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',
        method: 'POST',
        data: CRregister,
    });

    input.then(function(result) {
        console.log(result.data);
        alert("success");

    });

    input.catch(function(error) {
        console.log(error);
    })
}