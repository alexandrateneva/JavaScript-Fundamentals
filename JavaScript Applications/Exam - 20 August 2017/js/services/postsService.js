let posts = (() => {
    function getAllPosts() {
        const endpoint = 'posts?query={}&sort={"_kmd.ect": -1}';

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function createPost(author, title, description, url, imageUrl) {
        const endpoint = 'posts';
        let data = {author, title, description, url, imageUrl};

        return remote.post('appdata', endpoint, 'kinvey', data);
    }

    function getMyPosts(username) {
        const endpoint = `posts?query={"author":"${username}"}&sort={"_kmd.ect": -1}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function editPost(postId, author, title, description, url, imageUrl) {
        const endpoint = `posts/${postId}`;
        let data = { author, title, description, url, imageUrl };

        return remote.update('appdata', endpoint, 'kinvey', data);
    }

    function getPostById(postId) {
        const endpoint = `posts/${postId}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function deletePostById(postId) {
        const endpoint = `posts/${postId}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }

    return {
        getAllPosts,
        createPost,
        getMyPosts,
        getPostById,
        editPost,
        deletePostById
    }
})();