# Greeting Kata

Source from [testdouble](https://github.com/testdouble/contributing-tests/wiki/Greeting-Kata)

1. **Greet a single**
  * Write a method greet(​name​) that uses ​name​ in a simple greeting. For example, when ​name​ is ‘Bob’, the method should return a string “Hello, Bob.”
2. **Handle nulls by using a stand-in**
  * Handle nulls by introducing a stand-in. For example, when ​name​ is null, then the method should return the string“Hello, my friend.”
3. **Handle shouting**
  * When a ​name​ is all uppercase, then the method should shout back to the user. For example, when ​name​ is “JERRY”then the method should return the string “HELLO JERRY!”
4. **Handle two names**
  * Handle the input of two names. When ​name​ is an array of two names, then both names should be printed. Forexample, when ​name​ is [“Jill”, “Jane”], then the method should return the string “Hello, Jill and Jane”
5. **Handle more than two names**
  * Handle the arbitrarily names of input. When ​name​ represents more than two names, separate them with commas and close with and Oxford command “and”. For example, when ​name​ is [“Amy”, “Brian”, “Charlotte”], then themethod should return the string “Hello, Amy, Brian, and Charlotte”
6. **Handle mixing of normal and shouted names**
  * Allow for mixing of normal and shouted names by separating the responses into two greetings. For example, whenname​ is [“Amy”, “BRIAN”, “Charlotte”], then the method should return the string “Hello, Amy and Charlotte. ANDHELLO BRIAN!”
7. **Split names with commas into separate entries**
  * If any entries in ​name​ are a string containing a comma, split it as its own input. For example, when ​name​ is [“Bob”,“Charlie, Dianne”], then the method should return the string “Hello, Bob, Charlie, and Dianne.”
8. **Allow commas in entries to be escapes**
  * Allow the input to escape intentional commas introduced by the previous requirement. These can be escaped in thesame manner that CSV is, with double quotes surrounding the entry. For example, when ​name​ is [“Bob”, “”Charlie,Dianne””], then the method should return the string “Hello, Bob and Charlie, Dianne