import request from '../config/http'

const findAll = () => {
    return request.get(`/book-type`)
}

const bookTypeService = {
    findAll
}

export default bookTypeService