import { Collection } from "dottype/Collections/Collection<T>";
import { NameValueObject } from "dottype.utils/NameValueObject";
import { ISession } from "./Interfaces/ISession";

/** Represents the HttpContext session object. */
export class Session implements ISession
{
    /** Gets or sets the session id. */
    public Id: string | null = null;

    /** Gets the Session Items. */
    public Items: Collection<NameValueObject> = new Collection<NameValueObject>();
}