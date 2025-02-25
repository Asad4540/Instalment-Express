const jobTitleSelect = document.getElementById('job-title-select');
const tagsContainer = document.getElementById('tags-container');

jobTitleSelect.addEventListener('change', function() {
    const selectedValue = jobTitleSelect.value;
    const selectedText = jobTitleSelect.options[jobTitleSelect.selectedIndex].text;

    if (selectedValue !== '') {
        addTag(selectedValue, selectedText);
    }

    // Reset the select box
    jobTitleSelect.value = '';
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

    tag.appendChild(tagText);
    tag.appendChild(removeButton);
    tagsContainer.appendChild(tag);
}
