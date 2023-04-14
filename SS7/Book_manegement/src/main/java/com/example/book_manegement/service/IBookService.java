package com.example.book_manegement.service;

import com.example.book_manegement.dto.BookDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBookService {
    Page<BookDTO> getAll(String name, Pageable pageable);

    BookDTO getById(Long id);

    void create(BookDTO bookDTO);

    void delete(Long id);
}
