
const getUser = async() => {
    try {
        let url = `http://127.0.0.1:9000/api/v1/student`
        const response = await fetch(url)
        const user = await response.json();
        display(user.Data?.students)
    } catch (error) {
    console.log(error);
    }
}

getUser()

const display = (Data)=>{
    console.log(Data);
Data.map(function(el){
    var box = document.createElement("ul");
    box.style.padding = "10px";
    var name = document.createElement("li");
    name.innerText = el.name;

    var price = document.createElement("li");
    price.innerText = el.batches;

    var gen = document.createElement("li")
    gen.innerText = el.id;

    box.append(gen,name,price,);

    document.querySelector("#stu_data").append(box);
 })
}