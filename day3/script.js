let notes = [
    { id: 1, text: "Buy milk and bread", category: "personal" },
    { id: 2, text: "Finish the Day 3 assignment", category: "study" },
    { id: 3, text: "Email the project report to Grace", category: "work" },
    { id: 4, text: "Revise JavaScript arrays", category: "study" },
    { id: 5, text: "Call mum", category: "personal" },
];

function searchNotes(word) {
    return notes.filter(note =>
        note.text.toLowerCase().includes(word.toLowerCase())
    );
}

function longestNote() {
    if (notes.length === 0) {
        return null;
    }

    return notes.reduce((longest, note) =>
        note.text.length > longest.text.length ? note : longest
    );
}

function countByCategory() {
    const counts = {
        personal: 0,
        work: 0,
        study: 0
    };

    notes.forEach(note => {
        counts[note.category]++;
    });

    return counts;
}

function getSummary() {
    const counts = countByCategory();

    return `${notes.length} notes: ${counts.personal} personal, ${counts.work} work, ${counts.study} study.`;
}

function isDuplicate(text) {
    const normalizedText = text
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");

    return notes.some(note =>
        note.text
            .trim()
            .toLowerCase()
            .replace(/\s+/g, " ") === normalizedText
    );
}

function addNote(text, category) {
    const trimmedText = text.trim();

    if (trimmedText.length < 1 || trimmedText.length > 200) {
        console.log("Note must be between 1 and 200 characters.");
        return false;
    }

    if (isDuplicate(trimmedText)) {
        console.log("Note is a duplicate.");
        return false;
    }

    if (!["personal", "work", "study"].includes(category)) {
        console.log("Invalid category.");
        return false;
    }

    const newId = notes.length > 0
        ? Math.max(...notes.map(note => note.id)) + 1
        : 1;

    notes.push({
        id: newId,
        text: trimmedText,
        category: category
    });

    return true;
}

// Tests
console.log("Search:", searchNotes("javascript"));

console.log("Longest note:", longestNote());

console.log("Category counts:", countByCategory());

console.log("Summary:", getSummary());

console.log("Duplicate check:", isDuplicate("  CALL    MUM  "));

console.log("Add valid note:", addNote("Prepare for the JavaScript quiz", "study"));

console.log("Add duplicate note:", addNote("call mum", "personal"));

console.log("Add invalid category:", addNote("Buy a new notebook", "shopping"));

console.log("Updated notes:", notes);