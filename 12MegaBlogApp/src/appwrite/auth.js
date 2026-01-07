import { Client, Account, ID } from "appwrite"
import conf from "../conf/conf";

class AuthService {
    client = new Client();
    account;


    constructor() {
        this.client
            .setProject(conf.appwriteProjectId)
            .setEndpoint(conf.appwriteUrl);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create({userId: ID.unique(), email, password, name});
            
            if(userAccount) {
                //Login
                return this.login({email, password});
            } else {
                return userAccount;
            }

        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);   
        } catch (error) {
            throw error
        }
    }

    async getCurrentAccount() {
        try {
            const currentAccount = await this.account.get();
            if(currentAccount) return currentAccount;
            else return null;

        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error", error);
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Service :: logout :: error", error)
        }
    }

}

const authService = new AuthService();

export default authService;