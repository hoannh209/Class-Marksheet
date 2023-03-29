var arrHocsinh = [];
var selectedIndex = -1; 

function Nhap() {
    var name = document.getElementById("Hoten").value;
    var math = document.getElementById("Diemtoan").value;
    var physical = document.getElementById("Diemly").value;
    var chemistry = document.getElementById("Diemhoa").value;
    var testScore = { 
                name: name,
                math: math,
                physical: physical,
                chemistry: chemistry}
    arrHocsinh.push(testScore);
    resetForm();
    Nhapsolieu();
    }
function Nhapsolieu(){
    var table = document.getElementById("myTable");
    for(var i=table.rows.length - 1;i > 0; i--){
        table.deleteRow(i); 
    }
    for(var i = 0; i < arrHocsinh.length; i++){
        var Hocsinh = arrHocsinh[i];
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        cell1.innerHTML = i + 1;
        cell2.innerHTML = Hocsinh.name;
        cell3.innerHTML = Hocsinh.math;
        cell4.innerHTML = Hocsinh.physical;
        cell5.innerHTML = Hocsinh.chemistry;
        cell6.innerHTML = "";
        cell7.innerHTML = "<a href='#' onclick='onEdit(this)'><i class='fa fa-edit'></i></a> <a href='#' onclick='onDel(this)'><i class='fa fa-remove'></i></a>";
    }
}
function onEdit(el){
    var selectedRow = el.parentElement.parentElement;
    var name = selectedRow.cells[1].innerText;
    var math = selectedRow.cells[2].innerText;
    var physical = selectedRow.cells[3].innerText;
    var chemistry = selectedRow.cells[4].innerText;

    document.getElementById("Hoten").value = name;
    document.getElementById("Diemtoan").value = math;
    document.getElementById("Diemly").value = physical;
    document.getElementById("Diemhoa").value = chemistry;

    selectedIndex = parseInt(selectedRow.cells[0].innerText) - 1;

    document.getElementById("btnCapnhat").style.display = "block";
    document.getElementById("btnNhap").style.display = "none";
}

function Capnhat(){
    arrHocsinh[selectedIndex].name = document.getElementById("Hoten").value;
    arrHocsinh[selectedIndex].math = document.getElementById("Diemtoan").value;
    arrHocsinh[selectedIndex].physical = document.getElementById("Diemly").value;
    arrHocsinh[selectedIndex].chemistry = document.getElementById("Diemhoa").value;
   
    Nhapsolieu();
    resetForm();
    
    document.getElementById("btnCapnhat").style.display = "none";
    document.getElementById("btnNhap").style.display = "block";
    
}

function onDel(el){
    var selectedRow = el.parentElement.parentElement;
    selectedIndex = parseInt(selectedRow.cells[0].innerText) - 1;
    if(confirm("Bạn có muốn xóa số liệu này không?")){
        arrHocsinh.splice(selectedIndex, 1);
        Nhapsolieu();
    }
}

function resetForm(){
    document.getElementById("Hoten").value ="";
    document.getElementById("Diemtoan").value = "";
    document.getElementById("Diemly").value = "";
    document.getElementById("Diemhoa").value = "";

}

function Tinhtrungbinh(){
    var table = document.getElementById("myTable");
    for(var i = 1;i < table.rows.length; i++){
    var Diemtb = (parseFloat(table.rows[i].cells[2].innerText) + parseFloat(table.rows[i].cells[3].innerText) + parseFloat(table.rows[i].cells[4].innerText)) / 3;
    table.rows[i].cells[5].innerText = Diemtb.toFixed(1);
}
}

function XNhsgioi(){
    var table = document.getElementById("myTable");
    for(var i = 1;i < table.rows.length; i++){
        if (parseFloat(table.rows[i].cells[5].innerText) >= 8) {
            table.rows[i].style.color = "red";
        }
    }
}
