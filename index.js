var str = "fdjvdfnvkjdbnfvisdhbnfvpazhvnrfhjkABVhbvnfh", long = 0;
var func = function(user_symbol){
    for (i = 0; i <= str.length; i++){
        if (user_symbol === str[i]){
            long += 1;
        }
    }
}
func("i");
console.log(long);