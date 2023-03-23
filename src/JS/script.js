// password matching 
$(document).ready(function () {
  $("#c_pass").keyup(function () {
    if ($("#pass").val() == $("#c_pass").val()) {
      $("#result").html("Password Matched");
      $("#result").css("color", "green");
    } else {
      $("#result").html("Password didn't match");
      $("#result").css("color", "red");
    }
  });
});

// Color the table field
$(document).ready(function () {
  $("#e_color").click(function () {
    $("#color tr:odd").css("background-color", "#d3d3d3");
  });
  $("#o_color").click(function () {
    $("#color tr:even").css("background-color", "#1e90ff");
  });
});

// Empty field
$(document).ready(function () {
  $("#check_empty").click(function () {
    $("#first_empty").css("background-color", "white");
    $("#last_empty").css("background-color", "white");
    if (!$("#first_empty").val() && !$("#last_empty").val()) {
      $("#first_empty").css("background-color", "red");
      $("#last_empty").css("background-color", "red");
      alert("Please fill the empty field");
    } else if (!$("#last_empty").val()) {
      $("#last_empty").css("background-color", "red");
      alert("Please fill the empty field");
    }else if (!$("#first_empty").val()){
      $("#first_empty").css("background-color", "red");
      alert("Please fill the empty field");
    }
  });
});

// Dynamic Form Generation
$(document).ready(function () {
  $("#add_input").click(function () {
    event.preventDefault();
    let childs = $(this).parent().clone(true);
    childs.find('input').val("")
    $("#main_form").append(childs)
  });
  $("#remove_input").click(function () {
    event.preventDefault();
    $(this).parent('#original_form').remove();
  });
});

// Event With Time
$(document).ready(function () {
  setInterval(highlightBlock, 10000);
  function highlightBlock() {
    $(".test p:first-child,.test p:last-child").css("background-color", "green");
    setTimeout(function () {
      $(".test p:first-child,.test p:last-child").css("background-color", "red");
    },5000);
  }
});

// Image Gallery
img_lst = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"]
let cnt = 0;
let n = img_lst.length;
$(document).ready(function(){
    $("#pre_btn").click(function(){
        cnt--
        if (cnt<0){cnt=n-1}
        $("#real_img").attr("src",`./image/${img_lst[cnt]}`)
    });
    $("#nxt_btn").click(function(){
        cnt++
        cnt=cnt%(n)
        $("#real_img").attr("src",`./image/${img_lst[cnt]}`)
    });
});

// Live Search
let words = ["rose","lily","tulip","orchid","hyacinth","peruvian","chrysanthemum"];
let txt="";
$(document).ready(function(){
    $("#search_txt").keyup(function(){
        let given_txt = $("#search_txt").val().toLowerCase()
        // console.log(given_txt)
        txt= ""
        words.forEach(element => {
            if (element.substr(0,given_txt.length)==given_txt){
                txt += `<b>${element} </b>`
            }
        });
        $("#suggest").html(txt)
    });
});

// Dynamic Content 
let lst_bag = ["1000","2000","3000"]
let lst_shirt = ["1200","1500","1700"]
$(document).ready(function(){
    $("#bag").on('change',function(){
        let val1 = $("#bag").val()
        $("#change1").text(`${lst_bag[Number(val1)]}/-`)
    })
    $("#shirt").on('change',function(){
        let val2 = $("#shirt").val()
        $("#change2").text(`${lst_shirt[Number(val2)]}/-`)
    })
});

// Simple Event 
$(document).ready(function(){
    $("#pop_up").click(function(){
        alert("Clicked me")
    })
});

// Dynamic List Generation 
$(document).ready(function(){
  $(".multiply").click(function(){
    $(this).parent().clone(true).appendTo($(this).parent().parent())
  })
});