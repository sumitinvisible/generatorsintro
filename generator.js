function* number(){
 const okay= yield 'cash';  // It is actually a keyword
 return okay;
}

// output

/* 
const hello = number()
   {value: "cash", done: false}
hello.next("ddjjj");
{value: "ddjjj", done: true}
hello.next("ddjjj");
{value: undefined, done: true}      
*/
/* point to be noted here is that ,while calling next it gives us next object every time we call it and when it is donr next set he done properties to true. */
/* 
in line 5 when we are calling it ,functon is not getting executed (we are getting object)
(just like function constructor)
Execution gets started when when we are calling hello.next()
*/
