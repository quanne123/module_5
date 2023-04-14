package com.example.book_manegement.controller;

import com.example.book_manegement.dto.BookTypeDTO;
import com.example.book_manegement.service.IBookTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/book-type")
public class BookTypeController {
    @Autowired
    private IBookTypeService bookTypeService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public List<BookTypeDTO> getAll() {
        return bookTypeService.findAll();
    }

}
