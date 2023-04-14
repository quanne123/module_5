package com.example.book_manegement.service.impl;

import com.example.book_manegement.dto.BookDTO;
import com.example.book_manegement.dto.BookTypeDTO;
import com.example.book_manegement.model.Book;
import com.example.book_manegement.repository.IBookRepository;
import com.example.book_manegement.repository.IBookTypeRepository;
import com.example.book_manegement.service.IBookService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService implements IBookService {
    @Autowired
    IBookRepository bookRepository;
    @Autowired
    IBookTypeRepository bookTypeRepository;

    @Override
    public Page<BookDTO> getAll(String name, Pageable pageable) {
        Page<Book> bookPage = bookRepository.searchBook(name, pageable);
        List<BookDTO> bookDTOList = new ArrayList<>();
        BookDTO bookDTO;
        for (Book book : bookPage) {
            bookDTO = new BookDTO();
            bookDTO.setBookTypeDTO(new BookTypeDTO());
            BeanUtils.copyProperties(book.getBookType(), bookDTO.getBookTypeDTO());
            BeanUtils.copyProperties(book, bookDTO);
            bookDTOList.add(bookDTO);
            ;
        }
        return new PageImpl<>(bookDTOList, pageable, bookPage.getTotalElements());
    }

    @Override
    public BookDTO getById(Long id) {
        BookDTO bookDTO = new BookDTO();
        Book book = bookRepository.findById(id).get();
        bookDTO.setBookTypeDTO(new BookTypeDTO());
        BeanUtils.copyProperties(book.getBookType(), bookDTO.getBookTypeDTO());
        BeanUtils.copyProperties(book, bookDTO);
        return bookDTO;
    }

    @Override
    public void create(BookDTO bookDTO) {
        Book book = new Book();
        book.setBookType(bookTypeRepository.findBookTypeByName(bookDTO.getBookTypeDTO().getName()));
        BeanUtils.copyProperties(bookDTO, book);
        bookRepository.save(book);
    }

    @Override
    public void delete(Long id) {
        bookRepository.deleteById(id);
    }
}
