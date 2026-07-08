//დავალება1

const userPassword = prompt("what is a password?");
if(userPassword === "geolabreact123"){
    console.log("წვდომა დაშვებულია");
}else{
    console.log("წვდომა აკრძალულია");
}

//დავალება2

const month = prompt("შეიყვანეთ თვე: ");
const weekDay = prompt("შეიყვანეთ კვირის დღე");

switch(month){
    case "july":
        switch(weekDay){
            case "saturday":
            case "sunday":
                console.log("დასვენების დღე");
                break;
            default:
                console.log("კვირის სამუშაო დღე")
        };
        break;
    default:
        console.log("კვირის სამუშაო დღე");
}

//დავალება 3

let userBalance = 1000;
let userChoice = prompt("აირჩიე ოპერაცია:\n1 - შეამოწმე ბალანსი\n2 - თანხის შეტანა\n3 - თანხის გატანა\n4 - გამოსვლა");
switch(userChoice){
    case "1":
        console.log("თქვენი მიმდინარე ბალანსია: " + userBalance);
        break;
    case "2":
        let depositAmount = +prompt("შეიყვანეთ დასამატებელი თანხის რაოდენობა:");
        userBalance += depositAmount;
        alert("განახლებული ბალანსია: " + userBalance);
        break;
    case "3":
        let withdrawnAmount = +prompt("შეიყვანეთ გასატანი თანხის რაოდენობა: ");
        userBalance -= withdrawnAmount;
        alert("გამოტანილი თანხაა: " + withdrawnAmount + "დარჩენილი თანხაა: " + userBalance);
        break;
    case "4":
        alert("თქვენ გახვედით კაბინეტიდან");
        break;
    default:
        console.log("თქვენ აირჩიეთ არარსებული ოპერაცია, გთხოვთ თავიდან სცადოთ");
}

