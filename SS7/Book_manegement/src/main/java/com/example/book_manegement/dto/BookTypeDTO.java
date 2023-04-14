package com.example.book_manegement.dto;

import java.util.Set;

public class BookTypeDTO {
    private Long id;

    private String name;

    Set<BookDTO> bookDTO;

    public BookTypeDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<BookDTO> getBookDTO() {
        return bookDTO;
    }

    public void setBookDTO(Set<BookDTO> bookDTO) {
        this.bookDTO = bookDTO;
    }
}
