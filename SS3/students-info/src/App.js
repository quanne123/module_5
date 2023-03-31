import React, {Component} from 'react';
import StudentInfoComponent from "./components/StudentInfoComponent";

class App extends Component {
    render() {
        return (
            <div>
                <StudentInfoComponent name = {'Trần Văn Anh Quân'} age = {'21'} address = {'75 Cù Chính Lan'} />
            </div>
        );
    }
}

export default App;