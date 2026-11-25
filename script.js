document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".navigation a").forEach(function (link) {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage && !link.classList.contains("logo-link")) {
      link.setAttribute("aria-current", "page");
    }
  });
});
