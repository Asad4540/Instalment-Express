const jobTitleSelect = document.getElementById('job-title-select');
const industrySelect = document.getElementById('industry-select');

const jobTagsContainer = document.getElementById('tags-container-job-title'); // Unique container
const industryTagsContainer = document.getElementById('tags-container-industry'); // Unique container

jobTitleSelect.addEventListener('change', function() {
    const selectedValue = jobTitleSelect.value;
    const selectedText = jobTitleSelect.options[jobTitleSelect.selectedIndex].text;

    if (selectedValue !== '') {
        addTag(selectedValue, selectedText, jobTagsContainer); // Pass the specific container
    }

    // Reset the select box
    jobTitleSelect.value = '';
});

industrySelect.addEventListener('change', function() {
    const selectedValue = industrySelect.value;
    const selectedText = industrySelect.options[industrySelect.selectedIndex].text;

    if (selectedValue !== '') {
        addTag(selectedValue, selectedText, industryTagsContainer); // Pass the specific container
    }

    // Reset the select box
    industrySelect.value = '';
});

function addTag(value, text, container) { // Accept the container as a parameter
    // Check if the tag already exists in the correct container
    if (container.querySelector(`.tag[data-value="${value}"]`)) {
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
        container.removeChild(tag);
    });

    tag.appendChild(tagText);
    tag.appendChild(removeButton);
    container.appendChild(tag);
}
