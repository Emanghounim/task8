// var math=Math.floor(Math.random()*10)+1
// console.log(math);


var button = document.getElementById("button")
// var p=document.getElementById("p").innerHTML

var list = ['Be yourself; everyone else is already taken.” <br> ― Oscar Wilde'
    , `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
<br>― Marilyn Monroe`
    , `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
<br>― Albert Einstein`
    , `“So many books, so little time.”
<br>― Frank Zappa`
    , `“A room without books is like a body without a soul.”
<br>― Marcus Tullius Cicero`
    , `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
<br>― Bernard M. Baruch`
    , `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
<br>― William W. Purkey`
    , `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
<br>― Dr. Seuss`
    , `“You only live once, but if you do it right, once is enough.”
<br>― Mae West`
    , `“Be the change that you wish to see in the world.”
<br>― Mahatma Gandhi`]
var num = 0

function showData() {
    let data = Math.floor(Math.random() * 9) + 1//1
    if (data == num) {
        showData()
    } else {
        // console.log(data)
        document.getElementById('p').innerHTML = list[data]
        num = data
    }



}