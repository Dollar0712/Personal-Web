
// Change page variables
var homecheckbox = document.getElementById('menu-item1');
var homeContent = document.querySelector('.home'); 

var aboutcheckbox = document.getElementById('menu-item2');
var aboutContent = document.querySelector('.about-me'); 

var skillcheckbox = document.getElementById('menu-item3');
var skillContent = document.querySelector('.skills'); 

var experiencecheckbox = document.getElementById('menu-item4');
var experienceContent = document.querySelector('.experience'); 

var contactcheckbox = document.getElementById('menu-item5');
var contactContent = document.querySelector('.contact-me'); 


// Scroll to content variables
var aboutmeitem1checkbox = document.getElementById('about-me-item1');
var aboutmeitem1content = document.getElementById('about-myself');

var aboutmeitem2checkbox = document.getElementById('about-me-item2');
var aboutmeitem2content = document.getElementById('edu-background');

var skillsitem1checkbox = document.getElementById('skills-item1');
var skillsitem1content = document.getElementById('programming_language');

var skillsitem2checkbox = document.getElementById('skills-item2');
var skillsitem2content = document.getElementById('interfaces_and_protocols');

var skillsitem3checkbox = document.getElementById('skills-item3');
var skillsitem3content = document.getElementById('development_tools');

var skillsitem4checkbox = document.getElementById('skills-item4');
var skillsitem4content = document.getElementById('microcontroller_and_processor');

var skillsitem5checkbox = document.getElementById('skills-item5');
var skillsitem5content = document.getElementById('operating_system');

// Checkbox variables
const parentCheckboxes = document.querySelectorAll('.menu-box .parent-checkbox');
const childCheckboxesGroups = [];

// Only one parent checkbox can be checked
function setupExclusiveCheckboxes() {
    parentCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                parentCheckboxes.forEach(cb => {
                    if (cb !== this) {
                        cb.checked = false;
                    }
                });
            }
        });
    });
}

// Only one child checkbox can be checked
function setupExclusiveChildCheckboxes() {
    childCheckboxesGroups.forEach(childCheckboxes => {
        childCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                if (this.checked) {
                    childCheckboxes.forEach(cb => {
                        if (cb !== this) {
                            cb.checked = false;
                        }
                    });
                }
            });
        });
    });
}

// When the parent checkbox is unchecked, the corresponding child checkbox is unchecked.
function uncheckAllChildcheckboxes() {
    parentCheckboxes.forEach((parent, index) => {
    parent.addEventListener('change', function () {
        if (!this.checked) {
            childCheckboxesGroups[index].forEach(childCheckbox => {
                childCheckbox.checked = false;
            });
        }
    });
});
}

// Get all child checkboxes of corresponding parent
function getAllchildCheckboxed() {
    parentCheckboxes.forEach(parent => {
        const menuItem = parent.closest('.menu-item');
        const childCheckboxes = menuItem.querySelectorAll('.child-checkbox');
        const childCheckboxArray = Array.from(childCheckboxes);
        childCheckboxesGroups.push(childCheckboxArray);
    });
    console.log(childCheckboxesGroups);
}

// Hide all pages
function hideAllContent() {
    homeContent.style.display = 'none';
    aboutContent.style.display = 'none';
    skillContent.style.display = 'none';
    experienceContent.style.display = 'none';
    contactContent.style.display = 'none';
}

// Display home page
function toHome() {
    hideAllContent();
    homeContent.style.display = 'flex';
}

// Display about me page
function toAbout() {
    hideAllContent();
    aboutContent.style.display = 'flex';
}

// Display skill page
function toSkill() {
    hideAllContent();
    skillContent.style.display = 'flex';
}

// Display experience page
function toExperience() {
    hideAllContent();
    experienceContent.style.display = 'flex';
}

// Display contact me page
function toContact() {
    hideAllContent();
    contactContent.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', function() {

    homecheckbox.addEventListener('change', function() {
        toHome();
    });

    aboutcheckbox.addEventListener('change', function() {
        toAbout();
    });

    skillcheckbox.addEventListener('change', function() {
        toSkill();
    });

    experiencecheckbox.addEventListener('change', function() {
        toExperience();
    });

    contactcheckbox.addEventListener('change', function() {
        toContact();
    });

    aboutmeitem1checkbox.addEventListener('change', function() {
        toAbout();
        aboutmeitem1content.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    aboutmeitem2checkbox.addEventListener('change', function() {
        toAbout();
        aboutmeitem2content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    skillsitem1checkbox.addEventListener('change', function() {
        toSkill();
        skillsitem1content.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    skillsitem2checkbox.addEventListener('change', function() {
        toSkill();
        skillsitem2content.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    skillsitem3checkbox.addEventListener('change', function() {
        toSkill();
        skillsitem3content.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    skillsitem4checkbox.addEventListener('change', function() {
        toSkill();
        skillsitem4content.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    skillsitem5checkbox.addEventListener('change', function() {
        toSkill();
        skillsitem5content.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    getAllchildCheckboxed();
    setupExclusiveCheckboxes();
    setupExclusiveChildCheckboxes();
    uncheckAllChildcheckboxes();
});