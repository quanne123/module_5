package com.example.book_manegement.service;

import com.example.book_manegement.dto.BookTypeDTO;
import com.example.book_manegement.model.BookType;

import java.util.List;
import java.util.Optional;

public interface IBookTypeService {
    List<BookTypeDTO> findAll();

    Optional<BookType> findById (Long id);
}
