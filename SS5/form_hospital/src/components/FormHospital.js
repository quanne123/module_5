import React from 'react';
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
// import {toast} from "react-toastify";
// import RotatingLines from "react-loader-spinner/dist/esm/loader/RotatingLines";
import {useNavigate} from "react-router";
import {RotatingLines} from "react-loader-spinner";

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormHospital() {
    let navigate = useNavigate()
    return (
        <>
            <Formik initialValues={{
                name: '',
                idCard: '',
                date: '',
                gender: '',
                nationality: '',
                company: '',
                part: '',
                healthCard: '',
                city: '',
                district: '',
                ward: '',
                apartmentNumber: '',
                phone: '',
                email: ''
            }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .required('Required'),
                        idCard: Yup.string()
                            .required('Require'),
                        date: Yup.number()
                            .required('Require')
                            .min(1900, "Must be > 1900 or more"),
                        nationality: Yup.string()
                            .required('Require'),
                        city: Yup.string()
                            .required('Require'),
                        district: Yup.string()
                            .required('Require'),
                        ward: Yup.string()
                            .required('Require'),
                        apartmentNumber: Yup.string()
                            .required('Require'),
                        phone: Yup.string()
                            .required('Require'),
                        email: Yup.string()
                            .required('Require').email(),

                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            console.log(values);
                            setSubmitting(false);
                            toast("Wow so easy!");
                            navigate('/')
                        }, 500)
                    }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <h1>Form Hospital</h1>
                        <div className='mb-3'>
                            <label htmlFor='userName' className='form-label'>Họ và Tên</label>
                            <Field type='text' className='form-control' id='userName'
                                   name='name'/>
                            <ErrorMessage name='name' component='span' className='form-err'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='userIdCard' className='form-label'>CCCD/CMND</label>
                            <Field type='text' className='form-control' id='userIdCard'
                                   name='idCard'/>
                            <ErrorMessage name='idCard' component='span' className='form-err'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='userDate' className='form-label'>Ngày Sinh</label>
                            <Field type='text' className='form-control' id='userDate'
                                   name='date'/>
                            <ErrorMessage name='date' component='span' className='form-err'/>
                        </div>
                        <div className='mb-3'>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='radio' id='rd-1'
                                       name='gender'
                                       value='1'
                                />
                                <label className='form-check-label' htmlFor='rd-1'>Male</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='radio' id='rd-2'
                                       name='gender'
                                       value='0'
                                />
                                <label className='form-check-label' htmlFor='rd-2'>Female</label>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='userNationality' className='form-label'>Quốc Tịch</label>
                            <Field type='text' className='form-control' id='userNationality'
                                   name='nationality'/>
                            <ErrorMessage name='nationality' component='span' className='form-err'/>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='userCompany' className='form-label'>Công Ty Làm Việc</label>
                            <Field type='text' className='form-control' id='userCompany'
                                   name='company'/>
                            <ErrorMessage name='company' component='span' className='form-err'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='userPart' className='form-label'>Bộ phận làm việc</label>
                            <Field type='text' className='form-control' id='userPart'
                                   name='part'/>
                            <ErrorMessage name='part' component='span' className='form-err'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='userHealth' className='form-label'>Thẻ Bảo Hiểm Y Tế</label>
                            <Field type='text' className='form-control' id='userHealth'
                                   name='healthCard'/>
                            <ErrorMessage name='healthCard' component='span' className='form-err'/>
                        </div>
                        <h1>Địa chỉ liên lạc tại Việt Nam</h1>
                        <div className='mb-3'>
                            <label htmlFor='userCity' className='form-label'>Tỉnh Thành</label>
                            <Field type='text' className='form-control' id='userCity'
                                   name='city'/>
                            <ErrorMessage name='city' component='span' className='form-err'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='userDistrict' className='form-label'>Quận/Huyện</label>
                            <Field type='text' className='form-control' id='userDistrict'
                                   name='district'/>
                            <ErrorMessage name='district' component='span' className='form-err'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='userWard' className='form-label'>Phường/Xã</label>
                            <Field type='text' className='form-control' id='userWard'
                                   name='ward'/>
                            <ErrorMessage name='ward' component='span' className='form-err'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='userApartment' className='form-label'>Số Nhà</label>
                            <Field type='text' className='form-control' id='userApartment'
                                   name='apartmentNumber'/>
                            <ErrorMessage name='apartmentNumber' component='span' className='form-err'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='userPhone' className='form-label'>Số Điện Thoại</label>
                            <Field type='text' className='form-control' id='userPhone'
                                   name='phone'/>
                            <ErrorMessage name='phone' component='span' className='form-err'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='userEmail' className='form-label'>Email</label>
                            <Field type='text' className='form-control' id='userEmail'
                                   name='email'/>
                            <ErrorMessage name='email' component='span' className='form-err'/>
                        </div>
                        <h3>Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng lãnh thổ nào? (Có thể đi qua nhiều quốc
                            gia)</h3>
                        <div className='mb-3'>
                            <textarea rows="9" cols="70" placeholder='Để trống nếu không đi đến quốc gia nào!'>
                            </textarea>
                        </div>
                        <h3>Trong vòng 14 ngày qua, Anh/Chị có dấu hiệu nào sau đây hay không?</h3>
                        <div className='mb-3'>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check-1'
                                       name='checkbox1'
                                       value='1'/>
                                <label className='form-check-label' htmlFor='radio-check-1'>Sốt</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check-2'
                                       name='checkbox1'
                                       value='2'/>
                                <label className='form-check-label' htmlFor='radio-check-2'>Ho</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check-3'
                                       name='checkbox1'
                                       value='3'/>
                                <label className='form-check-label' htmlFor='radio-check-3'>Khó thở</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check-4'
                                       name='checkbox1'
                                       value='4'/>
                                <label className='form-check-label' htmlFor='radio-check-4'>Viêm phổi</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check-5'
                                       name='checkbox1'
                                       value='5'/>
                                <label className='form-check-label' htmlFor='radio-check-5'>Đau họng</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check-6'
                                       name='checkbox1'
                                       value='6'/>
                                <label className='form-check-label' htmlFor='radio-check-6'>Mệt mỏi</label>
                            </div>
                        </div>
                        <h3>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với:</h3>
                        <div className='mb-3'>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check2-1'
                                       name='checkbox2'
                                       value='1'/>
                                <label className='form-check-label' htmlFor='radio-check2-1'>Người bệnh hoặc nghi ngờ
                                    mắc COVID-19</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check2-2'
                                       name='checkbox2'
                                       value='2'/>
                                <label className='form-check-label' htmlFor='radio-check2-2'>Người từ quốc gia có bệnh
                                    COVID-19</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check2-3'
                                       name='checkbox2'
                                       value='3'/>
                                <label className='form-check-label' htmlFor='radio-check2-3'>Người có biểu hiện (Sốt,
                                    ho, khó thở, viêm phổi)</label>
                            </div>
                        </div>
                        {
                            isSubmitting ?
                                <RotatingLines
                                    strokeColor='grey'
                                    strokeWidth='5'
                                    animationDuration='0.78'
                                    width='50'
                                    visible={true}
                                />
                                :
                                <button type={'submit'} className={'btn btn-primary'}>Submit</button>
                        }
                    </Form>
                )}

            </Formik>

            <ToastContainer/>
        </>
    );
}

export default FormHospital;