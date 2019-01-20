import { ISession } from "../Interfaces/ISession";
import "dottype.hosting/Interfaces/IHttpContext";

declare module "dottype.hosting/Interfaces/IHttpContext"
{
    export interface IHttpContext
    {
        /**
         * Gets or sets the Session.
         */
        Session: ISession;
    }
}