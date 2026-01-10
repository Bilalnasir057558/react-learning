import { Client, ID, Storage } from "appwrite";
import conf from "../conf/conf";

export class FileService {
    client = new Client();
    storage;

    constructor() {
        this.client 
            .setProject(conf.appwriteProjectId)
            .setEndpoint(conf.appwriteUrl);

        this.storage = new Storage(this.client);
    }

    async uploadFile(file) {
        try {
            return await this.storage.updateFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                name: file
            })
            
        } catch (error) {
            console.log("fileService :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId,
            });
            return true;

        } catch (error) {
            console.log("fileService :: deleteFile :: error", error);
            return false;          
        }
    }

    filePreview(fileId) {
        try {
            return this.storage.getFilePreview({
            bucketId: conf.appwriteBucketId,
            fileId,
        });

        } catch (error) {
            console.log("fileService :: filePreview :: error", error)
        }
    }

};

const file = new FileService();
export default file;