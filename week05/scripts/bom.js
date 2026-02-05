const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => displayList(chapter));

button.addEventListener('click', function() {
    if (input.value.trim() !== '') { // Make sure input is not empty
        // Display the input in the list
        displayList(input.value);
        // Update local storage
        chaptersArray.push(input.value);
        setChapterList();

        // Prepare for next input
        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    // Append new content
    li.append(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        deleteChapter(li.textContent); // Remove the chapter from the local storage array
        input.focus();
    });
}

// Update or create the data for the BOM list in the local storage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Retrieve the local storage list
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Delete chapter function
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Get rid of the 'X'
    // Compare the items in the chaptersArray with the given chapter and don't include it in the new array
    chaptersArray = chaptersArray.filter(item => item != chapter);
    setChapterList(); // Update local storage list
}