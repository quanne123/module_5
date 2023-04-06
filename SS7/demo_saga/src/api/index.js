export const getUsersApi = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = [        { id: 1, name: "UserList 1", email: "user1@example.com", website: "website1.com" },        { id: 2, name: "UserList 2", email: "user2@example.com", website: "website2.com" },        { id: 3, name: "UserList 3", email: "user3@example.com", website: "website3.com" },      ];
            resolve(users);
        }, 1000);
    });
};

// Hàm giả lập API để xóa user
export const deleteUserApi = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(userId);
        }, 500);
    });
};