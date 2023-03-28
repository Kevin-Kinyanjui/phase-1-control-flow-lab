function scuberGreetingForFeet(dist){
  let results;
  if(dist <= 400){
    results = 'This one is on me!';
    return results;
  }else if((dist > 2000) && (dist < 2500)) {
    results = 'I will gladly take your thirty bucks.';
    return results;
  }else {
    return 'No can do.';
  }

}

function ternaryCheckCity(city){
  let results = city === 'NYC' ? "Ok, sounds good." : "No go.";
  return results;
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you."
      break;
    default:
      return "Bye."

  }

}

