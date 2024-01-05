// this is a simple chatbot, most probable that you have seen and experienced
// this type of chatbot .

// Let say we advertise a course on internet and getting messages about our 
// course. Its aboves that messages will be same like 1. Cost of this Course
// 2. Location 3. Timing etc 


// For this type of problems we can made a chatbot having a fixed Questions and
// answer sheet


function Chatbot(){

    let user_input = document.getElementById("user_input").value;
    let message;
    switch (user_input){
        case "1":
            message =  `The whole course case Rs.5000/-`
            break
        case "2":
            message =  `Central Science Degree College Faqir abad Government College Couch Peshawar`
            break
        case "3":
            message = `From 2:00pm to 4:00pm every Saturday and Sunday`
            break
        case "4":
            message = `WhatsApp: 03180968700 <br>
            email add: 4itandsoftwares@gmail.com`
            break

        default:
            message = `
            Hello and Welcome
            What would you like to know: <br>
            1. Fee Structure <br>
            2. Location <br>
            3. Timing <br>
            4. Contacts <br>
            `


    }
    document.querySelector("#result").innerHTML = message;

}
