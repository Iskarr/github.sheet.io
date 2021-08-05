let showDiv = function () {
  $("#div2").css({ display: "inline-block" });
  $(".btnInput").css({ display: "inline-block" });
};

$(function () {
  // Check if user clicks on the checkbox
  $("#Header").click(function () {
    if ($("#Header").is(":checked")) {
      // If a checked, show text,
      // if !checked, hide text.
      $("#div2").css({ display: "inline-block" });
      $(".btnInput").css({ display: "inline-block" });
    } else {
      $(".btnInput").hide();
      $("#div2").hide();
    }
  });

  //   let status = $("div2").click(function () {
  //     if (status.checked) {
  //       $("#div2").css({ display: "inline-block" });
  //     } else {
  //       $("#div2").css({ display: "none" });
  //     }

  //     localStorage.setItem("div2", this.checked);
  //   });

  // Check if user clicks on the checkbox
  $("#Header1").click(function () {
    if ($("#Header1").is(":checked")) {
      // If a checked, show text,
      // if !checked, hide text.
      $(".btnInput1").css({ display: "inline-block" });
      $("#div3").css({ display: "inline-block" });
    } else {
      $(".btnInput1").hide();
      $("#div3").hide();
    }
  });

  // Check if user clicks on the checkbox
  $("#Header2").click(function () {
    if ($("#Header2").is(":checked")) {
      // If a checked, show text,
      // if !checked, hide text.
      $(".btnInput2").css({ display: "inline-block" });
      $("#div4").css({ display: "inline-block" });
    } else {
      $(".btnInput2").hide();
      $("#div4").hide();
    }
  });

  // Check if user clicks on the checkbox
  $("#Header3").click(function () {
    if ($("#Header3").is(":checked")) {
      // If a checked, show text,
      // if !checked, hide text.
      $(".btnInput3").css({ display: "inline-block" });
      $("#div5").css({ display: "inline-block" });
    } else {
      $(".btnInput3").hide();
      $("#div5").hide();
    }
  });

  // Check if user clicks on the checkbox
  $("#Header4").click(function () {
    if ($("#Header4").is(":checked")) {
      // If a checked, show text,
      // if !checked, hide text.
      $(".btnInput4").css({ display: "inline-block" });
      $("#div6").css({ display: "inline-block" });
    } else {
      $(".btnInput4").hide();
      $("#div6").hide();
    }
  });
});

function wis() {
  location.reload();
  $(".btnInput").hide();
  localStorage.clear();
}
