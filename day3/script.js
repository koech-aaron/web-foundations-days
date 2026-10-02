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
    const noteWord = notes.length === 1 ? "note" : "notes";

    return `${notes.length} ${noteWord}: ${counts.personal} personal, ${counts.work} work, ${counts.study} study.`;
}

function isDuplicate(text) {
    const normalizedText = text.trim().toLowerCase();

    return notes.some(note =>
        note.text.trim().toLowerCase() === normalizedText
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


// =========================
// Tests
// =========================

// 1. searchNotes()
// Normal case
console.log("Search JavaScript:", searchNotes("javascript")); // Expected: Array containing the "Revise JavaScript arrays" note.

// Edge case: no matching notes
console.log("Search Python:", searchNotes("python")); // Expected: []


// 2. longestNote()
// Normal case
console.log("Longest note:", longestNote()); // Expected: { id: 3, text: "Email the project report to Grace", category: "work" }

// Edge case: empty array
const savedNotes = notes;
notes = [];
console.log("Longest note when empty:", longestNote()); // Expected: null
notes = savedNotes;


// 3. countByCategory()
// Normal case
console.log("Category counts:", countByCategory()); // Expected: { personal: 2, work: 1, study: 2 }

// Edge case: no notes
const savedNotesForCount = notes;
notes = [];
console.log("Category counts when empty:", countByCategory()); // Expected: { personal: 0, work: 0, study: 0 }
notes = savedNotesForCount;


// 4. getSummary()
// Normal case
console.log("Summary:", getSummary()); // Expected: "5 notes: 2 personal, 1 work, 2 study."

// Edge case: exactly one note
const savedNotesForSummary = notes;
notes = [
    { id: 1, text: "Test note", category: "personal" }
];
console.log("One-note summary:", getSummary()); // Expected: "1 note: 1 personal, 0 work, 0 study."
notes = savedNotesForSummary;


// 5. isDuplicate()
// Normal case
console.log("Duplicate check:", isDuplicate("call mum")); // Expected: true

// Edge case: text that does not exist
console.log("Duplicate check for new text:", isDuplicate("Go shopping")); // Expected: false


// 6. addNote()
// Normal case
console.log("Add valid note:", addNote("Prepare for the JavaScript quiz", "study")); // Expected: true

// Edge case: duplicate note
console.log("Add duplicate note:", addNote("  CALL MUM  ", "personal")); // Expected: false, with "Note is a duplicate." logged.


console.log("Updated notes:", notes); // Expected: Array containing 6 notes.