import { Client, TablesDB, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Post {
  client = new Client();
  tablesDb;
  storage;

  constructor() {
    this.client
      .setProject(conf.appwriteProjectId)
      .setEndpoint(conf.appwriteUrl);

    this.tablesDb = new TablesDB(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.tablesDb.createRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteTableId,
        rowId: slug,
        data: {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      });
    } catch (error) {
      console.log("postService :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.tablesDb.updateRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteTableId,
        documentId: slug,
        data: {
          title,
          content,
          featuredImage,
          status,
        },
      });
    } catch (error) {
        console.log("postService :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
        await this.tablesDb.deleteRow({
            databaseId: conf.appwriteDatabaseId,
            tableId: conf.appwriteTableId,
            rowId: slug,
        })
        return true;

    } catch (error) {
        console.log("postService :: deletePost :: error", error);
        return false;
    }
  }

  async getPost(slug) {
    try {
        return await this.tablesDb.getRow({
            databaseId: conf.appwriteDatabaseId,
            tableId: conf.appwriteTableId,
            rowId: slug
        });
    } catch (error) {
        console.log("postService :: getPost :: error", error);    
        return false;    
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
        return await this.tablesDb.listRows({
            databaseId: conf.appwriteDatabaseId,
            tableId: conf.appwriteTableId,
            queries,
        })
    } catch (error) {
        console.log("postService :: getAllPosts :: error", error);
        return false;
    }
  }
}

const post = new Post();
export default post;
