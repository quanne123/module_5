import React, {useEffect, useState} from "react";
import * as SongService from "../service/SongService";
import {Link} from "react-router-dom";

function SongList() {
    const [songList, setSongList] = useState([]);
    useEffect(() => {
        const listSong = async () => {
            let result = await SongService.findAll();
            setSongList(result);

            return songList;
        };
        listSong()
    }, [])
    const handleDelete = async (id) => {
        await SongService.deleteBook(id);
        let result = await SongService.findAll()
        setSongList(result)
    };
    return (
        <div>
            <div>
                <h1>Nhạc Của Tui</h1>
                <Link className="btn btn-primary" to="/AddNewSong">Thêm Bài Hát Mới</Link>
            </div>

            <div>
                <table className="table table-border table-striped">
                    <thead>
                    <tr>
                        <th>Tên Bài Hát</th>
                        <th>Ca Sĩ</th>
                        <th>Thể Loại</th>
                        <th colSpan={2}>Tùy Chọn</th>
                    </tr>
                    </thead>
                    <tbody>
                    {songList.map((song, index) => (
                        <tr key={index}>
                            <th>{song.name}</th>
                            <th>{song.author}</th>
                            <th>{song.type}</th>
                            <th>
                                <a className="btn btn-danger" onClick={() => handleDelete(song.id)}></a></th>
                            <th>
                                <Link className="btn btn-primary" to={`EditSong/${song.id}`}>Sửa Bài Hát</Link>

                            </th>
                        </tr>
                    ))

                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SongList;