// import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as Yup from "yup";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Oval } from "react-loader-spinner";
// import { Link } from "react-router-dom";
// import facilityType from "./FacilityType";
// import amenities from "./Amenities"
//
// function FacilitiesAddForm() {
//     const handleFacilityChanged = (event) => {
//         const villa = document.getElementById("villa");
//         const room = document.getElementById("room");
//         const house = document.getElementById("house");
//
//         switch (event.currentTarget.value) {
//             case "0":
//                 villa.style.display = "none";
//                 house.style.display = "none";
//                 room.style.display = "none";
//                 break;
//             case "1":
//                 villa.style.display = "block";
//                 house.style.display = "none";
//                 room.style.display = "none";
//                 break;
//             case "2":
//                 villa.style.display = "none";
//                 house.style.display = "block";
//                 room.style.display = "none";
//                 break;
//             case "3":
//                 villa.style.display = "none";
//                 house.style.display = "none";
//                 room.style.display = "block";
//                 break;
//             default:
//                 throw new Error("Value dịch vụ không hợp lệ");
//         }
//     };
//
//     return (
//         <>
//             <Formik
//                 initialValues={{
//                     facilityImg: "",
//                     facilityName: "",
//                     facilityArea: "",
//                     facilityRentalCost: "",
//                     facilityMaxPeople: "",
//                     facilityRentalType: "",
//                     facilityTypeId: "",
//                     facilityStandard: "",
//                     facilityOtherAmenities: "",
//                     facilityPoolArea: "",
//                     facilityNumbOfFloor: "",
//                     facilityFreeAmenities: "",
//                     facilityAmenitiesId: [],
//                 }}
//                 validationSchema={Yup.object({
//
//                 })}
//                 onSubmit={(values, { setSubmitting }) => {
//                     values.facilityAmenitiesId = values.facilityAmenitiesId.map((data) => (
//                         parseInt(data)
//                     ));
//                     console.log(values);
//                     setSubmitting(false);
//                     toast("Thêm mới dịch vụ thành công");
//                 }}
//             >
//                 {({ isSubmitting, setFieldValue }) => (
//                     <Form>
//                         <div className="d-flex justify-content-center">
//                             <div
//                                 className="card"
//                                 style={{
//                                     width: "30%",
//                                     boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
//                                     marginTop: "9%",
//                                     marginBottom: 100,
//                                 }}
//                             >
//                                 <img
//                                     src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
//                                     className="card-img-top"
//                                     alt="..."
//                                 />
//                                 <div className="card-body">
//                                     <div className="d-flex mb-2 row">
//                                         <div className="col-6 pe-0 d-flex align-items-center">
//                                             <h5 className="card-title" style={{ fontWeight: "bold" }}>
//                                                 Tên dịch vụ
//                                             </h5>
//                                         </div>
//                                         <div className="col-6 px-0">
//                                             <Field
//                                                 type="text"
//                                                 style={{ borderRadius: 5 }}
//                                                 name="facilityName"
//                                             />
//                                             <ErrorMessage
//                                                 name="facilityName"
//                                                 component="div"
//                                                 className="text-danger"
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="d-flex mb-3 row">
//                                         <div className="col-6 pe-0 d-flex align-items-center">
//                                             <p
//                                                 className="card-text d-flex align-items-center"
//                                                 style={{ marginRight: 78 }}
//                                             >
//                                                 Hình ảnh:
//                                             </p>
//                                         </div>
//                                         <div className="col-6 px-0">
//                                             <Field
//                                                 type="file"
//                                                 style={{ borderRadius: 5 }}
//                                                 name="facilityImg"
//                                             />
//                                             <ErrorMessage
//                                                 name="facilityImg"
//                                                 component="div"
//                                                 className="text-danger"
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="d-flex mb-3 row">
//                                         <div className="col-6 pe-0 d-flex align-items-center">
//                                             <p
//                                                 className="card-text d-flex align-items-center"
//                                                 style={{ marginRight: 78 }}
//                                             >
//                                                 Diện tích sử dụng:
//                                             </p>
//                                         </div>
//                                         <div className="col-6 px-0">
//                                             <Field
//                                                 type="text"
//                                                 style={{ borderRadius: 5 }}
//                                                 name="facilityArea"
//                                             />
//                                             <ErrorMessage
//                                                 name="facilityArea"
//                                                 component="div"
//                                                 className="text-danger"
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="d-flex mb-3 row">
//                                         <div className="col-6 pe-0 d-flex align-items-center">
//                                             <p
//                                                 className="card-text d-flex align-items-center"
//                                                 style={{ marginRight: 105 }}
//                                             >
//                                                 Chi phí thuê:
//                                             </p>
//                                         </div>
//                                         <div className="col-6 px-0">
//                                             <Field
//                                                 type="text"
//                                                 style={{ borderRadius: 5 }}
//                                                 name="facilityRentalCost"
//                                             />
//                                             <ErrorMessage
//                                                 name="facilityRentalCost"
//                                                 component="div"
//                                                 className="text-danger"
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="d-flex mb-3 row">
//                                         <div className="col-6 pe-0 d-flex align-items-center">
//                                             <p
//                                                 className="card-text d-flex align-items-center"
//                                                 style={{ marginRight: 105 }}
//                                             >
//                                                 Số lượng người tối đa:
//                                             </p>
//                                         </div>
//                                         <div className="col-6 px-0">
//                                             <Field
//                                                 type="number"
//                                                 style={{ borderRadius: 5 }}
//                                                 name="facitilyMaxPeople"
//                                             />
//                                             <ErrorMessage
//                                                 name="facitilyMaxPeople"
//                                                 component="div"
//                                                 className="text-danger"
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="d-flex mb-2 row">
//                                         <div className="col-6 pe-0 d-flex align-items-center">
//                                             <p className="card-text" style={{ marginRight: 75 }}>
//                                                 Kiểu thuê:
//                                             </p>
//                                         </div>
//                                         <div className="col-6 px-0">
//                                             <Field
//                                                 as="select"
//                                                 style={{ borderRadius: 5, width: "97%" }}
//                                                 name="facilityRentalType"
//                                                 id="rental-type"
//                                             >
//                                                 <option value="1">Ngày</option>
//                                                 <option value="2">Tháng</option>
//                                                 <option value="3">Năm</option>
//                                             </Field>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <div className="d-flex mb-3 row">
//                                             <div className="col-6 pe-0 d-flex align-items-center">
//                                                 <p className="card-text" style={{ marginRight: 75 }}>
//                                                     Dịch vụ đi kèm:
//                                                 </p>
//                                             </div>
//                                             <div className="col-6 px-0">
//                                                 {amenities.map((aminity) => (
//                                                     <div className="row" key={aminity.id}>
//                                                         <Field
//                                                             style={{ width: "5%", marginBottom: "0" }}
//                                                             type="checkbox"
//                                                             id={aminity.id}
//                                                             name="facilityAmenitiesid"
//                                                             value={aminity.id.toString()}
//                                                         />
//                                                         <label htmlFor={aminity.id} className="col-10">
//                                                             {aminity.name}
//                                                         </label>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="d-flex mb-2 row">
//                                         <div className="col-6 pe-0 d-flex align-items-center">
//                                             <p className="card-text" style={{ marginRight: 75 }}>
//                                                 Loại dịch vụ:
//                                             </p>
//                                         </div>
//                                         <div className="col-6 px-0">
//                                             <Field
//                                                 as="select"
//                                                 style={{ borderRadius: 5, width: "97%" }}
//                                                 name="facilityTypeId"
//                                                 onChange={(event) => {
//                                                     handleFacilityChanged(event);
//                                                     setFieldValue(
//                                                         'facilityTypeId',
//                                                         event.currentTarget.value
//                                                     )
//                                                 }}
//                                             >
//                                                 <option value="0">Dịch vụ</option>
//                                                 {facilityType.map((type) => (
//                                                     <option key={type.id} value={type.id}>
//                                                         {type.name}
//                                                     </option>
//                                                 ))}
//                                             </Field>
//                                         </div>
//                                     </div>
//                                     <div id="villa" style={{ display: "none" }}>
//                                         <div className="d-flex mb-3 row">
//                                             <div className="col-6 pe-0 d-flex align-items-center">
//                                                 <p
//                                                     className="card-text d-flex align-items-center"
//                                                     style={{ marginRight: 105 }}
//                                                 >
//                                                     Tiêu chuẩn phòng:
//                                                 </p>
//                                             </div>
//                                             <div className="col-6 px-0">
//                                                 <Field
//                                                     type="text"
//                                                     style={{ borderRadius: 5 }}
//                                                     name="facilityStandard"
//                                                 />
//                                                 <ErrorMessage
//                                                     name="facilityStandard"
//                                                     component="div"
//                                                     className="text-danger"
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="d-flex mb-3 row">
//                                             <div className="col-6 pe-0 d-flex align-items-center">
//                                                 <p
//                                                     className="card-text d-flex align-items-center"
//                                                     style={{ marginRight: 105 }}
//                                                 >
//                                                     Mô tả tiện nghi khác:
//                                                 </p>
//                                             </div>
//                                             <div className="col-6 px-0">
//                                                 <Field
//                                                     name="facilityOtherAminities"
//                                                     type="text"
//                                                     style={{ borderRadius: 5 }}
//                                                 />
//                                                 <ErrorMessage
//                                                     name="facilityOtherAmenities"
//                                                     component="div"
//                                                     className="text-danger"
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="d-flex mb-3 row">
//                                             <div className="col-6 pe-0 d-flex align-items-center">
//                                                 <p
//                                                     className="card-text d-flex align-items-center"
//                                                     style={{ marginRight: 105 }}
//                                                 >
//                                                     Diện tích hồ bơi:
//                                                 </p>
//                                             </div>
//                                             <div className="col-6 px-0">
//                                                 <Field
//                                                     name="facilityPoolArea"
//                                                     type="text"
//                                                     style={{ borderRadius: 5 }}
//                                                 />
//                                                 <ErrorMessage
//                                                     name="facilityPoolArea"
//                                                     component="div"
//                                                     className="text-danger"
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="d-flex mb-3 row">
//                                             <div className="col-6 pe-0 d-flex align-items-center">
//                                                 <p
//                                                     className="card-text d-flex align-items-center"
//                                                     style={{ marginRight: 105 }}
//                                                 >
//                                                     Số tầng:
//                                                 </p>
//                                             </div>
//                                             <div className="col-6 px-0">
//                                                 <Field
//                                                     name="facilityNumbOfFloor"
//                                                     type="number"
//                                                     style={{ borderRadius: 5 }}
//                                                 />
//                                                 <ErrorMessage
//                                                     name="facilityNumbOfFloor"
//                                                     component="div"
//                                                     className="text-danger"
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div id="house" style={{ display: "none" }}>
//                                         <div className="d-flex mb-3 row">
//                                             <div className="col-6 pe-0 d-flex align-items-center">
//                                                 <p
//                                                     className="card-text d-flex align-items-center"
//                                                     style={{ marginRight: 105 }}
//                                                 >
//                                                     Tiêu chuẩn phòng:
//                                                 </p>
//                                             </div>
//                                             <div className="col-6 px-0">
//                                                 <Field
//                                                     name="facilityStandard"
//                                                     type="text"
//                                                     style={{ borderRadius: 5 }}
//                                                 />
//                                                 <ErrorMessage
//                                                     name="facilityStandard"
//                                                     component="div"
//                                                     className="text-danger"
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="d-flex mb-3 row">
//                                             <div className="col-6 pe-0 d-flex align-items-center">
//                                                 <p
//                                                     className="card-text d-flex align-items-center"
//                                                     style={{ marginRight: 105 }}
//                                                 >
//                                                     Mô tả tiện nghi khác:
//                                                 </p>
//                                             </div>
//                                             <div className="col-6 px-0">
//                                                 <Field
//                                                     name="facilityOtherAminities"
//                                                     type="text"
//                                                     style={{ borderRadius: 5 }}
//                                                 />
//                                                 <ErrorMessage
//                                                     name="facilityOtherAmenities"
//                                                     component="div"
//                                                     className="text-danger"
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="d-flex mb-3 row">
//                                             <div className="col-6 pe-0 d-flex align-items-center">
//                                                 <p
//                                                     className="card-text d-flex align-items-center"
//                                                     style={{ marginRight: 105 }}
//                                                 >
//                                                     Số tầng:
//                                                 </p>
//                                             </div>
//                                             <div className="col-6 px-0">
//                                                 <Field
//                                                     name="facilityNumbOfFloor"
//                                                     type="number"
//                                                     style={{ borderRadius: 5 }}
//                                                 />
//                                                 <ErrorMessage
//                                                     name="facilityNumbOfFloor"
//                                                     component="div"
//                                                     className="text-danger"
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div id="room" style={{ display: "none" }}>
//                                         <div className="d-flex mb-3 row">
//                                             <div className="col-6 pe-0 d-flex align-items-center">
//                                                 <p
//                                                     className="card-text d-flex align-items-center"
//                                                     style={{ marginRight: 105 }}
//                                                 >
//                                                     Dịch vụ miễn phí đi kèm:
//                                                 </p>
//                                             </div>
//                                             <div className="col-6 px-0">
//                                                 <Field
//                                                     name="facilityFreeAminities"
//                                                     type="text"
//                                                     style={{ borderRadius: "5px" }}
//                                                 />
//                                                 <ErrorMessage
//                                                     name="facilityFreeAminities"
//                                                     component="div"
//                                                     className="text-danger"
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="">
//                                         {isSubmitting ? (
//                                             <Oval
//                                                 height={80}
//                                                 width={80}
//                                                 color="#4fa94d"
//                                                 wrapperStyle={{}}
//                                                 wrapperClassName=""
//                                                 visible={true}
//                                                 ariaLabel="oval-loading"
//                                                 secondaryColor="#4fa94d"
//                                                 strokeWidth={2}
//                                                 strokeWidthSecondary={2}
//                                             />
//                                         ) : (
//                                             <>
//                                                 <button type="submit" className="btn btn-success me-3">
//                                                     Thêm
//                                                 </button>
//                                                 <Link to="/facility" className="btn btn-primary">
//                                                     Thoát
//                                                 </Link>
//                                             </>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </Form>
//                 )}
//             </Formik>
//         </>
//     );
// }
//
// export default FacilitiesAddForm;