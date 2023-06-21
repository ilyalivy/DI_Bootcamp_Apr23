const allBooks = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUHKXyBCtVqYbSAwOPLlwlxVq5aT5yshUCuw&usqp=CAU",
      alreadyRead: true
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwoFl3_N2mBdtpRArhMQWOCzSRoF7Q3nLbVA&usqp=CAU",
      alreadyRead: false
    }
  ];

const section = document.querySelector('section')

allBooks.forEach (book => {
    
    let bookDiv = document.createElement('div')
    section.appendChild(bookDiv)

    bookDiv.textContent = `${book.title} written by ${book.author}`

    let image = document.createElement('img')
    bookDiv.appendChild(image)
    image.src = book.image
    image.style.width = '100px'

    if (book.alreadyRead) {
        bookDiv.style.color = 'red'
    }
})