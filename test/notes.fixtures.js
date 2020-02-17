function makeNotesArray() {
    return [
        {
            id: 1,
            note_name: 'First test note!',
            date_modified: '2029-01-22T16:28:32.615Z',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
            folder_id: 1
        },
        {   
            id: 2,
            note_name: 'Second test note!',
            date_modified: '2100-05-22T16:28:32.615Z',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, exercitationem cupiditate dignissimos est perspiciatis, nobis commodi alias saepe atque facilis labore sequi deleniti. Sint, adipisci facere! Velit temporibus debitis rerum.',
            folder_id: 2
        },
        {   
            id: 3,
            note_name: 'Third test note!',
            date_modified: '1919-12-22T16:28:32.615Z',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptate? Necessitatibus, reiciendis? Cupiditate totam laborum esse animi ratione ipsa dignissimos laboriosam eos similique cumque. Est nostrum esse porro id quaerat.',
            folder_id: 3
        },
        {
            id: 4,
            note_name: 'Fourth test post!',
            date_modified: '1919-12-22T16:28:32.615Z',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae accusamus veniam consectetur tempora, corporis obcaecati ad nisi asperiores tenetur, autem magnam. Iste, architecto obcaecati tenetur quidem voluptatum ipsa quam?',
            folder_id: 1
        },
    ];
}

function makeMaliciousNote() {
    const maliciousNote =  {
        id: 911,
        note_name: 'Naughty naughty very naughty <script>alert("xss");</script>',
        content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
        folder_id: 1
    }

    const expectedNote = {
        ...maliciousNote,
        note_name: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
        content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }

    return {
        maliciousNote,
        expectedNote,
    }
}

module.exports = {
    makeNotesArray,
    makeMaliciousNote
}