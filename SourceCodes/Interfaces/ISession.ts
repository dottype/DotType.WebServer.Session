import { Collection } from "dottype/Collections/Collection<T>";
import { NameValueObject } from "dottype.utils/NameValueObject";

export interface ISession
{
    /** Gets or sets the Session Id. */
    Id: string | null;

    /** Gets or sets the Session Items. */
    Items: Collection<NameValueObject>;
}