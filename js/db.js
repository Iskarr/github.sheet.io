let checkPoint = document.getElementById("Header");
let checkPoint1 = document.getElementById("Header1");
let checkPoint2 = document.getElementById("Header2");
let checkPoint3 = document.getElementById("Header3");
let checkPoint4 = document.getElementById("Header4");

$(function () {
  let status = localStorage.getItem("chkStatus");
  if (status == "true") {
    $("#div2").css("display", "inline-block");
    $("#Header").attr("checked", true);
  } else {
    $("#div2").css("display", "none");
    $("#Header").attr("checked", false);
  }
  $("#Header").click(function () {
    if (this.checked) {
      $("#div2").hide();
    } else {
      $("#div2").show();
    }
    localStorage.setItem("chkStatus", this.checked);
  });
});

$(function () {
  let status = localStorage.getItem("chkStatus1");
  if (status == "true") {
    $("#div3").css("display", "inline-block");
    $("#Header1").attr("checked", true);
  } else {
    $("#div3").css("display", "none");
    $("#Header1").attr("checked", false);
  }
  $("#Header1").click(function () {
    if (this.checked) {
      $("#div3").hide();
    } else {
      $("#div3").show();
    }
    localStorage.setItem("chkStatus1", this.checked);
  });
});

$(function () {
  let status = localStorage.getItem("chkStatus2");
  if (status == "true") {
    $("#div4").css("display", "inline-block");
    $("#Header2").attr("checked", true);
  } else {
    $("#div4").css("display", "none");
    $("#Header2").attr("checked", false);
  }
  $("#Header2").click(function () {
    if (this.checked) {
      $("#div4").hide();
    } else {
      $("#div4").show();
    }
    localStorage.setItem("chkStatus2", this.checked);
  });
});

$(function () {
  let status = localStorage.getItem("chkStatus3");
  if (status == "true") {
    $("#div5").css("display", "inline-block");
    $("#Header3").attr("checked", true);
  } else {
    $("#div5").css("display", "none");
    $("#Header3").attr("checked", false);
  }
  $("#Header3").click(function () {
    if (this.checked) {
      $("#div5").hide();
    } else {
      $("#div5").show();
    }
    localStorage.setItem("chkStatus3", this.checked);
  });
});

$(function () {
  let status = localStorage.getItem("chkStatus4");
  if (status == "true") {
    $("#div6").css("display", "inline-block");
    $("#Header4").attr("checked", true);
  } else {
    $("#div6").css("display", "none");
    $("#Header4").attr("checked", false);
  }
  $("#Header4").click(function () {
    if (this.checked) {
      $("#div6").hide();
    } else {
      $("#div6").show();
    }
    localStorage.setItem("chkStatus4", this.checked);
  });
});

function save() {
  localStorage.setItem("Header", checkPoint.checked);
  localStorage.setItem("Header1", checkPoint1.checked);
  localStorage.setItem("Header2", checkPoint2.checked);
  localStorage.setItem("Header3", checkPoint3.checked);
  localStorage.setItem("Header4", checkPoint4.checked);
}

function load() {
  let checked = JSON.parse(localStorage.getItem("Header"));
  let checked1 = JSON.parse(localStorage.getItem("Header1"));
  let checked2 = JSON.parse(localStorage.getItem("Header2"));
  let checked3 = JSON.parse(localStorage.getItem("Header3"));
  let checked4 = JSON.parse(localStorage.getItem("Header4"));
  document.getElementById("Header").checked = checked;
  document.getElementById("Header1").checked = checked1;
  document.getElementById("Header2").checked = checked2;
  document.getElementById("Header3").checked = checked3;
  document.getElementById("Header4").checked = checked4;
}

function wis() {
  location.reload();
  localStorage.clear();
}

load();
