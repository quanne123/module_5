import React from 'react';

function CreateContact(props) {
    return (
        <div>
            <div className="modal" tabIndex={-1} id="addmodal">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Tạo Hợp Đồng <i className="fa-sharp fa-solid fa-user"/>
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3 row">
                                    <label className="col-sm-2 col-form-label">Ngày Bắt Đầu</label>
                                    <div className="col-sm-10">
                                        <input type="date" className="form-control"/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-2 col-form-label">Ngày Kết Thúc</label>
                                    <div className="col-sm-10">
                                        <input type="date" className="form-control"/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-2 col-form-label">Tiền Gửi</label>
                                    <div className="col-sm-10">
                                        <input type="number" className="form-control"/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-2 col-form-label">Tổng Tiền</label>
                                    <div className="col-sm-10">
                                        <input
                                            type="number"
                                            className="form-control"
                                            readOnly=""
                                            id="tongTien"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-2 col-form-label">Khách Hàng</label>
                                    <div className="col-sm-10">
                                        <select className="form-control">
                                            <option/>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-2 col-form-label">Nhân Viên</label>
                                    <div className="col-sm-10">
                                        <select className="form-control">
                                            <option/>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-2 col-form-label">Dịch Vụ</label>
                                    <div className="col-sm-10">
                                        <select className="form-control">
                                            <option/>
                                        </select>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Hủy
                                    </button>
                                    <button
                                        type="button"
                                        onClick="addContract()"
                                        className="btn btn-primary"
                                    >
                                        Xác Nhận
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CreateContact;