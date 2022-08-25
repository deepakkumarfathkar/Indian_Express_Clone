let inputBox = document.querySelector(".search")

if (inputBox == document.activeElement) {
    hr.style.border = "0.5px solid blue"
}

let timeout;
let container = document.querySelector("#searchResult")

async function main() {

    try {
        let query = document.querySelector(".search").value

        if (query == "") {
            container.style.display = "none"
        }

        let res = await fetch(`https://www.omdbapi.com/?apikey=41a03feb&s=${query}&type=movie`)
        res = await res.json()

    }

    catch(error) {
        console.log(error)
    }
    
}




function debounce(func, delay) {
    if (timeout) {
        clearTimeout(timeout)
    }

    timeout = setTimeout(function () {
        func()
    }, delay)
}

// popup code

window.popup = function (o) {
    var e = !0,
      t = !1,
      i = !1;
    if (o.dom) {
      var n = o.dom;
      null != o.maskClose && (e = o.maskClose),
        null != o.width &&
          (n.querySelector(".popup_container").style.width = o.width),
        null != o.height &&
          (n.querySelector(".popup_container").style.height = o.height),
        null != o.minWidth &&
          (n.querySelector(".popup_container").style.minWidth = o.minWidth),
        null != o.minHeight &&
          (n.querySelector(".popup_container").style.minHeight = o.minHeight),
        null != o.maxWidth &&
          (n.querySelector(".popup_container").style.maxWidth = o.maxWidth),
        null != o.maxHeight &&
          (n.querySelector(".popup_container").style.maxHeight = o.maxHeight),
        e &&
          n.addEventListener("mousedown", function (e) {
            s(o.dosomethingClose);
          }),
        null != o.pushStatus && (t = o.pushStatus),
        n
          .querySelector(".popup_container")
          .addEventListener("mousedown", function (e) {
            e.stopPropagation();
          }),
        n.querySelector(".popup_close") &&
          n.querySelector(".popup_close").addEventListener("click", function () {
            s(o.dosomethingClose);
          }),
        window.addEventListener("popstate", function () {
          if ((console.log("tag", i), i)) return s(), void history.back();
          i = !1;
        }),
        (this.show = function (e, o) {
          t &&
            (window.history.pushState({ show: 1 }, "", location.href), (i = !0)),
            e && e(n),
            n.classList.remove("popup_hide"),
            document.body.classList.add("popup_show"),
            n.childNodes,
            n.querySelector(".popup_close") &&
              n
                .querySelector(".popup_close")
                .addEventListener("click", function () {
                  s(o);
                });
        }),
        (this.hide = s);
    } else console.error("popup: hide function not set dom object");
    function s(e) {
      e && e(n),
        o.dosomethingClose && o.dosomethingClose(n),
        i && history.back(),
        n.classList.add("popup_hide"),
        document.body.classList.remove("popup_show");
    }
  };
 