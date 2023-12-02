/* Задание 1
Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. */

class Library {
    #books = [];
    constructor(listOfBooks) {
        try { 
            if (listOfBooks.length === 0) {
                throw new Error('В библиотеке нет книг!');
            } else {
                listOfBooks.forEach(book => {
                    if (this.#books.includes(book)) {
                        throw new Error(`В списке есть дубликаты: ${book}!`);
                    } else {
                        this.#books.push(book);
                        return this.#books;
                    }
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        try {
            if (this.#books.includes(title)) {
                throw new Error(`Книга ${title} есть в списке!`);
            } else {
                this.#books.push(title);
                return this.#books;
            }
        } catch (error) {
            console.error(error);
        }
    }

    removeBook(title) {
        try {
            if (this.#books.includes(title)) {
                this.#books = this.#books.filter(bookTitle => bookTitle !== title);
                console.log(`Обновленный список книг: ${this.#books}`);
                return this.#books;
            } else {
                throw new Error(`Книги ${title} нет в списке!`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    hasBook(title) {
        if (this.#books.includes(title)) {
            return true;
        } else {
            return false;
        }
    }
}

const myLibrary = new Library(['Мастер и маргарита', 'Война и мир']);
console.log(myLibrary.allBooks);

console.log(myLibrary.addBook('Три товарища'));
console.log(myLibrary.addBook('Чего же ты хочешь?'));

console.log(myLibrary.removeBook('Чего же ты хочешь?'));

console.log(myLibrary.hasBook('Чего же ты хочешь?'));
console.log(myLibrary.hasBook('Три товарища'));


