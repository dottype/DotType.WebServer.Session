import { ISession } from "../Interfaces/ISession";

declare module "../../../DotType.WebServer/Interfaces/IHttpContext"
{
    export interface IHttpContext
    {
        /**
         * Gets or sets the Session.
         */
        Session: ISession;
    }
}