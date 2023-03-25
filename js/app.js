let change_text = document.querySelector(`#text_1`);

let more_content = document.getElementById(`content_1`);

let big_content = document.getElementsByClassName(`big_content`);

let more_id = document.getElementById(`content_2`);

more_id[`style`][`fontSize`] = `4rem`;
more_id[`style`][`color`] = `red`;
more_id[`style`][`fontSize`] = `8rem`;

let more_class = document.getElementsByClassName(`big_content`);

for (counter = 0; counter < more_class.length; counter++) {

    more_class[counter][`Innerhtml`] = `hacked`;
}

let insert_tag = document.getElementById(`text_2`);


insert_tag.insertAdjacentHTML(`beforebegin`, `<p>BEFORE</p>`);
insert_tag.insertAdjacentHTML(`afterend`, `<p>AFTER</p>`);
insert_tag.insertAdjacentHTML(`beforeend`, `<p>last child</p>`);
insert_tag.insertAdjacentHTML(`afterbegin`, `<p>first child</p>`);


insert_tag.insertAdjacentHTML(`afterend`, `<img id="unique_img"
src="https://images.pexels.com/photos/14806275/pexels-photo-14806275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
alt="cafe sign">`);

let insert_id = document.getElementById(`unique_img`);

insert_id.setAttribute(`src`, `https://images.unsplash.com/photo-1679530988086-556fabca6dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`);

//using an array of objects to define name of cities with populations
let cities = [
    {
        name: `Kelowna`,
        population: 60000
    },
    {
        name: `Edmonton`,
        population: 220000
    },
    {
        name: `Penticton`,
        population: 30000
    }
];

//using a for loop to go through the array
for (counter = 0; counter < cities.length; counter++) {
    //using an if statement to check if the cities population is atleast 50000
    if (cities[counter].population >= 50000) {
        //using console.log to print out city and population
        console.log(`${cities[counter].name} has population over 50000 and is= ${cities[counter].population}`);
    }
};

let array_num = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`];


function loop_even_array(array) {
    for (counter = 0; counter < array.length; counter = counter + 2) {
        console.log(array[counter])
    }
};

loop_even_array(array_num);




let h1_tag = document.querySelector("#page_title")

function add_p_tag() {
    h1_tag.insertAdjacentHTML(`afterend`, `<p>after title</p>`);
};

h1_tag.addEventListener(`click`, add_p_tag)
