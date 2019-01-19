import { Session } from "../Session";
import "dottype.webserver/HttpContext"

declare module "dottype.webserver/HttpContext"
{
    export interface HttpContext
    {
        /**
         * Gets or sets the Session.
         */
        Session: Session;
    }
}