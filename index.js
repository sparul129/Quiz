const user_response = new Array(5);
let user_score_count = 0;
const quiz_obj = {
ques :  [
  {
  quiz_obj_ques : "How many consonants are there in the English alphabet?",
  quiz_obj_options : { A:5, B:21, C:26, D:20 },
  quiz_obj_correct_ans:"B",
  user_response
  },
  {
  quiz_obj_ques : "Which of the following is not a metal?",
  quiz_obj_options : { A:"Gold", B:"Resin", C:"Glass", D:"Mercury"},
  quiz_obj_correct_ans: "B",
  user_response
  },
  {
  quiz_obj_ques : "Which is not a Union Territory of India",
  quiz_obj_options : { A:"Rajasthan", B:"Jammu and Kashmir", C:"Ladakh", D:"Lakshadweep"},
  quiz_obj_correct_ans: "A",
  user_response
  },
  {
  quiz_obj_ques : "Water in plants is transported by what?",
  quiz_obj_options : { A:"Leaf", B:"Chlorophyll", C:"Xylem", D:"Bud"},
  quiz_obj_correct_ans: "C",
  user_response
  },
  {
  quiz_obj_ques : "What is the total number of dots on a dice??",
  quiz_obj_options : { A:6, B:18, C:12, D:21},
  quiz_obj_correct_ans: "D",
  user_response
  }]
};

function welcome_User()
{
  console.log("General Awareness Quiz");
  const user_name = "Welcome to the Quiz, Please enter your name";
  const console_value = reading_console(user_name);
  console.log(`Hello ${console_value} Let us test your GK\n`);
}

function reading_console(read_message)
{
    const readLineSync = require('readline-sync');
    return readLineSync.question(`${read_message}\n`);

}

function display_ques_option_to_user(i,arr)
{
  console.log(`Question ${i+1}: ${arr[i].quiz_obj_ques}`);
  console.log(`A. ${arr[i].quiz_obj_options.A} `);
  console.log(`B. ${arr[i].quiz_obj_options.B} `);
  console.log(`C. ${arr[i].quiz_obj_options.C} `);
  console.log(`D. ${arr[i].quiz_obj_options.D} `);
  const user_choice_message = `Type in your choice A/B/C/D : `;
  arr[i].user_response = reading_console(user_choice_message);
  evaluate_score(i,arr);
}

/*function evaluate_response(s)
{
  console.log(`is ${s}`);
  if(s.toUpperCase() == "A" || s.toUpperCase() == "B" || s.toUpperCase() =="C" || s.toUpperCase() =="D")
  {
      return s;
  }
  else 
  {
      const user_promt = `Your response must be A/B/C/D. Please enter again`;
      s = reading_console(user_choice_message);
      return s;

  }
}
*/

function evaluate_score(i,arr)
{
  if(arr[i].user_response.toUpperCase() == arr[i].quiz_obj_correct_ans)
  {
    console.log("Correct Response");
    user_score_count++;
    console.log(`Your score is ${user_score_count}\n`);
  }
  else
  {
    console.log(`Incorrect Response. The correct answer is ${arr[i].quiz_obj_correct_ans}\n`);
  }
}

function quiz_play(arr,callback)
{
  for(let i=0;i<arr.length;i++)
  {
    callback(i,arr);
  }
}

function end_quiz(user_score_count)
{
  let score_chart;
  if(user_score_count == 5)
  {
    score_chart = "are Perfect at GK";
  }
  else if(user_score_count >2 && user_score_count <5)
  {
    score_chart = "Can do better";
  }
  else
  {
    score_chart = "need to Get on top of your GK";
  }

  console.log(`Thank you for playing the quiz. Your score is ${user_score_count} and you ${score_chart}`)
}

welcome_User();
quiz_play(quiz_obj.ques,display_ques_option_to_user);
end_quiz(user_score_count);
