import React from 'react';

function Contact(props) {
    return (
        <div>
            <div className="modal" tabIndex={-1} id="viewAttachFacility">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Dịch Vụ Đi Kèm Của Hợp Đồng Này</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <input type="hidden" id="modalCheck" />
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Dịch Vụ</th>
                                    <th>Đơn Giá</th>
                                    <th>Xuất</th>
                                    <th>Trạng Thái</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Tiền</th>
                                </tr>
                                </thead>
                                <tbody id="tableAttachFacilityNew"></tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                data-bs-dismiss="modal"
                            >
                                Thoát
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;