function divisivel(year, num){
  return year % num == 0;
}

function isLeapYear(year){
  if(year % 4 != 0){
    return false;
  }
  if(divisivel(year, 400) && year % 100 == 0){
    return true;
  }
  if(year % 100 == 0){
    return false;
  }else{
    return true;
  }
}

isLeapYear(1997);
isLeapYear(1996);
isLeapYear(1900);
isLeapYear(2000);
