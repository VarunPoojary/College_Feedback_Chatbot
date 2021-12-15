
let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');


let teachers = ["Feedback for Professor Nitish Das", "Feedback for Professor Jyoti Gavhane", "Feedback for Professor Dipti Pawar",
            "Feedback for Professor Rajashree Nayak", "Feedback for Professor Shweta"];

let questions = ["Provides Course Material", "Domain Knowledge", "Clears Queries", "Teaches Good", "Conducts Lecture on time",
                 "Feedback/Suggestions"];

let profnitish = [];
let profjyoti = [];
let profdipti = [];
let profrajashree = [];
let profshweta = [];

let count=0;
let countt=-2;
chatareamain.appendChild(showchatbotmsg("Provide Feedback between 1-5. \n Press the mic button to start the review.\n What is Your name?"));

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

function chatbotvoice_questions()
{
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is test message";
    speech.text = questions[count];
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
    count+=1;
    if(count == 6)
        count=0;
}

function chatbotvoice_teacher()
{
    countt+=1;
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is test message";
    speech.text = teachers[countt];
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));

}

function chatbotvoice_thanks()
{
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Thank You For Providing Honest Reviews!!";
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));

    speech.text = "";
    speech.text = "Prof. Nitish Das" + "<br>";
    for(let i=0;i< questions.length;i++)
    {
        speech.text+=questions[i]+" : "+profnitish[i]+"<br>";
    }
    console.log(profnitish);
    chatareamain.appendChild(showchatbotmsg(speech.text));


    speech.text = "Prof. Jyoti Gavhane" + "<br>";
    for(let i=0;i< questions.length;i++)
    {
        speech.text+=questions[i] + " : " + profjyoti[i] + "<br>";
    }
    console.log(profjyoti);
    chatareamain.appendChild(showchatbotmsg(speech.text));

    speech.text = "Prof. Dipti Pawar" + "<br>";
    for(let i=0;i< questions.length;i++)
    {
        speech.text+=questions[i] + " : " + profdipti[i] + "<br>";
    }
    console.log(profdipti);
    chatareamain.appendChild(showchatbotmsg(speech.text));



    speech.text = "Prof. Rajashree Nayak" + "<br>";
    for(let i=0;i< questions.length;i++)
    {
        speech.text+=questions[i] + " : " + profrajashree[i] + "<br>";
    }
    console.log(profrajashree);
    chatareamain.appendChild(showchatbotmsg(speech.text));


    speech.text = "Prof. Shweta Sodhiya" + "<br>";
    for(let i=0;i< questions.length;i++)
    {
        speech.text+=questions[i] + " : " + profshweta[i] + "<br>";
    }
    console.log(profshweta);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}


recognition.onresult=function(e)
{
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    transcript = transcript.toLowerCase()
    if(transcript == 'van' || transcript == 'wine' || transcript == 'fine')
        transcript='1';
    else if(transcript == 'tu' || transcript == 'tone' || transcript == 'stone' || transcript == 'tum'  )
        transcript='2';
    else if(transcript == 'free' || transcript == 'xx')
        transcript = '3';
    else if(transcript == 'aur' || transcript == 'for' || transcript == 'power' || transcript == 'foreign' || transcript == 'poor' || transcript == 'boy' || transcript =='oppo')
        transcript = '4';
    else if(transcript == 'fire' || transcript == 'pipe')
        transcript = '5';
    chatareamain.appendChild(showusermsg(transcript));
    //Display trial
    if(count == 0 && countt == -2)
    {
        console.log(transcript);
        countt++;
    }
    else if(countt == 0)
    {
        profnitish.push(transcript);
        console.log(profnitish);
    }
    else if(countt == 1)
    {
        profjyoti.push(transcript);
        console.log(profjyoti);
    }
    else if(countt == 2)
    {
        profdipti.push(transcript);
        console.log(profdipti);
    }
    else if(countt == 3)
    {
        profrajashree.push(transcript);
        console.log(profrajashree);
    }
    else if(countt == 4)
    {
        profshweta.push(transcript);
        console.log(profshweta);
    }

    if(count == 0 && countt == 4)
    {
        chatbotvoice_thanks();
        return;
    }
    if(count == 0)
    {
        chatbotvoice_teacher();
    }
    chatbotvoice_questions();
    console.log(transcript);
}


recognition.onend=function()
{
    mic.style.background="#ff3b3b";
}

mic.addEventListener("click", function()
{
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
