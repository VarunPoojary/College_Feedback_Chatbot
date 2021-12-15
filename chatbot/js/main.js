let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');
let questions = ["Provides Course Material",
             "Domain Knowledge",
             "Clears Queries",
             "Teaches Good",
             "Conducts Lecture on time",
             "Feedback/Suggestions"];
let count=0;
chatareamain.appendChild(showchatbotmsg("Press the mic button to start the review.\n What is Your name?"));

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showchatbotmsg(usermsg)
{
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showusermsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message)
{
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is test message";

    // if(message.includes('talk to you' || 'talk')){
    //     let finalresult = closing[Math.floor(Math.random() * closing.length)];
    //     speech.text = finalresult;
    // }


    speech.text = questions[count];
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
    count+=1;
}

recognition.onresult=function(e)
{
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
