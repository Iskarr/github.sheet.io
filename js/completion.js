$(function () {
  // Check if user clicks on the checkbox
  $("#Header").click(function () {
    if ($("#Header").is(":checked")) {
      // If the checkbox becomes checked,
      // move the contents to our new div (div2)
      $("#divA").contents().appendTo("#div2");
      if ((document.getElementById("div2").style.display = "inline-block")) {
        document.getElementById("divA").style.display = "none";
      }
    } else {
      // Otherwise we can assume it is being unchecked,
      // so move everything back to it's original div (div1)
      $("#div2").contents().appendTo("#divA");
      if ((document.getElementById("divA").style.display = "inline-block")) {
        document.getElementById("div2").style.display = "none";
      }
    }
  });
});

$(function () {
  // Check if user clicks on the checkbox
  $("#Header1").click(function () {
    if ($("#Header1").is(":checked")) {
      // If the checkbox becomes checked,
      // move the contents to our new div (div2)
      $("#divB").contents().appendTo("#div3");
      if ((document.getElementById("div3").style.display = "inline-block")) {
        document.getElementById("divB").style.display = "none";
      }
    } else {
      // Otherwise we can assume it is being unchecked,
      // so move everything back to it's original div (div1)
      $("#div3").contents().appendTo("#divB");
      if ((document.getElementById("divB").style.display = "inline-block")) {
        document.getElementById("div3").style.display = "none";
      }
    }
  });
});

$(function () {
  // Check if user clicks on the checkbox
  $("#Header2").click(function () {
    if ($("#Header2").is(":checked")) {
      // If the checkbox becomes checked,
      // move the contents to our new div (div2)
      $("#divC").contents().appendTo("#div4");
      if ((document.getElementById("div4").style.display = "inline-block")) {
        document.getElementById("divC").style.display = "none";
      }
    } else {
      // Otherwise we can assume it is being unchecked,
      // so move everything back to it's original div (div1)
      $("#div4").contents().appendTo("#divC");
      if ((document.getElementById("divC").style.display = "inline-block")) {
        document.getElementById("div4").style.display = "none";
      }
    }
  });
});

$(function () {
  // Check if user clicks on the checkbox
  $("#Header3").click(function () {
    if ($("#Header3").is(":checked")) {
      // If the checkbox becomes checked,
      // move the contents to our new div (div2)
      $("#divD").contents().appendTo("#div5");
      if ((document.getElementById("div5").style.display = "inline-block")) {
        document.getElementById("divD").style.display = "none";
      }
    } else {
      // Otherwise we can assume it is being unchecked,
      // so move everything back to it's original div (div1)
      $("#div5").contents().appendTo("#divD");
      if ((document.getElementById("divD").style.display = "inline-block")) {
        document.getElementById("div5").style.display = "none";
      }
    }
  });
});

$(function () {
  // Check if user clicks on the checkbox
  $("#Header4").click(function () {
    if ($("#Header4").is(":checked")) {
      // If the checkbox becomes checked,
      // move the contents to our new div (div2)
      $("#divE").contents().appendTo("#div6");
      if ((document.getElementById("div6").style.display = "inline-block")) {
        document.getElementById("divE").style.display = "none";
      }
    } else {
      // Otherwise we can assume it is being unchecked,
      // so move everything back to it's original div (div1)
      $("#div6").contents().appendTo("#divE");
      if ((document.getElementById("divE").style.display = "inline-block")) {
        document.getElementById("div6").style.display = "none";
      }
    }
  });
});
