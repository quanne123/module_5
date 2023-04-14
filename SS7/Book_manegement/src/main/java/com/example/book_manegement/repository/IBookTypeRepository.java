package com.example.book_manegement.repository;

import com.example.book_manegement.model.BookType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBookTypeRepository extends JpaRepository<BookType,Long> {
    BookType findBookTypeByName(String name);
}
