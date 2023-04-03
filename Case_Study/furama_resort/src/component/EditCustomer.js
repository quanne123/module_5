import React, {Component} from 'react';

class EditCustomer extends Component {
    render() {
        return (
            <div>
                <div className="modal" tabIndex="-1" id="editModal">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    Sửa thông tin khách hàng <i className="fa fa-user"></i>
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3 row">
                                        <label className="col-sm-2 col-form-label">Họ Tên:</label>
                                        <div className="col-sm-10">
                                            <input
                                                type="hidden"
                                                id="idEdit"
                                            />
                                            <input
                                                type="text"
                                                id="nameEdit"
                                                className="form-control"
                                                name="name"
                                            />
                                        </div>
                                    </div>
                                    <input
                                        type="hidden"
                                        name="validate"
                                        value="edit"
                                    />
                                    <input
                                        type="hidden"
                                        name="modal"
                                        value="edit"
                                    />
                                    <div className="mb-3 row">
                                        <label className="col-sm-2 col-form-label">
                                            Ngày Sinh
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="date"
                                                id="dateOfBirthEdit"
                                                className="form-control"
                                                name="birthday"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-2 col-form-label">
                                            Giới Tính
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="radio"
                                                id="genderS1"
                                                checked
                                                name="gender"
                                                className="form-check-input"
                                                value="true"
                                            />
                                            <label
                                                htmlFor="genderS1"
                                                className="form-check-label"
                                            >
                                                Nam
                                            </label>
                                            <input
                                                type="radio"
                                                id="genderS2"
                                                style={{ marginLeft: "25px" }}
                                                name="gender"
                                                className="form-check-input"
                                                value="false"
                                            />
                                            <label
                                                htmlFor="genderS2"
                                                className="form-check-label"
                                            >
                                                Nữ
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-2 col-form-label">
                                            Số CMND
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="number"
                                                id="iDCardEdit"
                                                className="form-control"
                                                name="iDCard"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-2 col-form-label">
                                            Số Điện Thoại
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                id="phoneNumberEdit"
                                                type="number"
                                                className="form-control"
                                                name="phoneNumber"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                                <label className="col-sm-2 col-form-label">Email </label>
                                                <div className="col-sm-10">
                                                    <input type="email" id="emailEdit" className="form-control"
                                                           name="email"/>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label className="col-sm-2 col-form-label">Địa Chỉ </label>
                                                <div className="col-sm-10">
                                                    <input type="text" id="addressEdit" className="form-control"
                                                           name="address"/>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label className="col-sm-2 col-form-label">Kiểu Khách</label>
                                                <div className="col-sm-10">
                                                    <select id="typeEdit" className="form-select" name="customerType">
                                                        <option></option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary"
                                                        data-bs-dismiss="modal">Hủy
                                                </button>
                                                <button type="submit" className="btn btn-primary">Xác Nhận</button>
                                            </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default EditCustomer;