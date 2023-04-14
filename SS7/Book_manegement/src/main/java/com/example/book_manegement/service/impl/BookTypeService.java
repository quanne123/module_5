package com.example.book_manegement.service.impl;

import com.example.book_manegement.dto.BookDTO;
import com.example.book_manegement.dto.BookTypeDTO;
import com.example.book_manegement.model.Book;
import com.example.book_manegement.model.BookType;
import com.example.book_manegement.repository.IBookTypeRepository;
import com.example.book_manegement.service.IBookTypeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class BookTypeService implements IBookTypeService {
    @Autowired
    IBookTypeRepository bookTypeRepository;


    public void setValueOfBookDTOSet(BookType bookType, BookTypeDTO bookTypeDTO) {
        Set<Book> bookSet = bookType.getBooks();
        Set<BookDTO> bookDTOSet = new LinkedHashSet<>();
        BookDTO bookDTO;
        for (Book book : bookSet) {
            bookDTO = new BookDTO();
            BeanUtils.copyProperties(book, bookDTO);
            bookDTOSet.add(bookDTO);
        }
        BeanUtils.copyProperties(bookType, bookTypeDTO);
        bookTypeDTO.setBookDTO(bookDTOSet);
    }
    @Override
    public List<BookTypeDTO> findAll() {
        List<BookType> bookTypeList = bookTypeRepository.findAll();
        List<BookTypeDTO> bookTypeDTOList = new ArrayList<>();
        BookTypeDTO bookTypeDTO;
        for (BookType bookType : bookTypeList) {
            bookTypeDTO = new BookTypeDTO();
            setValueOfBookDTOSet(bookType, bookTypeDTO);
            BeanUtils.copyProperties(bookType, bookTypeDTO);
            bookTypeDTOList.add(bookTypeDTO);
        }
        return bookTypeDTOList;
    }

    @Override
    public Optional<BookType> findById(Long id) {
        return bookTypeRepository.findById(id);
    }
}
