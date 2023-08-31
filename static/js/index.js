function navigationHandler() {
    let more_btn = document.getElementById("more_btn");
    let nav_bar = document.getElementsByClassName("navigation")[0];
    let nav_menu = document.getElementsByClassName("nav_menu")[0];
    let close_nav = document.getElementsByClassName("close_nav")[0];
    more_btn.addEventListener("click", (e) => {
        nav_menu.classList.toggle("deactive_icon");
        close_nav.classList.toggle("deactive_icon");
        nav_bar.classList.toggle("active_nav");
    });
}
navigationHandler();

let skillsArray = [
    ["90%", "Python", "Self"],
    ["80%", "Django", "Django Docs"],
    ["100%", "CSV (lib)", "Self"],
    ["65%", "NumPy (lib)", "Self"],
    ["80%", "Matplotlib (lib)", "Self"],
    ["85%", "Pandas (lib)", "Self"],
    ["95%", "HTML", "MDN Web Docs"],
    ["90%", "CSS", "MDN Web Docs"],
    ["90%", "SCSS", "Self"],
    ["70%", "JavaScript", "MDN Web Docs"],
    ["75%", "React", "React Docs"],
    ["50%", "C & C++", "Self"],
    ["60%", "Java", "Self"],
];

function manipulateSkills(skillsArray) {
    let skill_box = document.getElementById("skills_box");
    let insertion_data = ``;
    skillsArray.forEach((e) => {
        let skill_experience_box = `
<div class="ui_box ui_box_modified">
<div class="typo_box column">
    <div class="typo_analytics">
        <div class="box_header_2">${e[2]}</div>
        <div class="box_header_2">${e[0]}</div>
    </div>
    <div class="typo_header">
        ${e[1]}
    </div>
    <div class="box_para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eveniet dolorum sapiente et sequi mollitia animi nemo praesentium officia error?
    </div>
</div>
</div>`;
        insertion_data = insertion_data + skill_experience_box;
    });
    skill_box.innerHTML = insertion_data;
}

let awardsArray = [
    ["10th December 2022", "Game Of Codes", "AKTU"],
    ["28th April 2022", "SDG - Hackathaon", "IILM University"],
];

function manipulateAwards(awardsArray) {
    let awards_box = document.getElementById("awards_box");
    let insertion_data_awards = ``;
    awardsArray.forEach((e) => {
        let awards_experience_box = `
        <div class="ui_box ui_box_modified">
        <div class="typo_box column">
            <div class="typo_analytics">
                <div class="box_header_2">${e[2]}</div>
                <div class="box_header_2">${e[0]}</div>
            </div>
            <div class="typo_header">
                ${e[1]}
            </div>
            <div class="box_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eveniet dolorum sapiente et sequi mollitia animi nemo praesentium officia error?
            </div>
        </div>
        </div>`;
        insertion_data_awards = insertion_data_awards + awards_experience_box;
    });
    awards_box.innerHTML = insertion_data_awards;
}

manipulateAwards(awardsArray);
manipulateSkills(skillsArray);
