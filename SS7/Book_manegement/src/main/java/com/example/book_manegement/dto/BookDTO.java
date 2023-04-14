package com.example.book_manegement.dto;

import com.example.book_manegement.dto.BookTypeDTO;
import com.example.book_manegement.dto.NotBlank;
import com.example.book_manegement.model.BookType;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.Pattern;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.time.format.DateTimeParseException;
import java.util.Date;

public class BookDTO implements Validator {
    private Long id;
    private BookType bookType;

    @NotBlank(message = "Mã sách không được để trống!")
    @Pattern(regexp = "^(BO-\\d{4})$", message = "Mã sách phải đúng định dạng BO-XXXX (với X là các số tự nhiên)")
    private String codeBook;
    @NotBlank(message = "Tên sách không được để trống!")
    @Pattern(regexp = "^[\\w+\\s]{0,100}$", message = "Tên sách không được quá 100 ký tự!")
    private String name;
    @NotBlank(message = "Tên sách không được để trống!")
    private String loanDay;
    @NotBlank(message = "Vui lòng nhập số lượng sách!")
    @Pattern(regexp = "^[1-9][\\d]*$", message = "Số lượng sách phải lớn hơn 0!")
    private String quantity;
    private BookTypeDTO bookTypeDTO;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BookType getBookType() {
        return bookType;
    }

    public void setBookType(BookType bookType) {
        this.bookType = bookType;
    }

    public String getCodeBook() {
        return codeBook;
    }

    public void setCodeBook(String codeBook) {
        this.codeBook = codeBook;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLoanDay() {
        return loanDay;
    }

    public void setLoanDay(String loanDay) {
        this.loanDay = loanDay;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public BookTypeDTO getBookTypeDTO() {
        return bookTypeDTO;
    }

    public void setBookTypeDTO(BookTypeDTO bookTypeDTO) {
        this.bookTypeDTO = bookTypeDTO;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        BookDTO bookDTO = (BookDTO) target;

        //validate loanDay
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        try {
            LocalDate loanDay1 = LocalDate.parse(bookDTO.loanDay, formatter);
        } catch (DateTimeParseException e) {
            errors.rejectValue("loanDay","loanDay","Ngày sinh phải đúng định dạng dd/MM/yyyy");
        }
    }
}