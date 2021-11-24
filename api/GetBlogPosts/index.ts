import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import axios from "axios";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('GetBlogPosts - HTTP trigger function processed a request.');

    try {
        const response = await axios.get(process.env["BlogApiUrl"]);

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: response.data
        };
    }
    catch (error) {
        context.res = { status: 500, body: "Internal Server Error" };
    }
};

export default httpTrigger;