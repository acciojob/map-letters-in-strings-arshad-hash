//your JS code here. If requi
function mapLetters(str){
    let object ={
        
    };
    for (let i = 0; i < str.length; i++) {
        if(object[str[i]]===undefined)
        {
            object[str[i]]=[i]; 
        }
        else{
            object[str[i]].push(i);
        }
        
    } console.log(object);
 return object ;
};

    let str=prompt("createObject:");
    alert(mapLetters(str));