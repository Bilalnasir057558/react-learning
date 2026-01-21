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
            return await this.storage.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file: file,
            })
            
        } catch (error) {
            console.log("fileService :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            if(!fileId) {
                console.log("fileService :: deleteFile :: No fileId provided");
                return false;
            }
            await this.storage.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId,
            });
            return true;

        } catch (error) {
            console.log("fileService :: deleteFile :: error", error);
            return false;          
        }
    }

    getFilePreview(fileId) {
        try {
            return `${conf.appwriteUrl}/storage/buckets/${conf.appwriteBucketId}/files/${fileId}/preview?project=${conf.appwriteProjectId}`;

        } catch (error) {
            console.log("fileService :: filePreview :: error", error)
            return null
        }
    }

};

const fileService = new FileService();
export default fileService;