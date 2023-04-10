// import React, { Component } from 'react';
//
// class FormEditFacility extends Component {
//     render() {
//         return (
//             <div>
//                 <div className="modal " tabIndex="-1" id="editmodal">
//                     <div className="modal-dialog modal-xl">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title">
//                                     Thêm mới dịch vụ{' '}
//                                     <i className="fa fa-user" aria-hidden="true"></i>
//                                 </h5>
//                                 <button
//                                     type="button"
//                                     className="btn-close clearError"
//                                     data-bs-dismiss="modal"
//                                     aria-label="Close"
//                                 ></button>
//                             </div>
//                             <div className="modal-body">
//                                 <form method="post">
//                                     <input type="hidden" name="validate" value="edit" />
//                                     <div className="mb-3 row">
//                                         <label className="col-sm-2 col-form-label">
//                                             Loại Dịch Vụ
//                                         </label>
//                                         <div className="col-sm-10">
//                                             <select
//                                                 className="form-control"
//                                                 onChange={() => this.facility()}
//                                                 id="selectValue"
//                                             >
//                                                 <option className="form-control" value="1">
//                                                     Villa
//                                                 </option>
//                                                 <option className="form-control" value="2">
//                                                     House
//                                                 </option>
//                                                 <option className="form-control" value="3">
//                                                     Room
//                                                 </option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                     <div className="mb-3 row">
//                                         <label className="col-sm-2 col-form-label">
//                                             Tên Dịch Vụ
//                                         </label>
//                                         <div className="col-sm-10">
//                                             <input type="text" className="form-control" />
//                                         </div>
//                                     </div>
//                                     <div className="mb-3 row">
//                                         <label className="col-sm-2 col-form-label">
//                                             Diện Tích
//                                         </label>
//                                         <div className="col-sm-10">
//                                             <input type="number" className="form-control" />
//                                         </div>
//                                     </div>
//                                     <div className="mb-3 row">
//                                         <label className="col-sm-2 col-form-label">
//                                             Chi Phí Thuê
//                                         </label>
//                                         <div className="col-sm-10">
//                                             <input type="number" className="form-control" />
//                                         </div>
//                                     </div>
//                                     <div className="mb-3 row">
//                                         <label className="col-sm-2 col-form-label">
//                                             Số Người Tối Đa
//                                         </label>
//                                         <div className="col-sm-10">
//                                             <input type="number" className="form-control" />
//                                         </div>
//                                     </div>
//                                     {/*<div className="mb-3 row">*/}
//                                     {/*    <label className="col-sm-2 col-form-label">Kiểu Thuê</label>*/}
//                                     {/*    <div className="col-sm-10">*/}
//                                     {/*        <select className="form-control">*/}
//                                     {/*            <option className="form-control" value="1">*/}
//                                     {/*                Year*/}
//                                                 </option>
//                                     {/*            <option className="form-control" value="2">*/}
//                                     {/*                Month*/}
//                                     {/*            </option>*/}
//                                     {/*            <option className="form-control" value="3">*/}
//                                     {/*                Day*/}
//                                     {/*            </option>*/}
//                                     {/*            <option className="form-control" value="4">*/}
//                                     {/*                Hour*/}
//                                     {/*            </option>*/}
//                                     {/*        </select>*/}
//                                     {/*    </div>*/}
//                                     {/*</div>*/}
//
//                                     <div className="mb-3 row" id="standardAdd">
//                                         <label className="col-sm-2 col-form-label">
//                                             Tiêu Chuẩn Phòng
//                                         </label>
//                                         <div className="col-sm-10">
//                                             <input type="text" className="form-control" />
//                                         </div>
//                                         <div className="mb-3 row" id="descriptionAdd">
//                                             <label className="col-sm-2 col-form-label">Mô Tả Khác</label>
//                                             <div className="col-sm-10">
//                                                 <input type="text" className="form-control" />
//                                             </div>
//                                         </div>
//                                         <div className="mb-3 row" id="poolAreaAdd">
//                                             <label className="col-sm-2 col-form-label">Diện Tích Hồ Bơi</label>
//                                             <div className="col-sm-10">
//                                                 <input type="number" className="form-control" />
//                                             </div>
//                                         </div>
//                                         <div className="mb-3 row" id="numberOfFloorAdd">
//                                             <label className="col-sm-2 col-form-label">Số Tầng</label>
//                                             <div className="col-sm-10">
//                                                 <input type="number" className="form-control" />
//                                             </div>
//                                         </div>
//                                         <div className="mb-3 row d-none" id="addFreeService">
//                                             <label className="col-sm-2 col-form-label">Dịch Vụ Miễn Phí</label>
//                                             <div className="col-sm-10">
//                                                 <input type="text" className="form-control" />
//                                             </div>
//                                         </div>
//                                         <div className="modal-footer">
//                                             <button type="button" className="btn btn-secondary clearError" data-bs-dismiss="modal">Hủy</button>
//                                             <button type="submit" className="btn btn-primary">Xác Nhận</button>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default FormEditFacility;
//
