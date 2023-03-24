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
