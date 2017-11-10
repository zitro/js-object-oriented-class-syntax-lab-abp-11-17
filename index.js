class BoardMember{
constructor(name, homeState,training){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}
veto(){
  return 'No, Must disagree';
}
approve(){
  return 'You can do that!';
}
doCharity(){
  return 'I liek to help people.'
}
releasePressStatement(){
  return 'You will see great things from Scuber.';
}
sayHi(){
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}
  
}

class Ceo extends BoardMember{
hireEmployee(){
  return 'Welcome aboard';
  
}}
