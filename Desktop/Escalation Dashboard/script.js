const jobTitleSelect = document.getElementById('job-title-select');
const sizeSelect = document.getElementById('size-select');
const JobLevelSelect = document.getElementById('job-level-select');
const CountrySelect = document.getElementById('country-select');

const tagsContainer = document.getElementById('tags-container');
const tagsContainer2 = document.getElementById('tags-container2');
const tagsContainer3 = document.getElementById('tags-container3');
const tagsContainer4 = document.getElementById('tags-container4');




jobTitleSelect.addEventListener('change', function() {
    const selectedValue = jobTitleSelect.value;
    const selectedText = jobTitleSelect.options[jobTitleSelect.selectedIndex].text;

    if (selectedValue !== '') {
        addTag(selectedValue, selectedText);
    }

    // Reset the select box
    jobTitleSelect.value = '';
});

sizeSelect.addEventListener('change', function() {
    const selectedValue = sizeSelect .value;
    const selectedText = sizeSelect .options[sizeSelect .selectedIndex].text;
    if (selectedValue !== '') {
        addTag2(selectedValue, selectedText);
    }

    // Reset the select box
    sizeSelect .value = '';
});

JobLevelSelect.addEventListener('change', function() {
    const selectedValue = JobLevelSelect .value;
    const selectedText = JobLevelSelect .options[JobLevelSelect .selectedIndex].text;
    if (selectedValue !== '') {
        addTag3(selectedValue, selectedText);
    }

    // Reset the select box
    JobLevelSelect .value = '';
});

CountrySelect.addEventListener('change', function() {
    const selectedValue = CountrySelect .value;
    const selectedText = CountrySelect .options[CountrySelect .selectedIndex].text;
    if (selectedValue !== '') {
        addTag4(selectedValue, selectedText);
    }

    // Reset the select box
    CountrySelect .value = '';
});


function addTag(value, text) {
    // Check if the tag already exists
    if (document.querySelector(`.tag[data-value="${value}"]`)) {
        return; // Do not add duplicate tags
    }

    // Create a new tag element
    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.setAttribute('data-value', value);

    const tagText = document.createElement('span');
    tagText.textContent = text;

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-tag');
    removeButton.innerHTML = '&times;';
    removeButton.addEventListener('click', function() {
        tagsContainer.removeChild(tag);
    });
    console.log('tagText: '+tagText);
    tag.appendChild(tagText);
    tag.appendChild(removeButton);
    tagsContainer.appendChild(tag);
}


function addTag2(value, text) {
    // Check if the tag already exists
    if (document.querySelector(`.tag[data-value="${value}"]`)) {
        return; // Do not add duplicate tags
    }

    // Create a new tag element
    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.setAttribute('data-value', value);

    const tagText = document.createElement('span');
    tagText.textContent = text;

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-tag');
    removeButton.innerHTML = '&times;';
    removeButton.addEventListener('click', function() {
        tagsContainer2.removeChild(tag);
    });
    console.log('tagText: '+tagText);
    tag.appendChild(tagText);
    tag.appendChild(removeButton);
    tagsContainer2.appendChild(tag);
}


function addTag3(value, text) {
    // Check if the tag already exists
    if (document.querySelector(`.tag[data-value="${value}"]`)) {
        return; // Do not add duplicate tags
    }

    // Create a new tag element
    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.setAttribute('data-value', value);

    const tagText = document.createElement('span');
    tagText.textContent = text;

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-tag');
    removeButton.innerHTML = '&times;';
    removeButton.addEventListener('click', function() {
        tagsContainer3.removeChild(tag);
    });
    console.log('tagText: '+tagText);
    tag.appendChild(tagText);
    tag.appendChild(removeButton);
    tagsContainer3.appendChild(tag);
}

function addTag4(value, text) {
    // Check if the tag already exists
    if (document.querySelector(`.tag[data-value="${value}"]`)) {
        return; // Do not add duplicate tags
    }

    // Create a new tag element
    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.setAttribute('data-value', value);

    const tagText = document.createElement('span');
    tagText.textContent = text;

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-tag');
    removeButton.innerHTML = '&times;';
    removeButton.addEventListener('click', function() {
        tagsContainer4.removeChild(tag);
    });
    console.log('tagText: '+tagText);
    tag.appendChild(tagText);
    tag.appendChild(removeButton);
    tagsContainer4.appendChild(tag);
}

