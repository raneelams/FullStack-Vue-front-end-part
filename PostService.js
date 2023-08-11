import axios from "axios";

const url = "api/posts/";

/* eslint-disable no-async-promise-executor */

class PostService {
  //Get Posts
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map((post) => ({
            //map is an operator in axios
            ...post, //...post is may be a list of data in post variable
            createdAt: new Date(post.createdAt),
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  //alternative methods without disabling eslints

  // Get Posts1 method
  static async getPosts1() {
    try {
      const res = await axios.get(url);
      const data = res.data;

      return data.map((post) => ({
        ...post,
        createdAt: new Date(post.createdAt),
      }));
    } catch (err) {
      return err;
    }
  }

  // Get Posts2 method

  static async getPosts2() {
    try {
      const res = await axios.get(url);
      const data = res.data;

      data.map((post) => ({
        ...post,
        createdAt: new Date(post.createdAt),
      }));
    } catch (err) {
      return err;
    }
  }

  //Create Post
  static insertPost(text) {
    return axios.post(url, {
      text,
    });
  }

  //Delete Post
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
