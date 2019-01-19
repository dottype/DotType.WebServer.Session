import { ISession } from "../Interfaces/ISession";
import "dottype.webserver/Interfaces/IHttpContext"

declare module "dottype.webserver/Interfaces/IHttpContext"
{
    export interface IHttpContext
    {
        /**
         * Gets or sets the Session.
         */
        Session: ISession;
    }
}