document.getElementById("lapa").addEventListener("keydown", (e) => {
if (e.key === 'Enter') 
    { 
        if (document.getElementById("cmdInput").value === "help") {
            document.getElementById("help").classList.remove("hidden");
        }
        else if (document.getElementById("cmdInput").value === "start") {
            document.getElementById("lapa").classList.add("hidden");
            document.getElementById("help").classList.add("hidden");
        }
        else if (document.getElementById("cmdInput").value === "cipher") {window.open("https://ashtmgray.github.io/Caeser-Cipher/", target="_self")
        }
        else if (document.getElementById("cmdInput").value === "quiz") {window.open("https://ashtmgray.github.io/JS-Quiz-project/", target="_self")
        }
        else if (document.getElementById("cmdInput").value === "game") {window.open("https://ashtmgray.github.io/TBA-Game-Siege/", target="_self")
        }
        else if (document.getElementById("cmdInput").value === "about") {window.open("https://ashtmgray.github.io/TDA-Website-Project/")}
        else alert("Please type 'help' to view commands")
    }
})