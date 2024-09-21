console.log("starting script");

document.addEventListener("DOMContentLoaded", () => {
  const projectcardlist = document.querySelectorAll(".projectcard");

  if (projectcardlist) {
    for (let i = 0; i < projectcardlist.length; i++) {
      projectcardlist[i].addEventListener("click", function () {
        projectcardlist[i].style.transform = "scale(1.7)";
        projectcardlist[i].style.zIndex = "1";
      });

      projectcardlist[i].addEventListener("mouseleave", function () {
        projectcardlist[i].style.transform = "scale(1)";
        projectcardlist[i].style.zIndex = "0";
      });
    }
  }

  const bi = document.querySelectorAll(".bi");

  const contactscard = document.querySelectorAll(".contactscard");

  if (bi && contactscard) {
    const color = ["black", "#0165E1", "black", "red", "blue", "#0A66C2"];

    for (let i = 0; i < contactscard.length; i++) {
      contactscard[i].addEventListener("mousemove", function () {
        contactscard[i].style.backgroundColor = "black";
        bi[i].style.fill = "white";
      });

      contactscard[i].addEventListener("mouseout", function () {
        contactscard[i].style.backgroundColor = "white";

        bi[i].style.fill = color[i];
      });
    }
  }
});
