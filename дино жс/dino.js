// alert('3')
// alert('2')
// alert('1')
// alert('GOOOOOO')

const snail = document.getElementById("snail")
const barman = document.getElementById("barman")

document.addEventListener("keydown", function(event) {
	snailMov()
})

function snailMov() {
	if(snail.classList != "snailMov") {
		snail.classList.add("snailMov")
	}
	setTimeout(function() {
		snail.classList.remove("snailMov")
	}, 300)
}

let isAlive = setInterval(function() {
	let snailTop = parseInt(window.getComputedStyle(snail).getPropertyValue("top"))
	let barmanLeft = parseInt(window.getComputedStyle(barman).getPropertyValue("left"))

	if(barmanLeft < 20 && barmanLeft > 0 && snailTop >= 80) {
		alert("U GOT KICKED OUT OF THE BAR COME BACK IN A WEEK")
	}
}, 10)